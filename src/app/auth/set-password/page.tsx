"use client";

import React from "react";
import {
  Anchor,
  Button,
  Group,
  Paper,
  PasswordInput,
  Title,
} from "@mantine/core";
import classes from "../signup/AuthenticationImage.module.css";
import { LeftSideInAuth } from "../signup/LeftSideInAuth";
import { useRouter } from "next/navigation";

const SetPassword = () => {
  const router = useRouter();

  return (
    <div className={classes.wrapper}>
      <LeftSideInAuth />

      <div className={classes.rightSide}>
        <Paper className={classes.form}>
          <Title size={30} mb={30}>
            Set Your Password
          </Title>

          <PasswordInput
            label="Password"
            placeholder="Enter your new password"
            withAsterisk
            mt="md"
            size="md"
            radius="md"
          />

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your new password"
            withAsterisk
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
            Submit
          </Button>

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

export default SetPassword;
