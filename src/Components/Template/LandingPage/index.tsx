import { Box, Grid } from "@mui/material";
import { theme } from "../../../Theme";
import "./landingPage.css";
import { ReactElement } from "react";

interface LandingProps{
    homestepper?: JSX.Element;
    Logo?: ReactElement;
}


export const LandingTemplate = (props: LandingProps) => {
  return (
    <Grid sx={{ display: "flex" }}>
      <Box
        className="lpBox1"
        sx={{ backgroundColor: theme.palette.light?.four }}
      >
        <Box sx={{ paddingLeft: "60px" }}>
          <Box sx={{ paddingTop: "32px" }} data-testid="logo">
              {props.Logo}
          </Box>
          <Box
            data-testid="steppertemp"
            sx={{ paddingTop: "50px", transform: "translateX(-11px)" }}
          >
              {props.homestepper}
          </Box>
        </Box>
      </Box>
      <Box
        className="lpBox2"
        sx={{
          background: theme.palette.light?.linearOne,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        {/* <Image src={roadmap}  height={344} width={281} /> */}
      </Box>
    </Grid>
  );
};
