"use client";

import React from "react";
import { Title, Text, Stack } from "@mantine/core";
import classes from "./AuthenticationImage.module.css";

export const LeftSideInAuth = () => {
  return (
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
            *Options are risky and not suitable for all investors. Investors can
            rapidly lose 100% or more of their investment trading options.
            Before trading options, carefully read Characteristics and Risks of
            Standardized Options.
          </Text>
        </Stack>
      </div>
    </div>
  );
};
