"use client";

import React from "react";
import {
  Anchor,
  Button,
  Group,
  Paper,
  PasswordInput,
  Title,
  useMantineTheme,
  Container,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mantine/hooks";

import classes from "../signup/AuthenticationImage.module.css";
import { LeftSideInAuth } from "../signup/LeftSideInAuth";

const SetPassword = () => {
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
              Set Your Password
            </Title>

            <PasswordInput
              label="Password"
              placeholder="Enter your new password"
              withAsterisk
              mt="md"
              size={isMobile ? "sm" : "md"}
              radius="md"
            />

            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm your new password"
              withAsterisk
              mt="md"
              size={isMobile ? "sm" : "md"}
              radius="md"
            />

            <Button
              fullWidth
              mt="xl"
              size={isMobile ? "sm" : "md"}
              radius="md"
              onClick={() => router.push("/onboarding")}
            >
              Submit
            </Button>

            <Group justify="center" mt={20}>
              <Anchor
                href="#"
                fw={500}
                onClick={() => router.push("/auth/login")}
                size="sm"
              >
                Return to Login
              </Anchor>
            </Group>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default SetPassword;
