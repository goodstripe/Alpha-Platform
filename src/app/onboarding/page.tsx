"use client";

import React, { useState } from "react";
import { Title, Text, Stack, AppShell, Box, Center, rem } from "@mantine/core";
import {
  IconUserCircle,
  IconKey,
  IconPigMoney,
  IconBuildingBank,
  IconUser,
  IconUsers,
  IconBuilding,
} from "@tabler/icons-react";
import AccordionStep from "../components/AccordionStep/AccordionStep";

export interface Step {
  label: string;
  description: string;
  content: string;
  icon: React.ComponentType<any>;
}

const Onboarding: React.FC = () => {
  const [active, setActive] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleStepClick = (step: number) => {
    // Allow navigation to any completed step or the next logical step
    if (
      completedSteps.includes(step) ||
      step === active + 1 ||
      step === active
    ) {
      setActive(step);
    }
  };

  const completeCurrentStep = () => {
    if (!completedSteps.includes(active)) {
      setCompletedSteps([...completedSteps, active]);
    }
    if (active < steps.length - 1) {
      setActive(active + 1);
    }
  };

  const steps: Step[] = [
    {
      label: "Customer Verification",
      description: "Step 1: Verify your identity",
      content:
        "Please provide your government-issued ID and a recent utility bill for verification purposes.",
      icon: IconUserCircle,
    },
    {
      label: "Account Type",
      description: "Step 2: Choose account type",
      content:
        "Select between individual, joint, or corporate account types based on your needs.",
      icon: IconBuildingBank,
    },
    {
      label: "Brokerage Account",
      description: "Step 3: Brokerage details",
      content:
        "Set up your brokerage account preferences and trading permissions.",
      icon: IconPigMoney,
    },
    {
      label: "Retirement Account",
      description: "Step 4: Retirement options",
      content:
        "Choose between Traditional IRA, Roth IRA, or other retirement account options.",
      icon: IconKey,
    },
    {
      label: "Personal Information",
      description: "Step 5: Your details",
      content:
        "Provide your personal information including name, address, and contact details.",
      icon: IconUser,
    },
    {
      label: "Joint Account Info",
      description: "Step 6: Joint account holder",
      content:
        "If applying for a joint account, provide information for the second account holder.",
      icon: IconUsers,
    },
    {
      label: "Entity Information",
      description: "Step 7: Business details",
      content:
        "For corporate accounts, provide business documentation and entity information.",
      icon: IconBuilding,
    },
  ];

  return (
    <AppShell header={{ height: 60, offset: false }} padding="md">
      <AppShell.Header
        p="md"
        style={{ background: "transparent", border: "none" }}
      ></AppShell.Header>

      <AppShell.Main style={{ paddingTop: "var(--app-shell-header-height)" }}>
        <Center>
          <Box style={{ width: "100%", maxWidth: rem(800) }}>
            <Stack align="center" mb={30}>
              <Title size={32} c="dark" fw={700}>
                Account Registration
              </Title>
              <Text c="gray" size="lg">
                Complete the following steps to create your account
              </Text>
            </Stack>

            <Box>
              {steps.map((step, index) => (
                <AccordionStep
                  key={index}
                  step={index}
                  label={step.label}
                  description={step.description}
                  isActive={active === index}
                  isCompleted={completedSteps.includes(index)}
                  onStepClick={handleStepClick}
                  icon={step.icon}
                  isLast={index === steps.length - 1}
                  onCompleteStep={completeCurrentStep}
                  isFinalStep={index === steps.length - 1}
                >
                  <div>{step.content}</div>
                </AccordionStep>
              ))}
            </Box>
          </Box>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
};

export default Onboarding;
