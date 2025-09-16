"use client";

import React from "react";
import { Group, Box, Collapse, UnstyledButton, rem } from "@mantine/core";
import {
  IconChevronDown,
  IconCircleCheck,
  TablerIconsProps,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

export interface AccordionStepProps {
  step: number;
  label: string;
  description: string;
  children: React.ReactNode;
  isActive: boolean;
  isCompleted: boolean;
  onStepClick: (step: number) => void;
  icon: React.ComponentType<TablerIconsProps>;
  isLast: boolean;
  onCompleteStep: () => void;
  isFinalStep: boolean;
}

const AccordionStep: React.FC<AccordionStepProps> = ({
  step,
  label,
  description,
  children,
  isActive,
  isCompleted,
  onStepClick,
  icon: IconComponent,
  isLast,
  onCompleteStep,
  isFinalStep,
}) => {
  const [opened, { toggle }] = useDisclosure(isActive);

  React.useEffect(() => {
    if (isActive && !opened) toggle();
    if (!isActive && opened) toggle();
  }, [isActive]);

  return (
    <Group align="flex-start" gap={0} wrap="nowrap">
      {/* Step number and connecting line */}
      <Box style={{ position: "relative", width: rem(50) }}>
        <Box
          style={{
            width: rem(32),
            height: rem(32),
            borderRadius: "50%",
            backgroundColor: isCompleted
              ? "var(--mantine-color-teal-6)"
              : isActive
              ? "var(--mantine-color-blue-6)"
              : "var(--mantine-color-gray-3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: 600,
            margin: "0 auto",
            zIndex: 2,
            position: "relative",
          }}
        >
          {isCompleted ? (
            <IconCircleCheck size={20} />
          ) : (
            <IconComponent size={20} />
          )}
        </Box>

        {/* Connecting line */}
        {!isLast && (
          <Box
            style={{
              position: "absolute",
              left: "50%",
              top: rem(32),
              height: rem(40),
              width: rem(2),
              backgroundColor: isCompleted
                ? "var(--mantine-color-teal-6)"
                : "var(--mantine-color-gray-3)",
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
          />
        )}
      </Box>

      {/* Step content */}
      <Box style={{ flex: 1, marginBottom: rem(20) }}>
        <UnstyledButton
          onClick={() => {
            onStepClick(step);
            toggle();
          }}
          style={{
            width: "100%",
            padding: "var(--mantine-spacing-md)",
            borderRadius: "var(--mantine-radius-md)",
            backgroundColor: isActive
              ? "var(--mantine-color-blue-light)"
              : "transparent",
            border: `1px solid ${
              isActive
                ? "var(--mantine-color-blue-light)"
                : "var(--mantine-color-gray-3)"
            }`,
          }}
        >
          <Group justify="space-between" wrap="nowrap">
            <div>
              <span style={{ fontWeight: 700, fontSize: rem(18) }}>
                {label}
              </span>
              <div
                style={{ fontSize: rem(14), color: "gray", fontWeight: 400 }}
              >
                {description}
              </div>
            </div>
            <IconChevronDown
              style={{
                width: rem(24),
                height: rem(24),
                transform: opened ? "rotate(180deg)" : "none",
                transition: "transform 200ms ease",
              }}
              color={
                isActive
                  ? "var(--mantine-color-blue-6)"
                  : "var(--mantine-color-gray-5)"
              }
            />
          </Group>
        </UnstyledButton>

        <Collapse in={opened}>
          <Box
            style={{
              padding: "var(--mantine-spacing-md)",
              border: "1px solid var(--mantine-color-gray-3)",
              borderTop: "none",
              borderRadius:
                "0 0 var(--mantine-radius-md) var(--mantine-radius-md)",
            }}
          >
            {children}
            {isActive && (
              <button
                onClick={onCompleteStep}
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem 1.5rem",
                  backgroundColor: "var(--mantine-color-blue-6)",
                  color: "white",
                  border: "none",
                  borderRadius: "var(--mantine-radius-sm)",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                {isFinalStep ? "Finish" : "Complete Step"}
              </button>
            )}
          </Box>
        </Collapse>
      </Box>
    </Group>
  );
};

export default AccordionStep;
