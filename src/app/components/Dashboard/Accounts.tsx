"use client";

import React from "react";
import {
  Card,
  Text,
  Group,
  Stack,
  useMantineTheme,
  Divider,
  useComputedColorScheme,
} from "@mantine/core";
import CustomLineChart from "../Charts/CustomLineChart";

const chartData = [
  { period: "D", value: 10000 },
  { period: "W", value: 46000 },
  { period: "M", value: 20000 },
  { period: "3M", value: 48000 },
  { period: "Y", value: 44045 },
  { period: "Y", value: 20000 },
  { period: "Y", value: 50045 },
];

const Accounts: React.FC = () => {
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme("light");
  const dark = colorScheme === "dark";

  return (
    <Card
      withBorder
      radius="md"
      p="md"
      shadow="sm"
      style={{
        backgroundColor: dark ? theme.colors.dark[7] : theme.white,
      }}
    >
      <Stack gap="md">
        {/* Account Value */}
        <Card
          withBorder
          radius="md"
          shadow="sm"
          style={{
            backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[1],
          }}
        >
          <Stack gap="xs">
            <Text size="sm" c="dimmed">
              Account
            </Text>
            <Text fw={700} fz="xl">
              $44,045
            </Text>
            <Text c="red" fz="sm">
              -$8,844.65 (16.72%)
            </Text>

            <CustomLineChart />
          </Stack>
        </Card>

        {/* Market Value */}
        <Card
          withBorder
          radius="md"
          shadow="sm"
          style={{
            backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[1],
          }}
        >
          <Stack gap={0}>
            <Text size="sm" c="dimmed">
              Market Value
            </Text>
            <Text fw={600} fz="lg">
              $44,045
            </Text>
          </Stack>
        </Card>

        {/* Buying Power */}
        <Card
          withBorder
          radius="md"
          shadow="sm"
          style={{
            backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[1],
          }}
        >
          <Stack gap={0}>
            <Text size="sm" c="dimmed">
              Buying Power
            </Text>
            <Text fw={600} fz="lg">
              $54,724
            </Text>
          </Stack>
        </Card>

        {/* Balance Summary */}
        <Card
          withBorder
          radius="md"
          shadow="sm"
          style={{
            backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[0],
          }}
        >
          <Stack gap="xs">
            <Text size="sm" c="dimmed" fw={500}>
              Balance Summary
            </Text>
            <Divider />

            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Funds Available
              </Text>
              <Text fw={500}>$27,362</Text>
            </Group>

            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Pending Deposits
              </Text>
              <Text fw={500}>$0</Text>
            </Group>

            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Pending Settlement
              </Text>
              <Text fw={500}>$0</Text>
            </Group>

            <Divider />

            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Buying Power
              </Text>
              <Text fw={500}>$54,724</Text>
            </Group>

            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Equity Percentage
              </Text>
              <Text fw={500}>37.877%</Text>
            </Group>

            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Margin Used
              </Text>
              <Text fw={500}>$27,362</Text>
            </Group>
          </Stack>
        </Card>
      </Stack>
    </Card>
  );
};

export default Accounts;
