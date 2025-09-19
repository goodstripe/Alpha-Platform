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
  HoverCard,
  Center,
  Divider,
  Collapse,
  ScrollArea,
  Burger,
  ThemeIcon,
} from "@mantine/core";
import {
  IconSearch,
  IconSun,
  IconMoon,
  IconChevronDown,
  IconUser,
  IconLogout,
  IconSettings,
  IconX,
  IconChartLine,
  IconClipboardList,
  IconCreditCard,
  IconArrowsExchange,
  IconReceipt,
  IconBuilding,
  IconLock,
  IconTrendingUp,
} from "@tabler/icons-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";

const menuData = {
  account: [
    {
      title: "Positions",
      href: "",
      icon: IconChartLine,
      description: "View your current holdings and portfolio",
    },
    {
      title: "Order List",
      href: "",
      icon: IconClipboardList,
      description: "Track your pending and completed orders",
    },
  ],
  payTransfer: [
    {
      title: "Cash Transfers",
      href: "",
      icon: IconCreditCard,
      description: "Transfer money to and from your account",
    },
    {
      title: "Securities Transfers",
      href: "",
      icon: IconArrowsExchange,
      description: "Move securities between accounts",
    },
    {
      title: "Fees",
      href: "",
      icon: IconReceipt,
      description: "View transaction fees and charges",
    },
  ],
  whatWeOffer: [
    {
      title: "Public Securities",
      href: "",
      icon: IconBuilding,
      description: "Explore publicly traded securities",
    },
    {
      title: "Private Placements",
      href: "",
      icon: IconLock,
      description: "Access exclusive private investment opportunities",
    },
  ],
};

export default function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const dark = colorScheme === "dark";
  const router = useRouter();
  const pathname = usePathname();
  const [
    mobileMenuOpened,
    { toggle: toggleMobileMenu, close: closeMobileMenu },
  ] = useDisclosure(false);
  const [mobileSearchOpened, setMobileSearchOpened] = useState(false);
  const [mobileLinksOpened, { toggle: toggleMobileLinks }] =
    useDisclosure(false);

  const handleNavigation = (route: string) => {
    router.push(route);
    closeMobileMenu();
  };

  const toggleMobileSearch = () => {
    setMobileSearchOpened(!mobileSearchOpened);
  };

  const linkStyle = {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: dark ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    "&:hover": {
      backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  };

  const subLinkStyle = {
    width: "100%",
    padding: `${rem(12)} ${rem(16)}`,
    borderRadius: theme.radius.md,
    transition: "background-color 150ms ease",
    "&:hover": {
      backgroundColor: dark ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  };

  // Create submenu components
  const createSubmenuLinks = (items: typeof menuData.account) =>
    items.map((item) => (
      <UnstyledButton
        key={item.title}
        style={subLinkStyle}
        onClick={() => handleNavigation(item.href)}
      >
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={20} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));

  // Mobile submenu links
  const createMobileSubmenuLinks = (items: typeof menuData.account) =>
    items.map((item) => (
      <UnstyledButton
        key={item.title}
        onClick={() => handleNavigation(item.href)}
        style={{
          display: "block",
          width: "100%",
          padding: `${rem(12)} ${rem(24)}`,
          borderRadius: theme.radius.sm,
          color: dark ? theme.colors.gray[3] : theme.colors.gray[6],
          fontSize: theme.fontSizes.sm,
        }}
      >
        <Group gap="sm" align="center">
          <item.icon size={18} />
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));

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
          {/* Left Section - Logo */}
          <div style={{ position: "relative", width: "120px", height: "40px" }}>
            <Image
              src="/aeonx_logo.png"
              alt="AEONX Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Center Section - Desktop Navigation Menu */}
          <Group gap="sm" visibleFrom="md">
            {/* Account Menu */}
            <HoverCard
              width={320}
              position="bottom"
              radius="md"
              shadow="xl"
              withinPortal
              openDelay={100}
              closeDelay={100}
            >
              <HoverCard.Target>
                <UnstyledButton style={linkStyle}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Account
                    </Box>
                    <IconChevronDown size={16} />
                  </Center>
                </UnstyledButton>
              </HoverCard.Target>
              <HoverCard.Dropdown
                style={{
                  overflow: "hidden",
                  border: `1px solid ${
                    dark ? theme.colors.dark[4] : theme.colors.gray[2]
                  }`,
                  backgroundColor: dark ? theme.colors.dark[6] : theme.white,
                }}
              >
                <Box p="md">
                  <Text
                    fw={600}
                    size="sm"
                    mb="sm"
                    c={dark ? theme.colors.gray[2] : theme.colors.gray[8]}
                  >
                    Account Overview
                  </Text>
                  <Stack gap="xs">{createSubmenuLinks(menuData.account)}</Stack>
                </Box>
              </HoverCard.Dropdown>
            </HoverCard>

            {/* Pay & Transfer Menu */}
            <HoverCard
              width={340}
              position="bottom"
              radius="md"
              shadow="xl"
              withinPortal
              openDelay={100}
              closeDelay={100}
            >
              <HoverCard.Target>
                <UnstyledButton style={linkStyle}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Pay & Transfer
                    </Box>
                    <IconChevronDown size={16} />
                  </Center>
                </UnstyledButton>
              </HoverCard.Target>
              <HoverCard.Dropdown
                style={{
                  overflow: "hidden",
                  border: `1px solid ${
                    dark ? theme.colors.dark[4] : theme.colors.gray[2]
                  }`,
                  backgroundColor: dark ? theme.colors.dark[6] : theme.white,
                }}
              >
                <Box p="md">
                  <Text
                    fw={600}
                    size="sm"
                    mb="sm"
                    c={dark ? theme.colors.gray[2] : theme.colors.gray[8]}
                  >
                    Transfer Options
                  </Text>
                  <Stack gap="xs">
                    {createSubmenuLinks(menuData.payTransfer)}
                  </Stack>
                </Box>
              </HoverCard.Dropdown>
            </HoverCard>

            {/* Trade */}
            <UnstyledButton
              style={linkStyle}
              onClick={() => handleNavigation("/trade")}
            >
              <Group gap="xs">
                <IconTrendingUp size={16} />
                Trade
              </Group>
            </UnstyledButton>

            {/* What We Offer Menu */}
            <HoverCard
              width={350}
              position="bottom"
              radius="md"
              shadow="xl"
              withinPortal
              openDelay={100}
              closeDelay={100}
            >
              <HoverCard.Target>
                <UnstyledButton style={linkStyle}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      What We Offer
                    </Box>
                    <IconChevronDown size={16} />
                  </Center>
                </UnstyledButton>
              </HoverCard.Target>
              <HoverCard.Dropdown
                style={{
                  overflow: "hidden",
                  border: `1px solid ${
                    dark ? theme.colors.dark[4] : theme.colors.gray[2]
                  }`,
                  backgroundColor: dark ? theme.colors.dark[6] : theme.white,
                }}
              >
                <Box p="md">
                  <Text
                    fw={600}
                    size="sm"
                    mb="sm"
                    c={dark ? theme.colors.gray[2] : theme.colors.gray[8]}
                  >
                    Investment Options
                  </Text>
                  <Stack gap="xs">
                    {createSubmenuLinks(menuData.whatWeOffer)}
                  </Stack>
                </Box>
              </HoverCard.Dropdown>
            </HoverCard>

            {/* Markets */}
            <UnstyledButton
              style={linkStyle}
              onClick={() => handleNavigation("/markets")}
            >
              <Group gap="xs">
                <IconBuilding size={16} />
                Markets
              </Group>
            </UnstyledButton>
          </Group>

          {/* Right Section */}
          <Group>
            {/* Desktop Search */}
            <Box visibleFrom="lg">
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

            {/* Mobile Search Icon */}
            <Tooltip label="Search" position="bottom" withArrow>
              <ActionIcon
                variant="subtle"
                size="md"
                radius="md"
                hiddenFrom="lg"
                onClick={toggleMobileSearch}
              >
                <IconSearch
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>

            {/* Mobile Menu Icon */}
            <Burger
              opened={mobileMenuOpened}
              onClick={toggleMobileMenu}
              hiddenFrom="md"
              size="sm"
            />

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
            hiddenFrom="lg"
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
        onClose={closeMobileMenu}
        position="right"
        size="sm"
        title="Navigation"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <ScrollArea h="calc(100vh - 80px)">
          <Stack gap="xs">
            {/* User Profile - Mobile */}
            <Group mb="lg">
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

            <Divider my="sm" />

            {/* Account Menu */}
            <UnstyledButton
              onClick={toggleMobileLinks}
              style={{
                width: "100%",
                padding: `${rem(12)} ${rem(16)}`,
                borderRadius: theme.radius.sm,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text size="sm" fw={500}>
                Account
              </Text>
              <IconChevronDown size={16} />
            </UnstyledButton>
            <Collapse in={mobileLinksOpened}>
              <Stack gap="xs" pl="md">
                {createMobileSubmenuLinks(menuData.account)}
              </Stack>
            </Collapse>

            {/* Pay & Transfer */}
            <UnstyledButton
              style={{
                width: "100%",
                padding: `${rem(12)} ${rem(16)}`,
                borderRadius: theme.radius.sm,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text size="sm" fw={500}>
                Pay & Transfer
              </Text>
              <IconChevronDown size={16} />
            </UnstyledButton>

            {/* Trade */}
            <UnstyledButton
              onClick={() => handleNavigation("/trade")}
              style={{
                width: "100%",
                padding: `${rem(12)} ${rem(16)}`,
                borderRadius: theme.radius.sm,
              }}
            >
              <Text size="sm" fw={500}>
                Trade
              </Text>
            </UnstyledButton>

            {/* What We Offer */}
            <UnstyledButton
              style={{
                width: "100%",
                padding: `${rem(12)} ${rem(16)}`,
                borderRadius: theme.radius.sm,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text size="sm" fw={500}>
                What We Offer
              </Text>
              <IconChevronDown size={16} />
            </UnstyledButton>

            {/* Markets */}
            <UnstyledButton
              onClick={() => handleNavigation("/markets")}
              style={{
                width: "100%",
                padding: `${rem(12)} ${rem(16)}`,
                borderRadius: theme.radius.sm,
              }}
            >
              <Text size="sm" fw={500}>
                Markets
              </Text>
            </UnstyledButton>

            <Divider my="lg" />

            {/* Account Actions */}
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
        </ScrollArea>
      </Drawer>
    </>
  );
}
