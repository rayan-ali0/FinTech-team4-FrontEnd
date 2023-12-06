import { Box, Button, InputAdornment, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Styles from './Styles.module.css';
import { handleSubmit, handleOnlyNumbers } from './utils.js';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function () {

    const [open,setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [confirmation, setConfirmation] = useState(false);

    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
        setConfirmation(false);
    }

    const style={
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        bgcolor: "#190D60",
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
    }

    const [amount,setAmount] = useState(false);
    const [formInfo, setFormInfo] = useState({
      amount : 0,
      type: "Deposit",
      address : "myAddress",
      description: "Deposit into account",
      promoCode: "",
  })

    const myfield = {};

  return (
    <div>
        <Button onClick={handleOpen}>Deposit</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
   <div className={Styles.container}>
    <h2>Deposit into your account</h2>
    
    <form noValidate autoComplete='off' onSubmit={(e)=>{handleSubmit(e,formInfo, error); setConfirmation(true)}} className={Styles.form}>

<TextField 
            sx={myfield}
            className={Styles.fields}
            label="Amount"
            variant='outlined'
            color= 'primary'
            size='small'
            fullWidth
            focused
            required
            error={error}
            onChange={(event) => {
              handleOnlyNumbers(event, setAmount,setError);
              setFormInfo({...formInfo, amount: parseFloat(event.target.value)})
           }}
            InputProps={{
                startAdornment: <InputAdornment position="start"><Typography style={error?{color: "red"} :{ color: 'white' }}>$</Typography></InputAdornment>,
                style: {color: 'white'},
                readOnly: confirmation,
                
            }}
            InputLabelProps={{
                style: { color: 'white' },
                
              }}
            />

            <div className={Styles.confirmationSection}>
            <Button
        className={Styles.button}
        type='submit'
        color='secondary'
        variant='contained'
        >Deposit</Button>

        {confirmation ? 
        <CheckBoxIcon 
        variant='outlined' 
        color='success'
        ></CheckBoxIcon>        
         : ""}

        </div>

</form>

   </div>
  </Box>
</Modal>
    </div>
  )
}





