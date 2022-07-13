import { Box, styled, TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import { ReactComponent as Work } from "../../../images/icons/work.svg"
import { ReactComponent as LocationIcon } from "../../../images/icons/searchJobLocation.svg"
import { ReactComponent as SearchIcon } from "../../../images/icons/search.svg"
import { ButtonComponent } from '../../Atoms/Buttons/Button';
import "./index.css";

interface searchProps {
  skills: readonly unknown[],
  locations: readonly unknown[];
}

export const SearchJob = (props: searchProps) => {

  return (
    <div style={{backgroundColor:"#E5E5E5",height:"100vh"}}>

    <OverallBox data-testid='searchJob'>
      <InnerBox>
        <Work style={{marginLeft:"15px"}}/>
        <Autocomplete fullWidth freeSolo
          options={props.skills}
          data-testid='skill'
          renderInput={(params) => <SearchField sx={{marginLeft:"10px"}} placeholder='Search Skills' {...params} />}
        />
      </InnerBox>
      <LocationIcon className="locationIconInFilter"/>
      <Autocomplete fullWidth freeSolo
        options={props.locations}
        disableClearable
        data-testid='location'
        renderInput={(params) => <SearchField sx={{marginLeft:"50px"}} placeholder='Location' {...params} />}
      />
      <ButtonComponent variant='contained' classing="iconBtn" style={{height:"40px",width:"40px",marginRight:"6px" }} startIcon={<div style={{ paddingLeft: '10px', paddingTop: '10px'}}><SearchIcon /></div>} />
    </OverallBox>
    </div>
  )
}

const InnerBox = styled(Box)({
  width: '100%',
  borderRight: '1px solid',
  borderColor: "#D6D6D6",
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  marginLeft: '15px',
  marginRight: '10px',
});
const OverallBox = styled(Box)({
  height: '50px',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  borderRadius:"32px",
  backgroundColor:"white"
});
const SearchField = styled(TextField)({
  width: '100%',
  border: '0px',

  '& .MuiInput-underline:before': {
    borderBottom: '2px solid white',
    transition: 'none ',
  },
  '& .MuiInput-underline:hover': {
    borderBottom: 'none',
    transition: 'none ',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
    transition: 'none ',
  },
  //to change the border-color of textfield
  '& .MuiOutlinedInput-root': {
    '& > fieldset': { border: '0px' },
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    borderColor: "#D6D6D6",
    '& > fieldset': { border: '0px' },
  },
});
