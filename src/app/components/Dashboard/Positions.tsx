import {
  Box,
  Text,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";

const Positions = () => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box
      h={100}
      p="md"
      w={600}
      style={{
        backgroundColor:
          colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
        borderRadius: theme.radius.md,
      }}
    >
      <Text ta="left" fw={600}>
        Positions
      </Text>
    </Box>
  );
};

export default Positions;
