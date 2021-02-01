import React from 'react';
import { useHistory } from "react-router-dom";
export function GetParams() {
  let history = useHistory();
  const [subvalue, setSubValue] = React.useState(history.location.pathname);
  const [subvalueChanged, setSubValueChanged] = React.useState(false);

  const handleChangeSubValue = (event, newSubValue) => {
    setSubValueChanged(true);
    setSubValue(newSubValue);
  };

  const handleValueChange = () => {
    setSubValueChanged(false);
  };

  history.listen(location => {
    setSubValue(location.pathname);
  });
  return {
    subvalue,
    subvalueChanged,
    handleChangeSubValue,
    handleValueChange
  };
}