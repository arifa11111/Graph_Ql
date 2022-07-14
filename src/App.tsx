import './App.css';
import { ThemeProvider} from '@mui/material';
import { theme } from './Theme';
import FindPage from './Components/Pages/FindPage';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <FindPage />
      {/* <FindJobs header={<Header />} sidepane={<Sidepane
        findPage={
        <Cards
          icons="/images/icons/hp.svg"
          job="User Experience Designer"
          company="HP"
          location="Hyderabad, Telangana, India"
          bike={true}
          bus={true}
          car={true}
          train={true}
          postedTime="1hr 36 mins ago"
          state={false}
        />
      }
      savedPage={
        <Cards
          icons="/images/icons/hp.svg"
          job="User Experience Designer"
          company="HP"
          location="Hyderabad, Telangana, India"
          bike={true}
          bus={true}
          car={true}
          train={true}
          postedTime="1hr 36 mins ago"
          state={true}
        />
      }
    />} /> */}
      
      
    </ThemeProvider>
  );
}

export default App;