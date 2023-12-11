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
import { useLocation } from 'react-router-dom';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import  {useUserContext}  from '../../Auth/UserContext';

const drawerWidth = 240;

export default function ClippedDrawer() {
  const { myUser, signin, signout } = useUserContext();

  const [ activeSide, setActiveSide]= useState('/')
  const [role,setRole]=useState(myUser.role)
console.log(myUser)
  const location=useLocation();
 

React.useEffect(()=>{
  const currentLocation= location.pathname
  setActiveSide(currentLocation)
  console.log(activeSide==="/transaction")

},[location.pathname])
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
          <ListItem disablePadding className={`${activeSide === "/" ? Style.active:""}`}  style={{width:"100%"}} >
          <Link to='/' style={{textDecoration:"none", color:"white" }}  >
            <ListItemButton key='Dashboard'   sx={{width:"125%"}} >
              
              <ListItemIcon>
                <DashboardIcon sx={{color:"white"}}/>
              </ListItemIcon>
              
              <ListItemText primary="Dashboard"/>
              
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding className={`${activeSide === "/transaction" ? Style.active:""}`}  style={{width:"100%"}}>
          <Link to='/transaction' style={{textDecoration:"none", color:"white" }}  >
            <ListItemButton key="Transaction" className={` ${activeSide === "/transaction" ?  "active":""}`}  sx={{width:"120%" }}>
              <ListItemIcon>
                <AccountBalanceWalletIcon sx={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText primary="Transactions" />
            </ListItemButton>
            </Link>
          </ListItem>
{
role==="merchant"?
(<ListItem disablePadding className={`${activeSide === "/pending" ? Style.active:""}`}  style={{width:"100%"}}>
  <Link to='/pending' style={{textDecoration:"none" , color:"white"}}>
    <ListItemButton sx={{width:"140%"}}>
      <ListItemIcon>
<PendingIcon sx={{color:"white"}} />
        {/* <CurrencyExchangeIcon  sx={{color:"white"}} /> */}
      </ListItemIcon>
      <ListItemText primary="Requests" />
    </ListItemButton>
    </Link>
  </ListItem>
  )
:
(
null
)
}
          

          <ListItem disablePadding className={`${activeSide === "/wallet" ? Style.active:""}`}  style={{width:"100%"}}>
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
          <ListItem disablePadding className={`${activeSide === "/profile" ? Style.active:""}`}  style={{width:"100%"}}>
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
        <ListItem disablePadding className={`${activeSide === "/" ? Style.active:""}`}  style={{width:"100%"}}>
        <Link to='/' style={{textDecoration:"none", color:"white", }}>
          <ListItemButton key='Dashboard' className={` ${activeSide === "Dashboard" ? Style.active:""}`} sx={{width:"125%"}} >
            
            <ListItemIcon>
              <DashboardIcon sx={{color:"white"}}/>
            </ListItemIcon>
            
            <ListItemText primary="Dashboard"/>
            
          </ListItemButton>
          </Link>
        </ListItem>

     
        <ListItem disablePadding className={`${activeSide === "/admins" ? Style.active:""}`}  style={{width:"100%"}}>
        <Link to='/admins' style={{textDecoration:"none", color:"white"}}>
          <ListItemButton sx={{width:"130%"}}>
            <ListItemIcon>
              <AdminPanelSettingsIcon  sx={{color:"white"}} />
            </ListItemIcon>
            <ListItemText primary="Admins" />
          </ListItemButton>
          </Link>
        </ListItem>
        
        <ListItem disablePadding className={`${activeSide === "/users" ? Style.active:""}`}  style={{width:"100%"}}>
        <Link to='/users' style={{textDecoration:"none", color:"white"}}>
          <ListItemButton sx={{width:"130%"}}>
            <ListItemIcon>
              <SupervisorAccountIcon  sx={{color:"white"}} />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding className={`${activeSide === "/transaction" ? Style.active:""}`}  style={{width:"100%"}}>
        <Link to='/transaction' style={{textDecoration:"none", color:"white"}}>
          <ListItemButton key="Transaction" className={` ${activeSide === "Transaction" ?  "active":""}`}  sx={{width:"120%" }}>
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
        <ListItem disablePadding className={`${activeSide === "/profile" ? Style.active:""}`}  style={{width:"100%"}}>
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