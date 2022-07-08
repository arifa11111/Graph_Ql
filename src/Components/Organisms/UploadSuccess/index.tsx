import {theme} from "../../../Theme/index"
import { Icons } from "../../Atoms/IconsAtom"
import close from "../../../images/icons/close.svg"
import vector from "../../../images/icons/Vector.svg"
import "./UploadSuccess.css"
import { ButtonComponent } from "../../Atoms/Buttons/Button"
import { Grid } from "@mui/material"
//import { useState } from "react"

export const UploadSuccess = () => {
    //const [model,setModel] = useState(1)
    return( 
        <Grid className="box">
            <div className="close"><Icons source={close} height={"24px"} width={"24px"} /></div>
            <div className="contents">
                <div style={{justifyContent:'center' }}><Icons source={vector} height={"83px"} width={"83px"} /></div>    
                <div><span style={{fontWeight:'bold'}}>Hi abc! </span>Your Resume got Uploaded Successfully !</div>
                <ButtonComponent label={"okay"}
                      classing={"next"}
                      style={{
                        maxWidth:'156px',width:'100%',
                        borderRadius:'8px',fontSize:'12px',
                        lineHeight:'16px',textTransform:'uppercase',
                        fontFamily:theme.typography.body1.fontFamily,
                        color:theme.palette.light?.four,
                        background:theme.palette.green?.six,}}  />
            </div>
        </Grid >
    )
}
