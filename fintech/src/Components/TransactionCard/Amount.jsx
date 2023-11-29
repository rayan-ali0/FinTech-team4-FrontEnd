import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { useState } from 'react'

export default function Amount() {
    const [error, setError] = useState(false);
    const [inputValue, setInputValue] = useState('');
  return (
    <>
        <FormControl>
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
            error={error}
            onChange={(event)=>{
              // const handleInputChange = (event) => {
                {
                let value = event.target.value;
                console.log(event.target.value)

              if (/^\d*$/.test(value)) {
                setInputValue(value);
                setError(false);
              } else {
                setError(true);
              }
              }
            }}
          />
      </FormControl>
    </>
  )
}
