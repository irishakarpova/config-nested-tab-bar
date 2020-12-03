<img src="desc.png" width="100%" title="description">

# Implementation nested tab bar based on configuration.

- React
- Apollo GraphQL
- Material UI
- html-to-react


According to the GraphQL configuration, the 'parentId' type defines a set of tabs that belong to an up level tab bar.

```
schema {
  query: Query
}

type Query {
  getMenu: [MenuItem]
}

type MenuItem {
    id: ID!
    label: String!
    parentId: ID!
}
```

When I get data with the useQuery hook, I render the uplevel set first. 

```
{menuItems.map(menuItem => {
    return menuItem.parentId === "0" &&
    <Button
        className={activeValue === menuItem.id
            ? classes.rootBtnActive
            : (value === menuItem.id ? classes.rootBtnHover: classes.rootBtn)
        }
        value={menuItem.id}
        key={menuItem.label} 
        onMouseOver={toggleDrawer('top', true, menuItem.id, menuItem.label)}>
        {menuItem.label}
    </Button>
})}
 ```

Now I display a set of tabs belongs to the current parentId.
Some of the tabs labels might be complex and use the second row. In this way, I need dynamic control for displaying correctly. I am using The Html-to-react module to get JSX and implement some logic.

```
<Tabs 
  value={store.subvalueChanged || (!store.subvalueChanged && !store.changed)
    || store.activeValue === store.value
    ? store.subvalue 
    : false}
  onChange={store.handleChangeSubValueUpd} 
  variant="scrollable"
  ... >
    {menuItems.map( menuItem => {
      let url;
      return(
        store.hoverId === menuItem.parentId && (url = getUrl(menuItem)) ? 
          <Tab 
            component={RouterLink}
            key={menuItem.id}
            value={url}   
            to={url}   
            label={
                htmlToReactParser.parse(menuItem.label.length > 11 ? 
                  menuItem.label.replace(' ', '<br/>') : menuItem.label)}
            ...
         >
          </Tab> 
        : null
      )})}
</Tabs>
```        
 
To support the multi-level tab bar I found it useful to use React.createContext API that provides access to current context value above the tree for consumers components and accepts values from The Provider component.

```
export const AppBarStore = React.createContext({
    value: null,
    hoverId: null,
    subvalue: null,
    activeValue: "1",
    changed: false,
    parentId: null,
    state: {top: false},
    subvalueChanged: null,
    handleChangeSubValue: () => {},
    handleValueChange: () => {},
    toggleDrawer: () => {},
    handleChangeSubValueUpd: () => {}
});
```
 
   
