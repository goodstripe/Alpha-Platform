import { useState } from "react";
import { Text, TextInput, Group, Box, Anchor } from "@mantine/core";
import PhoneNumberInputWithCountryCode from "@/app/components/NumberInputWithCountryCode/NumberInputWithCountryCode";

const LoginSwitcher = () => {
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");

  return (
    <Box>
      <Group justify="space-between" mb="md">
        <Text size="sm" c={"dark"}>
          {loginMethod === "phone" ? "Phone Login" : "Email Login"}
        </Text>

        <Anchor
          component="button"
          type="button"
          onClick={() =>
            setLoginMethod((prev) => (prev === "phone" ? "email" : "phone"))
          }
          size="sm"
        >
          {loginMethod === "phone" ? "Email Login" : "Phone Login"}
        </Anchor>
      </Group>

      {loginMethod === "phone" ? (
        <PhoneNumberInputWithCountryCode />
      ) : (
        <TextInput label="" placeholder="Enter your email" />
      )}
    </Box>
  );
};

export default LoginSwitcher;
