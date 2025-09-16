import React from "react";
import {
  Anchor,
  Button,
  Checkbox,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "../signup/AuthenticationImage.module.css";
import { LeftSideInAuth } from "../signup/LeftSideInAuth";

const LogIn = () => {
  return (
    <div className={classes.wrapper}>
      <LeftSideInAuth />

      <div className={classes.rightSide}>
        <Paper className={classes.form}>
          <Title size={30} mb={10} ta="center">
            Welcome back!
          </Title>

          <Text c="dimmed" size="sm" ta="center" mt={5} mb={30}>
            Do not have an account yet?{" "}
            <Anchor size="sm" href="/auth/signup">
              Create account
            </Anchor>
          </Text>

          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            size="md"
            radius="md"
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            size="md"
            radius="md"
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" size="md" radius="md">
            Sign in
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default LogIn;
