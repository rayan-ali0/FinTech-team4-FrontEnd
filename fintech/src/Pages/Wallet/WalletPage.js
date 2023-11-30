import React from 'react'
import styles from './WalletPage.module.css'
import NavBar from '../../Components/navBar/NavBar.js';
import WalletCards from '../../Components/WalletCards/WalletCards';
import crypto from '../../assets/images/crypto.png'
import dollar from '../../assets/images/dollar.png'
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
                <div className={styles.walletHolder}>
                    <div className={styles.nbDiv}>
                        <section className={styles.balanceHolder}>

                            <article className={styles.actions}>
                                <div className={styles.balanceCurrencySpan}>
                                    <h2 className={`${styles.walletTitles} ${styles.titleInline}`}>Total Balance</h2>
                                    <span className={styles.currency}>USD</span>
                                </div>
                                <div className={styles.balanceSpan}>
                                    <span>$2578.55</span>
                                </div>
                                <div className={styles.actionBtns}>
                                    <span className={`${styles.actionbtn} ${styles.depositBtn}`}>Deposit</span>
                                    <span className={styles.actionbtn}>Withdraw</span>
                                    <span className={styles.actionbtn}>Transfer</span>

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

                        </section>
                    </div>
                    <div className={styles.chartsHolder} >
                        <WalletCards />
                        <WalletCards />
                        <WalletCards />
                    </div>
                </div>



            </div>

        </div>
    )
}
