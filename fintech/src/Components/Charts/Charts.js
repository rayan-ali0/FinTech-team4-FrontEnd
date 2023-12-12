import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import { useState } from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import axios from 'axios';

const Tableau10 = [
  '#4e79a7',
  '#f28e2c',
  '#e15759',
  '#76b7b2',
  '#59a14f',
  '#edc949',
  '#af7aa1',
  '#ff9da7',
  '#9c755f',
  '#bab0ab',
];

const chartsParams = {
  margin: { bottom: 20, left: 25, right: 5 },
  height: 300,
};
export default function BasicColor() {
  
  const [outcome, setOutcome]=useState()
  // const [id, setId]=useState(myUser.id)
  const [loading, setLoading]= useState(true)

  const [color, setColor] = React.useState('#4e79a7');

  const fetchOutcome =async()=>{
    try {
      const result= await axios.get(`${process.env.REACT_APP_PATH}/transaction/Outcome`)
      if (result){
        setOutcome(result.data)
        console.log("Outcome fetched successfully", result.data)
        setLoading(false)
      }
      console.log("no dataa")
      setLoading(false)
    } catch (error) {
      console.log('error fetchinggg'+error.message)
      setLoading(false)
    }

  }

  React.useEffect(()=>{
    fetchOutcome()
  },[])

  const handleChange = (event, nextColor) => {
    setColor(nextColor);
  };

  return (
    <Stack direction="column" spacing={2} alignItems="center" sx={{ width: '100%', background:"#140952" , borderRadius:"15px",padding:"25px"}}>
      <LineChart
        {...chartsParams}
        series={[
          {
            data: [15, 23, 18, 19, 13],
            label: 'income overview',
            color,
          },
        ]}
      />
      <ToggleButtonGroup
        // orientation="vertical"
        value={color}
        exclusive
        onChange={handleChange}
      >
        {Tableau10.map((value) => (
          <ToggleButton key={value} value={value} sx={{ p: 1 }}>
            <div
              style={{
                width: 15,
                height: 15,
                backgroundColor: value,
                display: 'inline-block',
              }}
            />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
}