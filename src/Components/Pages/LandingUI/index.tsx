import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import CityInput from "../../Molecules/InputBase";
import { OptionProp } from "../../Molecules/InputBase";
import HomePageStepper from "../../Organisms/Stepper";
import { LandingTemplate } from "../../Template/LandingPage";
import { areas, cities, jobSkills, landuitext } from "../../../Data/Cities";
import { ReactComponent as Logo } from "../../../images/icons/logo-1.svg";
import Image from "../../Molecules/MapView/Map";
import roadmap from "../../../images/icons/roadmap.svg";
import aqi from "../../../images/icons/aqibord.svg";
import man from "../../../images/icons/man.svg";
import { theme } from "../../../Theme";
import paint from "../../../images/icons/paint.svg";

const locZeroEmp = {
  width: "281px",
  textAlign: "center",
  marginLeft: "-15px",
};

const locZero = {
  width: "325px",
  textAlign: "center",
  paddingTop: "40px",
  marginLeft: "-30px",
};

const JoblocOne = {
  paddingLeft: "32px",
  paddingTop: "30%",
  color: theme.palette.accent?.two,
};

const jobLocTwo = {
  width: "100%",
  textAlign: "center",
  paddingTop: "40px",
  paddingRight: "10%",
};

function LandingUI() {
  const [location, setLocation] = useState<OptionProp>({ area: "" });
  const [jobLocation, setJobLocation] = useState<OptionProp[]>([]);
  const [skill, setSkill] = useState<OptionProp[]>([]);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  let imagesBox;
  if (activeStep === 0) {
    if (location.area === "") {
      imagesBox = (
        <Box>
          <Image src={roadmap} height={284} width={281}></Image>
          <Typography variant="h2" sx={locZeroEmp}>
            {landuitext[0]}
          </Typography>
        </Box>
      );
    } else {
      imagesBox = (
        <Box>
          <Image src={aqi} height={212} width={214} text={location.AQI}></Image>
          <Typography variant="h2" sx={locZero}>
            {landuitext[1]}
          </Typography>
        </Box>
      );
    }
  }

  if (activeStep === 1) {
    if (jobLocation.length === 0) {
      imagesBox = (
        <Box>
          <Image src={man} height={347} width={380}></Image>
        </Box>
      );
    } else {
      imagesBox = (
        <Box>
          {jobLocation.map((job) => {
            return (
              <Box display="flex" paddingTop={"32px"}>
                <Image
                  src={aqi}
                  height={212}
                  width={214}
                  text={job.AQI}
                ></Image>
                <Typography variant="h2" sx={JoblocOne}>
                  {job.area}
                </Typography>
              </Box>
            );
          })}
          <Typography variant="h2" sx={locZero}>
            {landuitext[1]}
          </Typography>
        </Box>
      );
    }
  }

  if (activeStep === 2) {
    if (skill.length === 0) {
      imagesBox = (
        <Box>
          <Image src={paint} height={348} width={417}></Image>
        </Box>
      );
    } else {
      const text =
        "Jobs found in " +
        jobLocation.map((job) => {
          return " " + job.area + " ";
        });
      imagesBox = (
        <Box>
          <Box paddingLeft={"20%"}>
            <Image src={aqi} height={212} width={214} text="1500"></Image>
          </Box>
          <Typography variant="h2" sx={jobLocTwo}>
            {text}
          </Typography>
        </Box>
      );
    }
  }

  return (
    <Box>
      <LandingTemplate
        homestepper={
          <HomePageStepper
            step1={
              <CityInput
                placeholder={"Enter your Location"}
                clear={true}
                locations={areas}
                value={location}
                onChange={(e: React.SyntheticEvent, value) =>
                  setLocation(value)
                }
              />
            }
            step2={
              <CityInput
                placeholder={"Enter your job location"}
                multiple={true}
                limitTags={2}
                size={"medium"}
                locations={cities}
                value={jobLocation}
                onChange={(e: React.SyntheticEvent, value) =>
                  setJobLocation(value)
                }
              />
            }
            step3={
              <CityInput
                placeholder={"Enter your skills"}
                multiple={true}
                limitTags={2}
                size={"medium"}
                locations={jobSkills}
                value={skill}
                onChange={(e: React.SyntheticEvent, value) => setSkill(value)}
              />
            }
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        }
        Logo={<Logo width={"205"} height={"40"} />}
        sideImage={imagesBox}
      />
    </Box>
  );
}

export default LandingUI;
