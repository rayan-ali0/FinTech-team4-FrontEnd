import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Style from './sidebar.module.css'
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WalletIcon from '@mui/icons-material/Wallet';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import './sidebar.module.css';
import {Link} from "react-router-dom"
import { useState } from 'react';
import { flushSync } from 'react-dom';
import PendingIcon from '@mui/icons-material/Pending';


const drawerWidth = 240;

export default function ClippedDrawer() {
  const [ activeSide, setActiveSide]= useState("Dashboard")
  const [role,setRole]=useState('user')
  const handleClick=(filter)=>{
    setActiveSide(filter)
    // flushSync(()=>{
    //   setActiveSide(filter)
    // })
  }

  return (
    <>
    {role!=="admin"?
    
    (    <Box className={Style.box} sx={{ display: 'flex' }}>
    <CssBaseline />
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#0C0E2E',
        },
      }}
    >
      <Toolbar>
        <div style={{  width: '100%', height: '50%', display: 'flex',margin:"20px auto", alignItems: 'center',padding:"0px", justifyContent: 'center', marginLeft:"-10px", color:"#a0a9a2", fontFamily:"Rubik, sans-serif" , fontSize:"25px",fontWeight:"bold"}}>
          Digital Wallet
        </div>
      </Toolbar>
      <Box sx={{ overflow: 'auto', flexDirection: 'column' }}>
        <List sx={{ display: "flex", flexDirection: "column", gap: '1rem', color:"white" , }}>
          <ListItem disablePadding>
          <Link to='/' style={{textDecoration:"none", color:"white", }}>
            <ListItemButton key='Dashboard' className={`${Style.activee} ${activeSide === "Dashboard" ? Style.active:""}`} onClick={()=> handleClick('Dashboard')} sx={{width:"125%"}} >
              
              <ListItemIcon>
                <DashboardIcon sx={{color:"white"}}/>
              </ListItemIcon>
              
              <ListItemText primary="Dashboard"/>
              
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
          <Link to='transaction' style={{textDecoration:"none", color:"white"}}>
            <ListItemButton key="Transaction" className={`${Style.activee} ${activeSide === "Transaction" ?  "active":""}`} onClick={()=> handleClick('Transaction')} sx={{width:"120%" }}>
              <ListItemIcon>
                <AccountBalanceWalletIcon sx={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText primary="Transactions" />
            </ListItemButton>
            </Link>
          </ListItem>
{
role==="merchant"?
(<ListItem disablePadding>
  <Link to='/pending' style={{textDecoration:"none" , color:"white"}}>
    <ListItemButton sx={{width:"140%"}}>
      <ListItemIcon>
<PendingIcon sx={{color:"white"}} />
        {/* <CurrencyExchangeIcon  sx={{color:"white"}} /> */}
      </ListItemIcon>
      <ListItemText primary="Requests" />
    </ListItemButton>
    </Link>
  </ListItem>)
:
(<ListItem disablePadding>
  <Link to='/transfer' style={{textDecoration:"none" , color:"white"}}>
    <ListItemButton sx={{width:"140%"}}>
      <ListItemIcon>
        <CurrencyExchangeIcon  sx={{color:"white"}}/>
      </ListItemIcon>
      <ListItemText primary="Transfer" />
    </ListItemButton>
    </Link>
  </ListItem>)
}
          

          <ListItem disablePadding>
          <Link to='/wallet' style={{textDecoration:"none", color:"white"}}>
            <ListItemButton sx={{width:"130%"}}>
              <ListItemIcon>
                <WalletIcon  sx={{color:"white"}} />
              </ListItemIcon>
              <ListItemText primary="My Wallet" />
            </ListItemButton>
            </Link>
          </ListItem>
        </List>

        <Divider />

        <List sx={{ display: "flex", flexDirection: "column", gap: '1rem' }}>
          <ListItem disablePadding>
          <Link to='/profile' style={{textDecoration:"none", color:"white"}}>
            <ListItemButton sx={{width:"150%"}}>
              <ListItemIcon>
                <ManageAccountsIcon  sx={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  </Box>)
  :


  (  
    
    
    <Box className={Style.box} sx={{ display: 'flex' }}>
  <CssBaseline />
  <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: '#0C0E2E',
      },
    }}
  >
    <Toolbar>
      <div style={{  width: '100%', height: '50%', display: 'flex',margin:"20px auto", alignItems: 'center',padding:"0px", justifyContent: 'center', marginLeft:"-10px", color:"#a0a9a2", fontFamily:"Rubik, sans-serif" , fontSize:"25px",fontWeight:"bold"}}>
        Digital Wallet
      </div>
    </Toolbar>
    <Box sx={{ overflow: 'auto', flexDirection: 'column' }}>
      <List sx={{ display: "flex", flexDirection: "column", gap: '1rem', color:"white" , }}>
        <ListItem disablePadding>
        <Link to='/' style={{textDecoration:"none", color:"white", }}>
          <ListItemButton key='Dashboard' className={`${Style.activee} ${activeSide === "Dashboard" ? Style.active:""}`} onClick={()=> handleClick('Dashboard')} sx={{width:"125%"}} >
            
            <ListItemIcon>
              <DashboardIcon sx={{color:"white"}}/>
            </ListItemIcon>
            
            <ListItemText primary="Dashboard"/>
            
          </ListItemButton>
          </Link>
        </ListItem>

     
        <ListItem disablePadding>
        <Link to='/admins' style={{textDecoration:"none", color:"white"}}>
          <ListItemButton sx={{width:"130%"}}>
            <ListItemIcon>
              <WalletIcon  sx={{color:"white"}} />
            </ListItemIcon>
            <ListItemText primary="Admins" />
          </ListItemButton>
          </Link>
        </ListItem>
        
        <ListItem disablePadding>
        <Link to='/users' style={{textDecoration:"none", color:"white"}}>
          <ListItemButton sx={{width:"130%"}}>
            <ListItemIcon>
              <WalletIcon  sx={{color:"white"}} />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding>
        <Link to='/transaction' style={{textDecoration:"none", color:"white"}}>
          <ListItemButton key="Transaction" className={`${Style.activee} ${activeSide === "Transaction" ?  "active":""}`} onClick={()=> handleClick('Transaction')} sx={{width:"120%" }}>
            <ListItemIcon>
              <AccountBalanceWalletIcon sx={{color:"white"}}/>
            </ListItemIcon>
            <ListItemText primary="Transactions" />
          </ListItemButton>
          </Link>
        </ListItem>

      </List>

      <Divider />

      <List sx={{ display: "flex", flexDirection: "column", gap: '1rem' }}>
        <ListItem disablePadding>
        <Link to='/profile' style={{textDecoration:"none", color:"white"}}>
          <ListItemButton sx={{width:"150%"}}>
            <ListItemIcon>
              <ManageAccountsIcon  sx={{color:"white"}}/>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  </Drawer>
</Box>)}
    </>

  );
}