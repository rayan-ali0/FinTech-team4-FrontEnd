// import React from 'react'

import BasicSelect from "./BasicSelect";

export default function TransactionCard() {
  return (
    <div>
    <h2>Transaction</h2>
    <form>
      <label>Amount</label>
      <input
      type="number"
      />
      <label>Type</label>
      <BasicSelect></BasicSelect>
      <label>Address</label>
      <textarea required></textarea>
      <label>Description</label>
      <textarea></textarea>
      <label>Promotion Code</label>
      <textarea></textarea>
      <button>Send</button>
    </form>
   
    </div>
  )
}




