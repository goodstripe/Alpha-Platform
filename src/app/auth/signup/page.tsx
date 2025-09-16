"use client";

import React from "react";
import {
  Anchor,
  Button,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./AuthenticationImage.module.css";

const SignUp = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.leftSide}>
        <div className={classes.centeredText}>
          <Title size={40} c="white" ta={"center"} fw={600}>
            Invest in Stocks, ETFs, Options, Fixed Income & Futures
          </Title>

          <Text size="20px" c="white" mt="md" ta={"center"}>
            Join us today and start investing with 0 commission*.
          </Text>

          <Stack align="center" mt={20}>
            <Text size="12px" c="white" ta={"center"} style={{ opacity: 0.8 }}>
              *Relevant regulatory and exchange fees may apply. Please refer to
              our Fee Schedule for more details.
            </Text>

            <Text
              size="12px"
              c="white"
              ta={"center"}
              style={{ opacity: 0.8, maxWidth: 450 }}
            >
              *Options are risky and not suitable for all investors. Investors
              can rapidly lose 100% or more of their investment trading options.
              Before trading options, carefully read Characteristics and Risks
              of Standardized Options.
            </Text>
          </Stack>
        </div>
      </div>

      <div className={classes.rightSide}>
        <Paper className={classes.form}>
          <Title size={30} mb={20}>
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
          <TextInput
            label="Phone Number"
            placeholder="+1 234 567 8901"
            mt="md"
            size="md"
            radius="md"
          />

          <Button fullWidth mt="xl" size="md" radius="md">
            Sign Up
          </Button>

          <Text ta="center" mt="md">
            Already have an account?{" "}
            <Anchor
              href="#"
              fw={500}
              onClick={(event) => event.preventDefault()}
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
