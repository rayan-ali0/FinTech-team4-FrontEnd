
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
      <UserProvider>
      <div className='App'>
        <div className='container'>
          <RouterProvider router={router} />
        </div>
      </div>
        </UserProvider>
      </ThemeProvider>   
  );
}

export default App;
