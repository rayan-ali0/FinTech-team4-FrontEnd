import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { PieChart } from '@mui/x-charts/PieChart';

const series = [
  {
    data: [
      { id: 0, value: 10, label: 'series A' ,color:"#253B8E"},
      { id: 1, value: 15, label: 'series B',color:"#FF3E3E" },
      { id: 2, value: 20, label: 'series C' ,color:"blue"},
    ],
  },
];

export default function HiddenLegend() {
  const [isHidden, setIsHidden] = React.useState(false);

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
        series={series}
        slotProps={{ legend: { hidden: isHidden } }}
        width={400}
        height={200}
   
      />
    </Stack>
  );
}