import React from 'react'

type Anchor = 'top' | 'left' | 'bottom' | 'right'; 

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
    toggleDrawer: (anchor: Anchor, open: boolean, menuId?: string | null | undefined, parentId?: string) => (event: React.MouseEvent) => void,
    handleChangeSubValueUpd: () => void
}
const defaultValue: Store = {
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






