import React from "react";
import { Stack, Group, TextInput, Select } from "@mantine/core";

const PersonalInfoForm: React.FC<any> = () => {
  const prefixOptions = [
    { value: "mr", label: "Mr." },
    { value: "mrs", label: "Mrs." },
    { value: "ms", label: "Ms." },
    { value: "dr", label: "Dr." },
  ];

  const suffixOptions = [
    { value: "jr", label: "Jr." },
    { value: "sr", label: "Sr." },
    { value: "ii", label: "II" },
    { value: "iii", label: "III" },
    { value: "iv", label: "IV" },
  ];

  const phoneTypeOptions = [
    { value: "mobile", label: "Mobile" },
    { value: "home", label: "Home" },
    { value: "work", label: "Work" },
  ];

  const countryCodeOptions = [
    { value: "+1", label: "+1 (US)" },
    { value: "+44", label: "+44 (UK)" },
    { value: "+91", label: "+91 (IN)" },
  ];

  return (
    <Stack gap="md">
      <Group grow>
        <Select
          label="Prefix"
          placeholder="Select Prefix"
          data={prefixOptions}
        />
        <TextInput label="First Name" placeholder="Enter first name" required />
      </Group>

      <TextInput label="Middle Initial" placeholder="Enter middle initial" />

      <Group grow>
        <TextInput label="Last Name" placeholder="Enter last name" required />
        <Select
          label="Suffix"
          placeholder="Select Suffix"
          data={suffixOptions}
        />
      </Group>

      <Group grow>
        <Select
          label="Phone Type"
          placeholder="Select Phone Type"
          data={phoneTypeOptions}
        />
        <Select
          label="Country Code"
          placeholder="Select Country Code"
          data={countryCodeOptions}
        />
      </Group>

      <TextInput
        label="Phone Number"
        placeholder="Enter phone number"
        required
      />

      <TextInput
        label="Email Address"
        placeholder="Enter email address"
        type="email"
        required
      />
    </Stack>
  );
};

export default PersonalInfoForm;
