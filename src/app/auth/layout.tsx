"use client";

import React, { useEffect, useState } from "react";
import {
  AppShell,
  Container,
  Group,
  ActionIcon,
  useMantineColorScheme,
  rem,
  Skeleton,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [mounted, setMounted] = useState(false);
  const dark = colorScheme === "dark";

  // Ensure component is mounted before showing theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Container fluid h="100%" p="0px 30px">
          <Group align="center" justify="space-between" h="100%">
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
            {!mounted ? (
              <Skeleton height={36} width={36} radius="md" />
            ) : (
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
            )}
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Main p={0} style={{ minHeight: "calc(100vh - 60px)" }}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
