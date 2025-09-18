"use client";

import { Container, SimpleGrid, Stack, useMantineTheme } from "@mantine/core";
import Orders from "../components/Dashboard/Orders";
import Positions from "../components/Dashboard/Positions";
import Accounts from "../components/Dashboard/Accounts";
import WatchList from "../components/Dashboard/WatchList";

export default function Subgrid() {
  const theme = useMantineTheme();
  return (
    <Container>
      <SimpleGrid cols={{ base: 1, xs: 4 }}>
        <Accounts />
        <Stack>
          <Positions />
          <Orders />
        </Stack>
        <WatchList />
      </SimpleGrid>
    </Container>
  );
}
