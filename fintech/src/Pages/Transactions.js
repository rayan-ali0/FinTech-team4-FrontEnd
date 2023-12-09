import React from 'react'
// import Table from '../Components/Table/Table.js'
import styles from './transaction.module.css'
import BasicTable from '../Components/Table/Table.js';
import NavBar from '../Components/navBar/NavBar.js';
import WalletCards from '../Components/WalletCards/WalletCards';
// import ClippedDrawer from '../Components/SideBar/SideBar.js'


export default function Transactions() {
  return (
    <div className={styles.container}>


      <BasicTable />
   
     

  
      </div>
  )
}
