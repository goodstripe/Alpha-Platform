"use client";

import React from "react";
import {
  AppShell,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";
import Header from "../components/Header/Header";
import DisclosureSection from "../components/Disclosure Section.tsx/DisclosureSection";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main
        style={{
          backgroundColor:
            colorScheme === "dark"
              ? theme.colors.dark[7]
              : theme.colors.gray[2],
        }}
      >
        {children}
      </AppShell.Main>
      <DisclosureSection />
    </AppShell>
  );
}
