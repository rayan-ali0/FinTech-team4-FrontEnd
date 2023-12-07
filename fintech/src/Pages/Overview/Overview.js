 
import { BarChart } from '@mui/x-charts/BarChart';
import * as React from 'react';
import Box from '@mui/material/Box';
// import { LineChart } from '@mui/x-charts/LineChart';
import Styles from "./overview.module.css"
import ToolbarGrid from '../../Components/Table/Table';
import BasicColor from '../../Components/Charts/Charts';
import HiddenLegend from '../../Components/charts2/CircularChart';
// import recentMerchant from '../../Components/recentMerchant/recentMerchant';
import RecentMerchant from '../../Components/recentMerchant/recentMerchant';
import DashCards from '../../Components/dashCards/DashCards'
const sample = [1, 10, 30, 50, 70, 90, 100];

const seriesA = {
  data: [2, 3, 1, 4, 5],
  label: 'Payment',
};

export default function BasicStacking() {
  const [role,setRole]=React.useState("merchant")
  return (
    <>
    {
      role==="merchant"?
      (    <div style={{margin:"0 auto",border:"1px solid white",width:"100%",height:"90%"}} className={Styles.overviewHolder}>
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
<div className={Styles.merchantflex1}>
<div className={Styles.chartMerchant}>

</div>
<div className={Styles.cardsMerchants}>
  <div className={Styles.cardMerchant}>
  <DashCards />

  </div>
  <div className={Styles.cardMerchant}>
  <DashCards />

  </div>
</div>
</div>
<div className={Styles.merchantflex2}>
<RecentMerchant/>

</div>
    </div>)
      :
      (
        <div style={{width:"100%",height:"100%"}}>
Helloo
        </div>
      )
    }
    </>

    
  );
}