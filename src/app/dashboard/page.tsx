"use client";

import { Container, Grid, Stack } from "@mantine/core";
import Orders from "../components/Dashboard/Orders";
import Positions from "../components/Dashboard/Positions";
import Accounts from "../components/Dashboard/Accounts";
import WatchList from "../components/Dashboard/WatchList";

export default function Subgrid() {
  return (
    <Container fluid p="10px 100px">
      <Grid gutter="lg">
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Accounts />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="lg">
            <Positions />
            <Orders />
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}>
          <WatchList />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
