import React from 'react'
import styles from './dashCards.module.css'
export default function DashCards() {
  return (
    <div className={styles.cardContainer}>
    <section className={styles.nbSection}>
      <div className={styles.nbTitle}>
      <span className={styles.moneyTransfer}>Expense</span>
<span className={styles.info}> 45% more this week </span>
      </div>
      <span className={styles.moneyTransferAmount}>$1250.23</span>
    </section>
</div>  )
}
