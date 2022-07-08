import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { theme } from "../../../Theme";
import { sideItems, extraSide } from "../../../Data/Cities";

function Sidepane() {
  const classes = useStyles();
  const [findPage, setFindPage] = useState(true);

  return (
    <Box className={classes.root} data-testid="drawer-main">
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawPaper }}
      >
        <Box height={"40px"}></Box>
        <List>
          {sideItems.map((item, key) => (
            <ListItem
              button
              key={key}
              className={
                findPage
                  ? item.text === "Find Jobs"
                    ? classes.hover + " " + classes.active
                    : classes.hover
                  : item.text === "Saved Jobs"
                  ? classes.hover + " " + classes.active
                  : classes.hover
              }
              data-testid={"button-test-" + key}
              onClick={() => {
                if (item.text === "Find Jobs") {
                  setFindPage(true);
                } else if (item.text === "Saved Jobs") {
                  setFindPage(false);
                }
              }}
            >
              <ListItemIcon>
                <Box className="iconcolor">
                  <item.icon className={"iconfill"} style={{fill:item.color}}/>
                </Box>
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{"& .MuiTypography-root":{ fontWeight:"500 !important", fontFamily:"Montserrat", color:theme.palette.black?.two}}} className="textcolor"/>
            </ListItem>
          ))}
          <Divider variant="middle" sx={{ paddingTop: "8px" }} />
          <Box height={"8px"}></Box>
          {extraSide.map((item, key) => (
            <ListItem button key={key} className={classes.hover}>
              <ListItemIcon>
                <Box className="iconcolor">
                  <item.icon className={"iconfill"} style={{fill:item.color}}/>
                </Box>
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{"& .MuiTypography-root":{ fontWeight:"500 !important", fontFamily:"Montserrat", color:theme.palette.black?.two}, "&:hover":{color:theme.palette.green?.two}}} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box width="220vh" paddingTop="60px">
        {findPage ? <Box data-testid={"find-box"}>Find Jobs</Box> : <Box data-testid={"saved-box"}>Saved Jobs</Box>}
      </Box>
    </Box>
  );
}

const drawerWidthUnit = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidthUnit,
  },

  drawPaper: {
    width: drawerWidthUnit,
  },

  root: {
    display: "flex",
  },

  hover: {

    "&:hover": {
      backgroundColor: theme.palette.green?.seven + " !important",
      "& .iconcolor": {
        backgroundColor: "transparent !important",
      },
      "& .iconfill": {
        fill: theme.palette.green?.two + " !important",
      },
      "& .textcolor":{
        color:theme.palette.green?.two + " !important",
      },
    },

    "&:active": {
      backgroundColor: theme.palette.green?.seven + " !important",
      borderRight: "4px solid " + theme.palette.green?.two ,
      borderRadius: "4px",
      "& .iconfill": {
        fill: theme.palette.green?.two + " !important",
      },
      "& .textcolor":{
        color:theme.palette.green?.two + " !important",
      },
    },

    "& .iconcolor": {
      backgroundColor: theme.palette.gray?.three,
      borderRadius: "50%",
      padding: "6px 7px 5px 7px",
    },
  },

  active: {
    backgroundColor: theme.palette.green?.seven + " !important",
    borderRight: "4px solid " + theme.palette.green?.two + " !important",
    borderRadius: "4px !important",
    "& .iconcolor": {
      backgroundColor: "transparent !important",
    },
    "& .iconfill": {
      fill: theme.palette.green?.two + " !important",
    },
    "& .textcolor":{
      color:theme.palette.green?.two + " !important",
    },
  },

});

export default Sidepane;