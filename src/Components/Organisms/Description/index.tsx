import { Grid,Box, Typography, Divider} from "@mui/material"
import { Icons } from "../../Atoms/IconsAtom"
import {theme} from "../../../Theme/index"
import more from "../../../images/icons/more.svg";
import {ReactComponent as Bike} from "../../../images/icons/bike.svg";
import {ReactComponent as Bus} from "../../../images/icons/bus.svg";
import {ReactComponent as Car} from "../../../images/icons/car.svg";
import {ReactComponent as Train} from "../../../images/icons/train.svg";
import ola from "../../../images/icons/ola.svg";
import rapido from "../../../images/icons/rapido.svg";
import uber from "../../../images/icons/uber.svg";
import "./Description.css";
import { ArrowForwardOutlined } from "@mui/icons-material";
import { ButtonComponent } from "../../Atoms/Buttons/Button";
import { useState } from "react";
import back from "../../../images/icons/back.svg"
import {Location} from "../../Molecules/LocationDescription/index"
import {OlaCard} from "../../Molecules/Ola/index"
import Image from "../../Molecules/MapView/Map"
import MapView from "../../../images/icons/mapview.svg"
import greyRupee from "../../../images/icons/greyrupee.svg"
import { Upload } from "../UploadResume"
import {title,description,company,skills,metro,cabDetails} from "../../../Data/Cities"

export interface descProps{
    icon?:string,
    title?:string,
    company?:string,
    address?:string,
    postedTime?:string,
    isSaved?:string,
    handleSave?:()=>void
}

export const DescCard = (props:descProps) =>{
    const [changediv,setChangediv] = useState(1)
    const [routes,setRoutes] = useState(1)
    const [buttonText, setButtonText] = useState('UnSave')
    function savingFunc(){
        buttonText === "UnSave"? setButtonText("Save"):setButtonText("UnSave")
    }
    
    return(
        <Grid className="box1">
         <Grid className="innerDiv"> 
            <Grid className="grid1">
                <div style={{transform:'translate(-7px,11px'}}><Icons source={props.icon} height={'45px'} width={'45px'}  /></div>
                <Box className="details" >
                <Typography variant='subtitle1' sx={{letterSpacing:'0em'}}>{props.title}</Typography>
                    <Typography variant='caption2' sx={{color:theme.palette.black?.two}}>{props.company}</Typography>
                    <Typography variant='caption2' sx={{color:theme.palette.black?.two}}>{props.address}</Typography>
                    <Typography variant='caption' sx={{letterSpacing:'0em'}} >{props.postedTime}</Typography>
                    <Box className="btnBox">
                        <div><ButtonComponent variant='outlined' classing='save' 
                                label={buttonText}  onClick={savingFunc}
                                style={{borderColor: theme.palette.green?.three,borderRadius:'8px',
                                        textTransform:'none',fontSize:'12px',color:theme.palette.green?.three}} /></div>
                       <div className="applyBtn" > <Upload/> </div>
                    </Box>
                </Box>
                <Box sx={{height:'20px',paddingLeft:'30px',transform:'translateX(10px)'}}><Icons source={more} height={'20px'} width={'20px'} /></Box>
            </Grid>
        <hr className="hr" />
             { changediv ? (<Grid className="grid2" data-testid="text" >
                <div>
                    <Typography variant='body1' id='h44'> {title[0]}</Typography>
                    <Typography variant='body2' id='p'>{description[0]}</Typography>
                    <Typography variant='body1'id='h4' >{title[1]}</Typography>
                    <Typography variant='body2' id='p'>{company[0]}</Typography>
                    <Typography variant='body2'  id='p'>{skills[0]}<span id='seemore'>SEE MORE</span> </Typography></div>
                   <ButtonComponent variant="contained" label={'Green Commute Routes'} 
                                        endIcon={<ArrowForwardOutlined  />}
                                        onClick={()=>setChangediv(0)}
                                        style={{
                                                width: '404px',boxShadow:'0px -2px 8px rgba(125, 125, 125, 0.12)',
                                                height:'64px',fontWeight: '600px',
                                                fontSize: '16px',lineHeight: '24px',
                                                background: theme.palette.light?.four,
                                                color:  '#30A193',textTransform:'none',
                                                transform:'translate(-22.2px,26px)',
                                                borderRadius: '0px 0px 12px 12px' }} />
                </Grid> ) : (
                    <Grid className="routes">
                        <Box sx={{display:'flex'}}><Icons source={back} width={'24px'} height={'24px'} onClick={()=>setChangediv(1)} />
                            <Typography variant='body1' sx={{paddingLeft:'5px'}}>Common Routes </Typography> </Box>
                        <Box sx={{paddingTop:'10px'}}><Location /> </Box>
                        <Box className='icons'>
                            <div id='icon'><Bike width={'19px'} height={'20px'}  /></div>
                            <div id={routes === 1 ? "icon" : "icon-active"} onClick={()=>setRoutes(0)} ><Bus width={'20px'} height={'19px'}  /></div>
                            <div id={routes === 0 ? "icon" : "icon-active"} onClick={()=>setRoutes(1)} ><Car width={'20px'} height={'18px'}  /></div>
                            <div id='icon'><Train width={'19px'} height={'19px'} /></div>
                        </Box>
                        <Divider />
                        <Typography variant='body2' sx={{paddingTop:'28px'}}>{metro[0]}</Typography>

                        {routes ? ( <><Box className='hrs'><Box sx={{transform:'translate(10px,1px)'}}><Icons source={greyRupee} height={'9px'} width={'10px'} /></Box>
                                                {cabDetails[0]}<span className='dot'></span>{cabDetails[1]}<span ></span>{cabDetails[2]}</Box>
                                        <Box className='cards'>
                                            <OlaCard Icon={ola} /><OlaCard Icon={uber} /><OlaCard Icon={rapido} /></Box></>)
                                 : (<>
                                    <Box className='hrs'><Box sx={{transform:'translate(10px,1px)'}}><Icons source={greyRupee} height={'9px'} width={'10px'} /> </Box>
                                                {cabDetails[0]}<span className='dot'></span>{cabDetails[1]}<span className='dot'></span>{cabDetails[2]}</Box>                     

                                     <Box sx={{paddingTop:'10px'}}><Image src={MapView} width={361} height={147}  />
                                         <Typography variant='caption' sx={{color:theme.palette.green?.six,wordSpacing:'1px'}}>View in Google Maps</Typography> </Box></> )}
                    </Grid>
                ) }                                
            </Grid>                 
        </Grid>
)}


