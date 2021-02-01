import React from 'react'
import {AppBarStore} from '../../../store/appBarStore';
import {Store, Anchor, SimpleString} from '../../../store/appBarStore';
import { MenuItem, Maybe } from '../../../generated/graphql';

type UseState = string | null | undefined

export function UseCompParams(menuItems:
    Maybe<MenuItem>[] | null | undefined ): Store {

    const store = React.useContext(AppBarStore);

    const [value, setValue] = React.useState< UseState >();
    const [activeValue, setActiveValue] = React.useState< UseState >('1');
    const [changed, setChanged] = React.useState(false);
    const [hoverId, setHoverId] = React.useState< UseState>();
    const [parentId, setParentId] = React.useState< UseState >();
    const [state, setState] = React.useState({
        top: false,
    });
    
    const toggleDrawer = (anchor: Anchor, open: boolean, menuId: SimpleString, parentId: SimpleString) => (event: React.MouseEvent) => {
        setState({ ...state, [anchor]: open });
        setHoverId(menuId);
        setParentId(parentId)
        setValue(menuId);
        setChanged(true);
        store.handleValueChange(event);
    };

    const handleChangeSubValue = ( event: React.ChangeEvent<{}>, newValue: string | undefined) => {
        setActiveValue(value);
        if (store.handleChangeSubValue) {
            store.handleChangeSubValue( event, newValue);
        }
    };

    let currentIndex;
    let parentCount = 0;
    if (!changed && menuItems) {
        for (let item of menuItems) {
            if (item && store && item.parentId === '0') {
                parentCount++;
                if (store.subvalue && store.subvalue.indexOf(
                    item.label.toLowerCase().split(' ').join('-')
                    ) === 1) {
                    currentIndex = parentCount;
                    break;
                }
            }
        };

        if (currentIndex && Number(value) != currentIndex) {
            setValue(currentIndex.toString());
            setActiveValue(currentIndex.toString());
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