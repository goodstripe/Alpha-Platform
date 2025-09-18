"use client";

import React from "react";
import { Title, Text, Stack, useMantineTheme, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./AuthenticationImage.module.css";

export const LeftSideInAuth = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <div className={classes.leftSide}>
      <Box className={classes.centeredText} p={isMobile ? "md" : "xl"}>
        <Title
          size={isMobile ? 28 : 40}
          c="white"
          ta={"center"}
          fw={600}
          mb={isMobile ? "sm" : "md"}
        >
          Invest in Stocks, ETFs, Options, Fixed Income & Futures
        </Title>

        <Text size={isMobile ? "md" : "20px"} c="white" mt="md" ta={"center"}>
          Join us today and start investing with 0 commission*.
        </Text>

        <Stack align="center" mt={isMobile ? "md" : 20} gap="xs">
          <Text size="xs" c="white" ta={"center"} style={{ opacity: 0.8 }}>
            *Relevant regulatory and exchange fees may apply. Please refer to
            our Fee Schedule for more details.
          </Text>

          <Text
            size="xs"
            c="white"
            ta={"center"}
            style={{ opacity: 0.8, maxWidth: isMobile ? 300 : 450 }}
          >
            *Options are risky and not suitable for all investors. Investors can
            rapidly lose 100% or more of their investment trading options.
            Before trading options, carefully read Characteristics and Risks of
            Standardized Options.
          </Text>
        </Stack>
      </Box>
    </div>
  );
};
