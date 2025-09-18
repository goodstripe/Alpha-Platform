import React from "react";
import {
  NumberInput,
  Select,
  Group,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";

interface PhoneNumberInputWithCountryCodeProps {
  value?: string;
  onChange?: (value: string) => void;
}

const PhoneNumberInputWithCountryCode: React.FC<
  PhoneNumberInputWithCountryCodeProps
> = ({ value, onChange }) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const match = value?.match(/^(\+\d+)(.*)$/);
  const initialCode = match?.[1] || "+1";
  const initialNumber = match?.[2] || "";

  const [countryCode, setCountryCode] = React.useState(initialCode);
  const [phoneNumber, setPhoneNumber] = React.useState<string>(initialNumber);

  React.useEffect(() => {
    if (onChange) {
      onChange(`${countryCode}${phoneNumber}`);
    }
  }, [countryCode, phoneNumber, onChange]);

  return (
    <Group
      gap="sm"
      align="flex-start"
      mt={10}
      style={{
        color: colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      }}
    >
      <Select
        size="sm"
        data={[
          { value: "+1", label: "+1 (US)" },
          { value: "+44", label: "+44 (UK)" },
          { value: "+30", label: "+30 (Greece)" },
        ]}
        value={countryCode}
        onChange={(val) => val && setCountryCode(val)}
        style={{ width: 95 }}
        label="Country Code"
      />
      <NumberInput
        value={phoneNumber}
        onChange={(val) =>
          setPhoneNumber(typeof val === "number" ? String(val) : "")
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
