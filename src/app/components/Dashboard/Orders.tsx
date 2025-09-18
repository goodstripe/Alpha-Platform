import {
  Box,
  Text,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";

const Orders = () => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box
      h={585}
      p="md"
      style={{
        backgroundColor:
          colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
        borderRadius: theme.radius.md,
      }}
    >
      <Text ta="left" fw={600}>
        Orders
      </Text>
    </Box>
  );
};

export default Orders;
