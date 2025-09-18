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
import PersonalInfoForm from "../components/AccordionStep/Personal-Information/PersonalInfoForm";
import PhoneNumberInputWithCountryCode from "../components/NumberInputWithCountryCode/NumberInputWithCountryCode";
import { useRouter } from "next/navigation";

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

// Form data interfaces
interface FormData {
  customerVerification: {
    isExistingCustomer: string;
  };
  accountType: {
    type: string;
  };
  accountDetails: {
    brokerageType: string;
    retirementType: string;
  };
  citizenship: {
    status: string;
    ssn: string;
    secondCountry: string;
    taxId: string;
  };
  financialInfo: {
    annualIncome: string;
    liquidNetWorth: string;
    totalNetWorth: string;
    investmentExperience: string;
  };
  compliance: {
    question1: string;
    question2: string;
    question3: string;
    question4: string;
  };
  accountPurpose: {
    source: string;
    foreignFunds: string;
    purpose: string;
  };
  accreditation: {
    isAccredited: string;
    verificationMethod: string;
    documents: File[];
  };
  trustedContact: {
    designate: string;
    firstName: string;
    lastName: string;
    countryCode: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
  credentials: {
    userId: string;
    password: string;
    confirmPassword: string;
  };
}

const BrokerageOptions: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <div>
      <Text size="md" mb={"md"}>
        Select an Account -
      </Text>

      <Radio.Group value={value} onChange={onChange}>
        <Stack mt="xs">
          <Radio value="single" label="Single Account" />
          <Radio value="joint" label="Joint Account" />
          <Radio value="entity" label="Entity Account" />
        </Stack>
      </Radio.Group>
    </div>
  );
};

const RetirementOptions: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <div>
      <Stack gap={5}>
        <Text size="md">Account Details</Text>
        <Text size="xs" mb="md">
          Select Type of Account -
        </Text>
      </Stack>

      <Radio.Group withAsterisk value={value} onChange={onChange}>
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

const CitizenshipForm: React.FC<{
  data: FormData["citizenship"];
  onChange: (data: Partial<FormData["citizenship"]>) => void;
}> = ({ data, onChange }) => {
  return (
    <Box>
      <Radio.Group
        label="Select your citizenship status"
        value={data.status}
        onChange={(value) => onChange({ status: value })}
      >
        <Stack mt={"xs"}>
          <Radio value="US Citizen" label="US Citizen" />
          <Radio value="Dual Citizen" label="Dual Citizen" />
          <Radio value="Non US Citizen" label="Non US Citizen" />
        </Stack>
      </Radio.Group>

      <Stack mt="md" gap="md">
        {(data.status === "US Citizen" || data.status === "Dual Citizen") && (
          <TextInput
            withAsterisk
            label="Social Security Number"
            placeholder="Enter your SSN"
            value={data.ssn}
            onChange={(event) => onChange({ ssn: event.currentTarget.value })}
          />
        )}

        {data.status === "Dual Citizen" && (
          <TextInput
            withAsterisk
            label="Second Country Citizenship"
            placeholder="Enter second country's citizenship"
            value={data.secondCountry}
            onChange={(event) =>
              onChange({ secondCountry: event.currentTarget.value })
            }
          />
        )}

        {data.status === "Non US Citizen" && (
          <TextInput
            withAsterisk
            label="Tax ID"
            placeholder="Enter your Tax ID"
            value={data.taxId}
            onChange={(event) => onChange({ taxId: event.currentTarget.value })}
          />
        )}
      </Stack>
    </Box>
  );
};

const FinancialInformationForm: React.FC<{
  data: FormData["financialInfo"];
  onChange: (data: Partial<FormData["financialInfo"]>) => void;
}> = ({ data, onChange }) => {
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
        value={data.annualIncome}
        onChange={(event) =>
          onChange({ annualIncome: event.currentTarget.value })
        }
      />

      <Select
        label="Liquid Net Worth"
        placeholder="Select Range"
        withAsterisk
        data={netOptions}
        value={data.liquidNetWorth}
        onChange={(value) =>
          value !== null && onChange({ liquidNetWorth: value })
        }
      />

      <Select
        label="Total Net Worth"
        placeholder="Select Range"
        withAsterisk
        data={netOptions}
        value={data.totalNetWorth}
        onChange={(value) =>
          value !== null && onChange({ totalNetWorth: value })
        }
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
        value={data.investmentExperience}
        onChange={(value) =>
          value !== null && onChange({ investmentExperience: value })
        }
      />
    </Stack>
  );
};

const ComplianceQuestions: React.FC<{
  data: FormData["compliance"];
  onChange: (data: Partial<FormData["compliance"]>) => void;
}> = ({ data, onChange }) => {
  return (
    <Stack gap="lg">
      <div>
        <Text size="sm" fw={500} mb="xs">
          Do you, or does a family or household member, work for a broker-dealer
          or a securities or futures exchange, futures commission merchant,
          retail foreign exchange dealer, or securities or futures regulator?
        </Text>
        <Radio.Group
          name="compliance1"
          value={data.question1}
          onChange={(value) => onChange({ question1: value })}
        >
          <Group mt="xs">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
      </div>

      <div>
        <Text size="sm" fw={500} mb="xs">
          Do you, or does a family or household member, serve on a board of
          directors, or as another policymaker at a public company?
        </Text>
        <Radio.Group
          name="compliance2"
          value={data.question2}
          onChange={(value) => onChange({ question2: value })}
        >
          <Group mt="xs">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
      </div>

      <div>
        <Text size="sm" fw={500} mb="xs">
          Do you, or does a family or household member, own 10% or more of a
          public company?
        </Text>
        <Radio.Group
          name="compliance3"
          value={data.question3}
          onChange={(value) => onChange({ question3: value })}
        >
          <Group mt="xs">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
      </div>

      <div>
        <Text size="sm" fw={500} mb="xs">
          Have you been notified by the IRS that you are subject to backup
          withholding?
        </Text>
        <Radio.Group
          name="compliance4"
          value={data.question4}
          onChange={(value) => onChange({ question4: value })}
        >
          <Group mt="xs">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
      </div>
    </Stack>
  );
};

const AccountPurposeForm: React.FC<{
  data: FormData["accountPurpose"];
  onChange: (data: Partial<FormData["accountPurpose"]>) => void;
}> = ({ data, onChange }) => {
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
        value={data.source}
        onChange={(value) => value !== null && onChange({ source: value })}
      />

      <Text size="sm" fw={500}>
        Does any portion of your net worth and funding come from outside the US?
      </Text>
      <Radio.Group
        value={data.foreignFunds}
        onChange={(value) => onChange({ foreignFunds: value })}
      >
        <Stack>
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </Stack>
      </Radio.Group>

      <Text size="sm" fw={500}>
        What is the purpose and expected use of this account?
      </Text>
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
        value={data.purpose}
        onChange={(value) => value !== null && onChange({ purpose: value })}
      />
    </Stack>
  );
};

const AccreditationForm: React.FC<{
  data: FormData["accreditation"];
  onChange: (data: Partial<FormData["accreditation"]>) => void;
}> = ({ data, onChange }) => {
  const openRef = useRef<() => void>(null);

  return (
    <Stack gap="md">
      <Text size="sm" fw={500}>
        Are you an accredited investor?
      </Text>
      <Radio.Group
        value={data.isAccredited}
        onChange={(value) => onChange({ isAccredited: value })}
      >
        <Stack>
          <Radio value="yes" label="Yes I am" />
          <Radio value="no" label="I am not an accredited investor" />
        </Stack>
      </Radio.Group>

      {data.isAccredited === "yes" && (
        <>
          <Text size="sm" fw={500}>
            Please choose how you would like to verify your accreditation?
          </Text>
          <Radio.Group
            value={data.verificationMethod}
            onChange={(value) => onChange({ verificationMethod: value })}
          >
            <Stack gap={"md"}>
              <Radio value="third_party" label="Third Party Verification" />
              <Radio value="self_attestation" label="Self Attestation" />
            </Stack>
          </Radio.Group>
        </>
      )}

      {data.isAccredited === "yes" &&
        data.verificationMethod === "self_attestation" && (
          <>
            <Text size="sm" fw={500}>
              Upload Documents
            </Text>
            <Dropzone
              onDrop={(files) => onChange({ documents: files })}
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
            {data.documents?.length > 0 && (
              <Text size="sm">{data.documents.length} file(s) selected</Text>
            )}
          </>
        )}
    </Stack>
  );
};

const TrustedContactPersonForm: React.FC<{
  data: FormData["trustedContact"];
  onChange: (data: Partial<FormData["trustedContact"]>) => void;
}> = ({ data, onChange }) => {
  return (
    <Stack gap="md">
      <Text size="sm" fw={500}>
        Important note about designating a trusted contact person.
      </Text>

      <Radio.Group
        value={data.designate}
        onChange={(value) => onChange({ designate: value })}
      >
        <Stack>
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </Stack>
      </Radio.Group>

      {data.designate === "yes" && (
        <Stack gap="md">
          <TextInput
            label="First Name"
            placeholder="Enter first name"
            value={data.firstName}
            onChange={(event) =>
              onChange({ firstName: event.currentTarget.value })
            }
          />
          <TextInput
            label="Last Name"
            placeholder="Enter last name"
            value={data.lastName}
            onChange={(event) =>
              onChange({ lastName: event.currentTarget.value })
            }
          />
          <Select
            label="Country Code"
            placeholder="Select Country Code"
            data={[
              { value: "+1", label: "+1 (USA)" },
              { value: "+44", label: "+44 (UK)" },
              { value: "+91", label: "+91 (India)" },
            ]}
            value={data.countryCode}
            onChange={(value) =>
              value !== null && onChange({ countryCode: value })
            }
          />
          <PhoneNumberInputWithCountryCode
            value={data.phoneNumber}
            onChange={(value) => onChange({ phoneNumber: value })}
          />
          <TextInput
            label="Email Address"
            placeholder="Enter email address"
            value={data.email}
            onChange={(event) => onChange({ email: event.currentTarget.value })}
          />
          <TextInput
            label="Relationship"
            placeholder="Enter relationship"
            value={data.relationship}
            onChange={(event) =>
              onChange({ relationship: event.currentTarget.value })
            }
          />
        </Stack>
      )}
    </Stack>
  );
};

const AccountCredentialsForm: React.FC<{
  data: FormData["credentials"];
  onChange: (data: Partial<FormData["credentials"]>) => void;
}> = ({ data, onChange }) => {
  return (
    <Stack gap="md">
      <TextInput
        label="User ID"
        placeholder="Choose a user ID"
        value={data.userId}
        onChange={(event) => onChange({ userId: event.currentTarget.value })}
        required
      />

      <PasswordInput
        label="Password"
        placeholder="Create a password"
        value={data.password}
        onChange={(event) => onChange({ password: event.currentTarget.value })}
        required
      />

      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm your password"
        value={data.confirmPassword}
        onChange={(event) =>
          onChange({ confirmPassword: event.currentTarget.value })
        }
        required
      />
    </Stack>
  );
};

const Onboarding: React.FC = () => {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Centralized form data state
  const [formData, setFormData] = useState<FormData>({
    customerVerification: { isExistingCustomer: "" },
    accountType: { type: "" },
    accountDetails: { brokerageType: "", retirementType: "" },
    citizenship: { status: "", ssn: "", secondCountry: "", taxId: "" },
    financialInfo: {
      annualIncome: "",
      liquidNetWorth: "",
      totalNetWorth: "",
      investmentExperience: "",
    },
    compliance: { question1: "", question2: "", question3: "", question4: "" },
    accountPurpose: { source: "", foreignFunds: "", purpose: "" },
    accreditation: { isAccredited: "", verificationMethod: "", documents: [] },
    trustedContact: {
      designate: "",
      firstName: "",
      lastName: "",
      countryCode: "",
      phoneNumber: "",
      email: "",
      relationship: "",
    },
    credentials: { userId: "", password: "", confirmPassword: "" },
  });

  const updateFormData = <K extends keyof FormData>(
    section: K,
    data: Partial<FormData[K]>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));

    // If user is editing a completed step, remove it from completed steps
    // so the submit button appears again
    if (completedSteps.includes(active)) {
      setCompletedSteps((prev) => prev.filter((step) => step !== active));
    }
  };

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
      const updatedSteps = [...completedSteps, active];
      setCompletedSteps(updatedSteps);

      if (updatedSteps.length === steps.length) {
        router.push("/dashboard");
      }
    }

    if (active < steps.length - 1) {
      setActive(active + 1);
    }
  };

  const steps: (Step & { detailedInfo: string })[] = [
    {
      label: "Customer Verification",
      description: "",
      detailedInfo:
        "Identity verification is required by financial regulations to prevent fraud. We use bank-level encryption to protect your personal information. Existing customers may have a streamlined verification process.",
      content: (
        <div>
          <Text size="sm" fw={500} mb="xs">
            Are you an existing customer?
          </Text>
          <Radio.Group
            value={formData.customerVerification.isExistingCustomer}
            onChange={(value) =>
              updateFormData("customerVerification", {
                isExistingCustomer: value,
              })
            }
          >
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
      description: "",
      detailedInfo:
        "Select the account type that best fits your financial goals. Brokerage accounts are for general investing, while retirement accounts offer tax advantages for long-term savings. Your choice will determine available investment options and tax treatment.",
      content: (
        <div>
          <Text size="sm" fw={500} mb="xs">
            Select Account Type -
          </Text>
          <Radio.Group
            value={formData.accountType.type}
            onChange={(value) => updateFormData("accountType", { type: value })}
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
      description: "",
      detailedInfo:
        "Configure your account ownership structure and investment preferences. Individual accounts are for personal use, joint accounts allow shared access, and entity accounts are for businesses or trusts. Retirement accounts have specific tax-advantaged structures.",
      content:
        formData.accountType.type === "brokerage" ? (
          <BrokerageOptions
            value={formData.accountDetails.brokerageType}
            onChange={(value) =>
              updateFormData("accountDetails", { brokerageType: value })
            }
          />
        ) : (
          <RetirementOptions
            value={formData.accountDetails.retirementType}
            onChange={(value) =>
              updateFormData("accountDetails", { retirementType: value })
            }
          />
        ),
      icon: IconPigMoney,
      tooltip: "Customize your account based on your investment needs",
    },
    {
      label: "Personal Information",
      description: "",
      detailedInfo:
        "Accurate personal information ensures we can properly service your account and comply with regulatory requirements. This includes legal name, date of birth, and contact information. Your data is protected with industry-standard security measures.",
      content: <PersonalInfoForm />, // This would need similar treatment if you want to persist its state
      icon: IconUser,
      tooltip: "Your information is securely stored and encrypted",
    },
    {
      label: "Citizenship & Tax Information",
      description: "",
      detailedInfo:
        "Citizenship status determines tax reporting requirements and account eligibility. US citizens and residents have different tax obligations than non-residents. Accurate tax identification numbers are required for IRS reporting purposes.",
      content: (
        <CitizenshipForm
          data={formData.citizenship}
          onChange={(data) => updateFormData("citizenship", data)}
        />
      ),
      icon: IconKey,
      tooltip: "Tax information is required for regulatory compliance",
    },
    {
      label: "Financial Profile",
      description: "",
      detailedInfo:
        "Understanding your financial situation helps us provide appropriate investment recommendations and comply with suitability requirements. This information is used to ensure investment recommendations align with your financial capacity and experience level.",
      content: (
        <FinancialInformationForm
          data={formData.financialInfo}
          onChange={(data) => updateFormData("financialInfo", data)}
        />
      ),
      icon: IconUsers,
      tooltip: "This helps us tailor investment options to your situation",
    },
    {
      label: "Regulatory Compliance",
      description: "",
      detailedInfo:
        "These questions help identify potential conflicts of interest and ensure compliance with FINRA and SEC regulations. They screen for relationships with financial institutions, public company affiliations, and other situations that might require special handling.",
      content: (
        <ComplianceQuestions
          data={formData.compliance}
          onChange={(data) => updateFormData("compliance", data)}
        />
      ),
      icon: IconScale,
      tooltip: "Required by financial regulatory authorities",
    },
    {
      label: "Account Funding & Purpose",
      description: "",
      detailedInfo:
        "Understanding the source of your funds and your investment objectives helps us comply with anti-money laundering regulations and provide suitable investment recommendations. This includes identifying foreign sources of funds and specific account purposes.",
      content: (
        <AccountPurposeForm
          data={formData.accountPurpose}
          onChange={(data) => updateFormData("accountPurpose", data)}
        />
      ),
      icon: IconPigMoney,
      tooltip: "Helps ensure appropriate account usage and compliance",
    },
    {
      label: "Investor Accreditation",
      description: "",
      detailedInfo:
        "Accredited investor status determines eligibility for certain private investment opportunities. Verification can be done through third-party services or self-attestation with supporting documentation. Different accreditation criteria apply based on income, net worth, or professional credentials.",
      content: (
        <AccreditationForm
          data={formData.accreditation}
          onChange={(data) => updateFormData("accreditation", data)}
        />
      ),
      icon: IconScale,
      tooltip: "Determines access to certain investment opportunities",
    },
    {
      label: "Trusted Contact Person",
      description: "",
      detailedInfo:
        "A trusted contact person helps protect your account by providing someone we can contact in case of concerns about your health, cognitive ability, or potential financial exploitation. This person cannot transact on your account but can help ensure your financial safety.",
      content: (
        <TrustedContactPersonForm
          data={formData.trustedContact}
          onChange={(data) => updateFormData("trustedContact", data)}
        />
      ),
      icon: IconUserCircle,
      tooltip: "Added security feature for account protection",
    },
    {
      label: "Account Security",
      description: "",
      detailedInfo:
        "Create secure login credentials to protect your account. Your user ID must be unique, and your password should include a combination of letters, numbers, and special characters. Strong credentials help prevent unauthorized access to your investment account.",
      content: (
        <AccountCredentialsForm
          data={formData.credentials}
          onChange={(data) => updateFormData("credentials", data)}
        />
      ),
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
        <Center mt={"xl"}>
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
