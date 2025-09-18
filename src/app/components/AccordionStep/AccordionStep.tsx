"use client";

import React, { useEffect, useRef } from "react";
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
import { IconChevronDown, IconInfoCircle, IconLock } from "@tabler/icons-react";
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
  hideFutureSteps?: boolean;
}

const AccordionStep: React.FC<AccordionStepProps> = ({
  step,
  label,
  children,
  isActive,
  isCompleted,
  onStepClick,
  isLast,
  onCompleteStep,
  isFinalStep,
  tooltip,
  detailedInfo,
  completedSteps,
  hideFutureSteps = true,
}) => {
  const [opened, { toggle, open, close }] = useDisclosure(isActive);
  const [infoExpanded, { toggle: toggleInfo }] = useDisclosure(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const isDisabled = !isCompleted && !isActive && step > completedSteps.length;
  const isFutureStep = step > completedSteps.length;

  useEffect(() => {
    if (isActive && !opened) {
      open();
    } else if (!isActive && opened) {
      close();
    }
  }, [isActive]);

  // Enhanced auto-scroll when step becomes active and opened
  useEffect(() => {
    if (isActive && opened && contentRef.current) {
      // Longer timeout to ensure collapsed content is fully expanded
      setTimeout(() => {
        const element = contentRef.current;
        if (element) {
          // Get the full height of the expanded element including all content
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Find the content box (the expanded form/content area)
          const contentBox = element.querySelector(
            '[style*="border-top: none"]'
          );
          const contentHeight = contentBox
            ? contentBox.getBoundingClientRect().height
            : 0;

          // Calculate total element height including expanded content
          const totalElementHeight = rect.height;

          // More aggressive scroll calculation
          const elementTop = rect.top + window.scrollY;

          // If the element + its content is larger than viewport, position it at top
          // Otherwise position it higher up for better visibility
          let scrollTo;
          if (totalElementHeight > viewportHeight * 0.8) {
            // For large forms, scroll to put the header near the top
            scrollTo = elementTop - viewportHeight * 0.1; // 10% from top
          } else {
            // For smaller content, position higher in viewport
            scrollTo = elementTop - viewportHeight * 0.3; // 30% from top
          }

          // Ensure we don't scroll above the document
          scrollTo = Math.max(0, scrollTo);

          window.scrollTo({
            top: scrollTo,
            behavior: "smooth",
          });
        }
      }, 300); // Increased timeout for content expansion
    }
  }, [isActive, opened]);

  if (hideFutureSteps && isFutureStep) {
    return null;
  }

  const handleStepClick = () => {
    if (!isDisabled) {
      onStepClick(step);
      toggle();
    }
  };

  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleInfo();
  };

  return (
    <Group align="flex-start" gap={0} wrap="nowrap" ref={contentRef}>
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
            fontWeight: 700,
            fontSize: rem(14),
            margin: "0 auto",
            zIndex: 2,
            position: "relative",
            cursor: isDisabled ? "not-allowed" : "pointer",
          }}
        >
          {/* Always show the step number, even when completed */}
          {step + 1}
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
          onClick={handleStepClick}
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
                  <Box
                    component="span"
                    onClick={handleInfoClick}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      padding: rem(2),
                    }}
                  >
                    <IconInfoCircle
                      size={18}
                      color="var(--mantine-color-blue-6)"
                    />
                  </Box>
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
                  style={{ color: "var(--mantine-color-gray-6)" }}
                >
                  {detailedInfo}
                </Text>
              </Collapse>
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
              <Group justify="flex-end" mt={"lg"}>
                <Button onClick={onCompleteStep}>
                  {isFinalStep ? "Finish" : "Submit"}
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
