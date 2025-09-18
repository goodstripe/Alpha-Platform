import {
  Box,
  Text,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";

const Accounts = () => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box
      h={700}
      p="md"
      style={{
        backgroundColor:
          colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
        borderRadius: theme.radius.md,
      }}
    >
      <Text ta="center" fw={600}>
        Accounts
      </Text>
    </Box>
  );
};

export default Accounts;
