import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Styles from './Styles.module.css'

export default function () {

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];

    const [open,setOpen] = useState(false);
    const handleOpen = ()=>{
        setOpen(!open)
    }

    const handleClose = ()=>{
        setOpen(!open)
    }

    const style={
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "#2196f3",
        borderRadius: 5,
        boxShadow: 24,
        p: 4,

    }

  return (
    <div>
        <Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
   <p>hello babies</p>
  </Box>
</Modal>

<DataGrid
  rows={rows}
//   style={{backgroundColor: "#fff"}}
  className={Styles.table}
  columns={columns}
  initialState={{
    pagination: {
      paginationModel: { page: 0, pageSize: 5 },
    },
  }}
  pageSizeOptions={[5, 10]}
  checkboxSelection
/>
    </div>
  )
}
