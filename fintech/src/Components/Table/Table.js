
import * as React from 'react';
import { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../../Components/Table/TableComponent.module.css'
import  {useUserContext}  from '../../Auth/UserContext';


export default function ToolbarGrid() {
  const { myUser, signin, signout } = useUserContext();

  const [transactions, setTransactions]=useState([])
  const [id, setId]=useState(myUser.id)
  const [loading, setLoading]= useState(true)
  const [role,setRole]=useState(myUser.role)

  const fetchAllTransactions= async()=>{
    try {
      const allResults =await axios.get(`${process.env.REACT_APP_PATH}/transaction/read/transactions`)
      
      if(allResults){
        setTransactions(allResults.data)
        console.log("Transactions fetched successfully:", allResults.data);
        setLoading(false)
      }
      console.log('no data')
      setLoading(false)


    } catch (error) {
      console.log('error fetching'+error.message)
      setLoading(false)

    }
  }

  const fetchTransactionsByUser=async()=>{
    try {
      const result= await axios.get(`${process.env.REACT_APP_PATH}/transaction/read/transaction/byId`,{
        params:{
            userId:myUser.id,
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
          setLoading(false)

      }

        
    } catch (error) {
      console.log('error fetching'+error.message)
      setLoading(false)

    }
  }
  React.useEffect(() => {
    if(role==="admin"){
      fetchAllTransactions()
    }else{
      fetchTransactionsByUser();

    }
  }, []);

  

  const commonColumns = [
    { field: 'id', headerName: 'ID',width:100},
    { field: 'BuyerId', headerName: 'Buyer' ,width:100,renderCell: (params) => (params.value===myUser.id? 
      <span style={{color:"grey"}}>me</span>
      :params.value|| '--')},
    { field: 'SellerId', headerName: 'Seller' , width:100,renderCell: (params) => (params.value===myUser.id? 
      <span style={{color:"grey"}}>me</span>
      :params.value|| '--') },
    { field: 'amountUSD', headerName: 'USD',width:140 , renderCell: (params) => (params.value || '--')},
    { field: 'amountUSDT', headerName: 'USDT' ,width:140, renderCell: (params) => (params.value || '--')},
    { field: 'type', headerName: 'Type' ,width:180, renderCell: (params) => (params.value || '--') },
    { field: 'status', headerName: 'Status',width:180, renderCell: (params) => (params.value?params.value==="accepted"?
    <span style={{color:"green"}} >{params.value}</span>:
    params.value==="declined"? <span style={{color:"red"}}>{params.value}</span>:
    <span style={{color:"white"}}>{params.value}</span>
    || '--':'--') },
    { field: 'Promotion', headerName: 'Promotion',width:150 , renderCell: (params) => (params.value? params.value.code || '--':'--')},
    { field: 'createdAt', headerName: 'Date' ,width:220, renderCell: (params) => (params.value?params.value.substring(0,19).replace('T',' ') || '--':'--')},
  ];
  
  let columns = role === 'merchant' ? commonColumns.filter(column => column.field !== 'SellerId') : commonColumns;


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