import React, { useState } from "react";
import { NumberInput, Select, Group } from "@mantine/core";

const PhoneNumberInputWithCountryCode: React.FC = () => {
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState<number | undefined>(undefined);

  return (
    <Group gap="sm" align="flex-start" mt={10}>
      <Select
        size="sm"
        data={[
          { value: "+1", label: "+1 (US)" },
          { value: "+44", label: "+44 (UK)" },
          { value: "+30", label: "+30 (Greece)" },
        ]}
        value={countryCode}
        onChange={(value) => value && setCountryCode(value)}
        style={{ width: 95 }}
        label="Country Code"
      />
      <NumberInput
        value={phoneNumber}
        onChange={(value) =>
          setPhoneNumber(typeof value === "number" ? value : undefined)
        }
        withAsterisk
        placeholder="Enter phone number"
        label="Phone Number"
        min={0}
        hideControls
        style={{ flex: 1 }}
      />
    </Group>
  );
};

export default PhoneNumberInputWithCountryCode;
