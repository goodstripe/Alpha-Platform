import React, { useState } from "react";
import { NumberInput, Select, Group } from "@mantine/core";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);

const dialCodes: Record<string, string> = {
  US: "1",
  IN: "91",
  GB: "44",
  CA: "1",
  AU: "61",
};

const countryList = Object.entries(countries.getNames("en")).map(
  ([code, name]) => ({
    value: code,
    label: `${name} (+${dialCodes[code] || "000"})`,
  })
);

const PhoneNumberInputWithCountryCode: React.FC = () => {
  const [countryCode, setCountryCode] = useState("IN");
  const [phoneNumber, setPhoneNumber] = useState<number | undefined>(undefined);

  return (
    <Group gap="sm" align="flex-start">
      <Select
        data={countryList}
        value={countryCode}
        onChange={(value) => value && setCountryCode(value)}
        style={{ width: 150 }}
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
