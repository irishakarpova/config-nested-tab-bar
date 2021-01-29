import React from 'react'
import {AppBarStore} from '../../../store/appBarStore';
import {Store} from '../../../store/appBarStore';
import { MenuItem, Maybe } from '../../../generated/graphql';


type Anchor = 'top' | 'left' | 'bottom' | 'right'; 

export function UseCompParams(menuItems:
    Maybe<Pick<MenuItem, "label" | "id" | "parentId">>[] | null | undefined): Store {

    const store = React.useContext(AppBarStore);

    const [value, setValue] = React.useState< string | null | undefined >();
    const [activeValue, setActiveValue] = React.useState< string | null | undefined >('1');
    const [changed, setChanged] = React.useState(false);
    const [hoverId, setHoverId] = React.useState< string | null >();
    const [parentId, setParentId] = React.useState< string | null >();
    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean, menuId?: string | null, parentId?: string | null | undefined) => (event: React.MouseEvent) => {
        setState({ ...state, [anchor]: open });
        setHoverId(menuId);
        setParentId(parentId)
        setValue(menuId);
        setChanged(true);
        store.handleValueChange(event);
    };

    const handleChangeSubValue = (event: React.MouseEvent<Element, MouseEvent>, newValue: string | undefined) => {
        setActiveValue(value);
        store.handleChangeSubValue(event, newValue);
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