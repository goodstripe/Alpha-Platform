"use client";

import React, { useRef, useState } from "react";
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
  Button,
  Flex,
  PasswordInput,
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
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import AccordionStep, {
  AccordionStepProps,
} from "../components/AccordionStep/AccordionStep";
import PersonalInfoForm from "./components/Personal-Information/PersonalInfoForm";
import PhoneNumberInputWithCountryCode from "./components/NumberInputWithCountryCode/NumberInputWithCountryCode";

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

const QuestionWithDot = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex align="start" gap="xs" wrap="nowrap">
      <Box
        w={6}
        h={6}
        bg="black"
        style={{ borderRadius: "50%", marginTop: 8, flexShrink: 0 }}
      />
      <Text size="sm" fw={500}>
        {children}
      </Text>
    </Flex>
  );
};

const ComplianceQuestions: React.FC = () => {
  return (
    <Stack gap="lg">
      <div>
        <QuestionWithDot>
          Do you, or does a family or household member, work for a broker-dealer
          or a securities or futures exchange, futures commission merchant,
          retail foreign exchange dealer, or securities or futures regulator?
        </QuestionWithDot>
        <Radio.Group name="compliance1">
          <Group mt="xs">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
      </div>

      <div>
        <QuestionWithDot>
          Do you, or does a family or household member, serve on a board of
          directors, or as another policymaker at a public company?
        </QuestionWithDot>
        <Radio.Group name="compliance2">
          <Group mt="xs">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
      </div>

      <div>
        <QuestionWithDot>
          Do you, or does a family or household member, own 10% or more of a
          public company?
        </QuestionWithDot>
        <Radio.Group name="compliance3">
          <Group mt="xs">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
      </div>

      <div>
        <QuestionWithDot>
          Have you been notified by the IRS that you are subject to backup
          withholding?
        </QuestionWithDot>
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

const AccountPurposeForm = () => {
  return (
    <Stack gap="md">
      <Select
        label="Select Source"
        placeholder="Select Source"
        data={[
          { value: "employment", label: "Employment Income" },
          { value: "business", label: "Business Income" },
          { value: "investment", label: "Investment Income" },
          { value: "inheritance", label: "Inheritance" },
          { value: "other", label: "Other" },
        ]}
      />

      <QuestionWithDot>
        Does any portion of your net worth and funding come from outside the US?
      </QuestionWithDot>
      <Radio.Group>
        <Stack>
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </Stack>
      </Radio.Group>

      <QuestionWithDot>
        What is the purpose and expected use of this account?
      </QuestionWithDot>
      <Select
        label="Select Purpose"
        placeholder="Select Purpose"
        data={[
          { value: "retirement", label: "Retirement Planning" },
          { value: "active", label: "Active Trading" },
          { value: "longterm", label: "Long-term Investment" },
          { value: "education", label: "Education Funding" },
          { value: "other", label: "Other" },
        ]}
      />
    </Stack>
  );
};

const AccreditationForm = () => {
  const [isAccredited, setIsAccredited] = useState<string | null>(null);
  const [verificationMethod, setVerificationMethod] = useState<string | null>(
    null
  );
  const openRef = useRef<() => void>(null);

  return (
    <Stack gap="md">
      <QuestionWithDot>Are you an accredited investor?</QuestionWithDot>
      <Radio.Group value={isAccredited} onChange={setIsAccredited}>
        <Stack>
          <Radio value="yes" label="Yes I am" />
          <Radio value="no" label="I am not an accredited investor" />
        </Stack>
      </Radio.Group>

      {isAccredited === "yes" && (
        <>
          <QuestionWithDot>
            Please choose how you would like to verify your accreditation?
          </QuestionWithDot>
          <Radio.Group
            value={verificationMethod}
            onChange={setVerificationMethod}
          >
            <Stack gap={"md"}>
              <Radio value="third_party" label="Third Party Verification" />
              <Radio value="self_attestation" label="Self Attestation" />
            </Stack>
          </Radio.Group>
        </>
      )}

      {isAccredited === "yes" && verificationMethod === "self_attestation" && (
        <>
          <QuestionWithDot>Upload Documents</QuestionWithDot>
          <Dropzone
            onDrop={(files) => console.log(files)}
            accept={[MIME_TYPES.pdf, MIME_TYPES.png, MIME_TYPES.jpeg]}
            maxSize={3 * 1024 ** 2}
          >
            <Button
              onClick={() => openRef.current?.()}
              style={{ pointerEvents: "all" }}
            >
              Select files
            </Button>
          </Dropzone>
        </>
      )}
    </Stack>
  );
};

const TrustedContactPersonForm = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <Stack gap="md">
      <QuestionWithDot>
        Important note about designating a trusted contact person.
      </QuestionWithDot>

      <Radio.Group value={selectedOption} onChange={setSelectedOption}>
        <Stack>
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </Stack>
      </Radio.Group>

      {selectedOption === "yes" && (
        <Stack gap="md">
          <TextInput label="First Name" placeholder="Enter first name" />
          <TextInput label="Last Name" placeholder="Enter last name" />
          <Select
            label="Country Code"
            placeholder="Select Country Code"
            data={[
              { value: "+1", label: "+1 (USA)" },
              { value: "+44", label: "+44 (UK)" },
              { value: "+91", label: "+91 (India)" },
            ]}
          />
          <PhoneNumberInputWithCountryCode />
          <TextInput label="Email Address" placeholder="Enter email address" />
          <TextInput label="Relationship" placeholder="Enter relationship" />
        </Stack>
      )}
    </Stack>
  );
};

const AccountCredentialsForm = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Stack gap="md" style={{ maxWidth: 400, margin: "0 auto" }}>
      <TextInput
        label="User ID"
        placeholder="Choose a user ID"
        value={userId}
        onChange={(event) => setUserId(event.currentTarget.value)}
        required
      />

      <PasswordInput
        label="Password"
        placeholder="Create a password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
        required
      />

      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.currentTarget.value)}
        required
      />
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
      description: "Step 1: Verify your identity status",
      detailedInfo:
        "Identity verification is required by financial regulations to prevent fraud. We use bank-level encryption to protect your personal information. Existing customers may have a streamlined verification process.",
      content: (
        <div>
          <QuestionWithDot>Are you an existing customer?</QuestionWithDot>
          <Radio.Group>
            <Stack mt="xs">
              <Radio value="yes" label="Yes" />
              <Radio value="no" label="No" />
            </Stack>
          </Radio.Group>
        </div>
      ),
      icon: IconUserCircle,
      tooltip:
        "Verification helps protect your account from unauthorized access",
    },
    {
      label: "Account Type",
      description: "Step 2: Choose your account category",
      detailedInfo:
        "Select the account type that best fits your financial goals. Brokerage accounts are for general investing, while retirement accounts offer tax advantages for long-term savings. Your choice will determine available investment options and tax treatment.",
      content: (
        <div>
          <QuestionWithDot>Select Account Type -</QuestionWithDot>
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
      tooltip: "Learn about different account types and their benefits",
    },
    {
      label: "Account Details",
      description: "Step 3: Configure account specifics",
      detailedInfo:
        "Configure your account ownership structure and investment preferences. Individual accounts are for personal use, joint accounts allow shared access, and entity accounts are for businesses or trusts. Retirement accounts have specific tax-advantaged structures.",
      content:
        accountType === "brokerage" ? (
          <BrokerageOptions />
        ) : (
          <RetirementOptions />
        ),
      icon: IconPigMoney,
      tooltip: "Customize your account based on your investment needs",
    },
    {
      label: "Personal Information",
      description: "Step 4: Provide basic identification details",
      detailedInfo:
        "Accurate personal information ensures we can properly service your account and comply with regulatory requirements. This includes legal name, date of birth, and contact information. Your data is protected with industry-standard security measures.",
      content: <PersonalInfoForm />,
      icon: IconUser,
      tooltip: "Your information is securely stored and encrypted",
    },
    {
      label: "Citizenship & Tax Information",
      description: "Step 5: Provide citizenship and tax details",
      detailedInfo:
        "Citizenship status determines tax reporting requirements and account eligibility. US citizens and residents have different tax obligations than non-residents. Accurate tax identification numbers are required for IRS reporting purposes.",
      content: <CitizenshipForm />,
      icon: IconKey,
      tooltip: "Tax information is required for regulatory compliance",
    },
    {
      label: "Financial Profile",
      description: "Step 6: Share your financial background",
      detailedInfo:
        "Understanding your financial situation helps us provide appropriate investment recommendations and comply with suitability requirements. This information is used to ensure investment recommendations align with your financial capacity and experience level.",
      content: <FinancialInformationForm />,
      icon: IconUsers,
      tooltip: "This helps us tailor investment options to your situation",
    },
    {
      label: "Regulatory Compliance",
      description: "Step 7: Answer required compliance questions",
      detailedInfo:
        "These questions help identify potential conflicts of interest and ensure compliance with FINRA and SEC regulations. They screen for relationships with financial institutions, public company affiliations, and other situations that might require special handling.",
      content: <ComplianceQuestions />,
      icon: IconScale,
      tooltip: "Required by financial regulatory authorities",
    },
    {
      label: "Account Funding & Purpose",
      description: "Step 8: Describe funding sources and account objectives",
      detailedInfo:
        "Understanding the source of your funds and your investment objectives helps us comply with anti-money laundering regulations and provide suitable investment recommendations. This includes identifying foreign sources of funds and specific account purposes.",
      content: <AccountPurposeForm />,
      icon: IconPigMoney,
      tooltip: "Helps ensure appropriate account usage and compliance",
    },
    {
      label: "Investor Accreditation",
      description: "Step 9: Verify investor qualification status",
      detailedInfo:
        "Accredited investor status determines eligibility for certain private investment opportunities. Verification can be done through third-party services or self-attestation with supporting documentation. Different accreditation criteria apply based on income, net worth, or professional credentials.",
      content: <AccreditationForm />,
      icon: IconScale,
      tooltip: "Determines access to certain investment opportunities",
    },
    {
      label: "Trusted Contact Person",
      description:
        "Step 10: Designate emergency contact for account protection",
      detailedInfo:
        "A trusted contact person helps protect your account by providing someone we can contact in case of concerns about your health, cognitive ability, or potential financial exploitation. This person cannot transact on your account but can help ensure your financial safety.",
      content: <TrustedContactPersonForm />,
      icon: IconUserCircle,
      tooltip: "Added security feature for account protection",
    },
    {
      label: "Account Security",
      description: "Step 11: Set up login credentials",
      detailedInfo:
        "Create secure login credentials to protect your account. Your user ID must be unique, and your password should include a combination of letters, numbers, and special characters. Strong credentials help prevent unauthorized access to your investment account.",
      content: <AccountCredentialsForm />,
      icon: IconKey,
      tooltip: "Create strong credentials to protect your account",
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
