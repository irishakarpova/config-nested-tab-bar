import React from 'react'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {Link as RouterLink } from 'react-router-dom';
import parse from 'html-react-parser'
import useWindowDimensions from '../../../utility/getWindowSize'
import useScrollPosition from '../../../utility/getScrollPosition'
import GetTime from '../../../utility/getTime'
import {AppBarStore} from '../../../store/appBarStore';
import {useStyles} from './styles'
import { MenuItem, Maybe } from '../../../generated/graphql';

 

export default function(props: {
  menuItems:
      Maybe<{ __typename?: "MenuItem" | undefined; } & Pick<MenuItem, "label" | "id" | "parentId">>[] | null | undefined
}){

  const store = React.useContext(AppBarStore);
  const classes = useStyles(); 
  const {width} = useWindowDimensions();
  const position= useScrollPosition();


  return(
    <SwipeableDrawer
      style={{ zIndex: 1}}
      BackdropProps={{ invisible: true }}
      anchor={'top'}
      open={store.state['top']}
      onClose={store.toggleDrawer('top', false)}
      onOpen={store.toggleDrawer('top', true)}
      onMouseOut={GetTime(store)}
    >
      <div
        role="menu"
        style={width > 596 ? { marginTop: 76 - position}: { marginTop: 96 - position}}
        onClick={store.toggleDrawer('top', false)}
      >
        <Tabs 
          value={
            store.subvalue !== '/' && 
            (store.subvalueChanged
            || (!store.subvalueChanged && !store.changed)
            ||  store.activeValue === store.value)
            ? store.subvalue 
            : 
            false}
          onChange={store.handleChangeSubValueUpd} 
          textColor="primary"
          variant="scrollable"
          aria-label="affiliates tabs">
            {props.menuItems && props.menuItems.map( menuItem => {
              let url: string | null |undefined;
              return(
                menuItem && store.hoverId === menuItem.parentId && ( 
                  url = store.parentId &&  `/${store.parentId.replace(' ', '-')
                  .toLowerCase()}/${menuItem.label
                  .replace(/\s+/g, '-')
                  .toLowerCase()}`)
                 ? 
                  <Tab 
                    component={RouterLink}
                    key={menuItem.id}
                    value={url}   
                    to={url}   
                    label={
                        (parse(menuItem.label.length > 11 ? 
                          menuItem.label.replace(' ', '<br/>') : menuItem.label))}
                    color="primary"
                    wrapped
                    disableRipple
                    className={classes.tabs} 
                    classes={{root: classes.tabRoot}}>
                  </Tab> 
                : null
              )})}
        </Tabs>
      </div>
    </SwipeableDrawer>
  )
}