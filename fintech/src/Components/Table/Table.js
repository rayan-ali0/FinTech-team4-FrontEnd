
import * as React from 'react';
import { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import styles from '../../Components/Table/TableComponent.module.css'
import axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';


export default function ToolbarGrid() {

  const [transactions, setTransactions]=useState([])
  const [id, setId]=useState(5)
  const [loading, setLoading]= useState(true)
  const [role,setRole]=useState('merchant')

  const fetchAllTransactions= async()=>{
    try {
      const allResults =await axios.get(`${process.env.REACT_APP_PATH}/transaction/read/transactions`)
      
      if(allResults){
        setTransactions(allResults.data)
        console.log("Transactions fetched successfully:", allResults.data);
        setLoading(false)
      }
      console.log('no data')

    } catch (error) {
      console.log('error fetching'+error.message)
    }
  }

  const fetchTransactionsByUser=async()=>{
    try {
      const result= await axios.get(`${process.env.REACT_APP_PATH}/transaction/read/transaction/byId`,{
        params:{
            userId:8,
            // status:'accepted, declined'
        }})
        if(result){
          if(role==="merchant"){
            const filteredTransactions = result.data.filter(
              transaction => transaction.status === 'accepted' || transaction.status === 'declined'
            );
            setTransactions(filteredTransactions)
            console.log("Transactions fetched successfully:", result.data);
            setLoading(false)
          }
          if(role==="user"){
    
            setTransactions(result.data)
            console.log("Transactions fetched successfully:", result.data);
            setLoading(false)
          }

       
        }  else{
          console.log('no data')
      }

        
    } catch (error) {
      console.log('error fetching'+error.message)
    }
  }
  React.useEffect(() => {
    if(role==="admin"){
      fetchAllTransactions()
    }else{
      fetchTransactionsByUser();

    }
  }, []);

  

  // const columns = [

  //   { field: 'id', headerName: 'ID', width: 70 },
  //   { field: 'name', headerName: 'Name', width: 150 },
  //   { field: 'age', headerName: 'Age', width: 90 },
  //   { field: 'BuyerId', headerName: 'userId', width: 90 },

 


  //   // Add more columns as needed
  // ]; 

  const commonColumns = [
    { field: 'id', headerName: 'ID', width: 115 },
    { field: 'BuyerId', headerName: 'Buyer', width: 115 },
    { field: 'SellerId', headerName: 'Seller', width: 115 },
    { field: 'amountUSD', headerName: 'USD', width: 115 },
    { field: 'amountUSDT', headerName: 'USDT', width: 115 },
    { field: 'type', headerName: 'Type', width: 115 },
    { field: 'status', headerName: 'Status', width: 115 },
    { field: 'PromotionId', headerName: 'Promotion Used', width: 115 },
    { field: 'createdAt', headerName: 'Date', width: 115 },
  ];
  
  const columns = role === 'merchant' ? commonColumns.filter(column => column.field !== 'SellerId') : commonColumns;
  
  const myCustomData = [
    {
      id: 0, // Use 0 as a special ID for the loading row
      name: loading ? 'Loading...' : '', // Display 'Loading...' in the name column while loading
      age: '',
      BuyerId: '',
    },
    { id: '', name: 'Abdulaziz Doe', age: 25 },

    // Add more rows as needed
  ];
  
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 10,
  //   maxColumns: 6,
  // });
  const emptyRow = { id: 0};

  const rowsWithEmptyRow = loading ? [emptyRow, ...transactions] : transactions;


  return (
    <div style={{  width: '80%', margin: 'auto', height: "700px", marginTop: "3rem" }}>
    <DataGrid
      rows={rowsWithEmptyRow}
      columns={columns}
      pagination
      pageSize={5}
      fontSize={20}
      rowsPerPageOptions={[5, 10, 20]}
      components={{
        Toolbar: CustomToolbar, // Use a custom toolbar component
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