"use client";

import React from "react";
import {
  Anchor,
  Button,
  Checkbox,
  Group,
  Paper,
  PasswordInput,
  Text,
  Title,
  useMantineTheme,
  Container,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mantine/hooks";

import classes from "../signup/AuthenticationImage.module.css";
import { LeftSideInAuth } from "../signup/LeftSideInAuth";
import LoginSwitcher from "./components/LoginSwitcher/LoginSwitcher";

const LogIn = () => {
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
            <Title size={isMobile ? 24 : 30} mb={20} ta="center">
              Welcome back!
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5} mb={30}>
              Do not have an account yet?{" "}
              <Anchor size="sm" href="/auth/signup">
                Create account
              </Anchor>
            </Text>

            <LoginSwitcher />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              size={isMobile ? "sm" : "md"}
              radius="md"
            />
            <Group justify="space-between" mt="lg">
              <Checkbox label="Remember me" />
              <Anchor
                component="button"
                size="sm"
                onClick={() => router.push("/auth/forget-password")}
              >
                Forgot password?
              </Anchor>
            </Group>
            <Button
              fullWidth
              mt="xl"
              size={isMobile ? "sm" : "md"}
              radius="md"
              onClick={() => router.push("/dashboard")}
            >
              Sign in
            </Button>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default LogIn;
