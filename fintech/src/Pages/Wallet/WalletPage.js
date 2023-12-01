import React from 'react'
import styles from './WalletPage.module.css'
import NavBar from '../../Components/navBar/NavBar.js';
import Wallet from '../../Components/Wallet/Wallet';


export default function WalletPage() {

    return (
        <div className={styles.container}>
            <div style={{ marginBottom: `20px`, color: `#FFF` }} className={styles.sideBar}>
                <h1>SideBar</h1>
            </div>
            <div className={styles.main}>
                <div className={styles.navBar}>
                    <NavBar />
                </div  >
                <div className={styles.walletHolderMain}>
                    <Wallet />
                </div>



            </div>

        </div>
    )
}
