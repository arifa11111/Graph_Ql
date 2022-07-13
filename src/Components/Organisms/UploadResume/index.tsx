import { Box, Grid, Modal} from "@mui/material";
import {theme} from "../../../Theme/index";
import { Icons } from "../../Atoms/IconsAtom";
import closeIcon from "../../../images/icons/close.svg";
import "./index.css"
import { ButtonComponent } from "../../Atoms/Buttons/Button";
import { useState } from "react";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
}


export const Upload = () =>{
    const [open, setOpen] = useState(false)
    
    return(
        <>
         <ButtonComponent variant='outlined' classing='save' 
                        label={'Save'} onClick={()=>setOpen(true)} 
                        style={{borderColor: theme.palette.green?.three,borderRadius: '8px',}} />
         <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description" >
                <Grid item className="boxresume" sx={style}>
                    <div className="fileText"> File Upload </div>
                    <div className="closer" >
                            <Icons source={closeIcon} height={"24px"} width={"24px"} onClick={()=> setOpen(false) } data-testid="icon" />    
                    </div>
                    <Box className="greenBox">
                        <Box>
                            <ButtonComponent label={'Click Here to Upload Files'} classing='next' variant='contained'
                                onClick={()=>{document?.getElementById('getFile')?.click()}}
                                style={{
                                        backgroundColor:theme.palette.green?.six,
                                        fontSize: "12px",fontWeight: 700,
                                        lineHeight: "16px",width:"281px",
                                        height:"40px",borderRadius:"8px",
                                        color:"white",textTransform:'none',
                                }}  />  
                            <input type="file"  id="getFile" data-testid="file" style={{display:'none'}}  onChange={()=> setOpen(false)} />
                        </Box>
                    </Box>
                </Grid >
            </Modal> </>
)}



