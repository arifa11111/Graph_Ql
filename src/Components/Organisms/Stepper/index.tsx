import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { theme } from '../../../Theme';
import { makeStyles } from '@mui/styles';
import "./index.css"

const steps = ['Your Location', 'Job Location', 'Your Skills'];

export default function HomePageStepper() {
  const styles = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Box sx={{ width: '100%',padding:'0px 8px 0px 8px' }}>
        <Stepper data-testid="stepper" connector={null} activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};

            return (
              <Step key={label} sx={{
                '& .MuiStepLabel-root .Mui-completed': {
                  color: theme.palette.green?.three, // circle color (COMPLETED)
                  fontWeight: theme.typography.subtitle1.fontWeight,
                  height: "40px"
                },

                '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                {
                  color: theme.palette.green?.three, // Just text label (COMPLETED)
                  fontFamily: theme.typography.subtitle1.fontFamily,
                  fontWeight: theme.typography.subtitle1.fontWeight,
                },

                '& .MuiStepLabel-root .Mui-active': {
                  color: theme.palette.green?.three,
                  fontFamily: theme.typography.subtitle1.fontFamily,
                  fontWeight: theme.typography.subtitle1.fontWeight,// circle color (ACTIVE)
                },

                '& .MuiStepLabel-label .Mui-active.MuiStepLabel-alternativeLabel':
                {
                  color: theme.palette.green?.three, // Just text label (ACTIVE)
                  fontFamily: theme.typography.subtitle1.fontFamily,
                  fontWeight: theme.typography.subtitle1.fontWeight,
                },

                '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                  fill: 'white', // circle's number (ACTIVE)
                  fontFamily: theme.typography.subtitle1.fontFamily,
                  fontWeight: theme.typography.subtitle1.fontWeight,
                  width: "7px"
                },

                "&  .Mui-disabled":
                {
                  fontFamily: theme.typography.subtitle1.fontFamily,
                  fontWeight: theme.typography.subtitle1.fontWeight,
                },

                /* disable stepper label text color */
                "& .css-16ubnlw-MuiStepLabel-labelContainer":
                {
                  height:"20px",
                  color: "#373C38",

                },

                /*circle size */
                "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root": {
                  fontSize: "40px",
                  color: "#F7F7F7",
                  fontWeight: theme.typography.subtitle2.fontWeight,
                },

                /* disable stepper inner text color */
                "& .MuiStepIcon-text": {
                  fill: "#373C38"
                },

                "& .span.MuiStepLabel-label.Mui-completed.css-qivjh0-MuiStepLabel-label": {
                  width: "100px",
                },

                /* finished circle label dimensions */
                "& .css-qivjh0-MuiStepLabel-label": {
                  fontFamily: theme.typography.subtitle1.fontFamily,
                  lineHeight: "2.9"
                },
                

              }}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

      <Box data-testid="box1" sx={{width:'540px',paddingTop:'53px'}}><Typography variant={"h1"} >More than 2000 people are using Green Commute</Typography></Box>

        {activeStep === steps.length ? (
          <React.Fragment>

            {/* <Typography sx={{ mt: 2, mb: 1 }}>
              navigates to findjobs page
            </Typography> */}

          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 7 ,transform:'translateY(142px)'}}>

              {activeStep !==0 && <Button data-testid="btnBack" variant={"outlined"} className={styles.backButton}
                onClick={handleBack}
                style={{ marginRight: "8px" }} >
                Back
              </Button>}

              <Button data-testid="btnNext" variant={"contained"} className={styles.nextButton} onClick={handleNext}>
                Next
              </Button>

            </Box>
          </React.Fragment>
        )}
      </Box>
      <Typography variant="subtitle1" className='skipText' sx={{ color: theme.palette.green?.six, fontFamily: theme.typography.body1,transform:"translateY(160px)" }}>Skip</Typography>
    </>
  );
}

const useStyles = makeStyles({
  connector: {
    borderLeft: "red"
  },
  backButton: {
    fontFamily: theme.typography.body1.fontFamily,
    width: "140px",
    height: "46px",
    borderStyle: "solid",
    borderRadius: "8px",
    borderColor: theme.palette.green?.six,
    color: theme.palette.green?.six,
    "&:hover": {
      borderColor: theme.palette.green?.six,
      color: theme.palette.green?.six
    },
    textTransform: "none"
  },
  nextButton: {
    fontFamily: theme.typography.body1.fontFamily,
    width: "140px",
    height: "46px",
    borderStyle: "solid",
    borderRadius: "8px",
    backgroundColor: theme.palette.green?.six + " !important",
    borderColor: theme.palette.green?.six,
    color: theme.palette.light?.four,
    "&:hover": {
      backgroundColor: theme.palette.green?.six + " !important",
      color: theme.palette.light?.four
    },
    textTransform: "none"
  },
})
