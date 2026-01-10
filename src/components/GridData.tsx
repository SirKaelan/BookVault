import React from "react";

import { Grid } from "@chakra-ui/react/grid";
import { Text } from "@chakra-ui/react/text";
import { DATA_GRID_SYNONYMS_DICT } from "@/randomConfig";

type GridDataProps = {
  data: Record<string, string>;
  columns?: number;
  itemsPerColumn?: number;
};

export const GridData = ({
  data,
  columns = 2,
  itemsPerColumn = 3,
}: GridDataProps) => {
  // Translating incoming data to an object
  // read by the UI to display the data
  const translatedObject = translateDataObject({
    data,
    columns,
    itemsPerColumn,
  });

  return (
    <Grid
      templateColumns={{
        base: "max-content 1fr",
        md: `repeat(${columns}, max-content 1fr)`,
      }}
      columnGap="7"
      rowGap="2"
    >
      {translatedObject.map((columnObject) => (
        <Grid
          key={columnObject.id}
          gridColumn="span 2"
          templateColumns="subgrid"
          rowGap="2"
          alignSelf="start"
        >
          {columnObject.columnPairs.map((dataPair) => (
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

// Utilities
type columnDataPair = {
  key: string;
  value: string;
};

type columnObject = {
  id: number;
  columnPairs: columnDataPair[];
};

type translateDataObjectProps = {
  data: Record<string, string>;
  columns: number;
  itemsPerColumn: number;
};

const translateDataObject = ({
  data,
  columns,
  itemsPerColumn,
}: translateDataObjectProps): columnObject[] => {
  const dataEntries = Object.entries(data);
  const COLUMNS = columns;
  const ITEMS_PER_COLUMN = itemsPerColumn;

  const columnObjectCollection: columnObject[] = [];
  let columnIdxStart = 0;
  for (let i = 0; i < COLUMNS; i++) {
    const columnPairs: columnDataPair[] = [];

    for (let j = 0; j < ITEMS_PER_COLUMN; j++) {
      const dataPair: [string, string] | undefined =
        dataEntries[columnIdxStart + j];
      if (!dataPair) break;

      const [key, value] = dataPair;
      const splitKey = camelCaseWordSplitter(key);

      const columnPair: columnDataPair = {
        key: DATA_GRID_SYNONYMS_DICT[splitKey] || splitKey,
        value,
      };
      columnPairs.push(columnPair);
    }
    columnIdxStart += ITEMS_PER_COLUMN;

    const columnObject = {
      id: i,
      columnPairs,
    };
    columnObjectCollection.push(columnObject);
  }

  return columnObjectCollection;
};

const camelCaseWordSplitter = (word: string) =>
  word.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
