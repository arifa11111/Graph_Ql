import { Box, Grid} from "@mui/material";
import {theme} from "../../../Theme/index";
import { Icons } from "../../Atoms/IconsAtom";
import close from "../../../images/icons/close.svg";
import "./index.css"
import { ButtonComponent } from "../../Atoms/Buttons/Button";
import { useState } from "react";

 export const Upload = () =>{
     const [model,setModel]=useState(1)
      
     return(
        // { model && (
        <Grid item className="box">
            <div className="fileText"> File Upload </div>
            <div className="closer">
                    <Icons source={close} height={"24px"} width={"24px"} onClick={()=>{}} />    
            </div>
            <Box className="greenBox">
                <Box>
                    <ButtonComponent label={'Click Here to Upload Files'} classing='next' variant='contained'
                        onClick={()=>{document?.getElementById('getFile')?.click()}}
                          style={{
                                fontFamily:theme.typography.body1.fontFamily,
                                backgroundColor:theme.palette.green?.six,
                                fontSize: "12px",fontWeight: 700,
                                lineHeight: "16px",width:"281px",
                                height:"40px",borderRadius:"8px",
                                color:"white",textTransform:'none',
                          }}  />  
                    <input type="file"  id="getFile" data-testid="file" style={{display:'none'}} />
                </Box>
            </Box>
        </Grid > 
        )
    // })
}



