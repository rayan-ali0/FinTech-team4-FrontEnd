import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";

export default function BasicTextFields(props) {
  const type = props.onlyNumbers || "";
  const label = props.label;
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    let value = event.target.value;

  if (/^\d*$/.test(value)) {
    setInputValue(value);
    if(type)
    setError(false);
  } else {
    if(type)
    setError(true);
  }
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic" 
      label={label} 
      variant="outlined" 
      error={error} 
      // color="#fff"
      onChange={(event) => {handleInputChange(event)}}
      
      />
     
    </Box>
  );
}