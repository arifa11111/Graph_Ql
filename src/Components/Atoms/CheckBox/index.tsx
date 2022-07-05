import { Checkbox } from "@mui/material";
import { makeStyles } from "@mui/styles";
import './index.css';


const useStyles = makeStyles({
    mainn:{
    borderColor: "#D6D6D6" ,
     width:"16" ,
     height:"16",
     borderRadius: "4"
    }
})

export interface checkBoxprops{
    checked?:Boolean,
}
export const CheckBox =(props:any)=>{
   let styles = useStyles()
    const {checked} = props
    return <Checkbox checked={checked} className="sample" sx={{
        color: "#D6D6D6",
        '&.Mui-checked': {
          color: "#30A193",
        },}} />
}



