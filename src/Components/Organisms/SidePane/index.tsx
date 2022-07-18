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
import { TabContext, TabPanel } from "@mui/lab";

interface SideProps {
  findPage?: JSX.Element;
  savedPage?: JSX.Element;
  setDesc: () => void;
}

function Sidepane(props: SideProps) {
  const classes = useStyles();
  const [findPage, setFindPage] = useState<string>("1");

  const borderStyle = {
    backgroundColor: theme.palette.green?.two,
    zIndex: (theme: { zIndex: { drawer: number } }) => theme.zIndex.drawer + 1,
    paddingTop: "2px",
    width: "4px",
    height: "52px",
    borderRadius: "4px 0px 0px 4px",
  };
  const changePages = (labelName: string) => {
    if (labelName === "Find Jobs") {
      setFindPage("1");
    } else if (labelName === "Saved Jobs") {
      setFindPage("2");
    }
    props.setDesc();
  };

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
            <Box display="flex">
              <ListItem
                button
                key={key}
                disableRipple
                className={
                  findPage === "1"
                  ? item.text === "Find Jobs"
                    ? classes.hover + " " + classes.active
                    : (item.text === "Saved Jobs" ? classes.hover : classes.noHover) 
                  : item.text === "Saved Jobs"
                    ? classes.hover + " " + classes.active
                    : (item.text === "Find Jobs" ? classes.hover : classes.noHover)
                }
                data-testid={"button-test-" + key}
                onClick={() => {
                  changePages(item.text);
                }}
              >
                {item.text === "Practice Tests" || item.text === "Find Jobs" || item.text === "News & Events" ? (
                  <Box width="5px" height="10px"></Box>
                ) : null}
                {item.text === "Dashboard" ? (
                  <Box width="12px" height="10px"></Box>
                ) : null}
                
                <Box sx={{ display: "flex", paddingLeft: "25px" }}>
                  <ListItemIcon>
                    <Box className="iconcolor">
                      <item.icon
                        className={"iconfill"}
                        style={{
                          fill: item.color,
                        }}
                      />
                    </Box>
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    className={"textcolor " + classes.typoChange}
                  />
                </Box>
              </ListItem>
              {findPage === "1" && item.text === "Find Jobs" ? (
                <Box sx={borderStyle}></Box>
              ) : findPage === "2" && item.text === "Saved Jobs" ? (
                <Box sx={borderStyle}></Box>
              ) : null}
            </Box>
          ))}

          <Divider variant="middle" sx={{ paddingTop: "8px" }} />

          <Box height={"8px"}></Box>

          {extraSide.map((item, key) => (
            <ListItem key={key}>
              <ListItemIcon sx={{ paddingLeft: "30px" }}>
                <Box className="iconcolor">
                  <item.icon
                    className={"iconfill"}
                    style={{ fill: item.color }}
                  />
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                className={"textcolor " + classes.typoChange}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        width="220vh"
        paddingTop="130px"
        height="1000vh"
        marginLeft={"-50px"}
        sx={{ marginTop: "-36px" }}
        className={classes.findcolors}
      >
        <Box
          width="150vh"
          height="1000vh"
          marginLeft={"50px"}
          className={classes.findcolors}
        >
          <TabContext value={findPage}>
            <TabPanel value={"1"}>
              <Box data-testid={"find-box"} paddingLeft="20px">
                <Typography variant="h2" id="findId">
                  {sidepageheading.at(0)}
                </Typography>
                {props.findPage}
              </Box>
            </TabPanel>
            <TabPanel value={"2"}>
              <Box
                data-testid={"saved-box"}
                paddingLeft="30px"
                sx={{ marginTop: "-5px" }}
              >
                <Typography
                  variant="h2"
                  sx={{ paddingBottom: "20px" }}
                  id="saveId"
                >
                  {sidepageheading.at(1)}
                </Typography>
                {props.savedPage}
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
}

const drawerWidthUnit = 270;

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

  noHover:{
    "&:hover":{
      background:'transparent !important'
    }
  },

  typoChange: {
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
      // borderRight: "4px solid " + theme.palette.green?.two,
      // borderRadius: "4px",
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

  findcolors: {
    backgroundColor: theme.palette.gray?.four,
  },

  active: {
    backgroundColor: theme.palette.light?.one + " !important",
    // borderRight: "4px solid " + theme.palette.green?.two + " !important",
    // borderRadius: "4px !important",
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
