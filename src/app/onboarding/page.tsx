"use client";

import React, { useState } from "react";
import {
  Title,
  Text,
  Stack,
  AppShell,
  Box,
  Center,
  TextInput,
  Checkbox,
  Group,
  Select,
  Radio,
  rem,
} from "@mantine/core";
import {
  IconUserCircle,
  IconKey,
  IconPigMoney,
  IconBuildingBank,
  IconUser,
  IconUsers,
  IconBuilding,
} from "@tabler/icons-react";
import AccordionStep, {
  AccordionStepProps,
} from "../components/AccordionStep/AccordionStep";

// Custom content components
const PersonalInfoForm: React.FC = () => {
  return (
    <div>
      <Text size="sm" mb="md">
        Please provide your personal information to complete your account setup.
      </Text>
      <Stack gap="md">
        <Group grow>
          <TextInput
            label="First Name"
            placeholder="Enter your first name"
            required
          />
          <TextInput
            label="Last Name"
            placeholder="Enter your last name"
            required
          />
        </Group>
        <TextInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <TextInput label="Phone Number" placeholder="Enter your phone number" />
        <TextInput label="Address" placeholder="Enter your street address" />
        <Group grow>
          <TextInput label="City" placeholder="Enter your city" />
          <TextInput label="ZIP Code" placeholder="Enter ZIP code" />
        </Group>
        <Checkbox
          label="I confirm that the information provided is accurate"
          mt="md"
        />
      </Stack>
    </div>
  );
};

const AccountTypeSelection: React.FC = () => {
  return (
    <div>
      <Text size="sm" mb="md">
        Select the type of account you want to create:
      </Text>
      <Stack gap="md">
        <Radio.Group name="accountType">
          <Stack gap="xs">
            <Radio value="individual" label="Individual Account" />
            <Radio value="joint" label="Joint Account" />
            <Radio value="corporate" label="Corporate Account" />
            <Radio value="retirement" label="Retirement Account (IRA)" />
          </Stack>
        </Radio.Group>
      </Stack>
    </div>
  );
};

const BrokerageOptions: React.FC = () => {
  return (
    <div>
      <Text size="sm" mb="md">
        Configure your brokerage account preferences:
      </Text>
      <Stack gap="md">
        <Select
          label="Trading Experience"
          placeholder="Select your experience level"
          data={[
            { value: "beginner", label: "Beginner" },
            { value: "intermediate", label: "Intermediate" },
            { value: "advanced", label: "Advanced" },
          ]}
        />
        <Checkbox
          label="Enable options trading"
          description="Higher risk investment strategy"
        />
        <Checkbox
          label="Enable margin trading"
          description="Borrow funds to invest"
        />
        <Checkbox
          label="Enable cryptocurrency trading"
          description="Trade digital currencies"
        />
      </Stack>
    </div>
  );
};

export interface Step
  extends Omit<
    AccordionStepProps,
    | "step"
    | "isActive"
    | "isCompleted"
    | "onStepClick"
    | "isLast"
    | "onCompleteStep"
    | "isFinalStep"
    | "children"
  > {
  content: React.ReactNode;
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
      content: (
        <div>
          <Text size="sm" mb="md">
            To verify your identity, please upload the required documents:
          </Text>
          <Stack gap="md">
            <TextInput
              label="Government ID Number"
              placeholder="Enter your ID number"
              required
            />
            <Checkbox label="I agree to the terms of identity verification" />
          </Stack>
        </div>
      ),
      icon: IconUserCircle,
      tooltip:
        "We use bank-level security to protect your personal information",
    },
    {
      label: "Account Type",
      description: "Step 2: Choose account type",
      content: <AccountTypeSelection />,
      icon: IconBuildingBank,
      tooltip: "You can add more account types later in your account settings",
    },
    {
      label: "Brokerage Account",
      description: "Step 3: Brokerage details",
      content: <BrokerageOptions />,
      icon: IconPigMoney,
      tooltip: "Options and margin trading require additional approvals",
    },
    {
      label: "Retirement Account",
      description: "Step 4: Retirement options",
      content: (
        <div>
          <Text size="sm" mb="md">
            Select your retirement account options:
          </Text>
          <Stack gap="md">
            <Radio.Group name="retirementType">
              <Stack gap="xs">
                <Radio value="traditional" label="Traditional IRA" />
                <Radio value="roth" label="Roth IRA" />
                <Radio value="sep" label="SEP IRA" />
              </Stack>
            </Radio.Group>
            <TextInput
              label="Beneficiary Name"
              placeholder="Enter beneficiary full name"
            />
          </Stack>
        </div>
      ),
      icon: IconKey,
      tooltip:
        "Consider consulting a tax advisor for retirement account selection",
    },
    {
      label: "Personal Information",
      description: "Step 5: Your details",
      content: <PersonalInfoForm />,
      icon: IconUser,
      tooltip: "This information helps us personalize your experience",
    },
    {
      label: "Joint Account Info",
      description: "Step 6: Joint account holder",
      content: (
        <div>
          <Text size="sm" mb="md">
            Provide information for the joint account holder:
          </Text>
          <Stack gap="md">
            <Group grow>
              <TextInput
                label="First Name"
                placeholder="Joint holder first name"
              />
              <TextInput
                label="Last Name"
                placeholder="Joint holder last name"
              />
            </Group>
            <TextInput
              label="Email"
              type="email"
              placeholder="Joint holder email"
            />
            <TextInput
              label="SSN/Tax ID"
              placeholder="Joint holder SSN or Tax ID"
            />
            <TextInput
              label="Date of Birth"
              type="date"
              placeholder="Joint holder date of birth"
            />
          </Stack>
        </div>
      ),
      icon: IconUsers,
      tooltip:
        "Joint account holders have equal access and rights to the account",
    },
    {
      label: "Entity Information",
      description: "Step 7: Business details",
      content: (
        <div>
          <Text size="sm" mb="md">
            Provide information about your business entity:
          </Text>
          <Stack gap="md">
            <TextInput
              label="Business Name"
              placeholder="Legal business name"
            />
            <TextInput
              label="EIN"
              placeholder="Employer Identification Number"
            />
            <TextInput
              label="Business Address"
              placeholder="Registered business address"
            />
            <Select
              label="Entity Type"
              placeholder="Select entity type"
              data={[
                { value: "llc", label: "LLC" },
                { value: "corporation", label: "Corporation" },
                { value: "partnership", label: "Partnership" },
                { value: "sole-proprietorship", label: "Sole Proprietorship" },
              ]}
            />
            <TextInput
              label="Authorized Signer"
              placeholder="Name of authorized signer"
            />
          </Stack>
        </div>
      ),
      icon: IconBuilding,
      tooltip:
        "We need documentation for business verification after submission",
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
                  tooltip={step.tooltip}
                >
                  {step.content}
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
