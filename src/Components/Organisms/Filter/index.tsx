import { Box, Button, Grid, Typography } from '@mui/material'
import { CustomizedRadios } from '../../Molecules/RadioButtonText'
import "./index.css"
import closeIcon from "../../../images/icons/close.svg"
import { Icons } from '../../Atoms/IconsAtom'
import { theme } from '../../../Theme'
import React from 'react'
import { FilterList } from '../../Molecules/FilterList'
import { datePosted, distance, experienceLevel, jobType, transport } from '../../../Data/Cities'

export interface filterProps {

}let arrayValue: string[] = [];
const storeLabel = (e: React.SyntheticEvent) => {
    if ((e.target as HTMLInputElement).checked) {
        arrayValue.push((e.target as HTMLInputElement).value)
    }
    else {
        arrayValue = arrayValue.filter(val => val !== (e.target as HTMLInputElement).value);
    }
}
export const Filter = () => {

    return (
        <Box className="outerBox">
            <Box className="innerBox" >
                <div style={{ display: "flex", justifyContent: "end" }}><Icons source={closeIcon} height={"30px"} /></div>


                <Grid style={{ maxWidth: '498px' }} container >

                    <FilterList title={distance[0]} onChange={storeLabel} labelArray={distance.slice(1)} />
                    <FilterList title={datePosted[0]} onChange={storeLabel} labelArray={datePosted.slice(1)} />

                    <Grid className="tableDimensions">
                        <Typography>{"Green Commute"}</Typography>
                        <div style={{ marginLeft: "5px" }}>
                            <CustomizedRadios label1={"Yes"} label2={"No"} />
                        </div>
                    </Grid>

                    <FilterList title={jobType[0]} onChange={storeLabel} labelArray={jobType.slice(1)} />
                    <FilterList title={experienceLevel[0]} onChange={storeLabel} labelArray={experienceLevel.slice(1)} />
                    <FilterList title={transport[0]} onChange={storeLabel} labelArray={transport.slice(1)} />

                </Grid>
                <div style={{ display: "flex", justifyContent: "end" }}>
                    <Typography sx={{ marginTop: "40px", color: theme.palette.green?.three, fontFamily: theme.typography.caption }}>Clear All</Typography>
                    <Button style={{ marginLeft: "25px", marginTop: "39px", backgroundColor: theme.palette.green?.three, textTransform: "none", width: "101px", height: "32px" }} variant='contained' ><Typography variant="caption">Apply</Typography></Button>
                </div>
            </Box>
        </Box>


    )
}


