import React from "react";
import {
  Box,
  Text,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";

const WatchList = () => {
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
        WatchList
      </Text>
    </Box>
  );
};

export default WatchList;
