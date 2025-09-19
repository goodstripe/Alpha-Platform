"use client";

import React from "react";
import {
  Box,
  Text,
  Group,
  Stack,
  Button,
  Divider,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";

const LaunchPad = () => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const items = [
    {
      title: "Power E*TRADE Pro",
      description: "Customizable desktop trading",
      action: "Launch",
    },
    {
      title: "Power E*TRADE web",
      description: "Streaming browser-based trading",
      action: "Launch",
    },
    {
      title: "Paper Trading",
      description: "Simulated trading in Power E*TRADE web",
      action: "Sign up",
    },
    {
      title: "Bloomberg TV",
      description: "Live market news",
      action: "Launch",
    },
  ];

  return (
    <Box
      p="md"
      style={{
        borderRadius: theme.radius.md,
        border: `1px solid ${
          dark ? theme.colors.dark[5] : theme.colors.gray[3]
        }`,
        backgroundColor: dark ? theme.colors.dark[7] : theme.white,
      }}
    >
      {/* Header */}
      <Group gap="xs" mb="sm">
        <Text fw={600} c={dark ? theme.white : theme.black}>
          Launch Pad
        </Text>
      </Group>

      <Stack gap="sm">
        {items.map((item, index) => (
          <Box key={index}>
            <Group justify="space-between" align="flex-start">
              <Stack gap={0} style={{ flex: 1 }}>
                <Text fw={600} size="sm" c={dark ? "white" : "black"}>
                  {item.title}
                </Text>
                <Text size="xs" c={dark ? "dimmed" : "gray.6"}>
                  {item.description}
                </Text>
              </Stack>

              <Button
                variant="outline"
                size="xs"
                radius="md"
                style={{ minWidth: 70 }}
              >
                {item.action}
              </Button>
            </Group>

            {/* Divider between rows */}
            {index < items.length - 1 && (
              <Divider
                mt="sm"
                color={dark ? theme.colors.dark[4] : theme.colors.gray[3]}
              />
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default LaunchPad;
