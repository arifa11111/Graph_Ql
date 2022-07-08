import { Checkbox } from "@mui/material";
import './index.css';

export interface checkBoxprops {
    checked?: boolean,
    onChange?: (e: React.SyntheticEvent) => void,
    value?: string
}

export const CheckBox = (props: checkBoxprops) => {
    const { checked, onChange, value } = props
    return <Checkbox data-testid="CheckBox" checked={checked}
         onChange={onChange} value={value} className="css-ejr8v6-MuiButtonBase-root-MuiCheckbox-root" 
         sx={{
            color: "#D6D6D6",
            borderWidth:"1px" + " !important",
            '&.Mui-checked': {
                color: "#30A193",
            },
            paddingRight:"8px",
            paddingTop:"10px"
            }} />
}



