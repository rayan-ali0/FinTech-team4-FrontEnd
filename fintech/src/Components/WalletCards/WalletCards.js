import React, { useEffect,useRef } from 'react'
import styles from './WalletCards.module.css'
import {Chart} from 'chart.js'; // Import Chart.js

export default function WalletCards() {
  const chartRef = useRef(null);

  const getChart=()=>{
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

    const config = {
      type: 'doughnut',
      data: data,
    };
    const ctx = chartRef.current.getContext('2d');

  // Create the chart using the data and config
  new Chart(ctx, config)

  }
  useEffect(()=>{
getChart()
  },[])
  return (
    <div className={styles.cardContainer}>
        <section className={styles.chartSection}>
        <canvas ref={chartRef}></canvas>

        </section>
        <section className={styles.nbSection}>
          <span className={styles.moneyTransfer}>Money Transfer</span>
          <span className={styles.moneyTransferAmount}>$1250.23</span>
        </section>
    </div>
  )
}
