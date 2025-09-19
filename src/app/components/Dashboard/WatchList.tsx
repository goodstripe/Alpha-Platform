"use client";

import {
  Box,
  Group,
  Text,
  Select,
  Table,
  Button,
  Divider,
  Anchor,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const WatchListSnapshot = () => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const router = useRouter();

  const tableWrapperStyle = {
    border: `1px solid ${dark ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    borderRadius: theme.radius.md,
    overflow: "hidden",
  };

  const thStyles = {
    textAlign: "left" as const,
    padding: "10px 12px",
    fontWeight: 600,
    fontSize: theme.fontSizes.sm,
    backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[1],
    borderBottom: `1px solid ${
      dark ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  };

  const tdStyles = {
    padding: "10px 12px",
    fontSize: theme.fontSizes.sm,
    borderBottom: `1px solid ${
      dark ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  };

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
          Watch Lists Snapshot
        </Text>
      </Group>

      {/* Account Select + Actions */}
      <Group justify="space-between" mb="md">
        <Select
          data={["Test Watch Account", "Growth Portfolio", "Tech Stocks"]}
          defaultValue="Test Watch Account"
          w={250}
        />
        <Group gap="sm">
          <Button size="xs" variant="outline">
            Create New
          </Button>
          <Text size="sm" c="dimmed">
            |
          </Text>
          <Button size="xs" variant="outline">
            Edit
          </Button>
        </Group>
      </Group>

      {/* Table with wrapper */}
      <Box style={tableWrapperStyle}>
        <Table highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={thStyles}>Symbol</Table.Th>
              <Table.Th style={thStyles}></Table.Th>
              <Table.Th style={thStyles}>Last Price $</Table.Th>
              <Table.Th style={thStyles}>Change %</Table.Th>
              <Table.Th style={thStyles}>Change $</Table.Th>
              <Table.Th style={thStyles}>Volume</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td style={tdStyles}>
                <Group gap={4}>
                  <Anchor c={dark ? "white" : "black"} fw={600}>
                    AAPL
                  </Anchor>
                  <IconInfoCircle size={14} color={theme.colors.gray[6]} />
                </Group>
              </Table.Td>
              <Table.Td style={tdStyles}>
                <Button
                  size="xs"
                  variant="outline"
                  color="gray"
                  onClick={() => router.push("/trade")}
                >
                  Trade
                </Button>
              </Table.Td>
              <Table.Td style={tdStyles}>$238.62</Table.Td>
              <Table.Td style={{ ...tdStyles, color: theme.colors.red[6] }}>
                -0.15%
              </Table.Td>
              <Table.Td style={{ ...tdStyles, color: theme.colors.red[6] }}>
                -$0.37
              </Table.Td>
              <Table.Td style={tdStyles}>14.91M</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Box>

      <Divider my="sm" />

      {/* Footer */}
      <Group justify="space-between" align="center">
        <Group gap="sm">
          <Text size="sm" c={dark ? "white" : "black"}>
            1 total
          </Text>
          <Text size="sm" c="dimmed">
            |
          </Text>
          <Button size="xs" variant="outline" color="gray">
            View full watch list
          </Button>
        </Group>

        <Group gap={4}>
          <Text size="xs" c="dimmed">
            Delayed quotes as of Sep 18, 2025, 11:08 AM ET
          </Text>
          <IconInfoCircle size={14} color={theme.colors.gray[6]} />
        </Group>
      </Group>
    </Box>
  );
};

export default WatchListSnapshot;
