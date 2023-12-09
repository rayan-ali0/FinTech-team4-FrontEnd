
// import * as React from 'react';
import { useState,useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

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
    { field: 'id', headerName: 'Trnsaction ID', width: 70 },
    { field: 'BuyerId', headerName: 'Buyer', width: 90 },
    { field: 'SellerId', headerName: 'Seller', width: 90 },
    { field: 'amountUSD', headerName: 'USD', width: 90 },
    { field: 'amountUSDT', headerName: 'USDT', width: 90 },
    { field: 'type', headerName: 'Type', width: 90 },
    { field: 'status', headerName: 'Status', width: 90 },
    { field: 'PromotionId', headerName: 'Promotion Used', width: 90 },
    { field: 'createdAt', headerName: 'Date', width: 90 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <>
        {console.log(params)}
{params.data?(
    <>
  
      
           <DoneIcon style={{color:"green",cursor:"pointer"}} onClick={()=>{
           approveTransaction(params.data.id);
           console.log('Decline clicked:', params.data)}}>
        </DoneIcon> 
        <CloseIcon sx={{color:'red'}} onClick={()=>declineTransaction(params.data.id)}></CloseIcon>
        
            </>
)         :(
  null
)
}
</>
      ),
    },
  ]; 
   const myCustomData = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    { id: 1, name: 'John Doe', age: 25 },
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
    <>
    {!loading?
    (    <div style={{ height: 600, width: '50%', margin: 'auto', height:"400px", marginTop:"3rem" }}>
    <DataGrid
      rows={transactions}
      columns={columns}
      pagination
      pageSize={5}
      rowsPerPageOptions={[5, 10, 20]}
      components={{
        Toolbar: CustomToolbar, // Use a custom toolbar component
      }}
      sx={{
        color: 'white',
        '& .MuiDataGrid-root': {
          backgroundColor: 'white', // Background color of the entire grid
        },
        '& .MuiDataGrid-columnHeader': {
           // Background color of column headers
          color: 'white', // Text color of column headers
        },
        '& .MuiDataGrid-cell': {
          borderBottom: '1px solid #ccc', // Border between cells
          color: 'white', // Text color of cells
        },
        '& .MuiTablePagination-root': {
          color: 'white', // Text color of pagination
        },
        '& .MuiDataGrid-toolbar': {
          backgroundColor: 'white', // Background color of the toolbar
        },
        '& .MuiDataGrid-toolbarContainer': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '& .MuiButtonBase-root': {
          color: 'white', // Text color for buttons in the toolbar
        },
        '& .MuiPaginationItem-icon': {
          color: 'white', // Color of pagination icons
        },
      }}
    />
  </div>)
  :
  (
    <h1>
      loading...
    </h1>
  )
  }
    </>

  );
}
const CustomToolbar = () => {
  return (
    <GridToolbar>
      {/* Add any custom elements or styling here */}
    </GridToolbar>
  );
};