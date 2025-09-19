"use client";

import {
  Box,
  Text,
  Select,
  Group,
  Divider,
  NumberInput,
  Button,
  Grid,
  useMantineTheme,
  Stack,
} from "@mantine/core";
import { useState } from "react";

const StockOrderForm = () => {
  const theme = useMantineTheme();

  // Local states
  const [action, setAction] = useState("Buy");
  const [priceType, setPriceType] = useState("Limit");
  const [duration, setDuration] = useState("Good for day");
  const [quantity, setQuantity] = useState<number | undefined>();
  const [limitPrice, setLimitPrice] = useState<number | undefined>();

  return (
    <Grid>
      <Grid.Col span={8} p={"lg"}>
        <Box
          p="md"
          bg={theme.white}
          style={{
            border: `1px solid ${theme.colors.gray[3]}`,
            borderRadius: theme.radius.md,
          }}
        >
          {/* Header */}
          <Text fw={600} size="lg" mb="md">
            Stock/ETF Order
          </Text>

          {/* Account Info */}
          <Group mb="md" gap="xl">
            <Select
              label="Accounts"
              data={["Individual Brokerage - 5754", "Retirement - 3821"]}
              defaultValue="Individual Brokerage - 5754"
              style={{ minWidth: 250 }}
            />
            <Stack gap={2}>
              <Text size="sm" c="dimmed">
                Net account value
              </Text>
              <Text fw={600}>$0.00</Text>
            </Stack>
            <Stack gap={2}>
              <Text size="sm" c="dimmed">
                Cash Purchasing Power
              </Text>
              <Text fw={600}>$0.00</Text>
            </Stack>
            <Stack gap={2}>
              <Text size="sm" c="dimmed">
                Settled
              </Text>
              <Text fw={600}>$0.00</Text>
            </Stack>
            <Stack gap={2}>
              <Text size="sm" c="dimmed">
                Unsettled
              </Text>
              <Text fw={600}>$0.00</Text>
            </Stack>
          </Group>

          <Divider my="sm" />

          {/* Symbol & Quote */}
          <Group justify="space-between" mb="md" align="flex-start">
            <Stack gap="xs">
              <Text size="sm" c="dimmed">
                Symbol
              </Text>
              <Text fw={600}>AAPL</Text>
              <Text size="xs" c="dimmed">
                NSDQ —{" "}
                <Text span fw={600}>
                  AAPL APPLE INC COM
                </Text>
              </Text>
            </Stack>
            <Stack gap="xs">
              <Text fw={600} c="green">
                $227.37 +0.5800 (+0.26%)
              </Text>
              <Text size="sm" c="dimmed">
                Bid x size: $227.32 x 100
              </Text>
              <Text size="sm" c="dimmed">
                Ask x size: $227.40 x 100
              </Text>
              <Text size="sm" c="dimmed">
                Volume: 280.08K
              </Text>
            </Stack>
            <Button variant="subtle" size="xs">
              Refresh Quote
            </Button>
          </Group>

          <Divider my="sm" />

          {/* Order Fields */}
          <Grid gutter="md">
            <Grid.Col span={6}>
              <Select
                label="Action"
                value={action}
                onChange={(v) => v && setAction(v)}
                data={["Buy", "Sell"]}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Quantity"
                placeholder="Enter shares"
                value={quantity}
                onChange={(v) => setQuantity(v || undefined)}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                label="Price type"
                value={priceType}
                onChange={(v) => v && setPriceType(v)}
                data={[
                  "Select",
                  "Market",
                  "Market on close",
                  "Limit",
                  "Stop on quote",
                  "Stop limit on quote",
                  "Trailing stop $",
                  "Trailing stop %",
                ]}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Limit price"
                value={limitPrice}
                onChange={(v) => setLimitPrice(v || undefined)}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                label="Duration"
                value={duration}
                onChange={(v) => v && setDuration(v)}
                data={[
                  "Good for day",
                  "Good for 60 days",
                  "Good until date (GTD)",
                  "Immediate or cancel",
                  "Fill or kill",
                  "Extended hrs day (7am-8pm ET)",
                  "Extended hrs (immediate or cancel)",
                ]}
              />
            </Grid.Col>
          </Grid>

          <Divider my="lg" />

          {/* Buttons */}
          <Group justify="flex-end">
            <Button variant="outline">Save for later</Button>
            <Button>Preview order</Button>
          </Group>
        </Box>
      </Grid.Col>
      <Grid.Col span={4}></Grid.Col>
    </Grid>
  );
};

export default StockOrderForm;
