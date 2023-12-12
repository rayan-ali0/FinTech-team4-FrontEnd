 
import { BarChart } from '@mui/x-charts/BarChart';
import * as React from 'react';
import Box from '@mui/material/Box';
// import { LineChart } from '@mui/x-charts/LineChart';
import Styles from "./overview.module.css"
import ToolbarGrid from '../../Components/Table/Table';
import BasicColor from '../../Components/Charts/Charts';
import HiddenLegend from '../../Components/charts2/CircularChart';
import RecentMerchant from '../../Components/recentMerchant/recentMerchant';
import DashCards from '../../Components/dashCards/DashCards'
import { useUserContext } from '../../Auth/UserContext';
import axios from 'axios';
import { useState } from 'react';
const sample = [1, 10, 30, 50, 70, 90, 100];

;

export default function BasicStacking() {

  const { myUser, signin, signout } = useUserContext();
  const [role,setRole]=React.useState(myUser.role)
const [weeklydata,setWeeklyData]=useState({})
const [loading,setLoading]=useState(true)
const [series,setSeries]=useState([])
  const fetchWeekly=async()=>{

try{
const response=await axios.get(`${process.env.REACT_APP_PATH}/fourweeks`,{
  params:{
    id:myUser.id
  }
})
if(response){
setWeeklyData(response.data)
console.log("weeklyyyyyyyyyyyyyyyyyyyyyyy")
console.log(response.data)
setSeries((prevSeries) =>[response.data.threeWeeksAgoIncome,response.data.twoWeeksAgoIncome,response.data.oneWeekAgoIncome,response.data.currentWeekIncome])
setLoading(false)
}
else{
  console.log('no data available')
  setLoading(false)

}
}

catch(error)
{
console.log('error'+error.message)
setLoading(false)
}
  }

  React.useEffect(()=>{
fetchWeekly()
  },[])

  const seriesA = {
    data: series,
    stack: 'total', color: "blue" 
    }
  const defaultSeries = { data: [0, 0, 0, 0], stack: 'total', color: "blue" };

  return (
    <>
    {
      role==="merchant"?
      (    <div style={{margin:"2rem auto",width:"100%",height:"90%"}} className={Styles.overviewHolder}>

<div className={Styles.merchantflex1}>
<div className={Styles.chartMerchant}>
<BarChart
    sx={{ borderRadius:"15px" ,background:"#140952"}}
      width={500}
      height={470}
     series={
        !loading?[
      seriesA
      
      ]:[defaultSeries]}
    />
    <HiddenLegend  />
</div>
<div className={Styles.cardsMerchants}>
  <div className={Styles.cardMerchant}>
  <DashCards  types='Income'/>

  </div>
  <div className={Styles.cardMerchant}  >
  <DashCards  types='Outcome'/>

  </div>
</div>
</div>
<div className={Styles.merchantflex2}>
<RecentMerchant />

</div>
    </div>
    )
      :
      (role==="user"?
      (

<div style={{margin:"2rem auto",width:"100%",height:"90%"}} className={Styles.overviewHolder}>

<div className={Styles.merchantflex1}>
<div className={Styles.chartMerchant} >
<BasicColor data={weeklydata}/>
</div>
<div className={Styles.cardsMerchants}>
  <div className={Styles.cardMerchant} >
  <DashCards types='Income' />

  </div>
  <div className={Styles.cardMerchant}>
  <DashCards types='Outcome'/>

  </div>
</div>
</div>
<div className={Styles.merchantflex2}>
<RecentMerchant />

</div>
    </div>
      )
      :
      (

        <div style={{margin:"2rem auto",width:"100%",height:"90%"}} className={Styles.overviewHolder}>

<div className={Styles.merchantflex1}>
<div className={Styles.chartMerchant}>
<BarChart
    sx={{ borderRadius:"15px" ,background:"#140952"}}
      width={500}
      height={389}
      series={
        !loading?[
        seriesA
      
      ]:[defaultSeries]
    }
    />
    <HiddenLegend />
</div>
<div className={Styles.cardsMerchants}>
  <div className={Styles.cardMerchant}>
  <DashCards types='Outcome'/>

  </div>
  <div className={Styles.cardMerchant}  >
  <DashCards types='Outcome' />

  </div>
</div>
</div>
<div className={Styles.merchantflex2}>
<RecentMerchant/>

</div>
    </div>
      )
      )
    }
    </>

    
  );
}









      {/* <div >
    <div style={{display:"flex", flexDirection:"row", gap:"2rem"}}>
    <BarChart
    sx={{ borderRadius:"15px" ,background:"#140952"}}
      width={400}
      height={300}
      series={[
        { ...seriesA, stack: 'total' ,color:"blue"},
      
      ]}
    />
    <HiddenLegend />
    </div>
    <BasicColor />
    {/* <ToolbarGrid /> 
    
    </div>   */}