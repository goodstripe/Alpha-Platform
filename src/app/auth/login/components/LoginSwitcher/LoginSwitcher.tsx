import { useState } from "react";
import { Text, TextInput, Select, Group, Box, Anchor } from "@mantine/core";

const LoginSwitcher = () => {
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");

  return (
    <Box>
      <Group justify="space-between" mb="md">
        <Text size="sm" c={loginMethod === "phone" ? "dark" : "gray"}>
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
        <Select
          label=""
          placeholder="Select country code"
          data={[
            { value: "+1", label: "+1 (US)" },
            { value: "+44", label: "+44 (UK)" },
            { value: "+30", label: "+30 (Greece)" },
          ]}
          defaultValue="+1"
        />
      ) : (
        <TextInput label="" placeholder="Enter your email" />
      )}
    </Box>
  );
};

export default LoginSwitcher;
