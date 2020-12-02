import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { useStyles } from './appBarStyles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import MainMenu from '../mainMenu'
import MenuSceleton from '../../sceletons/menuSceleton'
import AppBarLogo from '../../appLogo'
import AppTabs from '../appTabs'
import { AppBarStore } from '../../../store/appBarStore';
import { GET_MENU } from './query'

export default function Appbar(){

    const store = React.useContext(AppBarStore);

    const classes = useStyles();
    const [value, setValue] = React.useState();
    const [activeValue, setActiveValue] = React.useState('1');
    const [changed, setChanged] = React.useState(false);
    const [hoverId, setHoverId] = React.useState(null);
    const [parentId, setParentId] = React.useState(null);
    const [state, setState] = React.useState({
        top: false,
      });

    const toggleDrawer = (anchor, open, menuId, parentId) => (event) => {
        setState({ ...state, [anchor]: open });
        setHoverId(menuId);
        setParentId(parentId)
        setValue(menuId);
        setChanged(true);
        contextData.handleValueChange();
    };

    const handleChangeSubValue = (event, newValue) => {
        setActiveValue(value);
        contextData.handleChangeSubValue(event, newValue);
    };

    const { loading, error, data } = useQuery(GET_MENU);
    if (error) return `Error! ${error.message}`;

    const menuItems =  data ? data.getMenu : [] 

    let currentIndex;
    let parentCount = 0;
    
    if (!changed) {
        for (let item of menuItems) {
            if (item.parentId === '0') {
                parentCount++;
                if (store.subvalue.indexOf(
                    item.label.toLowerCase().split(' ').join('-')
                    ) === 1) {
                    currentIndex = parentCount;
                    break;
                }
            }
        };

        if (currentIndex && value != currentIndex) {
            setValue(currentIndex.toString());
            setActiveValue(currentIndex.toString());
            return;
        }
    }

    const contextData = {
        ...store,
        state: state,
        hoverId: hoverId,
        value: value,
        changed: changed,
        parentId: parentId,
        activeValue: activeValue,
        toggleDrawer: toggleDrawer,
        handleChangeSubValueUpd: handleChangeSubValue,
    }

    return(
        <AppBarStore.Provider value={contextData}>
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