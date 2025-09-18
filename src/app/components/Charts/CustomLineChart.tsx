"use client";

import React, { useState } from "react";
import {
  Card,
  Text,
  Group,
  useMantineTheme,
  useMantineColorScheme,
  UnstyledButton,
} from "@mantine/core";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dummyData = {
  D: [
    { name: "9AM", value: 44200 },
    { name: "12PM", value: 44100 },
    { name: "3PM", value: 44045 },
  ],
  W: [
    { name: "Mon", value: 45000 },
    { name: "Tue", value: 44800 },
    { name: "Wed", value: 44600 },
    { name: "Thu", value: 44300 },
    { name: "Fri", value: 44045 },
  ],
  M: [
    { name: "Week 1", value: 47000 },
    { name: "Week 2", value: 46000 },
    { name: "Week 3", value: 45000 },
    { name: "Week 4", value: 44045 },
  ],
  "3M": [
    { name: "July", value: 48000 },
    { name: "Aug", value: 47000 },
    { name: "Sep", value: 44045 },
  ],
  Y: [
    { name: "Q1", value: 52000 },
    { name: "Q2", value: 49000 },
    { name: "Q3", value: 46000 },
    { name: "Q4", value: 44045 },
  ],
  ALL: [
    { name: "2020", value: 35000 },
    { name: "2021", value: 42000 },
    { name: "2022", value: 50000 },
    { name: "2023", value: 48000 },
    { name: "2024", value: 44045 },
  ],
};

const CustomLineChart = () => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const [range, setRange] = useState<keyof typeof dummyData>("Y");

  const isDark = colorScheme === "dark";

  return (
    <Card shadow="sm" radius="md" p="md" withBorder>
      <Text size="xs" fw={500} c={isDark ? theme.colors.gray[4] : theme.black}>
        Account Value
      </Text>
      <Text size="lg" fw={700}>
        $44,045
      </Text>
      <Text size="sm" c="red">
        -8,844.65 (16.72%)
      </Text>

      {/* Responsive Chart */}
      <div style={{ width: "100%", height: 140 }}>
        <ResponsiveContainer>
          <LineChart data={dummyData[range]}>
            <CartesianGrid
              stroke={isDark ? theme.colors.gray[8] : theme.colors.gray[2]}
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="name"
              stroke={isDark ? theme.colors.gray[5] : theme.colors.gray[7]}
              tick={{ fontSize: 10 }}
            />
            <YAxis
              stroke={isDark ? theme.colors.gray[5] : theme.colors.gray[7]}
              tick={{ fontSize: 10 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? theme.colors.dark[7] : theme.white,
                border: `1px solid ${
                  isDark ? theme.colors.dark[4] : theme.colors.gray[3]
                }`,
                borderRadius: theme.radius.sm,
                fontSize: 12,
              }}
              labelStyle={{
                color: isDark ? theme.white : theme.black,
              }}
              itemStyle={{
                color: isDark ? theme.white : theme.black,
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={theme.colors.blue[6]}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Time Range Selector */}
      <Group justify="center" mt="xs" gap="xs" wrap="wrap">
        {["D", "W", "M", "3M", "Y", "ALL"].map((label) => (
          <UnstyledButton
            key={label}
            onClick={() => setRange(label as keyof typeof dummyData)}
            style={{
              fontSize: 12,
              fontWeight: 500,
              padding: "2px 6px",
              borderBottom:
                range === label
                  ? `2px solid ${theme.colors.blue[6]}`
                  : "2px solid transparent",
              color:
                range === label
                  ? theme.colors.blue[6]
                  : isDark
                  ? theme.colors.gray[4]
                  : theme.colors.gray[7],
              cursor: "pointer",
            }}
          >
            {label}
          </UnstyledButton>
        ))}
      </Group>
    </Card>
  );
};

export default CustomLineChart;
