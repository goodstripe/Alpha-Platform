"use client";

import {
  Card,
  Table,
  Text,
  Group,
  Avatar,
  useMantineTheme,
  ScrollArea,
  Box,
  useMantineColorScheme,
} from "@mantine/core";
import Link from "next/link";

export default function Positions() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  const data = {
    symbol: "UDMY",
    name: "Udemy",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    lastPrice: 8.29,
    change: -0.36,
    changePercent: -4.11,
    quantity: 5313,
    marketValue: 44045,
    unrealizedGain: -3719.1,
    unrealizedGainPercent: -7.79,
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
      {/* Title */}
      <Text fw={600} size="sm" mb="xs" c={isDark ? theme.white : theme.black}>
        Positions
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
        <ScrollArea.Autosize mah={220}>
          <Table
            highlightOnHover
            withRowBorders
            horizontalSpacing="sm"
            verticalSpacing="xs"
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Symbol</Table.Th>
                <Table.Th>Last Price</Table.Th>
                <Table.Th>Qty</Table.Th>
                <Table.Th>Market Value</Table.Th>
                <Table.Th>Unreal. Gain</Table.Th>
                <Table.Th>Gain %</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Link
                    href="/stocks"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Group gap="xs">
                      <Avatar src={data.logo} size="sm" radius="sm" />
                      <Box>
                        <Text fw={600} size="xs">
                          {data.symbol}
                        </Text>
                        <Text size="xs" c="dimmed">
                          {data.name}
                        </Text>
                      </Box>
                    </Group>
                  </Link>
                </Table.Td>

                <Table.Td>
                  <Text fw={600} size="xs">
                    ${data.lastPrice.toFixed(2)}
                  </Text>
                  <Text
                    size="xs"
                    c={
                      data.change < 0
                        ? theme.colors.red[6]
                        : theme.colors.green[6]
                    }
                  >
                    {data.change.toFixed(2)} ({data.changePercent.toFixed(2)}%)
                  </Text>
                </Table.Td>

                <Table.Td>{data.quantity.toLocaleString()}</Table.Td>

                <Table.Td fw={600}>
                  ${data.marketValue.toLocaleString()}
                </Table.Td>

                <Table.Td
                  fw={600}
                  c={
                    data.unrealizedGain < 0
                      ? theme.colors.red[6]
                      : theme.colors.green[6]
                  }
                >
                  {data.unrealizedGain < 0 ? "-" : ""}$
                  {Math.abs(data.unrealizedGain).toLocaleString()}
                </Table.Td>

                <Table.Td
                  fw={600}
                  c={
                    data.unrealizedGainPercent < 0
                      ? theme.colors.red[6]
                      : theme.colors.green[6]
                  }
                >
                  {data.unrealizedGainPercent.toFixed(2)}%
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </ScrollArea.Autosize>
      </Box>
    </Card>
  );
}
