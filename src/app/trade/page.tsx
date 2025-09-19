"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  Group,
  Select,
  Stack,
  Text,
  NumberInput,
  Button,
  Divider,
  SimpleGrid,
  Switch,
  Anchor,
  Tabs,
  useMantineTheme,
  useComputedColorScheme,
  Checkbox,
  ActionIcon,
  Grid,
} from "@mantine/core";
import { IconRefresh, IconHelpCircle } from "@tabler/icons-react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const chartData = [
  { day: "Thu", price: 240 },
  { day: "Fri", price: 238 },
  { day: "Mon", price: 235 },
  { day: "Tue", price: 231 },
  { day: "Wed", price: 227 },
];

const StockEtfOrder: React.FC = () => {
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme("light");
  const dark = colorScheme === "dark";

  const [tab, setTab] = useState("snapshot");
  const [timeframe, setTimeframe] = useState("5d");

  return (
    <Grid>
      <Grid.Col span={10}>
        <Box
          p="md"
          style={{
            backgroundColor: dark ? theme.colors.dark[7] : theme.colors.gray[0],
            borderRadius: theme.radius.md,
          }}
        >
          {/* Header */}
          <Group justify="space-between" mb="md">
            <Text fw={700} fz="lg">
              Stock/ETF Order
            </Text>
            <Group gap="md">
              <Group gap={4} c="dimmed" fz="sm">
                <ActionIcon variant="subtle" color="blue" size="sm">
                  <IconRefresh size={16} />
                </ActionIcon>
                <Text size="sm">Sep 11, 2025 7:41 AM ET</Text>
              </Group>
              <Anchor size="sm" c="blue">
                <Group gap={4}>
                  <IconHelpCircle size={14} /> Help
                </Group>
              </Anchor>
              <Group gap={6}>
                <Text size="sm" c="dimmed">
                  Defaults
                </Text>
                <Switch size="sm" />
              </Group>
            </Group>
          </Group>

          {/* Balances */}
          <Card
            withBorder
            radius="md"
            mb="md"
            style={{
              backgroundColor: dark ? theme.colors.dark[6] : theme.white,
            }}
          >
            <Group justify="space-between" align="center">
              {/* Left: Accounts */}
              <Box>
                <Text size="xs" c="dimmed" mb={4}>
                  Accounts
                </Text>
                <Select
                  data={["Individual Brokerage - 5754", "IRA - 8832"]}
                  defaultValue="Individual Brokerage - 5754"
                  size="sm"
                  w={220}
                />
              </Box>

              {/* Balances */}
              <Group gap="xl" align="center">
                <Stack gap={2} align="center">
                  <Text size="xs" c="dimmed">
                    Net account value
                  </Text>
                  <Text fw={600}>$0.00</Text>
                </Stack>

                <Stack gap={2} align="center">
                  <Text size="xs" c="dimmed">
                    Cash Purchasing Power
                  </Text>
                  <Text fw={600}>$0.00</Text>
                </Stack>

                <Stack gap={2} align="center">
                  <Text size="xs" c="dimmed">
                    Settled
                  </Text>
                  <Text fw={600}>$0.00</Text>
                </Stack>

                <Stack gap={2} align="center">
                  <Text size="xs" c="dimmed">
                    Unsettled
                  </Text>
                  <Text fw={600}>$0.00</Text>
                </Stack>
              </Group>

              {/* Right: Toggle link */}
              <Anchor size="sm" c="blue" style={{ whiteSpace: "nowrap" }}>
                Hide Balances
              </Anchor>
            </Group>
          </Card>

          {/* Main layout */}
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
            {/* Left: Order Form */}
            <Card
              withBorder
              radius="md"
              p="md"
              style={{
                backgroundColor: dark ? theme.colors.dark[6] : theme.white,
              }}
            >
              <Stack>
                {/* Symbol */}
                <Group justify="space-between" align="center">
                  <Box>
                    <Text fw={600}>AAPL APPLE INC COM</Text>
                    <Text size="xs" c="dimmed">
                      NSDQ
                    </Text>
                  </Box>
                  <Anchor size="sm" c="blue">
                    Refresh quote
                  </Anchor>
                </Group>

                {/* Prices row */}
                <Group gap="md" wrap="wrap">
                  <Box>
                    <Text size="xs" c="dimmed">
                      Last price x size / Exch
                    </Text>
                    <Text fw={500} c="green">
                      $227.37 +0.5800 (+0.26%)
                    </Text>
                  </Box>
                  <Box>
                    <Text size="xs" c="dimmed">
                      Bid x size
                    </Text>
                    <Text>$227.32 x 100</Text>
                  </Box>
                  <Box>
                    <Text size="xs" c="dimmed">
                      Ask x size
                    </Text>
                    <Text>$227.40 x 100</Text>
                  </Box>
                  <Box>
                    <Text size="xs" c="dimmed">
                      Volume
                    </Text>
                    <Text>280.08K</Text>
                  </Box>
                </Group>

                <Divider />

                {/* Action / Quantity */}
                <Group grow>
                  <Select
                    label="Action"
                    data={["Buy", "Sell"]}
                    defaultValue="Buy"
                  />
                  <NumberInput label="Quantity" placeholder="0" />
                </Group>

                {/* Price type / Limit price */}
                <Group grow>
                  <Select
                    label="Price type"
                    data={[
                      "Market",
                      "Market on close",
                      "Limit",
                      "Stop on quote",
                      "Stop limit on quote",
                      "Trailing stop $",
                      "Trailing stop %",
                    ]}
                    defaultValue="Limit"
                  />
                  <NumberInput
                    label="Limit price"
                    placeholder="0.00"
                    defaultValue={227.4}
                  />
                </Group>

                <Group grow>
                  <Select
                    placeholder="Select duration"
                    label="Duration"
                    defaultValue="good_day"
                    data={[
                      { value: "good_day", label: "Good for day" },
                      { value: "good_60", label: "Good for 60 days" },
                      { value: "gtd", label: "Good until date (GTD)" },
                      { value: "ioc", label: "Immediate or cancel" },
                      { value: "fok", label: "Fill or kill" },
                      {
                        value: "extended_day",
                        label: "Extended hrs day (7am-8pm ET)",
                      },
                      {
                        value: "extended_ioc",
                        label: "Extended hrs (immediate or cancel)",
                      },
                    ]}
                    w={250}
                  />
                  <Checkbox label="All-or-none" mt={"md"} />
                </Group>

                <Divider my={"md"} />

                <Group justify="flex-end" mt="sm">
                  <Button variant="outline">Save for later</Button>
                  <Button color="blue">Preview order</Button>
                </Group>
              </Stack>
            </Card>

            {/* Right: Snapshot */}
            <Card
              withBorder
              radius="md"
              p="md"
              style={{
                backgroundColor: dark ? theme.colors.dark[6] : theme.white,
              }}
            >
              <Stack gap="sm">
                {/* Tabs for snapshot */}
                <Tabs value={tab} onChange={(v) => setTab(v || "snapshot")}>
                  <Tabs.List grow>
                    <Tabs.Tab value="snapshot">Snapshot</Tabs.Tab>
                    <Tabs.Tab value="positions">Positions (0)</Tabs.Tab>
                    <Tabs.Tab value="orders">Open Orders (0)</Tabs.Tab>
                  </Tabs.List>
                </Tabs>

                {/* Chart timeframe filters */}
                <Group gap="sm">
                  {["1d", "5d", "3m", "1y"].map((t) => (
                    <Button
                      key={t}
                      size="xs"
                      variant={timeframe === t ? "filled" : "light"}
                      color="blue"
                      onClick={() => setTimeframe(t)}
                    >
                      {t}
                    </Button>
                  ))}
                </Group>

                {/* Chart */}
                <Box h={200}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <XAxis dataKey="day" stroke={theme.colors.gray[6]} />
                      <YAxis stroke={theme.colors.gray[6]} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="price"
                        stroke={theme.colors.blue[6]}
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>

                <Divider />

                {/* Disclosures */}
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">
                    Dividend yield/amount
                  </Text>
                  <Text fw={500}>0.46% / 0.26</Text>
                </Group>

                <Group justify="space-between">
                  <Text size="sm" c="dimmed">
                    Ex-dividend date
                  </Text>
                  <Text fw={500}>8/11/2025</Text>
                </Group>

                <Group justify="space-between">
                  <Text size="sm" c="dimmed">
                    Dividend payable date
                  </Text>
                  <Text fw={500}>8/14/2025</Text>
                </Group>

                <Text size="xs" c="dimmed" ta="center" mt="sm">
                  Last Refresh Sep 11, 2025 7:41 AM ET · Extended hours ·
                  Real-time quotes
                </Text>
              </Stack>
            </Card>
          </SimpleGrid>
        </Box>
      </Grid.Col>
      <Grid.Col></Grid.Col>
    </Grid>
  );
};

export default StockEtfOrder;
