import { Grid, Typography } from '@mui/material';
import React from 'react'
import { CheckBoxText } from '../CheckBoxText';
export interface FilterListProps {
  title?: string,
  labelArray: string[],

  onChange?: (e: React.SyntheticEvent) => void,
}

export const FilterList = (props: FilterListProps) => {

  return (
    <Grid data-testid="filterListId" className="tableParameters" item sm={4} >

      <Typography variant='body1'>{props.title}</Typography>
      <div style={{ marginLeft: "12px" }}>
        {props.labelArray.map((label, key) => {
          return <CheckBoxText onChange={props.onChange} label={label} key={key} />
        })}
      </div>
    </Grid>
  )
}

