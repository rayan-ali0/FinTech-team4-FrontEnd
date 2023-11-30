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
      <div style={{ marginBottom: `20px` ,color:`#FFF`}} className={styles.sideBar}>
{/* <ClippedDrawer/> */}
<h1>SideBar</h1>
     </div>
<div className={styles.main}>
    <div className={styles.navBar}>
    <NavBar />

    </div >
    <div>
        
    </div>
      <BasicTable />
   
     

</div>
  
      </div>
  )
}
