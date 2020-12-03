<img src="desc.png" width="100%" title="description">

# Implementation nested tab bar based on configuration.

- React
- Apollo GraphQL
- Material UI

### Step 1 

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

When I get data with useQuery hook, I render uplevel set first. For support multi level tab bar i found usefull to use React.createContext API.

```
<AppBarStore.Consumer>
    {({value, toggleDrawer, activeValue}) => (
      <div className={classes.root}>
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
      </div>
  )}
</AppBarStore.Consumer>
 ```
    
    
    



