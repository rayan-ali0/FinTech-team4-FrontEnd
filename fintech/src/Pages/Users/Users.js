
import * as React from 'react';
import { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import styles from '../../Components/Table/TableComponent.module.css'
import axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';


export default function ToolbarGrid() {

  const [users, setUsers]=useState([])
  const [id, setId]=useState(5)
  const [loading, setLoading]= useState(true)
  console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")

  const fetchUsers=async()=>{
    try {
      const result= await axios.get(`${process.env.REACT_APP_PATH}/user/users`)
        if(result){
         
          setUsers(result.data)
          console.log("userss fetched successfully:", result.data);
          setLoading(false)
        }  else{
          console.log('no data')
      }

        
    } catch (error) {
      console.log('error fetching'+error.message)
      setLoading(false)
    }
  }
  React.useEffect(() => {
    fetchUsers();
  }, []);


    const deleteUser= async(id)=>{
        try {
            const res= await axios.delete(`${process.env.REACT_APP_PATH}/user/delete/${id}`)
          
            if(res.status===200){
                setLoading(true)
                await fetchUsers()
                console.log("doneee")
            }
        } catch (error) {
            console.log(error.message)
            setLoading(false)
        }
    }


  const columns = [

    { field: 'id', headerName: 'User ID', width: 203 },
    { field: 'name', headerName: 'Name', width: 203 },
    { field: 'username', headerName: 'Username', width: 203 },
    { field: 'email', headerName: 'Email', width: 203 },
    { field: 'createdAt', headerName: 'Date Signed', width: 203 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <>
          {params.row && params.row.id ? (
            <>
             
              <CloseIcon sx={{ color: 'red' ,cursor:"pointer"}} onClick={() => deleteUser(params.row.id)}></CloseIcon>
            </>
          ) : (
            null
          )}
        </>
      ),
    },
  ]    

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
  const emptyRow = { id: "Loading..."};

  const rowsWithEmptyRow = loading ? [emptyRow, ...users] : users;


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