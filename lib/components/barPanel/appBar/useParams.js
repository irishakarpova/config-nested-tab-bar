import React from 'react';
import { AppBarStore } from '../../../store/appBarStore';
let currentIndex;
export function UseCompParams(menuItems) {
  const store = React.useContext(AppBarStore);
  const [value, setValue] = React.useState();
  const [activeValue, setActiveValue] = React.useState('1');
  const [changed, setChanged] = React.useState(false);
  const [hoverId, setHoverId] = React.useState();
  const [parentId, setParentId] = React.useState();
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (anchor, open, menuId, parentId) => event => {
    setState({ ...state,
      [anchor]: open
    });
    setHoverId(menuId);
    setParentId(parentId);
    setValue(menuId);
    setChanged(true);
    store.handleValueChange();
  };

  const handleChangeSubValue = (event, newValue) => {
    setActiveValue(value);

    if (store.handleChangeSubValue) {
      store.handleChangeSubValue(event, newValue);
    }
  };

  let parentCount = 0;

  if (!changed && menuItems) {
    for (let item of menuItems) {
      if (item && store && item.parentId === '0') {
        parentCount++;

        if (store.subvalue && store.subvalue.indexOf(item.label.toLowerCase().split(' ').join('-')) === 1) {
          currentIndex = parentCount;
          break;
        }
      }
    }

    ;

    if (currentIndex && Number(value) !== currentIndex) {
      setValue(currentIndex.toString());
      setActiveValue(currentIndex.toString());
    }
  }

  return { ...store,
    value,
    activeValue,
    changed,
    hoverId,
    parentId,
    state,
    toggleDrawer,
    handleChangeSubValue
  };
}