"use client";

import {
  Box,
  Group,
  Tabs,
  Text,
  Divider,
  Stack,
  Button,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useState } from "react";

const Alerts = () => {
  const [activeTab, setActiveTab] = useState<string | null>("all");
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Box
      p="md"
      bg={dark ? theme.colors.dark[7] : theme.white}
      style={{
        borderRadius: theme.radius.md,
        border: `1px solid ${
          dark ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
      }}
    >
      {/* Header */}
      <Group justify="space-between" mb="sm">
        <Text fw={600} c={dark ? "white" : "black"}>
          Alerts (2)
        </Text>
        <Button size="xs" variant="outline">
          Message Center
        </Button>
      </Group>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        styles={{
          tab: {
            color: dark ? theme.white : theme.black,
            "&[data-active]": {
              borderBottom: `2px solid ${
                dark ? theme.colors.gray[2] : theme.colors.gray[9]
              }`,
              fontWeight: 600,
            },
          },
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="all">All</Tabs.Tab>
          <Tabs.Tab value="account">Account Alerts</Tabs.Tab>
          <Tabs.Tab value="symbol">Symbol Alerts</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Divider my="sm" />

      {/* Alerts List */}
      <Stack gap="sm">
        <Box>
          <Text fw={600} c={dark ? "white" : "black"}>
            New logon to your account
          </Text>
          <Text size="sm" c="dimmed">
            Sep 11, 2025 6:47 AM ET
          </Text>
        </Box>

        <Divider />

        <Box>
          <Text fw={600} c={dark ? "white" : "black"}>
            Changes to your E*TRADE from Morgan Stanley phone number
          </Text>
          <Text size="sm" c="dimmed">
            Sep 10, 2025 4:16 PM ET
          </Text>
        </Box>
      </Stack>

      <Divider my="sm" />

      {/* Footer links */}
      <Group gap="sm">
        <Button size="xs" variant="outline" color="gray">
          View all
        </Button>
        <Text size="sm" c="dimmed">
          |
        </Text>
        <Button size="xs" variant="outline" color="gray">
          Set and manage alerts
        </Button>
      </Group>
    </Box>
  );
};

export default Alerts;
