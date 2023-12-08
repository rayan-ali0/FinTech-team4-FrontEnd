import React, { useEffect, useState } from 'react'
import styles from './recents.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';


const RecentMerchant = ({role}) => {
const [recents,setRecents]=useState(null)
const [loading,setLoading]=useState(true)
const [id,setId]=useState(5)
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
        await fetchRecentsMerchant()
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
            await fetchRecentsMerchant()
            console.log("doneee")
        }
    } catch (error) {
        console.log(error.error)
    }
}




const fetchRecentsMerchant= async()=>{//Pendinggg
try{
const res=await axios.get(`${process.env.REACT_APP_PATH}/transaction/getlastPending`,{
    params:{
        userId:5
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

const fetchRecentsUser= async()=>{ // all recents
    try{
    const res=await axios.get(`${process.env.REACT_APP_PATH}/read/lastTransaction`,{
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
    if(role=== "merchant"){
    fetchRecentsMerchant()
    }
    else if(role ==="user"){
        fetchRecentsUser()
    }
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
                    view all<ArrowForwardIosIcon style={{fontSize:"18px"}}/>
                </span>
            </div>
            <div className={styles.recentsTable}>
                <table className={styles.table1}>
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Date</th>
                            {role==="merchant"?
                            (
                                <th>Buyer</th>
                            ):(
                                <th>Participant</th>
                            )
                        }
                            
                            <th>USDT</th>
                            <th>USD</th>
                            {/* <th>Promotion</th> */}
                            {role==="merchant"?
                            (
                                <th>Promotion</th>
                            ):(
                               null 
                            )
                        }
                            <th>status</th>
                            {role==="merchant"?
                            (
                                <th>Actions</th>
                            ):(
                                <th>Type</th>
                            )
                        }
                           
                        </tr>
                    </thead>
                    <tbody>

{recents.length!==0?(
   recents.map((recent,index)=>(
    <tr style={{ borderBottom:index===recents.length-1?'none':'1px solid white'}} key={index}>
    <td>{recent.id}</td>
    <td>{recent.createdAt.substring(0,19).replace('T',' ')}</td>
    {role==="merchant"?
    (<td>{recent.BuyerId}</td>):
    (
        recent.type==="deposit"?
        (<td>ME</td>):
        (recent.type==="transfer"?
        (
            recent.SellerId===id?(<td>To {recent.BuyerId}</td>):(<td>From {recent.SellerId}</td>)
        ):
        (
            <td>{recent.SellerId}</td>
        ))
    )}
    
    <td>{recent.amountUSDT } </td>
    <td>{recent.amountUSD}</td>
    {role==="merchant"?recent.PromotionId?(<td>{recent.Promotion.code}</td>):(<td>--</td>):null}
    {/* {recent.PromotionId?(<td>{recent.Promotion.code}</td>):(<td>--</td>)} */}
    <td style={{color:recent.status==="declined"?"red":recent.status==="accepted"?"green":"white"}}>{recent.status}</td>
    {role==="merchant"?
    (<td><DoneIcon style={{color:"green",cursor:"pointer"}} onClick={()=>approveTransaction(recent.id)}>
    </DoneIcon> 
    <CloseIcon sx={{color:'red',cursor:"pointer"}} onClick={()=>declineTransaction(recent.id)}></CloseIcon></td>):
    (<td>{recent.type.charAt(0).toUpperCase()+recent.type.slice(1)}</td>)}


</tr>
   )) 
):(
    <tr style={{ borderBottom:'none'}}>
    <td></td>
    <td></td>
    <td></td>
    <td>NO REQUESTS</td>
    <td></td>
    <td></td>
    <td></td>
<td></td>

</tr>
)

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
