import React from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";

type Book = {
  cover: string;
  synopsis: string;
  genres: string[];
  title: string;
  author: string;
};

export const Search = (): JSX.Element => {
  return (
    <>
      <Box sx={{ my: 4, px: 4 }}>
        <TextField label="Search" variant="outlined" sx={{ width: "100%" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {booksData.map((book) => (
          <Card sx={{ width: 245, boxShadow: 6, mb: 4 }}>
            <CardMedia
              sx={{ height: 300 }}
              component="img"
              image={book.cover}
              title={`"${book.title}" cover`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {book.author}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained">
                Add
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

const booksData: Book[] = [
  {
    cover:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91XfWTLEoXL._AC_UF1000,1000_QL80_.jpg",
    synopsis:
      "Guile is the Prism, the most powerful man in the world. He is high priest and emperor, a man whose power, wit, and charm are all that preserves a tenuous peace. Yet Prisms never last, and Guile knows exactly how long he has left to live.",
    genres: ["fantasy", "fiction", "epic fantasy", "high fantasy", "magic"],
    title: "The Black Prism",
    author: "Brent Weeks",
  },
  {
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599911216l/49021976.jpg",
    synopsis:
      "After forming a coalition of human resistance against the enemy invasion, Dalinar Kholin and his Knights Radiant have spent a year fighting a protracted, brutal war. Neither side has gained an advantage, and the threat of a betrayal by Dalinar's crafty ally Taravangian looms over every strategic move.",
    genres: ["fantasy", "fiction", "epic fantasy", "high fantasy"],
    title: "Rhythm of War",
    author: "Brandon Sanderson",
  },
  {
    cover:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91XfWTLEoXL._AC_UF1000,1000_QL80_.jpg",
    synopsis:
      "Guile is the Prism, the most powerful man in the world. He is high priest and emperor, a man whose power, wit, and charm are all that preserves a tenuous peace. Yet Prisms never last, and Guile knows exactly how long he has left to live.",
    genres: ["fantasy", "fiction", "epic fantasy", "high fantasy", "magic"],
    title: "The Black Prism",
    author: "Brent Weeks",
  },
  {
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599911216l/49021976.jpg",
    synopsis:
      "After forming a coalition of human resistance against the enemy invasion, Dalinar Kholin and his Knights Radiant have spent a year fighting a protracted, brutal war. Neither side has gained an advantage, and the threat of a betrayal by Dalinar's crafty ally Taravangian looms over every strategic move.",
    genres: ["fantasy", "fiction", "epic fantasy", "high fantasy"],
    title: "Rhythm of War",
    author: "Brandon Sanderson",
  },
  {
    cover:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91XfWTLEoXL._AC_UF1000,1000_QL80_.jpg",
    synopsis:
      "Guile is the Prism, the most powerful man in the world. He is high priest and emperor, a man whose power, wit, and charm are all that preserves a tenuous peace. Yet Prisms never last, and Guile knows exactly how long he has left to live.",
    genres: ["fantasy", "fiction", "epic fantasy", "high fantasy", "magic"],
    title: "The Black Prism",
    author: "Brent Weeks",
  },
  {
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599911216l/49021976.jpg",
    synopsis:
      "After forming a coalition of human resistance against the enemy invasion, Dalinar Kholin and his Knights Radiant have spent a year fighting a protracted, brutal war. Neither side has gained an advantage, and the threat of a betrayal by Dalinar's crafty ally Taravangian looms over every strategic move.",
    genres: ["fantasy", "fiction", "epic fantasy", "high fantasy"],
    title: "Rhythm of War",
    author: "Brandon Sanderson",
  },
  {
    cover:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91XfWTLEoXL._AC_UF1000,1000_QL80_.jpg",
    synopsis:
      "Guile is the Prism, the most powerful man in the world. He is high priest and emperor, a man whose power, wit, and charm are all that preserves a tenuous peace. Yet Prisms never last, and Guile knows exactly how long he has left to live.",
    genres: ["fantasy", "fiction", "epic fantasy", "high fantasy", "magic"],
    title: "The Black Prism",
    author: "Brent Weeks",
  },
  {
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599911216l/49021976.jpg",
    synopsis:
      "After forming a coalition of human resistance against the enemy invasion, Dalinar Kholin and his Knights Radiant have spent a year fighting a protracted, brutal war. Neither side has gained an advantage, and the threat of a betrayal by Dalinar's crafty ally Taravangian looms over every strategic move.",
    genres: ["fantasy", "fiction", "epic fantasy", "high fantasy"],
    title: "Rhythm of War",
    author: "Brandon Sanderson",
  },
  {
    cover:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91XfWTLEoXL._AC_UF1000,1000_QL80_.jpg",
    synopsis:
      "Guile is the Prism, the most powerful man in the world. He is high priest and emperor, a man whose power, wit, and charm are all that preserves a tenuous peace. Yet Prisms never last, and Guile knows exactly how long he has left to live.",
    genres: ["fantasy", "fiction", "epic fantasy", "high fantasy", "magic"],
    title: "The Black Prism",
    author: "Brent Weeks",
  },
  {
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599911216l/49021976.jpg",
    synopsis:
      "After forming a coalition of human resistance against the enemy invasion, Dalinar Kholin and his Knights Radiant have spent a year fighting a protracted, brutal war. Neither side has gained an advantage, and the threat of a betrayal by Dalinar's crafty ally Taravangian looms over every strategic move.",
    genres: ["fantasy", "fiction", "epic fantasy", "high fantasy"],
    title: "Rhythm of War",
    author: "Brandon Sanderson",
  },
  {
    cover:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91XfWTLEoXL._AC_UF1000,1000_QL80_.jpg",
    synopsis:
      "Guile is the Prism, the most powerful man in the world. He is high priest and emperor, a man whose power, wit, and charm are all that preserves a tenuous peace. Yet Prisms never last, and Guile knows exactly how long he has left to live.",
    genres: ["fantasy", "fiction", "epic fantasy", "high fantasy", "magic"],
    title: "The Black Prism",
    author: "Brent Weeks",
  },
  {
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599911216l/49021976.jpg",
    synopsis:
      "After forming a coalition of human resistance against the enemy invasion, Dalinar Kholin and his Knights Radiant have spent a year fighting a protracted, brutal war. Neither side has gained an advantage, and the threat of a betrayal by Dalinar's crafty ally Taravangian looms over every strategic move.",
    genres: ["fantasy", "fiction", "epic fantasy", "high fantasy"],
    title: "Rhythm of War",
    author: "Brandon Sanderson",
  },
];
