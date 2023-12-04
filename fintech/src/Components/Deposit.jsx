import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function () {

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
    </div>
  )
}
