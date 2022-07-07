import { FormControlLabel, FormGroup, Typography } from '@mui/material'
import { theme } from '../../../Theme'
import { CheckBox } from '../../Atoms/CheckBox'

export interface CheckBoxTextProps {
  label?: string,
  check?: boolean,
  onChange?: (e: React.SyntheticEvent) => void;
}

export const CheckBoxText = (props: CheckBoxTextProps) => {
  const { label, check, onChange } = props
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          value={label}
          control={<CheckBox value={label} onChange={onChange} />}
          checked={check}
          label={<Typography variant="body2" sx={{ fontSize: "15px", paddingTop: "2px", marginLeft: "8px", color: theme.palette.black?.two }}>{label}</Typography>}
          labelPlacement="end"
        />
      </FormGroup>
    </div>
  )
}

