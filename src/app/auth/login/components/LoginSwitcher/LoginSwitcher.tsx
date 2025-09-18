"use client";

import { useState } from "react";
import {
  Text,
  TextInput,
  Group,
  Box,
  Anchor,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import PhoneNumberInputWithCountryCode from "@/app/components/NumberInputWithCountryCode/NumberInputWithCountryCode";

const LoginSwitcher = () => {
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

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
        <TextInput
          label="Email"
          withAsterisk
          placeholder="Enter your email"
          size={isMobile ? "sm" : "md"}
        />
      )}
    </Box>
  );
};

export default LoginSwitcher;
