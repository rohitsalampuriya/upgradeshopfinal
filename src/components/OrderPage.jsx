import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Container } from '@mui/material';

const CreateOrderPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container maxWidth="md">
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel>Step 1</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 2</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 3</StepLabel>
        </Step>
      </Stepper>
      <div>
        {activeStep === 3 ? (
          <div>
            <Typography>All steps completed</Typography>
          </div>
        ) : (
          <div>
            <Typography>Step {activeStep + 1}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
              <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default CreateOrderPage;
