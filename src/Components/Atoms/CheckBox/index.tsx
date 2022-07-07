import { Checkbox } from "@mui/material";
import { makeStyles } from "@mui/styles";
import './index.css';

export interface checkBoxprops {
    checked?: Boolean,
    onChange?: () => void,
    value?: string
}

export const CheckBox = (props: any) => {
    let styles = useStyles()
    const { checked, onChange, value } = props
    return <Checkbox data-testid="CheckBox" checked={checked} onChange={onChange} value={value} className="sample" sx={{
        color: "#D6D6D6",
        '&.Mui-checked': {
            color: "#30A193",
        },
    }} />
}
const useStyles = makeStyles({
    mainn: {
        borderColor: "#D6D6D6",
        width: "16px",
        height: "16px",
        borderRadius: "4px"
    }
})



