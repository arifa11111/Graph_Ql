import './App.css';
import { ThemeProvider, Typography } from '@mui/material';
import { theme } from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Green</h1>
    <div className="App" style={{ backgroundColor:theme.palette.green?.one, height:"40px" }} >
    </div>
    <div className="App" style={{ backgroundColor:theme.palette.green?.two, height:"40px" }} >
    </div>
    <div className="App" style={{ backgroundColor:theme.palette.green?.three, height:"40px" }} >
    </div>
    <div className="App" style={{ backgroundColor:theme.palette.green?.four, height:"40px" }} >
    </div>
    <div className="App" style={{ backgroundColor:theme.palette.green?.five, height:"40px" }} >
    </div>
    <h1>Black</h1>
    <div className="App" style={{ backgroundColor:theme.palette.black?.one, height:"40px" }} >
    </div>
    <div className="App" style={{ backgroundColor:theme.palette.black?.two, height:"40px" }} >
    </div>
    <div className="App" style={{ backgroundColor:theme.palette.black?.three, height:"40px" }} >
    </div>
    <h1>Gray</h1>
    <div className="App" style={{ backgroundColor:theme.palette.gray?.one, height:"40px" }} >
    </div>
    <div className="App" style={{ backgroundColor:theme.palette.gray?.two, height:"40px" }} >
    </div>
    <div className="App" style={{ backgroundColor:theme.palette.gray?.three, height:"40px" }} >
    </div>
    <h1>Accent</h1>
    <div className="App" style={{ backgroundColor:theme.palette.accent?.one, height:"40px" }} >
    </div>
    <div className="App" style={{ backgroundColor:theme.palette.accent?.two, height:"40px" }} >
    </div>
    <h1>Light</h1>
    <div className="App" style={{ backgroundColor:theme.palette.light?.one, height:"40px" }} >
    </div>
    <div className="App" style={{ backgroundColor:theme.palette.light?.two, height:"40px" }} >
    </div>
    <div className="App" style={{ backgroundColor:theme.palette.light?.three, height:"40px" }} >
    </div>
    <h1>Light Linear</h1>
    <div className="App" style={{ background:theme.palette.light?.linearOne, height:"80px" }} >
    </div>
    <div className="App" style={{ background:theme.palette.light?.linearTwo, height:"80px" }} >
    </div>
    <Typography variant='h1'>H1</Typography>
    <Typography variant='h2'>H2</Typography>
    <Typography variant='subtitle1'>subtitle1</Typography>
    <Typography variant='subtitle2'>subtitle2</Typography>
    <Typography variant='body1'>body1</Typography>
    <Typography variant='body2'>body2</Typography>
    <Typography variant='caption'>caption1</Typography>
    <Typography variant='caption2'>caption2</Typography>
    </ThemeProvider>
  );
}

export default App;