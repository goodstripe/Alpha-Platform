"use client";

import React from "react";
import {
  Anchor,
  Button,
  Group,
  NumberInput,
  Paper,
  Text,
  TextInput,
  Title,
  useMantineTheme,
  Container,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mantine/hooks";

import classes from "./AuthenticationImage.module.css";
import { LeftSideInAuth } from "./LeftSideInAuth";
import PhoneNumberInputWithCountryCode from "@/app/components/NumberInputWithCountryCode/NumberInputWithCountryCode";

const SignUp = () => {
  const router = useRouter();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <div className={classes.wrapper}>
      {!isMobile && <LeftSideInAuth />}

      <div className={classes.rightSide}>
        <Container
          size="md"
          px={isMobile ? "md" : "xl"}
          style={{ width: "100%" }}
        >
          <Paper
            className={classes.form}
            shadow={isMobile ? "none" : "xl"}
            style={{
              backgroundColor: isMobile ? "transparent" : undefined,
              padding: isMobile ? 0 : "xl",
              width: "100%",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            <Title size={isMobile ? 24 : 30} mb={30} ta="center">
              Create your account
            </Title>

            <Group mt="md" grow={!isMobile}>
              <TextInput
                label="First Name"
                placeholder="John"
                size={isMobile ? "sm" : "md"}
                radius="md"
              />
              <TextInput
                label="Last Name"
                placeholder="Doe"
                size={isMobile ? "sm" : "md"}
                radius="md"
              />
            </Group>

            <TextInput
              label="Email address"
              placeholder="hello@gmail.com"
              mt="md"
              size={isMobile ? "sm" : "md"}
              radius="md"
            />

            <PhoneNumberInputWithCountryCode size={isMobile ? "sm" : "md"} />

            <NumberInput
              placeholder="Verification Code"
              required
              mt={"lg"}
              size={isMobile ? "sm" : "md"}
              radius="md"
              rightSectionWidth={"20%"}
              rightSection={<Anchor size="sm">Send Code</Anchor>}
            />

            <Button
              fullWidth
              mt="xl"
              size={isMobile ? "sm" : "md"}
              radius="md"
              onClick={() => router.push("/auth/set-password")}
            >
              Sign Up
            </Button>

            <Text ta="center" mt="md" size="sm">
              Already have an account?{" "}
              <Anchor
                href="#"
                fw={500}
                onClick={() => router.push("/auth/login")}
                size="sm"
              >
                Login
              </Anchor>
            </Text>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default SignUp;
