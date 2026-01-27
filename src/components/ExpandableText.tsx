import React, {
  useState,
  useContext,
  createContext,
  Children,
  isValidElement,
} from "react";

import { Flex } from "@chakra-ui/react/flex";
import { Text } from "@chakra-ui/react/text";

// Context definition
type ExpandableTextContextType =
  | {
      isTextExpanded: boolean;
      handleButtonClick: () => void;
    }
  | undefined;
const ExpandableTextContext =
  createContext<ExpandableTextContextType>(undefined);

// Hook to use the context
const useExpandableTextContext = () => {
  const context = useContext(ExpandableTextContext);
  if (!context) {
    throw new Error(
      "ExpandableText subcomponents must be used within ExpandableText"
    );
  }
  return context;
};

// Main component with its types
type ExpandableTextComponent = {
  (props: ExpandableTextProps): React.ReactNode;
  Content: (props: ContentProps) => React.ReactNode;
  Button: (props: ButtonProps) => React.ReactNode;
};

type ExpandableTextProps = {
  children: React.ReactNode;
};
export const ExpandableText: ExpandableTextComponent = ({ children }) => {
  const [isTextExpanded, setIsTextExpanded] = useState<boolean>(false);

  const handleButtonClick = () => setIsTextExpanded((prev) => !prev);

  const content = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === ExpandableText.Content
  );

  const button = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === ExpandableText.Button
  );

  return (
    <ExpandableTextContext value={{ isTextExpanded, handleButtonClick }}>
      <Flex direction="column" alignItems="start" gap="3">
        {content}
        {button}
      </Flex>
    </ExpandableTextContext>
  );
};

// Subcomponents
type ContentProps = {
  children: React.ReactNode;
  maxLines?: number;
};
ExpandableText.Content = ({ children, maxLines = 10 }) => {
  const { isTextExpanded } = useExpandableTextContext();

  return (
    <Text asChild lineClamp={isTextExpanded ? 0 : maxLines}>
      {children}
    </Text>
  );
};

type ButtonProps = {
  children:
    | React.ReactNode
    | ((
        isTextExpanded: boolean,
        handleButtonClick: () => void
      ) => React.ReactNode);
};
ExpandableText.Button = ({ children }) => {
  const { isTextExpanded, handleButtonClick } = useExpandableTextContext();

  const passedContent =
    typeof children === "function"
      ? children(isTextExpanded, handleButtonClick)
      : children;

  return <>{passedContent}</>;
};
