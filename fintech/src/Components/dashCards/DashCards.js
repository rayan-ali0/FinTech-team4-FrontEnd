import React, { useEffect,useState } from 'react'
import styles from './dashCards.module.css'
import {useUserContext} from '../../Auth/UserContext'
import axios from 'axios';

export default function DashCards({types}) {
  const { myUser, signin, signout } = useUserContext();
const [loading,setLoading]=useState(true)
const [fetchedData,setFetchedData]=useState({})
console.log("first,",types)

console.log(types)

  const weeklyIncome=async(req,res)=>{
try{
const response=await axios.get(`${process.env.REACT_APP_PATH}/transaction/weeklyIncome`,{
  params:{
    id:myUser.id
  }
})

if(response){
  console.log(loading)
  setFetchedData(response.data)
  console.log(response.data)
  setLoading(false)
  console.log(loading)
}

else{
  console.log('no Data')
  setLoading(false)
}

}
catch(error){
  console.log(error.message)
  setLoading(false)
}

  }

  const weeklyOutcome=async(req,res)=>{
    try{
    const response=await axios.get(`${process.env.REACT_APP_PATH}/transaction/weeklyOutcome`,{
      params:{
        id:myUser.id
      }
    })
    
    if(response){
      console.log(loading)
      setFetchedData(response.data)
      console.log(response.data)
      setLoading(false)
      console.log(loading)
    }
    
    else{
      console.log('no Data')
      setLoading(false)
    }
    
    }
    catch(error){
      console.log(error.message)
      setLoading(false)
    }
    
      }
  useEffect(()=>{
    if(types==="Income"){
      weeklyIncome()

    }
    else if(types==="Outcome"){
      weeklyOutcome()
    }


  },[])

  return (
    <div className={styles.cardContainer}>
    <section className={styles.nbSection}>
      <div className={styles.nbTitle}>
      <span className={styles.moneyTransfer}>{types==="Income"?'Weekly Income':'Weekly Outcome'}</span>
<span className={styles.info}>  {!loading ? `${fetchedData.percentageDifference || 0}% more this week` : '...'}
 </span>
      </div>
      <span className={styles.moneyTransferAmount}>${!loading?fetchedData.WeeklyIncome|| 0:'...'}</span>
    </section>
</div>  )
}
