"use client";

import { Container, Grid, Stack } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import Orders from "../components/Dashboard/Orders";
import Positions from "../components/Dashboard/Positions";
import Accounts from "../components/Dashboard/Accounts";
import WatchList from "../components/Dashboard/WatchList";
import OrderDetails from "../components/Dashboard/OrderDetails";
import LaunchPad from "../components/Dashboard/LaunchPad";
import Alerts from "../components/Dashboard/Alerts";

export default function Subgrid() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  const containerPadding = isMobile ? "10px 16px" : "10px 40px";
  const stackGap = isMobile ? "md" : "lg";
  const gridGutter = isMobile ? "md" : "lg";

  return (
    <Container fluid p={containerPadding}>
      <Grid gutter={gridGutter}>
        <Grid.Col span={{ base: 12, md: 3 }} order={{ base: 1, md: 1 }}>
          <Accounts />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 2 }}>
          <Stack gap={stackGap}>
            <Positions />
            <WatchList />
            <Orders />
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }} order={{ base: 3, md: 3 }}>
          <Stack gap={stackGap}>
            <OrderDetails />
            <Alerts />
            <LaunchPad />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
