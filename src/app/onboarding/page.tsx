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
  IconScale,
} from "@tabler/icons-react";
import AccordionStep, {
  AccordionStepProps,
} from "../components/AccordionStep/AccordionStep";
import PersonalInfoForm from "./components/Personal-Information/PersonalInfoForm";

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
    | "completedSteps"
  > {
  content: React.ReactNode;
}

const BrokerageOptions: React.FC = () => {
  return (
    <div>
      <Text size="md" mb={"md"}>
        Select an Account -
      </Text>

      <Radio.Group>
        <Stack mt="xs">
          <Radio value="single" label="Single Account" />
          <Radio value="joint" label="Joint Account" />
          <Radio value="entity" label="Entity Account" />
        </Stack>
      </Radio.Group>
    </div>
  );
};

const RetirementOptions: React.FC = () => {
  return (
    <div>
      <Stack gap={5}>
        <Text size="md">Account Details</Text>
        <Text size="xs" mb="md">
          Select Type of Account -
        </Text>
      </Stack>

      <Radio.Group withAsterisk>
        <Stack mt="xs">
          <Radio value="traditional" label="Traditional IRA" />
          <Radio value="rollover" label="Rollover IRA" />
          <Radio value="roth" label="Roth IRA" />
          <Radio value="sep" label="SEP IRA" />
        </Stack>
      </Radio.Group>
    </div>
  );
};

const CitizenshipForm: React.FC = () => {
  const [citizenship, setCitizenship] = useState<string>("");

  return (
    <Box>
      <Radio.Group
        label="Select your citizenship status"
        value={citizenship}
        onChange={setCitizenship}
      >
        <Stack mt={"xs"}>
          <Radio value="US Citizen" label="US Citizen" />
          <Radio value="Dual Citizen" label="Dual Citizen" />
          <Radio value="Non US Citizen" label="Non US Citizen" />
        </Stack>
      </Radio.Group>

      <Stack mt="md" gap="md">
        {(citizenship === "US Citizen" || citizenship === "Dual Citizen") && (
          <TextInput
            withAsterisk
            label="Social Security Number"
            placeholder="Enter your SSN"
          />
        )}

        {citizenship === "Dual Citizen" && (
          <TextInput
            withAsterisk
            label="Second Country Citizenship"
            placeholder="Enter second country's citizenship"
          />
        )}

        {citizenship === "Non US Citizen" && (
          <TextInput
            withAsterisk
            label="Tax ID"
            placeholder="Enter your Tax ID"
          />
        )}
      </Stack>
    </Box>
  );
};

const FinancialInformationForm: React.FC = () => {
  const [annualIncome, setAnnualIncome] = useState("");
  const [liquidNetWorth, setLiquidNetWorth] = useState("");
  const [totalNetWorth, setTotalNetWorth] = useState("");
  const [investmentExperience, setInvestmentExperience] = useState("");

  const netOptions = [
    { value: "0-25000", label: "$0 - $25,000" },
    { value: "25001-50000", label: "$25,001 - 50,000" },
    { value: "50001-100000", label: "$50,001 - $100,000" },
    { value: "100001-250000", label: "$100,001 - 250,000" },
    { value: "250001-500000", label: "$250,001 - 500,000" },
  ];

  return (
    <Stack gap="md">
      <Title order={4}>Financial Information</Title>

      <TextInput
        label="Annual Income"
        placeholder="Enter annual income"
        withAsterisk
        value={annualIncome}
        onChange={(event) => setAnnualIncome(event.currentTarget.value)}
      />

      <Select
        label="Liquid Net Worth"
        placeholder="Select Range"
        withAsterisk
        data={netOptions}
        value={liquidNetWorth}
        onChange={(value) => value !== null && setLiquidNetWorth(value)}
      />

      <Select
        label="Total Net Worth"
        placeholder="Select Range"
        withAsterisk
        data={netOptions}
        value={totalNetWorth}
        onChange={(value) => value !== null && setTotalNetWorth(value)}
      />

      <Select
        label="Investment Experience"
        placeholder="Select Experience Level"
        withAsterisk
        data={[
          { value: "no", label: "No Experience" },
          { value: "beginner", label: "Beginner" },
          { value: "intermediate", label: "Intermediate" },
          { value: "expert", label: "Expert" },
        ]}
        value={investmentExperience}
        onChange={(value) => value !== null && setInvestmentExperience(value)}
      />
    </Stack>
  );
};

const ComplianceQuestions: React.FC = () => {
  return (
    <Stack gap="lg">
      <div>
        <Text size="sm" fw={500} mb={5}>
          Do you, or does a family or household member, work for a broker-dealer
          or a securities or futures exchange, futures commission merchant,
          retail foreign exchange dealer, or securities or futures regulator?
        </Text>
        <Radio.Group name="compliance1">
          <Group mt="xs">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
      </div>

      <div>
        <Text size="sm" fw={500} mb={5}>
          Do you, or does a family or household member, serve on a board of
          directors, or as another policymaker at a public company?
        </Text>
        <Radio.Group name="compliance2">
          <Group mt="xs">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
      </div>

      <div>
        <Text size="sm" fw={500} mb={5}>
          Do you, or does a family or household member, own 10% or more of a
          public company?
        </Text>
        <Radio.Group name="compliance3">
          <Group mt="xs">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
      </div>

      <div>
        <Text size="sm" fw={500} mb={5}>
          Have you been notified by the IRS that you are subject to backup
          withholding?
        </Text>
        <Radio.Group name="compliance4">
          <Group mt="xs">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
      </div>
    </Stack>
  );
};

const Onboarding: React.FC = () => {
  const [active, setActive] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [accountType, setAccountType] = useState("");

  const handleStepClick = (step: number) => {
    const maxAllowedStep =
      completedSteps.length > 0 ? Math.max(...completedSteps) + 1 : 0;

    if (
      step <= maxAllowedStep ||
      completedSteps.includes(step) ||
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

  const steps: (Step & { detailedInfo: string })[] = [
    {
      label: "Customer Verification",
      description: "Step 1: Verify your identity",
      detailedInfo:
        "Identity verification is required by financial regulations to prevent fraud. We use bank-level encryption to protect your personal information. You'll need to provide a government-issued ID and may need to take a photo for verification purposes.",
      content: (
        <div>
          <Text size="md" mb="md">
            Are you an existing customer?
          </Text>
          <Radio.Group>
            <Stack mt="xs">
              <Radio value="yes" label="Yes" />
              <Radio value="no" label="No" />
            </Stack>
          </Radio.Group>
        </div>
      ),
      icon: IconUserCircle,
    },
    {
      label: "Account Type",
      description: "Step 2: Choose account type",
      detailedInfo:
        "Select the account type that best fits your financial goals. Individual accounts are for personal use, joint accounts allow shared access with another person, corporate accounts are for business entities, and retirement accounts offer tax advantages for long-term savings.",
      content: (
        <div>
          <Text size="md" mb="md">
            Select Account Type -
          </Text>
          <Radio.Group
            value={accountType}
            onChange={setAccountType}
            withAsterisk
          >
            <Stack mt="xs">
              <Radio value="brokerage" label="Brokerage Account" />
              <Radio value="retirement" label="Retirement Account" />
            </Stack>
          </Radio.Group>
        </div>
      ),
      icon: IconBuildingBank,
    },
    {
      label: "Account Details",
      description: "Step 3: Account details",
      detailedInfo:
        "Configure your investment preferences to match your experience level and risk tolerance. Options and margin trading involve higher risks and require additional approvals. Cryptocurrency trading is available for qualified investors seeking exposure to digital assets.",
      content:
        accountType === "brokerage" ? (
          <BrokerageOptions />
        ) : (
          <RetirementOptions />
        ),
      icon: IconPigMoney,
    },
    {
      label: "Personal Information",
      description: "Step 4: Retirement options",
      detailedInfo:
        "Retirement accounts offer tax advantages to help you save for the future. Traditional IRAs provide tax-deferred growth, Roth IRAs offer tax-free withdrawals in retirement, and SEP IRAs are designed for self-employed individuals and small business owners.",
      content: <PersonalInfoForm />,
      icon: IconKey,
    },
    {
      label: "Citizenship Information",
      description: "Step 5: Citizenship Information",
      detailedInfo:
        "Providing accurate personal information ensures we can properly service your account and comply with regulatory requirements. Your information is protected with industry-standard security measures and will only be used for account management and required reporting.",
      content: <CitizenshipForm />,
      icon: IconUser,
    },
    {
      label: "Financial Information",
      description: "Step 6: Annual Income",
      detailedInfo:
        "For joint accounts, both holders have equal access and rights to the account. Each account holder will need to complete identity verification separately. Joint accounts can be set up with rights of survivorship or other ownership arrangements depending on your needs.",
      content: <FinancialInformationForm />,
      icon: IconUsers,
      tooltip: "Click for more information about joint accounts",
    },
    {
      label: "Compliance Questions",
      description: "Step X: Answer compliance questions",
      detailedInfo:
        "These questions help us comply with financial regulations and identify potential conflicts of interest.",
      content: <ComplianceQuestions />,
      icon: IconScale,
      tooltip: "Click for more information about compliance requirements",
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
                  detailedInfo={step.detailedInfo}
                  completedSteps={completedSteps}
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
