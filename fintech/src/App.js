
import { purple } from '@mui/material/colors';
import './App.css';
import router from './Routes/Router';
import { RouterProvider } from 'react-router-dom';
import Transaction from './Components/TransactionCard/Transaction';
// import TransactionCard from './Components/TransactionCard/TransactionCard.jsx';
import { ThemeProvider, createTheme,  } from '@mui/material';
import Deposit from './Components/depositModal/Deposit';

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
      <div className='App'>
        <div className='container'>
          <RouterProvider router={router} />
        </div>
      </div>
      </ThemeProvider>   
  );
}

export default App;
