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
    parentId: ID
}

```



