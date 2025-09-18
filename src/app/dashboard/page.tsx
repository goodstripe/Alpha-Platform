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
        <Grid.Col span={{ base: 12, md: 2 }}>
          <Accounts />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack gap="lg">
            <Positions />
            <Orders />
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 2 }}>
          <WatchList />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
