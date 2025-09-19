"use client";

import {
  Container,
  Text,
  Card,
  Group,
  Stack,
  Divider,
  Anchor,
  useMantineTheme,
  useMantineColorScheme,
  Collapse,
} from "@mantine/core";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DisclosureSection() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const pathname = usePathname();

  const isAuthPage = [
    "/auth/login",
    "/auth/reset-password",
    "/auth/signup",
    "/auth/set-password",
  ].includes(pathname);

  const isOnboarding = pathname === "/onboarding";

  const bgColor = colorScheme === "dark" ? theme.colors.dark[6] : theme.white;

  return (
    <Container
      size="lg"
      py="xl"
      px={{ base: "md", sm: "lg", md: "xl" }}
      mb={"md"}
      style={{
        backgroundColor: bgColor,
        borderRadius: theme.radius.md,
        border: isOnboarding
          ? `2px solid ${
              colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
            }`
          : null,
      }}
    >
      {isAuthPage ? (
        <AuthDisclosure colorScheme={colorScheme} />
      ) : (
        <FullDisclosure colorScheme={colorScheme} />
      )}
    </Container>
  );
}

function AuthDisclosure({ colorScheme }: { colorScheme: string }) {
  return (
    <Stack gap="lg">
      <Text ta="center" fw={700} size="lg">
        Account Creation & Security Disclosures
      </Text>

      <Stack gap="sm">
        <Text fw={600}>Privacy & Data Protection:</Text>
        <Text size="sm">
          By creating an account with AEON X, you consent to the collection,
          processing, and storage of your personal and financial information in
          accordance with applicable regulations. AEON X maintains strict data
          security practices to safeguard your information and does not sell or
          share personal data with third parties without consent.
        </Text>
      </Stack>

      <Divider my="md" />

      <Stack gap="sm">
        <Text fw={600}>Authentication & Access:</Text>
        <Text size="sm">
          AEON X requires secure authentication practices, including the use of
          strong passwords and, where available, multi-factor authentication.
          Account access may vary depending on system performance, device
          compatibility, and network conditions.
        </Text>
      </Stack>

      <Divider my="md" />

      <Stack gap="sm">
        <Text fw={600}>Regulatory Compliance:</Text>
        <Text size="sm">
          AEON X operates under regulatory supervision to ensure transparency
          and investor protection. By proceeding, you agree to comply with our{" "}
          <Anchor href="/terms" target="_blank">
            Terms & Conditions
          </Anchor>{" "}
          and{" "}
          <Anchor href="/privacy" target="_blank">
            Privacy Policy
          </Anchor>
          .
        </Text>
      </Stack>

      <Divider my="md" />

      <Text
        size="sm"
        c={colorScheme === "dark" ? "dimmed" : "gray.6"}
        ta="center"
        style={{ lineHeight: 1.6 }}
      >
        © 2024 AEON X. All rights reserved. | Licensed by Financial Conduct
        Authority (FCA) | Member FDIC
      </Text>
    </Stack>
  );
}

function FullDisclosure({ colorScheme }: { colorScheme: string }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(true);

  return (
    <Stack gap="lg">
      {/* Heading */}
      <Text ta="center" fw={700} size="lg">
        Please read all the important disclosures below.
      </Text>

      {/* Investing */}
      <Stack gap="sm">
        <Text fw={600}>Investing:</Text>
        <Text size="sm">
          Check the background of AEON X Advisors on{" "}
          <Anchor href="#" target="_blank">
            FINRA&apos;s BrokerCheck
          </Anchor>{" "}
          and see the AEON X{" "}
          <Anchor href="#" target="_blank">
            Relationship Summary
          </Anchor>
          .
        </Text>
        <Card withBorder shadow="xs" radius="md" p="sm">
          <Group justify="center" gap="md" wrap="wrap">
            <Text size="sm">Investment Products</Text>
            <Divider orientation="vertical" />
            <Text size="sm">Not FDIC Insured</Text>
            <Divider orientation="vertical" />
            <Text size="sm">No Bank Guarantee</Text>
            <Divider orientation="vertical" />
            <Text size="sm">May Lose Value</Text>
          </Group>
        </Card>
        <Text size="xs" c="dimmed" ta="center">
          Securities in your account protected up to $500,000. For details
          please see{" "}
          <Anchor href="https://www.sipc.org" target="_blank">
            www.sipc.org
          </Anchor>
        </Text>
      </Stack>

      <Divider my="md" />

      {/* Banking */}
      <Stack gap="sm">
        <Text fw={600}>Banking:</Text>
        <Text size="sm">
          Banking products and services are provided by AEON X Bank, National
          Association, Member{" "}
          <Anchor href="#" target="_blank">
            FDIC
          </Anchor>
          .
        </Text>
        <Card withBorder shadow="xs" radius="md" p="sm">
          <Group justify="center" gap="md" wrap="wrap">
            <Text size="sm">Banking Products</Text>
            <Divider orientation="vertical" />
            <Text size="sm">FDIC Insured</Text>
            <Divider orientation="vertical" />
            <Text size="sm">Bank Guarantee</Text>
          </Group>
        </Card>
        <Text size="xs" c="dimmed" ta="center">
          FDIC-Insured – Backed by the full faith and credit of the U.S.
          Government
        </Text>
      </Stack>

      <Divider my="md" />

      {/* Additional Disclosures */}
      <Anchor
        size="sm"
        fw={600}
        c={theme.colors.blue[6]}
        style={{ alignSelf: "center", cursor: "pointer" }}
        onClick={() => setOpened((o) => !o)}
      >
        {opened
          ? "Hide additional product disclosures"
          : "Read additional product disclosures"}
      </Anchor>

      <Collapse in={opened}>
        <Card
          withBorder
          shadow="xs"
          radius="md"
          p="md"
          mt="sm"
          bg={colorScheme === "dark" ? theme.colors.dark[6] : theme.white}
        >
          <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
            Additional product disclosures provide important information about
            account features, investment risks, and service limitations.
            Customers should review these disclosures carefully before making
            financial decisions. They explain key details about transaction
            costs, product eligibility, regulatory oversight, and protections
            that may or may not apply. Understanding these points helps ensure
            informed investment choices and clear expectations of available
            services.
          </Text>
        </Card>
      </Collapse>

      <Divider my="md" />

      {/* Affiliations */}
      <Stack gap="xs">
        <Text fw={600}>Affiliations:</Text>
        <Text size="xs" c="dimmed">
          Securities products and investment advisory services offered by AEON X
          Securities LLC, Member SIPC and a Registered Investment Adviser.
          Commodity futures and options on futures products and services offered
          by AEON X Futures LLC, Member NFA.
        </Text>
        <Text size="xs" fw={600} c="red.7">
          System response and account access may vary due to a variety of
          factors, including trading volumes, market conditions, system
          performance, and other factors.
        </Text>
      </Stack>

      <Divider my="md" />

      {/* Footer Disclaimer */}
      <Text
        size="sm"
        c={colorScheme === "dark" ? "dimmed" : "gray.6"}
        ta="center"
        style={{ lineHeight: 1.6 }}
      >
        © 2024 AEON X. All rights reserved. | Regulatory Information: Licensed
        by Financial Conduct Authority (FCA) | Member FDIC
      </Text>
    </Stack>
  );
}
