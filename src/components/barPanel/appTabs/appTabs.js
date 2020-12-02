import React from 'react'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {Link as RouterLink } from 'react-router-dom';
import {Parser} from 'html-to-react';
import useWindowDimensions from '../../../utility/getWindowSize'
import useScrollPosition from '../../../utility/getScrollPosition'
import GetTime from '../../../utility/getTime'
import {AppBarStore} from '../../../store/appBarStore';
import {useStyles} from './styles'

const htmlToReactParser = new Parser();  

export default function({menuItems}){

  const store = React.useContext(AppBarStore);
  const classes = useStyles(); 
  const {width} = useWindowDimensions();
  const position= useScrollPosition();

  const getUrl = (menuItem) => {
    return `/${store.parentId.replace(' ', '-')
    .toLowerCase()}/${menuItem.label
    .replace(/\s+/g, '-')
    .toLowerCase()}`
  }

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
          value={store.subvalueChanged || (!store.subvalueChanged && !store.changed)
            || store.activeValue === store.value
            ? store.subvalue 
            : false}
          onChange={store.handleChangeSubValueUpd} 
          textColor="primary"
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