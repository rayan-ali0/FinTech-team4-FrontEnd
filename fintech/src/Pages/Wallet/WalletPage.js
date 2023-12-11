import React, { useState } from 'react'
import styles from './WalletPage.module.css'
import NavBar from '../../Components/navBar/NavBar.js';
import Wallet from '../../Components/Wallet/Wallet';
import { useUserContext } from '../../Auth/UserContext';


export default function WalletPage() {
const [userId,setUserId]=useState(1)
    return (

            <div className={styles.main}>
                <div className={styles.walletHolderMain}>
                    <Wallet id={userId} />
                </div>



            </div>

    )
}
