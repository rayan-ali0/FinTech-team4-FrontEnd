
import * as React from 'react';
import { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../../Components/Table/TableComponent.module.css'
import  {useUserContext}  from '../../Auth/UserContext';
import { TextField, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom';


export default function ToolbarGrid() {
  const { myUser, signin, signout } = useUserContext();

  const [promotion, setPromotion]=useState([])
  const [id, setId]=useState(myUser.id)
  const [loading, setLoading]= useState(true)
  const [role,setRole]=useState(myUser.role)

  const getPromotions =async()=>{
    try {
      const recent =await axios.get(`${process.env.REACT_APP_PATH}/promotion/readByUser/${id}`
      
      )
      if(recent){
        setPromotion(recent.data)
        console.log("fetchedd successfullyy",recent.data)
        setLoading(false)
      }
      console.log("no data")
    } catch (error) {
      console.log("error fetchingg",error.message)
    }
  }
  React.useEffect(()=>{
    getPromotions()
  })
  

  const commonColumns = [
    { field: 'id', headerName: 'ID', width: 100, headerAlign: 'center', align: 'center' },
    { field: 'expDate', headerName: 'Exp Date', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'code', headerName: 'Title', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'percentage', headerName: 'Percentage', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'action', headerName: 'Action', width: 150, headerAlign: 'center', align: 'center' },
  ];
  


  const myCustomData = [
    {
      id: 0, // Use 0 as a special ID for the loading row
      name: loading ? 'Loading...' : '', // Display 'Loading...' in the name column while loading
      age: '',
      BuyerId: '',
    },
    { id: '', name: 'Abdulaziz Doe', age: 25 },

  ];
  

  const emptyRow = { id: 'Loading...'};

  const rowsWithEmptyRow = loading ? [emptyRow] : promotion;


  return (
    <div style={{  width: '80%', margin: 'auto', height: "700px", marginTop: "3rem" }}>
     <Link to="/addpromotion">
      <Button sx={{
                color: "white", backgroundColor: "#253B8E", borderRadius: "8px", height: "45px",fontWeight:"bold", marginBottom: "1rem", '&:hover': {
                  backgroundColor: "#4566C1",

                }
              }}>Add promotion</Button></Link>

    <DataGrid
      rows={rowsWithEmptyRow}
      columns={commonColumns}
      pagination
      pageSize={5}
      fontSize={20}
      rowsPerPageOptions={[5, 10, 20]}
      components={{
        Toolbar: CustomToolbar, 
      }}
      sx={{
        fontSize: "17px",
        border:"none !important",
        // gap:"rem",
        color: 'white',
        '& .MuiDataGrid-root': {
          backgroundColor: 'white',
          fontFamily: "var(--main-font-family)",
          // border:"1px solid red"
          // Background color of the entire grid
        },
        '& .MuiDataGrid-columnHeader': {
          // Background color of column headers
          color: 'white',
          fontFamily: "var(--main-font-family)",
          // Text color of column headers
        },
        '& .MuiDataGrid-cell': {
          borderBottom: '1px solid #ccc', // Border between cells
          color: 'white',
          borderColor:"#7A7A7A !important",
          fontFamily: "var(--main-font-family)" // Text color of cells
        },
        '& .MuiTablePagination-root': {
          color: 'white',
          fontFamily: "var(--main-font-family)" // Text color of pagination
        },
        '& .MuiDataGrid-toolbar': {
          backgroundColor: 'white',
          fontFamily: "var(--main-font-family)" // Background color of the toolbar
        },
        '& .MuiDataGrid-toolbarContainer': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: "var(--main-font-family)"
        },
        '& .MuiButtonBase-root': {
          color: 'grey',
          fontSize: "17px",
          fontFamily: "var(--main-font-family)"// Text color for buttons in the toolbar
        },
        '& .MuiPaginationItem-icon': {
          color: 'white',
          fontFamily: "var(--main-font-family)" // Color of pagination icons
        },
      }}
    />
  </div>
  
  
  );
}
const CustomToolbar = () => {
  return (
    <GridToolbar>
      {/* Add any custom elements or styling here */}
    </GridToolbar>
  );
};