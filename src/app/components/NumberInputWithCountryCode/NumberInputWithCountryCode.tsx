"use client";

import React, { useState } from "react";
import {
  NumberInput,
  Select,
  Group,
  useMantineTheme,
  rem,
} from "@mantine/core";

interface PhoneNumberInputWithCountryCodeProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const PhoneNumberInputWithCountryCode: React.FC<
  PhoneNumberInputWithCountryCodeProps
> = ({ size = "md" }) => {
  const theme = useMantineTheme();
  const dark = theme.colorScheme === "dark";

  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState<number | undefined>(undefined);

  return (
    <Group
      gap="sm"
      align="flex-start"
      mt={10}
      wrap="nowrap"
      style={{ width: "100%" }}
    >
      <Select
        size={size}
        data={[
          { value: "+1", label: "+1 (US)" },
          { value: "+44", label: "+44 (UK)" },
          { value: "+30", label: "+30 (Greece)" },
        ]}
        value={countryCode}
        onChange={(value) => value && setCountryCode(value)}
        w={rem(95)}
        label="Country Code"
        styles={{
          input: {
            backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[1],
            borderColor: dark ? theme.colors.dark[4] : theme.colors.gray[3],
            "&:focus": {
              borderColor: theme.colors.blue[5],
            },
          },
        }}
      />

      <NumberInput
        size={size}
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
        styles={{
          input: {
            backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[1],
            borderColor: dark ? theme.colors.dark[4] : theme.colors.gray[3],
            "&:focus": {
              borderColor: theme.colors.blue[5],
            },
          },
        }}
      />
    </Group>
  );
};

export default PhoneNumberInputWithCountryCode;
