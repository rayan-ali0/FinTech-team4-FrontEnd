
// import * as React from 'react';
import { useState,useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../../Components/Table/TableComponent.module.css'

export default function ToolbarGrid() {

  const [loading, setLoading] = useState(true)
const[transactions,setTransactions]=useState({})

  const fetchTransactions = async () => {
    await axios.get(`${process.env.REACT_APP_PATH}/transaction/read/transactions`)
      .then((res) => {
        setTransactions(res.data);
        console.log("fetchinggg")
        // console.log(res.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching Transactions:", error.message);
        setLoading(false)

      });
  }

  useEffect(() => {
    fetchTransactions()
  }
    , []
  )
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
             fetchTransactions()
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
                await fetchTransactions()
                console.log("doneee")
            }
        } catch (error) {
            console.log(error.error)
        }
    }
    

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', width: 90 },
    { field: 'BuyerId', headerName: 'userId', width: 90 },
    { field: 'BuyerId', headerName: 'userId', width: 90 },
    { field: 'BuyerId', headerName: 'userId', width: 90 },
    { field: 'BuyerId', headerName: 'userId', width: 90 },
    { field: 'BuyerId', headerName: 'userId', width: 90 },
    { field: 'BuyerId', headerName: 'userId', width: 90 },



    // Add more columns as needed
  ]; 
   const myCustomData = [
    { id: 1, name: 'abdulaziz Doe', age: 25 },
    { id: 2, name: 'Jass', age: 30 },
    { id: 1, name: 'Jossshn Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    { id: 1, name: 'Jossshn Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    { id: 1, name: 'Jossshn Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    // Add more rows as needed
  ];
  
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 10,
  //   maxColumns: 6,
  // });

  return (
    <div style={{  width: '80%', margin: 'auto', height: "700px", marginTop: "3rem" }}>
    <DataGrid
      rows={transactions}
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