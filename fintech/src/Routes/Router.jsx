import Navbar from "../Components/navBar/NavBar"
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
import styles from './Router.module.css'
import NotFound from '../Pages/NotFound'
import NotAuthorized from "../Pages/NotAuthorized"
const Layout =()=>{
    return(
    // <>
    // <Navbar />
    // <Outlet />
    // <Sidebar />
    // </>
       <div className={styles.bodyHolder}>
       <Sidebar />
        <div className={styles.pageHolder}>
            <div className={styles.navHolder}>
            <Navbar  />
            </div>
            <div className={styles.componentHolder}>
            <Outlet />

            </div>
       
        </div>
       
       {/* <Sidebar /> */}
       </div>
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
        {
            path:'/*',
            element:<NotFound />
        },
        {
            path:'/au',
            element:<NotAuthorized />
        },
    
    
  ])

  export default router;