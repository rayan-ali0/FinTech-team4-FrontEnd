// import React from 'react'

import { useState } from "react";
import BasicButtons from "./BasicButtons";
import BasicSelect from "./BasicSelect";
import BasicTextFields from "./BasicTextFields";
import Styles from './Styles.module.css'
// import { FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import Amount from "./Amount";

export default function TransactionCard() {
 
  const colorCustom = {
      
    borderColor: '#00ff00',
  }

  return (
    <div className={Styles.mainDiv}>
    <h2>Transaction</h2>
    <form>
      
      <div className={Styles.topFields} >
      <Amount style={colorCustom}></Amount>
      <BasicSelect menuItems={["Transaction", "Transfer"]}></BasicSelect>
      </div>
      <BasicTextFields label="Address"/>
      <BasicTextFields label="Description"/>
      <BasicTextFields label="Promo Code (optional)"/>
      <BasicButtons label="Submit"/>
    </form>
   
    </div>
  )
}




