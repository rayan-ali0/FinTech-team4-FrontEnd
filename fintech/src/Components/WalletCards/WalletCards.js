import React, { useEffect, useRef, useState } from 'react'
import styles from './WalletCards.module.css'
import { Chart } from 'chart.js/auto'; // Import Chart.js
import { DoughnutController } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2'
import axios from 'axios';
import {useUserContext} from '../../Auth/UserContext'
export default function WalletCards({ type }) {
  const { myUser, signin, signout } = useUserContext();

  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState(myUser.id)
  const [role, setRole] = useState(myUser.role)
  const [firstAmount, setFirstAmount] = useState(0)
  const [secondAmount, setSecondAmount] = useState(0)
  const [labels, setLables] = useState([])

  const [data, setData] = useState({
    labels: labels,
    datasets: [{
      label: ['in','out'],
      data: [Number(firstAmount)|| 0, Number(secondAmount)|| 0],

      backgroundColor: [
        '#767CE2',
        '#AAA9FA',
      ],
      hoverOffset: 4
    }]
  })


  useEffect(() => {
    if (type === "Income") {
      fetchIncome()
      console.log(secondAmount)
    }
    if (type === "Outcome") {
      fetchOutcome()
    }
  }, [])

  const fetchIncome = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_PATH}/transaction/Income`, {
        params: {
          id: userId
        }
      })
      if (res) {

        if (role === "user") {
          setFirstAmount(res.data.transferIncome)
          setSecondAmount(res.data.depositIncome)
          // setLables(['Transfer', 'Deposit'])
          setData({
            labels: ['Transfer', 'Deposit'],
            datasets: [{
              label: 'Income',
              data: [Number(firstAmount), Number(secondAmount)],
        
              backgroundColor: [
                '#767CE2',
                '#AAA9FA',
              ],
              borderColor: [
                '#767CE2',
                '#AAA9FA',
              ],
              hoverOffset: 4,
              
            }]
          }

          )
          setLoading(false)

        }
        if (role === "merchant") {
          setFirstAmount(data.transactionIncome)
          setSecondAmount(data.depositIncome)
          setLables(['Transaction', 'Deposit'])
          setData(
            {
              labels: ['Transaction', 'Deposit'],
              datasets: [{
                label:'Income',
                data: [Number(firstAmount), Number(secondAmount)],
                backgroundColor: [
                  '#767CE2',
                  '#AAA9FA',
                ],
                borderColor: [
                  '#767CE2',
                  '#AAA9FA',
                ],
                hoverOffset: 4,
                

              }]
            }
          )
          setLoading(false)
        }
      }
    }
    catch (error) {
      console.log(error.message)
      setLoading(false)

    }
  }

  const fetchOutcome = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_PATH}/transaction/Outcome`, {
        params: {
          id: userId
        }
      })
      if (res) {
        console.log(res.data)
        console.log(res.data)
        if (role === "user") {
          setFirstAmount(res.data.transactionOut)
          setSecondAmount(res.data.transferOut)
          setLables(['Transaction', 'Transfer'])
          setData(
            {
              labels: ['Transaction', 'Transfer'],
              datasets: [{
                label: 'Outcome',
                data: [Number(firstAmount), Number(secondAmount)],
                backgroundColor: [
                  '#767CE2',
                  '#AAA9FA',
                ],
                borderColor: [
                  '#767CE2',
                  '#AAA9FA',
                ],
                hoverOffset: 4,
              
              }]
            }
          )
          setLoading(false)

        }
        if (role === "merchant") {
          setFirstAmount(data.transactionOut)
          setSecondAmount(data.transferOut)
          setLables(['Transaction', 'Transfer'])
          setData(
            {
              labels: ['Transaction', 'Transfer'],
              datasets: [{
                label: 'Outcome',
                data: [Number(firstAmount), Number(secondAmount)],
          
                backgroundColor: [
                  '#767CE2',
                  '#AAA9FA',
                ],
                borderColor: [
                  '#767CE2',
                  '#AAA9FA',
                ],
                hoverOffset: 4,
                

              }]
            }
          )
          setLoading(false)
        }
      }
    }
    catch (error) {
      console.log(error.message)
      setLoading(false)

    }
  }
  return (
    <div className={styles.cardContainer}>
      <section className={styles.chartSection}>

        {
          !loading ? (<Doughnut data={data} style={{width:'97%'}} />)
            :
            (<h2>
              loading..
            </h2>)
        }


      </section>
      <section className={styles.nbSection}>
        <span className={styles.moneyTransfer}>{type}</span>
        <span className={styles.moneyTransferAmount}>{Number(firstAmount) + Number(secondAmount)}</span>
      </section>
    </div>
  )
}
