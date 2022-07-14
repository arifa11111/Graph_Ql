import './App.css';
import { ThemeProvider} from '@mui/material';
import { theme } from './Theme';
import LandingUI from "./Components/Pages/LandingUI";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <LandingUI />
    

    </ThemeProvider>
  );
}

export default App;