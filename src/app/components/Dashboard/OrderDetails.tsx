"use client";

import {
  Card,
  Text,
  Group,
  Badge,
  Divider,
  Table,
  useMantineTheme,
  useMantineColorScheme,
  Box,
  ScrollArea,
} from "@mantine/core";

export default function OrderDetails() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  // Example dummy data
  const order = {
    ticker: "CART",
    company: "Maplebear Inc.",
    type: "Market - Day",
    side: "Sell",
    amount: "$3,401.38",
    quantity: 100,
    avgPrice: "$34.02",
    portfolioPercent: "0.059%",
    status: "Filled",
    executions: [
      {
        status: "Approved",
        date: "2024-04-23 19:38:28",
        quantity: 0,
        price: "$0",
      },
      {
        status: "Filled",
        date: "2024-04-23 19:38:28",
        quantity: 100,
        price: "$34.02",
      },
    ],
  };

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
      {/* Header */}
      <Group justify="space-between" mb="md">
        <Text fw={600} c={isDark ? theme.white : theme.black}>
          Order Details
        </Text>
        <Badge
          color={order.status === "Filled" ? "green" : "yellow"}
          variant="light"
          radius="sm"
        >
          {order.status}
        </Badge>
      </Group>

      {/* Order Info Grid */}
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <div>
          <Text size="xs" c="dimmed">
            Ticker:
          </Text>
          <Text size="sm" fw={600}>
            {order.ticker}
          </Text>
        </div>

        <div>
          <Text size="xs" c="dimmed">
            Company:
          </Text>
          <Text size="sm" fw={600}>
            {order.company}
          </Text>
        </div>

        <div>
          <Text size="xs" c="dimmed">
            Type & Duration:
          </Text>
          <Text size="sm">{order.type}</Text>
        </div>

        <div>
          <Text size="xs" c="dimmed">
            Side:
          </Text>
          <Text
            size="sm"
            c={
              order.side === "Buy" ? theme.colors.green[6] : theme.colors.red[6]
            }
            fw={600}
          >
            {order.side}
          </Text>
        </div>

        <div>
          <Text size="xs" c="dimmed">
            Amount:
          </Text>
          <Text size="sm" fw={600}>
            {order.amount}
          </Text>
        </div>

        <div>
          <Text size="xs" c="dimmed">
            Quantity:
          </Text>
          <Text size="sm">{order.quantity}</Text>
        </div>

        <div>
          <Text size="xs" c="dimmed">
            Average Price:
          </Text>
          <Text size="sm">{order.avgPrice}</Text>
        </div>

        <div>
          <Text size="xs" c="dimmed">
            Portfolio Percent:
          </Text>
          <Text size="sm">{order.portfolioPercent}</Text>
        </div>
      </Box>

      <Divider my="sm" />

      {/* Executions */}
      <Text size="sm" fw={600} mb="xs" c={isDark ? theme.white : theme.black}>
        Executions
      </Text>

      <Box
        style={{
          border: `1px solid ${
            isDark ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
          borderRadius: theme.radius.md,
          overflow: "hidden",
        }}
      >
        <ScrollArea.Autosize mah={180}>
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
                <Table.Th>Status</Table.Th>
                <Table.Th>Date</Table.Th>
                <Table.Th>Quantity</Table.Th>
                <Table.Th>Price</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {order.executions.map((exe, index) => (
                <Table.Tr key={index}>
                  <Table.Td>
                    <Text size="xs">{exe.status}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs">{exe.date}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs">{exe.quantity}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs">{exe.price}</Text>
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
