import React from 'react'
import { MenuItem, Maybe } from '../generated/graphql'

export type Anchor = 'top' | 'left' | 'bottom' | 'right'; 
export type SimpleString = string | null | undefined
export type MainMenuType = Pick<Store, "menuItems">


export interface Store{
    value: string | null | undefined
    hoverId: string | null | undefined
    subvalue: string | null
    activeValue: string | null | undefined
    changed: boolean
    parentId: string | null | undefined
    state: { top: boolean }
    subvalueChanged: boolean
    handleChangeSubValue: (event: React.MouseEvent, newValue:string | undefined) => void,
    handleValueChange: (event:  React.MouseEvent) => void,
    toggleDrawer: (anchor: Anchor, open: boolean, menuId?: SimpleString, parentId?: SimpleString) => (event: React.MouseEvent) => void,
    handleChangeSubValueUpd: () => void
    menuItems:  Maybe<MenuItem>[] | null | undefined
}
const defaultValue: Store = {
    menuItems: [],
    value: null,
    hoverId: null,
    subvalue: null,
    activeValue: "1",
    changed: false,
    parentId: null,
    state: {top: false},
    subvalueChanged: false,
    handleChangeSubValue: (event, newValue) => {},
    handleValueChange: (event) => {},
    toggleDrawer: (anchor, open, menuId, parentId) => (event) => {},
    handleChangeSubValueUpd: () => {}
}

export const AppBarStore = React.createContext(defaultValue);






