import React from 'react'
import styles from './Wallet.module.css'
import WalletCards from '../../Components/WalletCards/WalletCards';
import crypto from '../../assets/images/crypto.png'
import dollar from '../../assets/images/dollar.png'
import Button from '@mui/material/Button';
import DashCards from '../dashCards/DashCards';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Wallet() {
    const useStyle = {
        hoverBtn: {
            background: `#FFE712`,
            color: "#000",
            height: `3em`,
            width: `25%`,
            '&:hover': {
                backgroundColor: `#ffef61 !important`
            },
        },
    }
  return (
    <div className={styles.walletHolder}>
    <div className={styles.nbDiv}>
                        <section className={styles.balanceHolder}>

                            <article className={styles.actions}>
                                <div className={styles.balanceCurrencySpan}>
                                    <h2 className={`${styles.walletTitles} ${styles.titleInline}`}>Total Balance</h2>
                                    <span className={styles.currencyDiv}>USD</span>
                                </div>
                                <div className={styles.balanceSpan}>
                                    <span>$2578.55</span>
                                </div>
                                <div className={styles.actionBtns}>
                                    {/* <span className={`${styles.actionbtn} ${styles.depositBtn}`}>Deposit</span>
                                    <span className={styles.actionbtn}>Withdraw</span>
                                    <span className={styles.actionbtn}>Transfer</span> */}
                                    <Button variant="contained" sx={useStyle.hoverBtn}>Deposit</Button>
                                    <Button variant="contained" sx={{ background: `rgba(40, 87, 254, 0.48)`, height: `3em`, width: `25%`,color:"white" }}   >Withdraw</Button>
                                    <Button variant="contained" sx={{ background: `rgba(40, 87, 254, 0.48)`, height: `3em`, width: `25%`,color:"white" }} >     Transfer
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
                                        1500.87
                                    </span>

                                </div>
                                <div className={styles.usdBalance}>
                                    <span className={styles.cuurencyLogo} >
                                        <img src={dollar} alt="dollar Logo" className={styles.dollarLogo}></img>
                                        USD
                                    </span>
                                    <span className={styles.cuurencyAmount} >
                                        1500.87
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
                                <div className={styles.recentOne}>
                                    <span className={styles.recentArrow}><SouthIcon sx={{color:'green',fontSize:'1.8em'}}/> </span>
                                    <span>withdraw</span>
                                    <span>23:10:45</span>
                                    <span>$44</span>
                                    <span>pending</span>
                                </div>

                                <div className={styles.recentOne}>
                                    <span className={styles.recentArrow}><NorthIcon sx={{color:'red',fontSize:'1.8em'}}/></span>
                                    <span>withdraw</span>
                                    <span>23:10:45</span>
                                    <span>$44</span>
                                    <span>pending</span>
                                </div>

                                <div className={styles.recentOne}>
                                    <span className={styles.recentArrow}><MoreHorizIcon sx={{color:'white',fontSize:'1.8em'}}/></span>
                                    <span>withdraw</span>
                                    <span>23:10:45</span>
                                    <span>$44</span>
                                    <span>pending</span>
                                </div>

                                <div className={styles.recentOne}>
                                    <span className={styles.recentArrow}><MoreHorizIcon sx={{color:'white',fontSize:'1.8em'}}/></span>
                                    <span>withdraw</span>
                                    <span>23:10:45</span>
                                    <span>$44</span>
                                    <span>pending</span>
                                </div>

                                <div className={styles.recentOne}>
                                    <span className={styles.recentArrow}> <SouthIcon sx={{color:'green',fontSize:'1.8em'}}/></span>
                                    <span>withdraw</span>
                                    <span>23:10:45</span>
                                    <span>$44</span>
                                    <span>pending</span>
                                </div>

                            </article>
                        </section>
                    </div>
                    <div className={styles.chartsHolder} >
                        <WalletCards />
                        <WalletCards />
                        {/* <WalletCards /> */}
                        <DashCards/>
                    </div>
    </div>
  )
}
