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
import rupee from "../../../images/icons/rupee.svg";
import "./Description.css";
import { ArrowForwardOutlined } from "@mui/icons-material";
import { ButtonComponent } from "../../Atoms/Buttons/Button";
import { useState } from "react";
import back from "../../../images/icons/back.svg"
import {Location} from "../../Molecules/LocationDescription/index"
import {OlaCard} from "../../Molecules/Ola/index"
import Image from "../../Molecules/MapView/Map";
import MapView from "../../../images/icons/mapview.svg"
import greyRupee from "../../../images/icons/greyrupee.svg"

interface descProps{
    icon?:string,
    title?:string,
    company?:string,
    address?:string,
    lastUpadate?:string,
    isSaved?:string,
    handleSave?:()=>void
}

export const DescCard = (props:descProps) =>{
    const [changediv,setChangediv] = useState(1)
    const [routes,setRoutes] = useState(1)
    return(
        <Grid className="box1">
         <Grid className="innerDiv"> 
            <Grid className="grid1">
                <div style={{transform:'translate(-7px,11px'}}><Icons source={props.icon} height={'45px'} width={'45px'}  /></div>
                <Box className="details" >
                <div className="title">{props.title}</div>
                    <div className="font3">{props.company}</div>
                    <div className="font3">{props.address}</div>
                    <div className="font2">{props.lastUpadate}</div>
                    <Box className="btnBox">
                        <div><ButtonComponent label={props.isSaved}  variant={'outlined'} 
                                    // onClick={()=>{props.isSaved==="save" ? props.isSaved="Saved" : props.isSaved="Save"}} 
                                    style={{
                                        width:'92px',height:'32px',color:theme.palette.green?.three,
                                        fontFamily: theme.typography.body1.fontFamily,
                                        fontStyle: 'normal',textTransform: 'none',
                                        borderColor: theme.palette.green?.three,
                                        fontWeight: '700px',fontSize: '12px',
                                        lineHeight: '16px',borderRadius: '8px', }}/></div>
                       <div className="applyBtn">
                             <ButtonComponent   label={"Apply"} variant={'contained'} classing={'next'}
                                     style={{
                                        fontSize: '12px',fontWeight: '700px',
                                        lineHeight: '16px',fontFamily: theme.typography.body1.fontFamily,
                                        fontStyle: 'normal',textTransform: 'none',
                                        width: '92px',backgroundColor:theme.palette.green?.six,
                                        height: '32px',borderRadius: '8px',boxShadow:'none', }}
                                    /></div>
                    </Box>
                </Box>
                <Box style={{height:'20px',paddingLeft:'30px',transform:'translateX(10px)'}}><Icons source={more} height={'20px'} width={'20px'} /></Box>
            </Grid>
        <hr className="hr" />
             { changediv ? (<Grid className="grid2" data-testid="text" >
                <div>
                    <Typography variant='body1' id='h4'> Description</Typography>
                    <Typography variant='body2' id='p'>Open Text is seeking a talented, 
                        personable interaction designer who can assist the User Experience Design team 
                        by working with other designers and development teams on a variety of projects. 
                        The OpenText User Experience Design group is a distributed multi-disciplinary 
                        team of professionals that are responsible for enhancing the UX of the 
                        company’s collective product suites worldwide.</Typography>
                    <Typography variant='body1'id='h4' >About the Company</Typography>
                    <Typography variant='body2' id='p'>High level of proficiency with leading UX Design software packages,
                         such as Axure, Sketch, InVision, or Experience Design including 
                         the core Adobe Creative Suite products.</Typography>
                    <Typography variant='body2'  id='p'>Excellent written and oral communication and presentation skills  <span id='seemore'>SEE MORE</span> </Typography></div>
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
                        <Typography variant='body2' style={{paddingTop:'28px'}}>Catch a blue line metro towards Raidurg</Typography>
                        {routes ? ( <><Box className='hrs'><div style={{transform:'translate(10px,1px)'}}><Icons source={greyRupee} height={'9px'} width={'10px'} /> </div>100 <span className='dot'></span>25 Kms<span ></span>1 hr 20 mins</Box>
                                        <Box className='cards'>
                                            <OlaCard Icon={ola} /><OlaCard Icon={uber} /><OlaCard Icon={rapido} /></Box></>)
                                 : (<>
                                    <Box className='hrs'><div style={{transform:'translate(10px,1px)'}}><Icons source={greyRupee} height={'9px'} width={'10px'} /> </div>100 <span className='dot'></span>25 Kms<span className='dot'></span>1 hr 20 mins</Box>                     
                                     <Box sx={{paddingTop:'10px'}}><Image src={MapView} width={361} height={147}  />
                                         <Typography variant='caption' sx={{color:theme.palette.green?.six,wordSpacing:'1px'}}>View in Google Maps</Typography> </Box></>
                                 )}
                    </Grid>
                ) }                                
            </Grid>                 
        </Grid>
)}


