import React from 'react'
import styles from './WalletPage.module.css'
import NavBar from '../../Components/navBar/NavBar.js';
import Wallet from '../../Components/Wallet/Wallet';


export default function WalletPage() {

    return (

            <div className={styles.main}>
                <div className={styles.walletHolderMain}>
                    <Wallet />
                </div>



            </div>

    )
}
