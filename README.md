<img src="desc.png" width="100%" title="description">

# Implementation nested tab bar based on configuration.

- React
- Apollo GraphQL
- Material UI


According to the GraphQL configuration the 'parentId' type defines set of tabs that belong to a up level tab bar.

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

When I get data with useQuery hook, I render uplevel set first. 

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

Now I display set of tabs belongs to current parentId.

```
<Tabs 
  value={store.subvalueChanged || (!store.subvalueChanged && !store.changed)
    || store.activeValue === store.value
    ? store.subvalue 
    : false}
  onChange={store.handleChangeSubValueUpd} 
  variant="scrollable"
  aria-label="affiliates tabs">
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
 
For support multi level tab bar i found useful to use React.createContext API that provides access to current context value above the tree for consumers components and accepts values from The Provider component.

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
 
    
    
    



