import React from "react";
import { useGetQueryValue } from "@/utils";
import { useFetchBook } from "@/hooks";

import { HStack, VStack } from "@chakra-ui/react/stack";
import { Image } from "@chakra-ui/react/image";
import { Box } from "@chakra-ui/react/box";
import { Flex } from "@chakra-ui/react/flex";
import { AspectRatio } from "@chakra-ui/react/aspect-ratio";
import { Heading } from "@chakra-ui/react/heading";
import { Text } from "@chakra-ui/react/text";
import { RatingGroup } from "@chakra-ui/react/rating-group";
import { Button } from "@chakra-ui/react/button";
import { Icon } from "@chakra-ui/react/icon";
import { Separator } from "@chakra-ui/react/separator";
import { Grid, GridItem } from "@chakra-ui/react/grid";
import { Group } from "@chakra-ui/react/group";

import { LuChevronUp } from "react-icons/lu";
import { LuChevronDown } from "react-icons/lu";

// import { Box, Grid, Typography, styled, Button } from "@mui/material";
import type { Theme } from "@mui/material";
import { ExpandableContent } from "@/components/ExpandableContent";
import { QuantityInput } from "@/components/QuantityInput";
import { AddCartButton } from "@/components/AddCartButton";

export const ProductDetails = (): React.JSX.Element => {
  // FIXME: Change query approach
  const bookId = useGetQueryValue("id");
  const book = useFetchBook(bookId);

  if (book.type === "loading") {
    return <div>Loading....</div>;
  }

  if (book.type === "error") {
    return <div>{book.message}</div>;
  }

  // const extractedGenres: string[] = book.genres.map(
  //   (genreObj) => genreObj.name
  // );

  // TODO: Remove this temporary code
  // book.synopsis =
  //   "Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter.It has been centuries since the fall of the ten consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Men trade kingdoms for Shardblades. Wars were fought for them, and won by them.One such war rages on a ruined landscape called the Shattered Plains. There, Kaladin, who traded his medical apprenticeship for a spear to protect his little brother, has been reduced to slavery. In a war that makes no sense, where ten armies fight separately against a single foe, he struggles to save his men and to fathom the leaders who consider them expendable.Brightlord Dalinar Kholin commands one of those other armies. Like his brother, the late king, he is fascinated by an ancient text called The Way of Kings. Troubled by over-powering visions of ancient times and the Knights Radiant, he has begun to doubt his own sanity.Across the ocean, an untried young woman named Shallan seeks to train under an eminent scholar and notorious heretic, Dalinar's niece, Jasnah. Though she genuinely loves learning, Shallan's motives are less than pure. As she plans a daring theft, her research for Jasnah hints at secrets of the Knights Radiant and the true cause of the war.The result of over ten years of planning, writing, and world-building, The Way of Kings is but the opening movement of the Stormlight Archive, a bold masterpiece in the making.Speak again the ancient oaths:Life before death.Strength before weakness.Journey before Destination.and return to men the Shards they once bore.The Knights Radiant must stand again.";

  return (
    <Flex gap="8">
      {/* Book cover */}
      <Box w="30%" shadow="xl" rounded="sm" overflow="hidden">
        <AspectRatio ratio={1 / 1.6}>
          <Image
            src={book.cover ? book.cover : ""}
            alt={`${book.title} book cover`}
          />
        </AspectRatio>
      </Box>

      {/* Book info */}
      <Flex w="70%" direction="column" gap="6">
        {/* Title, Author, Rating */}
        <Flex direction="column" gap="2">
          <Heading size="4xl">{book.title}</Heading>
          <Text as="span" fontWeight="light" color="gray.500">
            {book.author_name}
          </Text>
          <Flex gap="2">
            <RatingGroup.Root
              readOnly
              allowHalf
              count={5}
              defaultValue={4.5}
              size="sm"
              colorPalette="orange"
            >
              <RatingGroup.HiddenInput />
              <RatingGroup.Control />
            </RatingGroup.Root>
            <Text color="gray.400" fontSize="sm">
              6,390 reviews
            </Text>
          </Flex>
        </Flex>

        {/* Synopsis */}
        <Flex direction="column" alignItems="start" gap="3">
          <Text lineClamp="3">{book.synopsis}</Text>
          <Button
            variant="ghost"
            color="gray.600"
            h="auto"
            gap="1"
            p="0"
            rounded="none"
            _hover={{ borderBottom: "1px solid gray", bgColor: "transparent" }}
          >
            Show more{" "}
            <Icon p="0">
              <LuChevronDown />
            </Icon>
          </Button>
        </Flex>

        <Separator />

        {/* TODO: Make data object of this */}
        <Grid
          templateColumns={{
            base: "max-content auto",
            md: "repeat(2, max-content 1fr)",
          }}
          templateRows="repeat(3, auto)"
          columnGap="7"
          rowGap="2"
        >
          {/* Info combo 1 */}
          <GridItem colStart={1} rowStart={1}>
            <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
              Publisher
            </Text>
          </GridItem>
          <GridItem colStart={1} rowStart={2}>
            <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
              First Publish
            </Text>
          </GridItem>
          <GridItem colStart={1} rowStart={3}>
            <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
              ISBN
            </Text>
          </GridItem>

          <GridItem colStart={2} rowStart={1}>
            <Text fontSize="sm" color="gray.500">
              Tor Books (US) & Gollancz (UK)
            </Text>
          </GridItem>
          <GridItem colStart={2} rowStart={2}>
            <Text fontSize="sm" color="gray.500">
              November 17, 2020
            </Text>
          </GridItem>
          <GridItem colStart={2} rowStart={3}>
            <Text fontSize="sm" color="gray.500">
              978-1429952040
            </Text>
          </GridItem>

          {/* Info combo 2 */}
          <GridItem colStart={3} rowStart={1}>
            <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
              Language
            </Text>
          </GridItem>
          <GridItem colStart={3} rowStart={2}>
            <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
              Pages
            </Text>
          </GridItem>
          <GridItem colStart={3} rowStart={3}>
            <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
              Series
            </Text>
          </GridItem>

          <GridItem colStart={4} rowStart={1}>
            <Text fontSize="sm" color="gray.500">
              English
            </Text>
          </GridItem>
          <GridItem colStart={4} rowStart={2}>
            <Text fontSize="sm" color="gray.500">
              1213
            </Text>
          </GridItem>
          <GridItem colStart={4} rowStart={3}>
            <Text fontSize="sm" color="gray.500">
              The Stormlight Archive (Book 4 of 5)
            </Text>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
    // <Box>
    //   <Grid container columnSpacing={4}>
    //     <Grid item xs={4}>
    //       Image column
    //     </Grid>
    //     <Grid item xs={8}>
    //       {/* Book title + Author */}
    //       <Box>
    //         <Typography
    //           variant="h2"
    //           component="h2"
    //           fontWeight="medium"
    //           mb={0.5}
    //         >
    //           {book.title}
    //         </Typography>
    //         <Typography variant="h4" component="h4" fontWeight="light">
    //           {book.author_name}
    //         </Typography>
    //       </Box>
    //       {/* Book price */}
    //       <Box my={3.5}>
    //         <PriceTag variant="h3" component="span" fontWeight="regular">
    //           $16.99
    //         </PriceTag>
    //       </Box>
    //       {/* Synopsis */}
    //       <Box mb={2.5}>
    //         <Typography variant="h4" component="h4" fontWeight="medium" mb={1}>
    //           Synopsis:
    //         </Typography>
    //         <ExpandableContent
    //           content={book.synopsis}
    //           wordCount={160}
    //           ContentContainer={
    //             <Typography variant="h5" component="p" fontWeight="light" />
    //           }
    //           ButtonComponent={<Button />}
    //         />
    //       </Box>
    //       {/* Genres */}
    //       <Box mb={1} sx={{ display: "flex" }}>
    //         <Typography variant="h5" component="span" fontWeight="light" mr={1}>
    //           Genres:
    //         </Typography>
    //         <ExpandableContent
    //           content={extractedGenres}
    //           wordCount={5}
    //           ContentContainer={
    //             <Typography
    //               variant="h5"
    //               component="span"
    //               fontWeight="regular"
    //             />
    //           }
    //           ButtonComponent={<Button />}
    //         />
    //       </Box>
    //       {/* Pages */}
    //       <Box mb={3.5}>
    //         <Typography variant="h5" component="span" fontWeight="light" mr={1}>
    //           Pages:
    //         </Typography>
    //         {/* TODO: When i add a field to Books in DB for pages, fix this hardcoded value */}
    //         <Typography variant="h5" component="span" fontWeight="light">
    //           1000
    //         </Typography>
    //       </Box>
    //       {/* Quanity input + Checkout button */}
    //       <Box
    //         sx={{
    //           display: "flex",
    //           justifyContent: "space-between",
    //         }}
    //       >
    //         <QuantityInput label="QTY" />
    //         <AddCartButton />
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </Box>
  );
};

// --------------- Styling ---------------
// const PriceTag = styled(Typography)(({ theme }: PriceTagProps) => ({
//   borderBottom: `2px solid ${theme.palette.secondary.main}`,
// }));

// --------------- Types ---------------
// type PriceTagProps = {
//   theme: Theme;
// };
