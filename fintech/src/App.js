
import { purple } from '@mui/material/colors';
import './App.css';
import Transaction from './Components/TransactionCard/Transaction';
// import TransactionCard from './Components/TransactionCard/TransactionCard.jsx';
import { ThemeProvider, createTheme,  } from '@mui/material';

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
      <div>
        <Transaction/>
      </div>
      </ThemeProvider>
   
  );
}

export default App;
