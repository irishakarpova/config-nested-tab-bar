import React from 'react';
import { useHistory } from "react-router-dom";

export function GetParams() {

    let history = useHistory();
  
    const [subvalue, setSubValue] = React.useState<string>();
    const [subvalueChanged, setSubValueChanged] = React.useState(false);
  
    const handleChangeSubValue = (event: React.MouseEvent, newSubValue: string) => {
        setSubValueChanged(true);
        setSubValue(newSubValue);
    };
  
    const handleValueChange = () => {
      setSubValueChanged(false);
    }
  
    return {
      subvalue, 
      subvalueChanged, 
      handleChangeSubValue,
      handleValueChange
    }
}