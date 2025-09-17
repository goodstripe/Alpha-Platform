"use client";

import React from "react";
import {
  Group,
  Box,
  Collapse,
  UnstyledButton,
  rem,
  Tooltip,
  Text,
  Button,
} from "@mantine/core";
import {
  IconChevronDown,
  IconCircleCheck,
  IconInfoCircle,
  IconLock,
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
  icon: React.ComponentType<any>;
  isLast: boolean;
  onCompleteStep: () => void;
  isFinalStep: boolean;
  tooltip?: string;
  detailedInfo?: string;
  completedSteps: number[];
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
  tooltip,
  detailedInfo,
  completedSteps,
}) => {
  const [opened, { toggle }] = useDisclosure(isActive);
  const [infoExpanded, { toggle: toggleInfo }] = useDisclosure(false);
  const isDisabled = !isCompleted && !isActive && step > completedSteps.length;

  React.useEffect(() => {
    if (isActive && !opened) toggle();
    if (!isActive && opened) toggle();
  }, [isActive]);

  return (
    <Group align="flex-start" gap={0} wrap="nowrap">
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
              : isDisabled
              ? "var(--mantine-color-gray-2)"
              : "var(--mantine-color-gray-3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isDisabled ? "var(--mantine-color-gray-5)" : "white",
            fontWeight: 600,
            margin: "0 auto",
            zIndex: 2,
            position: "relative",
            cursor: isDisabled ? "not-allowed" : "pointer",
          }}
        >
          {isCompleted ? (
            <IconCircleCheck size={20} />
          ) : (
            <IconComponent size={20} />
          )}
        </Box>

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
                : isDisabled
                ? "var(--mantine-color-gray-2)"
                : "var(--mantine-color-gray-3)",
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
          />
        )}
      </Box>

      <Box style={{ flex: 1, marginBottom: rem(20) }}>
        <UnstyledButton
          onClick={() => {
            if (!isDisabled) {
              onStepClick(step);
              toggle();
            }
          }}
          style={{
            width: "100%",
            padding: "var(--mantine-spacing-md)",
            borderRadius: "var(--mantine-radius-md)",
            backgroundColor: isActive
              ? "var(--mantine-color-blue-light)"
              : isDisabled
              ? "var(--mantine-color-gray-1)"
              : "transparent",
            border: `1px solid ${
              isActive
                ? "var(--mantine-color-blue-light)"
                : isDisabled
                ? "var(--mantine-color-gray-2)"
                : "var(--mantine-color-gray-3)"
            }`,
            cursor: isDisabled ? "not-allowed" : "pointer",
            opacity: isDisabled ? 0.6 : 1,
          }}
          disabled={isDisabled}
        >
          <Group justify="space-between" wrap="nowrap">
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: rem(8),
                  color: isDisabled ? "var(--mantine-color-gray-5)" : "inherit",
                }}
              >
                <span style={{ fontWeight: 700, fontSize: rem(18) }}>
                  {label}
                </span>
                {tooltip && !isDisabled && (
                  <UnstyledButton
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleInfo();
                    }}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <IconInfoCircle
                      size={18}
                      color="var(--mantine-color-blue-6)"
                    />
                  </UnstyledButton>
                )}
                {isDisabled && (
                  <Tooltip
                    label="Complete previous steps first"
                    position="right"
                    withArrow
                  >
                    <IconLock size={18} color="var(--mantine-color-gray-5)" />
                  </Tooltip>
                )}
              </div>

              <Collapse in={infoExpanded && !isDisabled}>
                <Text
                  size="sm"
                  mt="xs"
                  style={{ color: "var(--mantine-color-blue-7)" }}
                >
                  {detailedInfo}
                </Text>
              </Collapse>

              {!infoExpanded && (
                <div
                  style={{
                    fontSize: rem(14),
                    color: isDisabled ? "var(--mantine-color-gray-5)" : "gray",
                    fontWeight: 400,
                  }}
                >
                  {description}
                </div>
              )}
            </div>
            {!isDisabled && (
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
            )}
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
            {isActive && !isCompleted && (
              <Group align="end">
                <Button onClick={onCompleteStep} mt={"md"}>
                  {isFinalStep ? "Finish" : "Next"}
                </Button>
              </Group>
            )}
          </Box>
        </Collapse>
      </Box>
    </Group>
  );
};

export default AccordionStep;
