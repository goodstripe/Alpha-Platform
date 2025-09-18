"use client";

import React from "react";
import {
  Card,
  Group,
  Text,
  Avatar,
  Menu,
  ActionIcon,
  rem,
} from "@mantine/core";
import {
  IconDotsVertical,
  IconArrowsLeftRight,
  IconBell,
  IconShare3,
  IconX,
} from "@tabler/icons-react";

interface WatchlistItemProps {
  symbol: string;
  company: string;
  price: number;
  change: number; // positive or negative
  logo?: string;
  onTrade?: () => void;
  onAlert?: () => void;
  onShare?: () => void;
  onRemove?: () => void;
}

export default function WatchlistItem({
  symbol,
  company,
  price,
  change,
  logo,
  onTrade,
  onAlert,
  onShare,
  onRemove,
}: WatchlistItemProps) {
  const isPositive = change >= 0;

  return (
    <Card withBorder padding="sm" radius="md" mb="xs">
      <Group justify="space-between" align="center">
        {/* Left Section */}
        <Group gap="xs">
          <Avatar src={logo} size={32} radius="sm" />
          <div>
            <Text fw={600} size="sm">
              {symbol}
            </Text>
            <Text size="xs" c="dimmed">
              {company}
            </Text>
          </div>
        </Group>

        {/* Right Section */}
        <Group gap="xs">
          <div style={{ textAlign: "right" }}>
            <Text fw={600} size="sm">
              {price?.toFixed(2)}
            </Text>
            <Text size="xs" c={isPositive ? "green" : "red"} fw={500}>
              {isPositive ? "+" : ""}
              {change?.toFixed(2)} ({((change / price) * 100).toFixed(2)}%)
            </Text>
          </div>

          {/* Menu */}
          <Menu shadow="md" width={160} position="bottom-end">
            <Menu.Target>
              <ActionIcon variant="subtle">
                <IconDotsVertical size={18} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                leftSection={<IconArrowsLeftRight size={16} />}
                onClick={onTrade}
              >
                Trade
              </Menu.Item>
              <Menu.Item
                leftSection={<IconBell size={16} />}
                disabled
                onClick={onAlert}
              >
                Set Alert
              </Menu.Item>
              <Menu.Item
                leftSection={<IconShare3 size={16} />}
                onClick={onShare}
              >
                Share
              </Menu.Item>
              <Menu.Item
                color="red"
                leftSection={<IconX size={16} />}
                onClick={onRemove}
              >
                Remove
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
    </Card>
  );
}
