
import { purple } from '@mui/material/colors';
import './App.css';
import router from './Routes/Router';
import { RouterProvider } from 'react-router-dom';
import Transaction from './Components/TransactionCard/Transaction';
// import TransactionCard from './Components/TransactionCard/TransactionCard.jsx';
import { ThemeProvider, createTheme,  } from '@mui/material';
import Deposit from './Components/depositModal/Deposit';
import { UserProvider } from './Auth/UserContext.js';

function App() {

  const theme = createTheme({
    palette:{
      primary:{
        main: "rgba(255,255,255,0.2)",
        
      },
      secondary:{ 
        main: "#110A3A"
      },
    }
  })
  return (
    <ThemeProvider theme={theme}>
      {/* <RouterProvider router={router}> */}
      <UserProvider>
      <div className='App'>
        <div className='container'>
          <RouterProvider router={router} />
        </div>
      </div>
        </UserProvider>
        {/* </RouterProvider> */}
      </ThemeProvider>   
  );
}

export default App;


{/* <ThemeProvider theme={theme}>
<BrowserRouter>
<UserProvider>

<Routes>
  <Route path="/signin" element={< Signin/>} />
  <Route path="/signup" element={<Signup />} />
  <Route element={<PrivateRoute />}>
  <Route path="/" element={<Overview />} />
  <Route path="/profile" element={<Profile />} />
  </Route>
</Routes>

  </UserProvider>
  </BrowserRouter>
</ThemeProvider>   */}