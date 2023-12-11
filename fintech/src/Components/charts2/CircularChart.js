import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { PieChart } from '@mui/x-charts/PieChart';
import  {useUserContext}  from '../../Auth/UserContext';
import axios from 'axios';



export default function HiddenLegend() {
  const [isHidden, setIsHidden] = React.useState(false);
  const { myUser, signin, signout } = useUserContext();
const [loading,setLoading]=React.useState(true)
const[transactions,setTransactions]=React.useState(null)
const[topThree,setTop]=React.useState()
const[seriesUsers,setSeries]=React.useState([
  {
    data: [
      { id: 0, value: 10, label: 'series A' ,color:"#253B8E"},
      { id: 1, value: 15, label: 'series B',color:"#FF3E3E" },
      { id: 2, value: 20, label: 'series C' ,color:"blue"},
    ],
  },
])

const series = [
  {
    data: [
      { id: 0, value: 10, label: 'fetching A' ,color:"#253B8E"},
      { id: 1, value: 10, label: 'fetching B',color:"#FF3E3E" },
      { id: 2, value: 10, label: 'fetching C' ,color:"blue"},
    ],
  },
];


  const fetchTransactionsByUser=async()=>{
    try {
      const result= await axios.get(`${process.env.REACT_APP_PATH}/transaction/read/transaction/byId`,{
        params:{
            userId:myUser.id,
        }})
        if(result){
            const filteredTransactions = result.data.filter(
              transaction => transaction.status === 'accepted' && transaction.SellerId===myUser.id 
            );
            setTransactions(filteredTransactions)
            console.log("Transactions fetched successfully:", result.data);
            if(transactions){

              const buyerTotalUSDT = transactions.reduce((acc, transaction) => {
                const { BuyerId, amountUSDT } = transaction;
                const buyerUserId = BuyerId; // Assuming BuyerId is the user ID of the buyer
                acc[buyerUserId] = (acc[buyerUserId] || 0) + parseFloat(amountUSDT);
                return acc;
              }, {});

              const sortedBuyers = Object.entries(buyerTotalUSDT)
  .sort(([, amountA], [, amountB]) => amountB - amountA)
  .slice(0, 3)
  .map(([buyerUserId, totalAmount]) => ({ buyerUserId, totalAmount }));

setTop(sortedBuyers)
console.log("333333333333333333333333333333333")
console.log(sortedBuyers)
setSeries([{
  data:[
    { id: 0, value: topThree[0].totalAmount, label: topThree[0].buyerUserId, color: "#253B8E" },
    { id: 1, value: topThree[1].totalAmount, label: topThree[1].buyerUserId, color: "#FF3E3E" },
    { id: 2, value: topThree[2].totalAmount, label: topThree[2].buyerUserId, color: "blue" },
  ]
}])
  
              setLoading(false)

            }

            }
          
          else{
            console.log('no data')
            setLoading(false)
       
        } 

      }
      catch (error) {
        console.log('error fetching'+error.message)
        setLoading(false)
  
      }
        
    } 
  
React.useEffect(()=>{
   fetchTransactionsByUser()

},[])
  
  return (
    <Stack sx={{background:"#140952" ,borderRadius:"15px", padding:"20px",width:"30rem"}}>
      <FormControlLabel sx={{color:"white" ,width:"10 rem", alignSelf:"start"}}
        checked={isHidden}
        control={
          <Checkbox sx={{color:'white'}} onChange={(event) => setIsHidden(event.target.checked)} />
        }
        label="hide label"
        labelPlacement="end"
      />
      <PieChart sx={{}}
      
        series={!loading?seriesUsers:series}
    
        
        slotProps={{ legend: { hidden: isHidden } }}
        width={400}
        height={200}
   
      />
    </Stack>
  );
}