import { Box, Grid, Modal} from "@mui/material";
import {theme} from "../../../Theme/index";
import { Icons } from "../../Atoms/IconsAtom";
import closeIcon from "../../../images/icons/close.svg";
import "./index.css"
import { ButtonComponent } from "../../Atoms/Buttons/Button";
import { useState } from "react";
import { UploadSuccess } from "../UploadSuccess";

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
    const [success,setSuccess] = useState(false)
    const handleClick = () => {
        setOpen(false)
        setSuccess(true)
    }
    return(
        <>
        {success && <UploadSuccess />}
         <ButtonComponent label={"Apply"} variant={'contained'} classing={'next'} onClick={()=>setOpen(true)}  style={{
                                    fontSize: '12px',fontWeight: '700px',
                                    lineHeight: '16px',fontFamily: theme.typography.body1.fontFamily,
                                    fontStyle: 'normal',textTransform: 'none',
                                    width: '92px',backgroundColor:theme.palette.green?.six,
                                    height: '32px',borderRadius: '8px',boxShadow:'none',  }} />
         <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description" >
                <Grid item className="boxresume" sx={style}>
                    <div className="fileText"> File Upload </div>
                    <div className="closer" >
                            <Icons source={closeIcon} height={"24px"} width={"24px"} onClick={()=>setOpen(false) } data-testid="icon" />    
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
                            <input type="file"  id="getFile" data-testid="file" style={{display:'none'}}  onChange={ handleClick} />
                        </Box>
                    </Box>
                </Grid >
            </Modal> </>
)}



