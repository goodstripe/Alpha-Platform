"use client";

import React, { useState } from "react";
import { Stepper, Paper, Title, Text, Stack } from "@mantine/core";

const Onboarding = () => {
  const [active, setActive] = useState(0);

  return (
    <Paper>
      <Stack>
        <Title size={40} c="dark">
          Account Registration
        </Title>
        <Text c="gray">
          Complete the following steps to create your account
        </Text>
      </Stack>

      <Stepper active={active} onStepClick={setActive} mt={30}>
        <Stepper.Step label="First step" description="Customer Verification">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Account Type">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Third step" description="Brokerage Account Type">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Step label="Fourth step" description="Retirement Account Type">
          Step 4 content: Get full access
        </Stepper.Step>
        <Stepper.Step label="Fifth step" description="Personal Information">
          Step 5 content: Get full access
        </Stepper.Step>
        <Stepper.Step label="Six step" description="Joint Account Information">
          Step 6 content: Get full access
        </Stepper.Step>
        <Stepper.Step label="Seventh step" description="Entity Information">
          Step 7 content: Get full access
        </Stepper.Step>
      </Stepper>
    </Paper>
  );
};

export default Onboarding;
