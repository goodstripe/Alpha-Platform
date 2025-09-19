import React from "react";
import {
  Container,
  Text,
  Stack,
  Box,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";

const DoubleFooter = ({
  additionalText = "",
  showSecondFooter = true,
  secondFooterText = "Securities offered through FinTech Securities LLC, member FINRA/SIPC. Advisory services offered through FinTech Advisors LLC, a registered investment advisor.",
}) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box>
      {/* First Footer */}
      <Box
        component="footer"
        style={{
          backgroundColor:
            colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          borderTop: `1px solid ${
            colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3]
          }`,
        }}
      >
        <Container size="xl" py="md">
          <Stack gap="sm" align="center">
            <Text
              size="sm"
              c={colorScheme === "dark" ? "dimmed" : "gray.6"}
              ta="center"
              style={{ lineHeight: 1.6 }}
            >
              © 2024 AeonX. All rights reserved. | Regulatory Information:
              Licensed by Financial Conduct Authority (FCA) | Member FDIC
            </Text>

            {additionalText && (
              <Text
                size="sm"
                c={colorScheme === "dark" ? "dimmed" : "gray.6"}
                ta="center"
                style={{
                  lineHeight: 1.6,
                  maxWidth: "800px",
                }}
              >
                {additionalText}
              </Text>
            )}
          </Stack>
        </Container>
      </Box>

      {/* Second Footer */}
      {/* {showSecondFooter && (
        <Box
          style={{
            backgroundColor:
              colorScheme === "dark"
                ? theme.colors.dark[9]
                : theme.colors.gray[1],
            borderTop: `1px solid ${
              colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[3]
            }`,
          }}
        >
          <Container size="xl" py="sm">
            <Text
              size="xs"
              c={colorScheme === "dark" ? "dimmed" : "gray.6"}
              ta="center"
              style={{
                lineHeight: 1.4,
              }}
            >
              {secondFooterText}
            </Text>
          </Container>
        </Box>
      )} */}
    </Box>
  );
};

export default DoubleFooter;
