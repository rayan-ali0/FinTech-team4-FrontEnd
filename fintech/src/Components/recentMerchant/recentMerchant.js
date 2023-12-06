import React, { useEffect, useState } from 'react'
import styles from './recents.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';


const RecentMerchant = () => {
const [recents,setRecents]=useState(null)
const [loading,setLoading]=useState(true)

const approveTransaction=async (id)=>{
try{
    const res=await axios.put(`${process.env.REACT_APP_PATH}/update/transaction`,null,{
        params:{
            transactionId:id,
            action:"accepted"
        }
    })
    if(res.status===200){
        console.log("transaction approved!")
        alert("approved"+id)
        setLoading(true)
        await fetchRecents()
    }
    else{
        console.log("error")
    }
}
catch(error){
    console.log("Error"+error.message)
}

}

const declineTransaction= async(id)=>{
    try {
        const res= await axios.put(`${process.env.REACT_APP_PATH}/update/transaction`,null,{
        params:{
            transactionId:id,
            action:"rejected"
        }})
        if(res.status===200){
            setLoading(true)
            await fetchRecents()
            console.log("doneee")
        }
    } catch (error) {
        console.log(error.error)
    }
}




const fetchRecents= async()=>{
try{
const res=await axios.get(`${process.env.REACT_APP_PATH}/transaction/getlastPending`,{
    params:{
        userId:8
    }
})
if(res){
    setRecents(res.data)
    console.log(res.data)
    setLoading(false)
}
else{
    console.log('no data')
}
}
catch(error){
console.log('error fetching'+error)
}
}

useEffect(()=>{
fetchRecents()
},[])
    return (
        <>
        {!loading?
        (        <div className={styles.merchantRecents}>
            <div className={styles.recentMerchantTitle}>
                <span style={{ fontWeight: "400", fontSize: "2em", color: "white" }}>
                    Recents
                </span>
                <span style={{ fontSize: "1.5em", color: "white" }}>
                    view all<ArrowForwardIosIcon style={{size:"small"}}/><ArrowForwardIosIcon />
                </span>
            </div>
            <div className={styles.recentsTable}>
                <table className={styles.table1}>
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Date</th>
                            <th>Buyer</th>
                            <th>Amount USDT</th>
                            <th>Price USD</th>
                            <th>Promotion</th>
                            <th>status</th>
                           <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

{
   recents.map((recent,index)=>(
    <tr key={index}>
    <td>{recent.id}</td>
    <td>{recent.createdAt.substring(0,19).replace('T',' ')}</td>
    <td>{recent.BuyerId}</td>
    <td>{recent.amountUSDT}</td>
    <td>{recent.amountUSD}</td>
    {recent.PromotionId?(<td>{recent.Promotion.code}</td>):(<td>--</td>)}
    <td>{recent.status}</td>
<td><DoneIcon style={{color:"green",cursor:"pointer"}} onClick={()=>approveTransaction(recent.id)}>
    </DoneIcon> 
    <CloseIcon sx={{color:'red'}} onClick={()=>declineTransaction(recent.id)}></CloseIcon></td>

</tr>
   )) 
}


                    </tbody>
                </table>
            </div>
        </div>)
        :
        (
            <div> <h1>loadingg..</h1></div>
        )

        }
        </>

    )
}

export default RecentMerchant
