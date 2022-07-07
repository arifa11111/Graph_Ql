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

      <Box sx={{ width: '100%' }}>
        <Stepper data-testid="stepper" connector={null} activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};

            return (

              <Step key={label} sx={{
                paddingLeft: "32px",
                '& .MuiStepLabel-root .Mui-completed': {
                  color: theme.palette.green?.three, // circle color (COMPLETED)

                },
                '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                {
                  color: theme.palette.green?.three, // Just text label (COMPLETED)
                  fontFamily: theme.typography.h1.fontFamily
                },
                '& .MuiStepLabel-root .Mui-active': {
                  color: theme.palette.green?.three, // circle color (ACTIVE)
                },
                '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                {
                  color: theme.palette.green?.three, // Just text label (ACTIVE)
                  fontFamily: theme.typography.h1.fontFamily
                },

                '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                  fill: 'white', // circle's number (ACTIVE)
                  fontFamily: theme.typography.h1.fontFamily
                },


              }}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === 0 && <Box data-testid="box1"><Typography variant={"h1"} >page 1</Typography></Box>}
        {activeStep === 1 && <Box data-testid="box2"><Typography variant={"h1"} >page 2</Typography></Box>}
        {activeStep === 2 && <Box data-testid="box3"><Typography variant={"h1"} >page 3</Typography></Box>}
        {activeStep === steps.length ? (
          <React.Fragment>

            <Typography sx={{ mt: 2, mb: 1 }}>
              navigates to findjobs page
            </Typography>

          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 7 }}>

              <Button data-testid="btnBack" variant={"outlined"} className={styles.backButton}
                disabled={activeStep === 0}
                onClick={handleBack}
                style={{ marginRight: "8px" }} >
                Back
              </Button>

              <Button data-testid="btnNext" variant={"contained"} className={styles.nextButton} onClick={handleNext}>
                Next
              </Button>

            </Box>
          </React.Fragment>
        )}
      </Box>
      <Typography variant="subtitle1" className='skipText' sx={{ color: theme.palette.green?.six, fontFamily: theme.typography.body1 }}>Skip</Typography>
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
    backgroundColor: theme.palette.green?.six,
    borderColor: theme.palette.green?.six,
    color: theme.palette.light?.four,
    "&:hover": {
      backgroundColor: theme.palette.green?.six,
      color: theme.palette.light?.four
    },
    textTransform: "none"
  },
})

