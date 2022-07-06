import './App.css';
import { ThemeProvider, Typography } from '@mui/material';
import { theme } from './Theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{margin:'20%'}}>
        <Typography variant='h1'>H1</Typography>
        <Typography variant='h2'>H2</Typography>
        <Typography variant='subtitle1'>subtitle1</Typography>
        <Typography variant='subtitle2'>subtitle2</Typography>
        <Typography variant='body1'>body1</Typography>
        <Typography variant='body2'>body2</Typography>
        <Typography variant='caption'>caption1</Typography>
        <Typography variant='caption2'>caption2</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;