import React, { useState } from "react";

export const ExpandableContent = ({
  content,
  wordCount,
  ContentContainer = <div />,
  ButtonComponent = <button />,
}: ExpandableContentProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  let displayedContent = "";
  let contentWords = 0;

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  if (typeof content === "string") {
    contentWords = content.split(" ").length;
    displayedContent = isExpanded
      ? content
      : `${content.split(" ").slice(0, wordCount).join(" ")}${
          contentWords > wordCount ? "..." : ""
        }`;
  } else if (typeof content === "object") {
    contentWords = content.length;
    displayedContent = isExpanded
      ? content.join(", ")
      : `${content.slice(0, wordCount).join(", ")}${
          contentWords > wordCount ? "..." : ""
        }`;
  }

  return (
    <>
      {React.cloneElement(
        ContentContainer,
        {},
        displayedContent,
        contentWords > wordCount
          ? React.cloneElement(
              ButtonComponent,
              { onClick: toggleExpansion },
              isExpanded ? "Show less" : "Show more"
            )
          : undefined
      )}
    </>
  );
};

type ExpandableContentProps = {
  content: string | string[];
  wordCount: number;
  ContentContainer?: React.ReactElement;
  ButtonComponent?: React.ReactElement;
};
