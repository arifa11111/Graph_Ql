import { Autocomplete, InputBase, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { theme } from "../../../Theme";
import Chips from "../../Atoms/Chips";
import "./index.css";

interface InputProps {
  multiple?: boolean;
  limitTags?: number;
  size?: "medium" | "small";
  placeholder: string;
  locations?: any;
  onChange?: (e: React.SyntheticEvent, value: any) => void;
}

function CityInput(props: InputProps) {
  const classes = useStyles();
  const textBorder = classes.inputfield + " " + classes.addborderfocused;
  const noTextBorder = classes.inputfield + " " + classes.addborder;
  let borderstyle = noTextBorder;

  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        className={classes.inputfield}
        multiple={props.multiple}
        limitTags={props.limitTags}
        size={props.size}
        id="combo-box-demo"
        data-testid="Auto-complete"
        options={props.locations}
        getOptionLabel={(option) => option.area}
        onChange={props.onChange}
        onBlur={(e) => {
          if (
            (e.target as HTMLInputElement).value === "" &&
            e.currentTarget.firstChild?.firstChild?.nodeName === "INPUT"
          ) {
            borderstyle = noTextBorder;
          } else {
            borderstyle = textBorder;
          }
        }}
        popupIcon={""}
        renderInput={(params) => {
          const { InputLabelProps, InputProps, ...rest } = params;
          return (
            <InputBase
              {...InputProps}
              {...rest}
              data-testid="input-base"
              classes={{
                root: borderstyle,
                focused: classes.addborderfocused,
              }}
              placeholder={props.placeholder}
            ></InputBase>
          );
        }}
        renderTags={(tagValue, getTagProps) => {
          return tagValue.map((option, index) => (
            <Chips
              {...getTagProps({ index })}
              label={option.area}
              data-testid="chip-check"
              classes={{ root: classes.chip }}
            />
          ));
        }}
      />
    </ThemeProvider>
  );
}

const useStyles = makeStyles({
  inputfield: {
    minHeight: "48px",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "8px",
    "& .MuiChip-root": {
      backgroundColor: "#E8FFFC",
      borderRadius: "0px",
    },
    "& .MuiChip-label": {
      fontFamily: theme.typography.caption2?.fontFamily,
      fontWeight: theme.typography.caption2?.fontWeight,
      fontSize: theme.typography.caption2?.fontSize,
      lineHeight: theme.typography.caption2?.lineHeight,
    },
    "& .MuiAutocomplete-input": {
      fontFamily: theme.typography.caption2?.fontFamily,
      fontWeight: theme.typography.caption2?.fontWeight,
      fontSize: theme.typography.caption2?.fontSize,
      lineHeight: theme.typography.caption2?.lineHeight,
      color: theme.palette.black?.three,
    },
  },

  chip: {
    backgroundColor: "#E8FFFC !important",
    borderRadius: "6px !important",
  },

  addborder: {
    border: "2px solid " + theme.palette.gray?.one,
    "& .MuiInputBase-input": {
      marginLeft: "1rem",
    },
  },

  addborderfocused: {
    border: "2px solid " + theme.palette.green?.four,
    boxShadow: "0px 3px 3px " + theme.palette.gray?.one,
    "& .MuiInputBase-input": {
      marginLeft: "1rem",
    },
    "& input::placeholder": {
      color: "white",
    },
  },
});

export default CityInput;
