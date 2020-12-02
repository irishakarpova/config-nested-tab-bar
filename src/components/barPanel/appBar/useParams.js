import React from 'react'
import {AppBarStore} from '../../../store/appBarStore';

export function UseCompParams(menuItems) {

    const store = React.useContext(AppBarStore);

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
        store.handleValueChange();
    };

    const handleChangeSubValue = (event, newValue) => {
        setActiveValue(value);
        store.handleChangeSubValue(event, newValue);
    };

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

    return {
        ...store,
        value, 
        activeValue, 
        changed, 
        hoverId, 
        parentId, 
        state, 
        toggleDrawer, 
        handleChangeSubValue }
}