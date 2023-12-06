 
import { BarChart } from '@mui/x-charts/BarChart';
import * as React from 'react';
import Box from '@mui/material/Box';
// import { LineChart } from '@mui/x-charts/LineChart';
import Styels from "./overview.module.css"
import ToolbarGrid from '../../Components/Table/Table';
import BasicColor from '../../Components/Charts/Charts';
import HiddenLegend from '../../Components/charts2/CircularChart';
import { useUserContext } from '../../Auth/UserContext';

const sample = [1, 10, 30, 50, 70, 90, 100];

const seriesA = {
  data: [2, 3, 1, 4, 5],
  label: 'Payment',
};

export default function BasicStacking() {
  const {myUser} = useUserContext();
  console.log("this is my user",myUser);
  return (
    <div style={{margin:"0 2rem"}}>
      <div >
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
    {/* <ToolbarGrid /> */}
    
    </div>  
    </div>
    
  );
}