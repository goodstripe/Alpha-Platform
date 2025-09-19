"use client";

import {
  Card,
  Table,
  Text,
  Group,
  Avatar,
  useMantineTheme,
  useMantineColorScheme,
  ScrollArea,
  Box,
  Badge,
} from "@mantine/core";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react";

export default function Orders() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  const data = [
    {
      symbol: "CART",
      company: "Maplebear Inc.",
      logo: "https://logo.clearbit.com/instacart.com",
      side: "Buy",
      status: "Filled",
      date: "Apr 23, 2024",
      type: "Market",
      amount: "$1,943",
      shares: "57 shares at $34.08",
      profitLoss: 42.39,
    },
    {
      symbol: "AAPL",
      company: "Apple Inc.",
      logo: "https://logo.clearbit.com/apple.com",
      side: "Buy",
      status: "Filled",
      date: "Apr 25, 2024",
      type: "Limit",
      amount: "$15,230",
      shares: "90 shares at $169.22",
      profitLoss: 320.44,
    },
    {
      symbol: "TSLA",
      company: "Tesla Inc.",
      logo: "https://logo.clearbit.com/tesla.com",
      side: "Sell",
      status: "Filled",
      date: "Apr 26, 2024",
      type: "Market",
      amount: "$9,875",
      shares: "35 shares at $282.14",
      profitLoss: -210.15,
    },
    {
      symbol: "AMZN",
      company: "Amazon.com Inc.",
      logo: "https://logo.clearbit.com/amazon.com",
      side: "Buy",
      status: "Filled",
      date: "Apr 26, 2024",
      type: "Market",
      amount: "$12,540",
      shares: "95 shares at $132.00",
      profitLoss: 187.67,
    },
    {
      symbol: "MSFT",
      company: "Microsoft Corp.",
      logo: "https://logo.clearbit.com/microsoft.com",
      side: "Buy",
      status: "Filled",
      date: "Apr 27, 2024",
      type: "Market",
      amount: "$20,450",
      shares: "110 shares at $185.00",
      profitLoss: 450.12,
    },
    {
      symbol: "GOOGL",
      company: "Alphabet Inc.",
      logo: "https://logo.clearbit.com/abc.xyz",
      side: "Buy",
      status: "Filled",
      date: "Apr 28, 2024",
      type: "Limit",
      amount: "$18,200",
      shares: "60 shares at $303.33",
      profitLoss: 390.65,
    },
    {
      symbol: "NFLX",
      company: "Netflix Inc.",
      logo: "https://logo.clearbit.com/netflix.com",
      side: "Sell",
      status: "Filled",
      date: "Apr 28, 2024",
      type: "Market",
      amount: "$9,720",
      shares: "25 shares at $388.80",
      profitLoss: -110.55,
    },
    {
      symbol: "NVDA",
      company: "NVIDIA Corp.",
      logo: "https://logo.clearbit.com/nvidia.com",
      side: "Buy",
      status: "Filled",
      date: "Apr 29, 2024",
      type: "Market",
      amount: "$22,300",
      shares: "50 shares at $446.00",
      profitLoss: 670.22,
    },
    {
      symbol: "META",
      company: "Meta Platforms Inc.",
      logo: "https://logo.clearbit.com/meta.com",
      side: "Buy",
      status: "Filled",
      date: "Apr 29, 2024",
      type: "Market",
      amount: "$14,150",
      shares: "40 shares at $353.75",
      profitLoss: 289.12,
    },
    {
      symbol: "AMD",
      company: "Advanced Micro Devices Inc.",
      logo: "https://logo.clearbit.com/amd.com",
      side: "Buy",
      status: "Filled",
      date: "Apr 30, 2024",
      type: "Limit",
      amount: "$8,600",
      shares: "100 shares at $86.00",
      profitLoss: 120.33,
    },
    {
      symbol: "INTC",
      company: "Intel Corp.",
      logo: "https://logo.clearbit.com/intel.com",
      side: "Sell",
      status: "Filled",
      date: "Apr 30, 2024",
      type: "Market",
      amount: "$6,250",
      shares: "150 shares at $41.66",
      profitLoss: -95.42,
    },
    {
      symbol: "DIS",
      company: "Walt Disney Co.",
      logo: "https://logo.clearbit.com/disney.com",
      side: "Buy",
      status: "Filled",
      date: "May 1, 2024",
      type: "Market",
      amount: "$7,800",
      shares: "65 shares at $120.00",
      profitLoss: 210.89,
    },
    {
      symbol: "UBER",
      company: "Uber Technologies Inc.",
      logo: "https://logo.clearbit.com/uber.com",
      side: "Buy",
      status: "Filled",
      date: "May 1, 2024",
      type: "Limit",
      amount: "$5,430",
      shares: "130 shares at $41.77",
      profitLoss: 76.19,
    },
    {
      symbol: "PYPL",
      company: "PayPal Holdings Inc.",
      logo: "https://logo.clearbit.com/paypal.com",
      side: "Sell",
      status: "Filled",
      date: "May 2, 2024",
      type: "Market",
      amount: "$4,620",
      shares: "70 shares at $66.00",
      profitLoss: -62.44,
    },
    {
      symbol: "SHOP",
      company: "Shopify Inc.",
      logo: "https://logo.clearbit.com/shopify.com",
      side: "Buy",
      status: "Filled",
      date: "May 2, 2024",
      type: "Market",
      amount: "$6,900",
      shares: "90 shares at $76.66",
      profitLoss: 98.22,
    },
  ];

  return (
    <Card
      shadow="sm"
      radius="md"
      p="md"
      withBorder
      style={{
        backgroundColor: isDark ? theme.colors.dark[7] : theme.white,
      }}
    >
      {/* Title */}
      <Text fw={600} mb="xs" c={isDark ? theme.white : theme.black}>
        Orders
      </Text>

      {/* Table container with border + radius like Positions */}
      <Box
        style={{
          border: `1px solid ${
            isDark ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
          borderRadius: theme.radius.md,
          overflow: "hidden",
        }}
      >
        <ScrollArea.Autosize mah={700}>
          <Table
            highlightOnHover
            withRowBorders
            horizontalSpacing="sm"
            verticalSpacing="xs"
            stickyHeader
            bg={isDark ? theme.colors.dark[6] : theme.white}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Symbol</Table.Th>
                <Table.Th>Side</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Type</Table.Th>
                <Table.Th>Amount</Table.Th>
                <Table.Th>Profit/Loss</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {data.map((row, i) => (
                <Table.Tr key={i}>
                  {/* Symbol + Company */}
                  <Table.Td>
                    <Group gap="xs">
                      <Avatar src={row.logo} size="sm" radius="sm" />
                      <Box>
                        <Text fw={600} size="xs">
                          {row.symbol}
                        </Text>
                        <Text size="xs" c="dimmed">
                          {row.company}
                        </Text>
                      </Box>
                    </Group>
                  </Table.Td>

                  {/* Side with badge */}
                  <Table.Td>
                    {row.side === "Buy" ? (
                      <Badge
                        color="green"
                        variant="light"
                        leftSection={<IconArrowUpRight size={14} />}
                        radius="sm"
                      >
                        Buy
                      </Badge>
                    ) : (
                      <Badge
                        color="red"
                        variant="light"
                        leftSection={<IconArrowDownRight size={14} />}
                        radius="sm"
                      >
                        Sell
                      </Badge>
                    )}
                  </Table.Td>

                  {/* Status + Date */}
                  <Table.Td>
                    <Text fw={600} size="xs">
                      {row.status}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {row.date}
                    </Text>
                  </Table.Td>

                  {/* Type */}
                  <Table.Td>
                    <Text size="xs">{row.type}</Text>
                  </Table.Td>

                  {/* Amount + Shares */}
                  <Table.Td>
                    <Text fw={600} size="xs">
                      {row.amount}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {row.shares}
                    </Text>
                  </Table.Td>

                  {/* Profit/Loss */}
                  <Table.Td>
                    <Text
                      fw={600}
                      size="xs"
                      c={
                        row.profitLoss < 0
                          ? theme.colors.red[6]
                          : theme.colors.green[6]
                      }
                    >
                      {row.profitLoss < 0 ? "-" : "+"}$
                      {Math.abs(row.profitLoss).toFixed(2)}
                    </Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea.Autosize>
      </Box>
    </Card>
  );
}
