import React, { useState } from 'react'
import styles from './WalletPage.module.css'
import NavBar from '../../Components/navBar/NavBar.js';
import Wallet from '../../Components/Wallet/Wallet';


export default function WalletPage() {
const [userId,setUserId]=useState(1)
    return (

            <div className={styles.main}>
                {/* <div className={styles.navBar}>
                    <NavBar />
                </div  > */}
                <div className={styles.walletHolderMain}>
                    <Wallet id={userId} />
                </div>



            </div>

    )
}
