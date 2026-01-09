import React from "react";

import { Grid } from "@chakra-ui/react/grid";
import { Text } from "@chakra-ui/react/text";

type GridDataProps = {
  // FIXME: See if type is correct at all
  data: Record<string, string>;
};

export const GridData = ({ data }: GridDataProps) => {
  const translatedObject = translateDataObject(data);

  return (
    <Grid
      templateColumns={{
        base: "max-content 1fr",
        md: "repeat(2, max-content 1fr)",
      }}
      columnGap="7"
      rowGap="2"
    >
      {translatedObject.map((col) => (
        <Grid
          key={col.id}
          gridColumn="span 2"
          templateColumns="subgrid"
          rowGap="2"
          alignSelf="start"
        >
          {col.colData.map((dataPair) => (
            <React.Fragment key={dataPair.key}>
              <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
                {dataPair.key}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {dataPair.value}
              </Text>
            </React.Fragment>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

// FIXME: Literally fix this
const translateDataObject = (originalData: Record<string, string>) => {
  const bioDataEntries = Object.entries(originalData);
  const ITEMS_PER_COLUMN = 3;
  const COLUMNS = Math.ceil(bioDataEntries.length / ITEMS_PER_COLUMN);

  let columnIdxStart = 0;
  const authorBioData: {
    id: number;
    colData: { key: string; value: string }[];
  }[] = [];
  for (let i = 0; i < COLUMNS; i++) {
    const colData = [];

    for (let j = 0; j < ITEMS_PER_COLUMN; j++) {
      const bioDataEntry: [string, string] | undefined =
        bioDataEntries[columnIdxStart + j];
      if (!bioDataEntry) break;

      // TODO: Take this into a config
      const synonymsDict: Record<string, string> = {
        birthday: "born",
      };

      const [key, value] = bioDataEntry;

      // split camelCase word into separate words
      const splitKey = key.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();

      const colEntry = {
        key: synonymsDict[splitKey] || splitKey,
        value,
      };
      colData.push(colEntry);
    }
    columnIdxStart += ITEMS_PER_COLUMN;

    const colObj = {
      id: i,
      colData,
    };
    authorBioData.push(colObj);
  }

  return authorBioData;
};
