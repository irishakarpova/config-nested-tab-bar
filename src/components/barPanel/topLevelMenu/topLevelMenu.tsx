import React from 'react';
import Button from '@material-ui/core/Button';
import {AppBarStore} from '../../../store/appBarStore';
import {useStyles} from './styles'
import { MenuItem, Maybe } from '../../../generated/graphql';

export default function (props: {
    menuItems:
        Maybe<{ __typename?: "MenuItem" | undefined; } & Pick<MenuItem, "label" | "id" | "parentId">>[] | null | undefined
    }) {
    const classes = useStyles();
    return (
        <AppBarStore.Consumer>
            {({value, toggleDrawer, activeValue}) => (
                <div className={classes.root}>
                    { props.menuItems && props.menuItems.map(menuItem => {

                        return menuItem != null && menuItem.parentId === "0" &&
                        <Button
                            className={activeValue === menuItem.id
                                ? classes.rootBtnActive
                                : (value === menuItem.id ? classes.rootBtnHover: classes.rootBtn)
                            }
                            value={menuItem.id}
                            key={menuItem.label} 
                            onMouseOver={toggleDrawer('top', true, menuItem.id, menuItem.label)}>
                            {menuItem.label}
                        </Button>
                    })}
                </div>
            )}
        </AppBarStore.Consumer>
    );
}