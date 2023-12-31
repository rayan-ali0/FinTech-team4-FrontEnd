import React, { useEffect, useState } from 'react'
import styles from './Wallet.module.css'
import WalletCards from '../../Components/WalletCards/WalletCards';
import crypto from '../../assets/images/crypto.png'
import dollar from '../../assets/images/dollar.png'
import Button from '@mui/material/Button';
import DashCards from '../dashCards/DashCards';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import axios from "axios";
import {} from '../../Components/depositModal/Deposit'
export default function Wallet({ id }) {
    const [userId, setUserId] = useState(id)
    const [userWallet, setUserWallet] = useState()
    const [userTransactions, setUserTransactions] = useState()
    const [walletLoading, setWalletLoading] = useState(true)
    const [recentsLoading, setRecentsLoading] = useState(true)

    /*********************/
    const fetchWallet = (userId) => {
        axios.get(`${process.env.REACT_APP_PATH}/wallet/readByUser/8`)
            .then((res) => {
                setUserWallet(res.data);
                console.log(res.data)
                setWalletLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching Wallet:", error);
            });
    }

    const fetchRecents = (userId) => {
        axios.get(`${process.env.REACT_APP_PATH}/read/lastTransaction?userId=8`)
            .then((res) => {
                setUserTransactions(res.data);
                console.log(res.data)
                setRecentsLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching Recents Transactions:", error);
            });
    }


    useEffect(() => {
        fetchWallet(userId)
        fetchRecents()
    }, [userId]);
    /******************* */

    const useStyle = {
        hoverBtn: {
            background: `#FFE712`,
            color: "#000",
            height: `3em`,
            width: `25%`,
            '&:hover': {
                backgroundColor: `#ffef61 !important`
            },
            '@media(max-width: 950px)': { fontSize: '0.8em', width: "30%" },
            '@media(max-width: 650px)': { fontSize: '0.7em', width: "32%" }

        },
    }
    return (
        <>
            {!walletLoading && !recentsLoading ? (
                <div className={styles.walletHolder}>

                    <div className={styles.nbDiv}>
                        <section className={styles.balanceHolder}>

                            <article className={styles.actions}>
                                <div className={styles.balanceCurrencySpan}>
                                    <h2 className={`${styles.walletTitles} ${styles.titleInline}`}>Total Balance</h2>
                                    <span className={styles.currencyDiv}>USD</span>
                                </div>
                                <div className={styles.balanceSpan}>
                                    <span>{userWallet.usdBalance}</span>
                                </div>
                                <div className={styles.actionBtns}>
                                
                                    <Button  variant="contained" sx={useStyle.hoverBtn}>Deposit</Button>
                                    <Button variant="contained" sx={{
                                        background: `rgba(40, 87, 254, 0.48)`, height: `3em`, width: `28%`, color: "white", '@media(max-width: 950px)': { fontSize: '0.8em', width: "30%" }, '@media(max-width: 650px)': { fontSize: '0.7em', width: "32%" }

                                    }}   >Withdraw</Button>
                                    <Button variant="contained" sx={{
                                        background: `rgba(40, 87, 254, 0.48)`, height: `3em`, width: `28%`, color: "white", '@media(max-width: 950px)': { fontSize: '0.8em', width: "30%" }, '@media(max-width: 650px)': { fontSize: '0.7em', width: "32%" }

                                    }} >     Transfer
                                    </Button>

                                </div>
                            </article>

                            <article className={styles.balances}>
                                <h2 className={`${styles.walletTitles} ${styles.balanceTitle}`}>Balances</h2>
                                <div className={styles.usdtBalance}>
                                    <span className={styles.cuurencyLogo} >
                                        <img src={crypto} alt="crypto Logo" className={styles.cryptoLogo}></img>
                                        USDT
                                    </span>
                                    <span className={styles.cuurencyAmount} >
                                        {userWallet.usdtBalance}
                                    </span>

                                </div>
                                <div className={styles.usdBalance}>
                                    <span className={styles.cuurencyLogo} >
                                        <img src={dollar} alt="dollar Logo" className={styles.dollarLogo}></img>
                                        USD
                                    </span>
                                    <span className={styles.cuurencyAmount} >
                                        {userWallet.usdBalance}
                                    </span>
                                </div>
                            </article>

                        </section>

                        <section className={styles.recentHolder}>
                            <article className={styles.recentTitle}>
                                <span>Wallet Activity</span>
                                <span>Recent</span>

                            </article>
                            <article className={styles.recents}>
                                {
                                    userTransactions.map((transaction,index)=>(
                                        <div className={styles.recentOne} key={index}>
                                        <span className={styles.recentArrow}>
                                            {transaction.type==="deposit"?
                                            (<SouthIcon sx={{ color: 'green', fontSize: '1.8em' }} /> )
                                            :
                                            (transaction.type==="transfer"?
                                            (<NorthIcon sx={{ color: 'green', fontSize: '1.8em' }} />)
                                            :(
                                               transaction.status==="declined" ?
                                               (<SouthIcon sx={{ color: 'red', fontSize: '1.8em' }} />)
                                               :(
                                                transaction.status==="accepted"?
                                                (<SouthIcon sx={{ color: 'green', fontSize: '1.8em' }} /> )
                                               :
                                               (<MoreHorizIcon sx={{ color: 'white', fontSize: '1.8em' }} />))
                                            ))
                                            }
                                            
                                            </span>
                                            <div className={styles.info}>
                                            <span className={styles.recentType}>{transaction.type}</span>
                                        <span className={styles.recentDate}>{transaction.createdAt.substring(0,10)}</span>
                                        {transaction.type==="deposit"?
                                        (     <span className={styles.recentAmount}>${transaction.amountUSD}</span>
                                        ):(<span className={styles.recentAmount}>{transaction.amountUSDT}</span>)
                                        }
                                        {
                                           transaction.status==="pending" ?(<span style={{color:"#9C9C9C"}} className={styles.recentStatus}>{transaction.status.charAt(0).toUpperCase()+ transaction.status.slice(1)}</span>):(
                                            transaction.status==="declined"?(<span className={styles.recentStatus} style={{color:"red"}}>{transaction.status.charAt(0).toUpperCase()+ transaction.status.slice(1)}</span>):(
                                                <span className={styles.recentStatus} style={{color:"green"}}>{transaction.status.charAt(0).toUpperCase()+ transaction.status.slice(1)}</span>
                                            )
                                           )
                                        }
                                            </div>
                                       
                                        
                                    </div>
                                    ))
                                }
                                {/* <div className={styles.recentOne}>
                                    <span className={styles.recentArrow}><SouthIcon sx={{ color: 'green', fontSize: '1.8em' }} /> </span>
                                    <span>withdraw</span>
                                    <span>23:10:45</span>
                                    <span>$44</span>
                                    <span>pending</span>
                                </div>

                                <div className={styles.recentOne}>
                                    <span className={styles.recentArrow}><NorthIcon sx={{ color: 'red', fontSize: '1.8em' }} /></span>
                                    <span>withdraw</span>
                                    <span>23:10:45</span>
                                    <span>$44</span>
                                    <span>pending</span>
                                </div> */}

                                 {/* <div className={styles.recentOne}>
                                     <span className={styles.recentArrow}><MoreHorizIcon sx={{ color: 'white', fontSize: '1.8em' }} /></span>
                                     <span>withdraw</span>
                                     <span>23:10:45</span>
                                     <span>$44</span>
                                     <span>pending</span>
                                </div>  */}

                                {/* <div className={styles.recentOne}>
                                    <span className={styles.recentArrow}><MoreHorizIcon sx={{ color: 'white', fontSize: '1.8em' }} /></span>
                                    <span>withdraw</span>
                                    <span>23:10:45</span>
                                    <span>$44</span>
                                    <span>pending</span>
                                </div>

                                <div className={styles.recentOne}>
                                    <span className={styles.recentArrow}> <SouthIcon sx={{ color: 'green', fontSize: '1.8em' }} /></span>
                                    <span>withdraw</span>
                                    <span>23:10:45</span>
                                    <span>$44</span>
                                    <span>pending</span>
                                </div> */}

                            </article>
                        </section>
                    </div>
                    <div className={styles.chartsHolder} >
                        <WalletCards />
                        <WalletCards />
                        <WalletCards />
                    </div>
                </div>


            ) : (
            <div style={{ height: '100%', width: '100%',display:"flex" ,justifyContent:"center",alignItems:"center"}}> 
            <h1>
            LOADING..
                </h1></div>
            )

            }
        </>
    )
}
