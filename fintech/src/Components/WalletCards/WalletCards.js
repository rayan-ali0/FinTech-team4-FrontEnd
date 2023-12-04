import React from 'react'
import styles from './WalletCards.module.css'
export default function WalletCards() {
  return (
    <div className={styles.cardContainer}>
        <section className={styles.chartSection}></section>
        <section className={styles.nbSection}>
          <span className={styles.moneyTransfer}>Money Transfer</span>
          <span className={styles.moneyTransferAmount}>$1250.23</span>
        </section>
    </div>
  )
}
