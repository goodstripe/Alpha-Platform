"use client";

import React from "react";
import {
  AppShell,
  Group,
  Text,
  TextInput,
  ActionIcon,
  Avatar,
  Menu,
  useMantineColorScheme,
  useMantineTheme,
  rem,
  Container,
  Flex,
  Box,
} from "@mantine/core";
import {
  IconSearch,
  IconSun,
  IconMoon,
  IconChevronDown,
  IconUser,
  IconLogout,
  IconSettings,
  IconHomeFilled,
  IconClockHour9Filled,
  IconArrowsExchange,
} from "@tabler/icons-react";
import Image from "next/image";

export default function ResponsiveHeader() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const dark = colorScheme === "dark";

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Container h="100%" p={0}>
          <Flex align="center" justify="space-between" h="100%">
            <Group gap="xs">
              <Image
                src="/aeonx_logo.png"
                alt="AEONX Logo"
                width={120}
                height={40}
              />

              {/* Search Section */}
              <Box
                style={{
                  maxWidth: 180,
                }}
                visibleFrom="md"
              >
                <TextInput
                  placeholder="Search"
                  leftSection={
                    <IconSearch
                      style={{ width: rem(16), height: rem(16) }}
                      stroke={1.5}
                    />
                  }
                  radius="md"
                  size="sm"
                  styles={{
                    input: {
                      backgroundColor: dark
                        ? theme.colors.dark[6]
                        : theme.colors.gray[1],
                      border: `1px solid ${
                        dark ? theme.colors.dark[4] : theme.colors.gray[3]
                      }`,
                      "&:focus": {
                        borderColor: theme.colors.blue[5],
                      },
                    },
                  }}
                />
              </Box>
            </Group>

            {/* Center Section - Navigation Icons (absolutely centered) */}
            <Group
              gap="sm"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              visibleFrom="md"
            >
              <ActionIcon variant="subtle" size="lg" radius="md">
                <IconHomeFilled style={{ width: rem(20), height: rem(20) }} />
              </ActionIcon>
              <ActionIcon variant="subtle" size="lg" radius="md">
                <IconClockHour9Filled
                  style={{ width: rem(20), height: rem(20) }}
                />
              </ActionIcon>
              <ActionIcon variant="subtle" size="lg" radius="md">
                <IconArrowsExchange
                  style={{ width: rem(20), height: rem(20) }}
                />
              </ActionIcon>
            </Group>

            {/* Right Section - Theme Toggle and User Menu (very close to edge) */}
            <Group gap={4}>
              {/* Mobile Search Icon */}
              <ActionIcon
                variant="subtle"
                size="md"
                radius="md"
                hiddenFrom="md"
              >
                <IconSearch
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              </ActionIcon>

              {/* Theme Toggle */}
              <ActionIcon
                variant="subtle"
                size="md"
                radius="md"
                onClick={() => toggleColorScheme()}
                title={`Switch to ${dark ? "light" : "dark"} mode`}
              >
                {dark ? (
                  <IconSun
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                ) : (
                  <IconMoon
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                )}
              </ActionIcon>

              {/* User Menu */}
              <Menu shadow="md" width={200} position="bottom-end" offset={5}>
                <Menu.Target>
                  <Group
                    gap={4}
                    style={{
                      cursor: "pointer",
                      padding: `${rem(4)} ${rem(6)}`,
                      borderRadius: rem(6),
                      transition: "background-color 150ms ease",
                      "&:hover": {
                        backgroundColor: dark
                          ? theme.colors.dark[6]
                          : theme.colors.gray[1],
                      },
                    }}
                  >
                    <Avatar size={28} radius="xl" color="blue">
                      JO
                    </Avatar>
                    <Box visibleFrom="sm">
                      <Text size="xs" fw={500}>
                        Joshua Olano
                      </Text>
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(10), height: rem(10) }}
                      stroke={1.5}
                    />
                  </Group>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>Account</Menu.Label>
                  <Menu.Item
                    leftSection={
                      <IconUser style={{ width: rem(14), height: rem(14) }} />
                    }
                  >
                    Profile
                  </Menu.Item>
                  <Menu.Item
                    leftSection={
                      <IconSettings
                        style={{ width: rem(14), height: rem(14) }}
                      />
                    }
                  >
                    Settings
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item
                    color="red"
                    leftSection={
                      <IconLogout style={{ width: rem(14), height: rem(14) }} />
                    }
                  >
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Flex>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container size="xl">
          <Text>Your main content goes here</Text>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
