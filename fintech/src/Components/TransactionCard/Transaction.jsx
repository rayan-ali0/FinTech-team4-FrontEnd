import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { MenuItem, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import {Container} from '@mui/material';
import {handleOnlyNumbers, handleSubmit} from "./utils.js"
import Styles from './Styles.module.css'




export default function Transaction() {
    const [error, setError] = useState(false);
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('Transaction');

    const [formInfo, setFormInfo] = useState({
        amount : 0,
        type: "Transaction",
        address : "",
        description: "",
        promoCode: "",
    })
    const selectValues = ["Transaction", "Transfer"];


    const myfield = {
        margin: "20px auto",
    }

    const rootStyle ={
        padding: "0px auto",
         width:"90vw", 
         maxWidth:"900px",
         paddingBottom:'20px',
         borderRadius: "30px",
    }


    // useEffect(() => {
    //     console.log("renderr")
    // }, []);

  return (
    <Container className={Styles.container} style={rootStyle}>
        <h2>{type}</h2>

        <form noValidate autoComplete='off' onSubmit={(e)=>handleSubmit(e,formInfo, error)} className={Styles.form}>

        <div className={Styles.topTexts}>
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
                style: {color: 'white'}
            }}
            InputLabelProps={{
                style: { color: 'white' },
              }}
            />

            <TextField 
            sx={myfield}
                className={Styles.fields}
                
                label="Transaction"
                select
                defaultValue="Transaction"
                variant='outlined'
                color='primary'
                size='small'
                fullWidth
                focused
                required
                
                onChange={(event) => { 
                    setType(event.target.value);
                    setFormInfo({...formInfo, type: event.target.value});
                }}
                InputProps={{
                    style: {color: 'white'}
                }}
                InputLabelProps={{
                    style: { color: 'white' },
                  }}
            >
            {selectValues.map((item) => {
                return (<MenuItem key={item} value={item}>{item}</MenuItem>); 
            })}
            </TextField>

        </div>
        

         <TextField 
        sx={myfield}
        className={Styles.fields}
        label="Address"
        variant='outlined'
        color='primary'
        size='small'
        fullWidth
        required
        focused
        onChange={(event) => { 
            // setType(event.target.value);
            setFormInfo({...formInfo, address: event.target.value});
        }}
        InputProps={{
            style: {color: 'white'}
        }}
        InputLabelProps={{
            style: { color: 'white' },
          }}
        />

        <TextField 
        className={Styles.fields}
        sx={myfield}
        label="Description"
        variant='outlined'
        color='primary'
        size='small'
        fullWidth
        focused
        required
        onChange={(event) => { 
            // setType(event.target.value);
            setFormInfo({...formInfo, description: event.target.value});
        }}      
        InputProps={{
            style: {color: 'white'}
        }}  
        InputLabelProps={{
            style: { color: 'white' },
          }}
        />

        <TextField 
        className={Styles.fields}
        sx={myfield}
        label="Promo Code"
        variant='outlined'
        color='primary'
        size='small'
        fullWidth
        focused
        onChange={(event) => { 
            // setType(event.target.value);
            setFormInfo({...formInfo, promoCode: event.target.value});
        }}
        InputProps={{
            style: {color: 'white'}
        }}
        InputLabelProps={{
            style: { color: 'white' },
          }}
        />

        <Button
        style={{marginTop:"20px"}}
        className={Styles.button}
        type='submit'
        color='secondary'
        variant='contained'
        >Send <span style={{fontSize:"1.5em", marginLeft: "10px"}}>&#8608;</span></Button>

        </form>
    </Container>
  )
}
