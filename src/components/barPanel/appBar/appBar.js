import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { useQuery } from '@apollo/client';
import { useStyles } from './styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import MainMenu from '../topLevelMenu/topLevelMenu';
import MenuSceleton from '../../sceletons/menuSceleton';
import AppBarLogo from '../../appLogo';
import AppTabs from '../appTabs/appTabs';
import {AppBarStore} from '../../../store/appBarStore';
import {GET_MENU} from './query';
import {UseCompParams} from './useParams';

export default function Appbar(){
  
    const classes = useStyles();

    const { loading, error, data } = useQuery(GET_MENU);
    if (error) return `Error! ${error.message}`;

    const menuItems =  data ? data.getMenu : [] 

    return(
        <AppBarStore.Provider value={UseCompParams(menuItems)}>
            <div className={classes.root}>
                {loading ? <MenuSceleton/> :
                <Router>
                    <AppBar className={classes.appBar} position="static">
                        <Toolbar classes={{root: classes.root}} disableGutters>
                            <Hidden xsDown>
                                <Box className={classes.boxLogo}>
                                    <AppBarLogo/>
                                </Box>
                            </Hidden>
                            <Box className={classes.toolBarContent}>
                                <Box className={classes.navigation}>
                                    <Box className={classes.boxLogoSmScreen}>
                                        <Hidden smUp>
                                            <AppBarLogo/>
                                        </Hidden>
                                    </Box>
                                    <MainMenu menuItems={menuItems}/>
                                </Box>
                            </Box>
                        </Toolbar>
                    </AppBar> 
                    <AppTabs menuItems={menuItems} />
                    <br />
                </Router>
                }
            </div>
        </AppBarStore.Provider>
    )
}