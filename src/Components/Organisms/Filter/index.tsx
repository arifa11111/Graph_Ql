import { Box, Button, Fade, Grid, Modal, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import "./index.css"
import closeIcon from "../../../images/icons/close.svg"
import { theme } from '../../../Theme'
import React, { useState } from 'react'
import { ReactComponent as FilterIcon } from "../../../images/icons/filter.svg"
import { CustomizedRadios } from '../../Molecules/RadioButtonText';
import { datePosted, distance, experienceLevel, jobType, transport } from '../../../Data/Cities';
import { ButtonComponent } from '../../Atoms/Buttons/Button';
import { FilterList } from '../../Molecules/FilterList';
import Chips from '../../Atoms/Chips';
import { Icons } from '../../Atoms/IconsAtom';

export interface FilterProps {

}
let arrayValue: string[] = [];
arrayValue.push("Green Commute Routes")
const storeLabel = (e: React.SyntheticEvent) => {

  if ((e.target as HTMLInputElement).checked) {
    if ((e.target as HTMLInputElement).value == "yes") {
      if (arrayValue.map(each => each !== "Green Commute Routes")) {
        arrayValue.push("Green Commute Routes")
      }
    }
    else if ((e.target as HTMLInputElement).value == "no") {
      arrayValue = arrayValue.filter(val => val !== "Green Commute Routes");
    }
    else {
      arrayValue.push((e.target as HTMLInputElement).value)
    }

  }
  else {
    arrayValue = arrayValue.filter(val => val !== (e.target as HTMLInputElement).value);
  }
  console.log(arrayValue)
}

export const Filter = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [fooKey, setFooKey] = useState(1)

  const resetFilter = () => {
    setFooKey(fooKey + 1);
    arrayValue = []
    console.log(arrayValue)
  }
  return (
    <Box data-testid="FilterTestId" sx={{width: '0px',transform:'translate(75px, 6px)'}}>
      <ButtonComponent variant="contained" startIcon={<FilterIcon />} onClick={handleOpen} label="Filter" style={{
        width: '137px',
        height: '56px',
        fontWeight: '500px',
        fontSize: '14px',
        color: "black",
        lineHeight: '22px',
        marginLeft:'11px',
        backgroundColor: theme.palette.light?.four,
        borderRadius: '32px',
        textTransform: 'none',
        fontFamily: theme.typography.body1.fontFamily
      }}></ButtonComponent>

      <Box className='filterBox ' sx={{transform:'translate(-123.5%,116%)'}}>
        <ChipBox>
          {arrayValue.map((item, key) => <Chips onDelete={() => console.log("deleted")} key={key} label={item} size="small" sx={{ backgroundColor: "white", borderRadius: "8px", marginLeft: "8px", height: "32px", marginTop: "8px" }} />)}
        </ChipBox>
        { arrayValue[0] != null &&  <Typography className='clearText' onClick={resetFilter} sx={{
          width: "70px", height: "22px", paddingTop: "1%",
          fontWeight: theme.typography.body1.fontWeight,
          fontFamily: theme.typography.body1.fontFamily, cursor: "pointer", color: theme.palette.green?.three
        }}>{"Clear All"}
        </Typography>}
      </Box>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <form key={fooKey}>

            <Box className="innerBox" >
              <div style={{ display: "flex", justifyContent: "end" }}><Icons onClick={handleClose} style={{ cursor: "pointer" }} source={closeIcon} height={"25px"} /></div>


              <Grid style={{ maxWidth: '498px' }} container >

                <FilterList title={distance[0]} onChange={storeLabel} labelArray={distance.slice(1)} />
                <FilterList title={datePosted[0]} onChange={storeLabel} labelArray={datePosted.slice(1)} />

                <Grid className="tableDimensions">
                  <Typography variant="body1" fontFamily={theme.typography.body1.fontFamily} fontWeight={theme.typography.body1.fontWeight}>{"Green Commute"}</Typography>
                  <div style={{ marginLeft: "5px" }}>
                    <CustomizedRadios onChange={storeLabel} label1={"Yes"} label2={"No"} />
                  </div>
                </Grid>

                <FilterList title={jobType[0]} onChange={storeLabel} labelArray={jobType.slice(1)} />
                <FilterList title={experienceLevel[0]} onChange={storeLabel} labelArray={experienceLevel.slice(1)} />
                <FilterList title={transport[0]} onChange={storeLabel} labelArray={transport.slice(1)} />

              </Grid>
              <div style={{ display: "flex", justifyContent: "end", paddingBottom: "0px" }}>

                <Typography onClick={resetFilter} sx={{
                  fontWeight: theme.typography.body1.fontWeight,
                  fontFamily: theme.typography.body1.fontFamily, cursor: "pointer", marginTop: "35px", color: theme.palette.green?.three
                }}>{"Clear All"}
                </Typography>

                <Button onClick={handleClose} style={{ marginLeft: "25px", marginTop: "25px", backgroundColor: theme.palette.green?.six, textTransform: "none", width: "101px", height: "32px" }} variant='contained' >
                  <Typography variant="caption" sx={{ fontFamily: theme.typography.body1.fontFamily, fontWeight: theme.typography.caption.fontWeight }}>{"Apply"}</Typography>
                </Button>
              </div>
            </Box>
          </form>
        </Fade>
      </Modal>
    </Box>
  );
}
const style = {
  backgroundColor: "#FFFFFF",
  maxWidth: "546px",
};

const ChipBox = styled(Box)({
  width: "469px",
  height: "72px",
});



