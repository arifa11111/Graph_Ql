import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { theme } from "../../../Theme";
import { sideItems, extraSide, sidepageheading } from "../../../Data/Cities";
import { TabContext,  TabPanel } from "@mui/lab";

interface SideProps{
  findPage?: JSX.Element,
  savedPage?: JSX.Element,
}

function Sidepane(props:SideProps) {
  const classes = useStyles();
  const [findPage, setFindPage] = useState<string>("1");

  const changePages = (labelName : string) => {
    console.log(labelName);
    if (labelName === "Find Jobs") {
      setFindPage("1");
    } else if (labelName === "Saved Jobs") {
      setFindPage("2");
    }
  }


  return (
    <Box className={classes.root} data-testid="drawer-main">
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawPaper }}
      >
        <Box height={"130px"}></Box>
        <List>
          {sideItems.map((item, key) => (
            <ListItem
              button
              key={key}
              className={
                findPage === "1"
                  ? item.text === "Find Jobs"
                    ? classes.hover + " " + classes.active
                    : classes.hover
                  : item.text === "Saved Jobs"
                  ? classes.hover + " " + classes.active
                  : classes.hover
              }
              data-testid={"button-test-" + key}
              onClick={() => {changePages(item.text)}}
            >
              <ListItemIcon sx={{paddingLeft:"25px"}}>
                <Box className="iconcolor">
                  <item.icon
                    className={"iconfill"}
                    style={{ fill: item.color }}
                  />
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                className={ "textcolor "+ classes.typoChange }
              />
            </ListItem>
          ))}
          <Divider variant="middle" sx={{ paddingTop: "8px" }} />
          <Box height={"8px"}></Box>
          {extraSide.map((item, key) => (
            <ListItem button key={key} className={classes.hover}>
              <ListItemIcon sx={{paddingLeft:"25px"}}>
                <Box className="iconcolor">
                  <item.icon
                    className={"iconfill"}
                    style={{ fill: item.color }}
                  />
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                className={"textcolor "+ classes.typoChange}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box></Box>
      <Box width="220vh" paddingTop="130px" height="1000vh" marginLeft={"-50px"} className={classes.findcolors}>
      <Box width="150vh" height="1000vh" marginLeft={"50px"} className={classes.findcolors}>
        <TabContext value={findPage}>
        <TabPanel value={"1"}>
        <Box data-testid={"find-box"} paddingLeft="10px">
            <Typography variant="h2">{sidepageheading.at(0)}</Typography>
            {props.findPage}
          </Box>
        </TabPanel>
        <TabPanel value={"2"}>
        <Box data-testid={"saved-box"} paddingLeft="10px">
            <Typography variant="h2">{sidepageheading.at(1)}</Typography>
            {props.savedPage}
          </Box>
        </TabPanel>
        </TabContext>
        </Box>
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

  typoChange:{
    "& .MuiTypography-root": {
      fontWeight: "500 !important",
      fontFamily: "Montserrat",
      color: theme.palette.black?.two,
    },
  },

  hover: {
    "&:hover": {
      backgroundColor: theme.palette.light?.one + " !important",
      "& .iconcolor": {
        backgroundColor: "transparent !important",
      },
      "& .iconfill": {
        fill: theme.palette.green?.two + " !important",
      },
      "& .textcolor": {
        "& .MuiTypography-root": {
          color: theme.palette.green?.two + " !important",
          fontWeight: "600 !important",
        },
      },
    },

    "&:active": {
      backgroundColor: theme.palette.light?.one + " !important",
      borderRight: "4px solid " + theme.palette.green?.two,
      borderRadius: "4px",
      "& .iconfill": {
        fill: theme.palette.green?.two + " !important",
      },
      "& .textcolor": {
        "& .MuiTypography-root": {
          color: theme.palette.green?.two + " !important",
          fontWeight: "600 !important",
        },
      },
    },

    "& .iconcolor": {
      backgroundColor: theme.palette.gray?.three,
      borderRadius: "50%",
      padding: "6px 7px 5px 7px",
    },
  },

  findcolors:{
    backgroundColor: theme.palette.gray?.three,
  },

  active: {
    backgroundColor: theme.palette.light?.one + " !important",
    borderRight: "4px solid " + theme.palette.green?.two + " !important",
    borderRadius: "4px !important",
    "& .iconcolor": {
      backgroundColor: "transparent !important",
    },
    "& .iconfill": {
      fill: theme.palette.green?.two + " !important",
    },
    "& .textcolor": {
      "& .MuiTypography-root": {
        color: theme.palette.green?.two + " !important",
        fontWeight: "600 !important",
      },
    },
  },
});

export default Sidepane;
