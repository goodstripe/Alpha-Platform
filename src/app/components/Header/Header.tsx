"use client";

import React, { useState } from "react";
import {
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
  Drawer,
  Stack,
  UnstyledButton,
  Tooltip,
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
  IconArrowsExchange,
  IconMenu2,
  IconX,
  IconShoppingCartFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const dark = colorScheme === "dark";
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [mobileSearchOpened, setMobileSearchOpened] = useState(false);

  const navigationItems = [
    {
      icon: IconHomeFilled,
      route: "/dashboard",
      label: "Dashboard",
    },
    {
      icon: IconShoppingCartFilled,
      route: "/orders",
      label: "Orders",
    },
    {
      icon: IconArrowsExchange,
      route: "/transfer",
      label: "Transfer",
    },
  ];

  const isActiveRoute = (route: string) => {
    if (route === "/dashboard") {
      return pathname === "/" || pathname === "/dashboard";
    }
    return pathname === route;
  };

  const handleNavigation = (route: string) => {
    router.push(route);
    setMobileMenuOpened(false);
  };

  const toggleMobileSearch = () => {
    setMobileSearchOpened(!mobileSearchOpened);
  };

  return (
    <>
      <Container
        fluid
        h="100%"
        p={{
          base: "0px 16px",
          xs: "0px 20px",
          sm: "0px 24px",
          md: "0px 30px",
        }}
      >
        <Flex align="center" justify="space-between" h="100%">
          {/* Left Section - Logo and Search */}
          <Group
            gap={{
              base: "xl",
              sm: "2xl",
              md: "140px",
            }}
          >
            <Image
              src="/aeonx_logo.png"
              alt="AEONX Logo"
              width={120}
              height={40}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />

            {/* Desktop Search */}
            <Box
              ml={{ base: 20, sm: 40, md: 140 }}
              style={{
                maxWidth: 250,
                minWidth: 200,
              }}
              visibleFrom="lg"
            >
              <TextInput
                placeholder="Search"
                w={250}
                leftSection={
                  <IconSearch
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
                radius="xl"
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

            {/* Tablet Search */}
            <Box
              style={{
                maxWidth: 180,
                minWidth: 150,
              }}
              visibleFrom="md"
              hiddenFrom="lg"
            >
              <TextInput
                placeholder="Search"
                w={180}
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

          {/* Center Section - Desktop Navigation Icons */}
          <Group
            gap="sm"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            visibleFrom="md"
          >
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = isActiveRoute(item.route);

              return (
                <Tooltip
                  key={item.route}
                  label={item.label}
                  position="bottom"
                  withArrow
                  transitionProps={{ duration: 200 }}
                >
                  <ActionIcon
                    variant={isActive ? "filled" : "subtle"}
                    size="lg"
                    radius="md"
                    color={isActive ? "blue" : undefined}
                    onClick={() => handleNavigation(item.route)}
                    title={item.label}
                    style={{
                      backgroundColor: isActive
                        ? dark
                          ? theme.colors.blue[8]
                          : theme.colors.blue[6]
                        : undefined,
                      color: isActive
                        ? "white"
                        : dark
                        ? theme.colors.gray[4]
                        : theme.colors.gray[6],
                    }}
                  >
                    <Icon
                      style={{
                        width: rem(20),
                        height: rem(20),
                        color: isActive ? "white" : undefined,
                      }}
                    />
                  </ActionIcon>
                </Tooltip>
              );
            })}
          </Group>

          {/* Right Section */}
          <Group gap={{ base: 2, sm: 4 }}>
            {/* Mobile Search Icon */}
            <Tooltip label="Search" position="bottom" withArrow>
              <ActionIcon
                variant="subtle"
                size="md"
                radius="md"
                hiddenFrom="md"
                onClick={toggleMobileSearch}
              >
                <IconSearch
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>

            {/* Mobile Menu Icon */}
            <Tooltip label="Menu" position="bottom" withArrow>
              <ActionIcon
                variant="subtle"
                size="md"
                radius="md"
                hiddenFrom="md"
                onClick={() => setMobileMenuOpened(true)}
              >
                <IconMenu2
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>

            {/* Theme Toggle */}
            <Tooltip
              label={`Switch to ${dark ? "light" : "dark"} mode`}
              position="bottom"
              withArrow
            >
              <ActionIcon
                variant="subtle"
                size="md"
                radius="md"
                onClick={() => toggleColorScheme()}
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
            </Tooltip>

            {/* User Menu - Hidden on mobile */}
            <Box visibleFrom="sm">
              <Menu shadow="md" width={200} position="bottom-end" offset={5}>
                <Menu.Target>
                  <Tooltip label="Account menu" position="bottom" withArrow>
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
                      <Box visibleFrom="md">
                        <Text size="xs" fw={500}>
                          Joshua Olano
                        </Text>
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(10), height: rem(10) }}
                        stroke={1.5}
                      />
                    </Group>
                  </Tooltip>
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
            </Box>
          </Group>
        </Flex>

        {/* Mobile Search Bar */}
        {mobileSearchOpened && (
          <Box
            p="md"
            style={{
              borderTop: `1px solid ${
                dark ? theme.colors.dark[4] : theme.colors.gray[3]
              }`,
            }}
            hiddenFrom="md"
          >
            <TextInput
              placeholder="Search"
              leftSection={
                <IconSearch
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
              rightSection={
                <ActionIcon
                  variant="subtle"
                  size="sm"
                  onClick={toggleMobileSearch}
                >
                  <IconX style={{ width: rem(14), height: rem(14) }} />
                </ActionIcon>
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
        )}
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        opened={mobileMenuOpened}
        onClose={() => setMobileMenuOpened(false)}
        position="right"
        size="sm"
        title="Navigation"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <Stack gap="lg">
          {/* User Profile - Mobile */}
          <Group>
            <Avatar size={40} radius="xl" color="blue">
              JO
            </Avatar>
            <Box>
              <Text size="sm" fw={500}>
                Joshua Olano
              </Text>
              <Text size="xs" c="dimmed">
                User Account
              </Text>
            </Box>
          </Group>

          {/* Navigation Items */}
          <Stack gap="xs">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = isActiveRoute(item.route);

              return (
                <UnstyledButton
                  key={item.route}
                  onClick={() => handleNavigation(item.route)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: rem(12),
                    padding: `${rem(12)} ${rem(16)}`,
                    borderRadius: rem(8),
                    backgroundColor: isActive
                      ? dark
                        ? theme.colors.blue[8]
                        : theme.colors.blue[0]
                      : "transparent",
                    color: isActive
                      ? dark
                        ? theme.colors.blue[2]
                        : theme.colors.blue[7]
                      : dark
                      ? theme.colors.gray[3]
                      : theme.colors.gray[7],
                    fontWeight: isActive ? 500 : 400,
                    transition: "all 0.2s ease",
                  }}
                >
                  <Icon style={{ width: rem(20), height: rem(20) }} />
                  <Text size="sm">{item.label}</Text>
                </UnstyledButton>
              );
            })}
          </Stack>

          {/* Account Actions */}
          <Stack gap="xs" mt="xl">
            <UnstyledButton
              style={{
                display: "flex",
                alignItems: "center",
                gap: rem(12),
                padding: `${rem(12)} ${rem(16)}`,
                borderRadius: rem(8),
                color: dark ? theme.colors.gray[3] : theme.colors.gray[7],
              }}
            >
              <IconUser style={{ width: rem(18), height: rem(18) }} />
              <Text size="sm">Profile</Text>
            </UnstyledButton>

            <UnstyledButton
              style={{
                display: "flex",
                alignItems: "center",
                gap: rem(12),
                padding: `${rem(12)} ${rem(16)}`,
                borderRadius: rem(8),
                color: dark ? theme.colors.gray[3] : theme.colors.gray[7],
              }}
            >
              <IconSettings style={{ width: rem(18), height: rem(18) }} />
              <Text size="sm">Settings</Text>
            </UnstyledButton>

            <UnstyledButton
              style={{
                display: "flex",
                alignItems: "center",
                gap: rem(12),
                padding: `${rem(12)} ${rem(16)}`,
                borderRadius: rem(8),
                color: theme.colors.red[6],
                marginTop: rem(16),
              }}
            >
              <IconLogout style={{ width: rem(18), height: rem(18) }} />
              <Text size="sm">Logout</Text>
            </UnstyledButton>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
