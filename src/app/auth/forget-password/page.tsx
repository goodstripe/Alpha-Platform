"use client";

import React, { useState } from "react";
import {
  Anchor,
  Button,
  Group,
  NumberInput,
  Paper,
  PasswordInput,
  Stack,
  Stepper,
  Title,
  useMantineTheme,
  Container,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mantine/hooks";

import classes from "../signup/AuthenticationImage.module.css";
import { LeftSideInAuth } from "../signup/LeftSideInAuth";
import {
  IconCircleCheck,
  IconMailOpened,
  IconShieldCheck,
} from "@tabler/icons-react";
import LoginSwitcher from "../login/components/LoginSwitcher/LoginSwitcher";

const ForgetPassword = () => {
  const router = useRouter();
  const [active, setActive] = useState(0);
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
              Reset Login Password
            </Title>

            <Stepper
              active={active}
              onStepClick={setActive}
              completedIcon={<IconCircleCheck size={18} />}
              orientation={isMobile ? "vertical" : "horizontal"}
            >
              <Stepper.Step
                icon={<IconMailOpened size={18} />}
                label="Step 1"
                description="Verify email or Phone number"
              >
                <Stack gap={"lg"} mt={"md"}>
                  <LoginSwitcher />

                  <NumberInput
                    placeholder="Verification Code"
                    required
                    size={isMobile ? "sm" : "md"}
                    radius="md"
                    rightSectionWidth={"20%"}
                    rightSection={<Anchor size="sm">Send Code</Anchor>}
                  />

                  <Button
                    fullWidth
                    mt="md"
                    size={isMobile ? "sm" : "md"}
                    radius="md"
                    onClick={() => setActive(1)}
                  >
                    Next
                  </Button>
                </Stack>
              </Stepper.Step>

              <Stepper.Step
                icon={<IconShieldCheck size={18} />}
                label="Step 2"
                description="Reset password"
              >
                <PasswordInput
                  label="Password"
                  placeholder="Enter your password"
                  mt="md"
                  size={isMobile ? "sm" : "md"}
                  radius="md"
                />

                <PasswordInput
                  label="Confirm Password"
                  placeholder="Confirm your password"
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
                  Continue
                </Button>
              </Stepper.Step>
            </Stepper>

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

export default ForgetPassword;
