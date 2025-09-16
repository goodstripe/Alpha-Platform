"use client";

import React, { useState } from "react";
import {
  Anchor,
  Button,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Stepper,
  TextInput,
  Title,
} from "@mantine/core";
import { useRouter } from "next/navigation";

import classes from "../signup/AuthenticationImage.module.css";
import { LeftSideInAuth } from "../signup/LeftSideInAuth";
import {
  IconCircleCheck,
  IconMailOpened,
  IconShieldCheck,
} from "@tabler/icons-react";

const ForgetPassword = () => {
  const router = useRouter();
  const [active, setActive] = useState(0);

  return (
    <div className={classes.wrapper}>
      <LeftSideInAuth />

      <div className={classes.rightSide}>
        <Paper className={classes.form}>
          <Title size={30} mb={30}>
            Reset Login Password
          </Title>

          <Stepper
            active={active}
            onStepClick={setActive}
            completedIcon={<IconCircleCheck size={18} />}
          >
            <Stepper.Step
              icon={<IconMailOpened size={18} />}
              label="Step 1"
              description="Verify email or Phone number"
            >
              <Stack gap={"lg"} mt={"md"}>
                <TextInput
                  label="Email or Phone number"
                  placeholder="Enter email or phone number"
                  required
                  size="md"
                  radius="md"
                />

                <TextInput
                  placeholder="Verification Code"
                  required
                  size="md"
                  radius="md"
                  rightSectionWidth={"20%"}
                  rightSection={<Anchor>Send Code</Anchor>}
                />

                <Button
                  fullWidth
                  mt="md"
                  size="md"
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
                size="md"
                radius="md"
              />

              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm your password"
                mt="md"
                size="md"
                radius="md"
              />

              <Button
                fullWidth
                mt="xl"
                size="md"
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
            >
              Return
            </Anchor>
          </Group>
        </Paper>
      </div>
    </div>
  );
};

export default ForgetPassword;
