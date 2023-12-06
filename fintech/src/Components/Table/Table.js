
import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function ToolbarGrid() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', width: 90 },
    { field: 'BuyerId', headerName: 'userId', width: 90 },
    // Add more columns as needed
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
    <div style={{ height: 600, width: '50%', margin: 'auto', height:"400px", marginTop:"3rem" }}>
    <DataGrid
      rows={myCustomData}
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