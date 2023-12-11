import React, { useState } from 'react'
import styles from './WalletPage.module.css'
import NavBar from '../../Components/navBar/NavBar.js';
import Wallet from '../../Components/Wallet/Wallet';
import { useUserContext } from '../../Auth/UserContext';
import Transaction from "../../Components/TransactionCard/Transaction"


export default function WalletPage() {
const [userId,setUserId]=useState(1)
const [togglePage, setTogglePage]=useState(true);

    return (

            <div className={styles.main}>
                <div className={styles.walletHolderMain}>
                    {togglePage?
                    <Wallet id={userId} setTogglePage={setTogglePage}/>
                    :
                    <Transaction setTogglePage={setTogglePage}/>
                    }
                </div>



            </div>

    )
}
