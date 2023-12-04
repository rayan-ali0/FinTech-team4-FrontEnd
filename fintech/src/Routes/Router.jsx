import Navbar from '../Components/Navbar'
import Sidebar from '../Components/sidebar/Sidebar'
import Overview from '../Pages/Overview/Overview'
import Profile from '../Pages/Profile/Profile'
import Signin from '../Pages/Signin/Signin'
import Signup from '../Pages/Signup/Signup'
// import Transaction from '../Pages/Transactions/Transaction'
// import TransferHistory from '../Pages/TransferHistory/TransferHistory'
// import Users from '../Pages/Users/Users'
import Wallet from '../Pages/Wallet/WalletPage'
// import Withdraw from '../Pages/Withdraw/Withdraw'
import { createBrowserRouter, Outlet, } from "react-router-dom";


const Layout =()=>{
    return(
    <>
    <Navbar />
    <Outlet />
    <Sidebar />
    </>
    )
  }
  const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        children:[
            {
                path:"/",
                element:<Overview />
            },
            {
                path:'/profile',
                element:<Profile />
            },
         
            // {
            //     path:'/transaction',
            //     element:<Transaction />
            // },
            // {
            //     path:'/transferhistory',
            //     element:<TransferHistory />
            // },
            // {
            //     path:'/users',
            //     element:<Users />
            // },
            {
                path:'/wallet',
                element:<Wallet />
            },
            // {
            //     path:'/withdraw',
            //     element:<Withdraw />
            // },

        ]
    },
    
        {
            path:'/signin',
            element:<Signin />
        },
        {
            path:'/signup',
            element:<Signup />
        },
    
    
  ])

  export default router;