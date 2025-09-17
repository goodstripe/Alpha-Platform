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
} from "@mantine/core";
import { useRouter } from "next/navigation";

import classes from "./AuthenticationImage.module.css";
import { LeftSideInAuth } from "./LeftSideInAuth";
import PhoneNumberInputWithCountryCode from "@/app/onboarding/components/NumberInputWithCountryCode/NumberInputWithCountryCode";

const SignUp = () => {
  const router = useRouter();

  return (
    <div className={classes.wrapper}>
      <LeftSideInAuth />

      <div className={classes.rightSide}>
        <Paper className={classes.form}>
          <Title size={30} mb={30}>
            Create your account
          </Title>

          <Group mt="md" grow>
            <TextInput
              label="First Name"
              placeholder="John"
              size="md"
              radius="md"
            />
            <TextInput
              label="Last Name"
              placeholder="Doe"
              size="md"
              radius="md"
            />
          </Group>

          <TextInput
            label="Email address"
            placeholder="hello@gmail.com"
            mt="md"
            size="md"
            radius="md"
          />

          <PhoneNumberInputWithCountryCode />

          <NumberInput
            placeholder="Verification Code"
            required
            mt={"lg"}
            size="md"
            radius="md"
            rightSectionWidth={"20%"}
            rightSection={<Anchor>Send Code</Anchor>}
          />

          <Button
            fullWidth
            mt="xl"
            size="md"
            radius="md"
            onClick={() => router.push("/auth/set-password")}
          >
            Sign Up
          </Button>

          <Text ta="center" mt="md">
            Already have an account?{" "}
            <Anchor
              href="#"
              fw={500}
              onClick={() => router.push("/auth/login")}
            >
              Login
            </Anchor>
          </Text>
        </Paper>
      </div>
    </div>
  );
};

export default SignUp;
