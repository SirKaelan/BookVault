import type { Genre } from "@/contexts/books";

export enum GenreNames {
  Novel = "Novel",
  Fantasy_Fiction = "Fantasy Fiction",
  High_Fantasy = "High Fantasy",
  Science_Fiction = "Science Fiction",
  Fantasy = "Fantasy",
  Adventure_Fiction = "Adventure Fiction",
  Historical_Fiction = "Historical Fiction",
  War_Story = "War Story",
}

export const mockGenres: Genre[] = [
  {
    id: 1,
    name: GenreNames.Novel,
  },
  {
    id: 2,
    name: GenreNames.Fantasy_Fiction,
  },
  {
    id: 3,
    name: GenreNames.High_Fantasy,
  },
  {
    id: 4,
    name: GenreNames.Science_Fiction,
  },
  {
    id: 5,
    name: GenreNames.Fantasy,
  },
  {
    id: 6,
    name: GenreNames.Adventure_Fiction,
  },
  {
    id: 7,
    name: GenreNames.Historical_Fiction,
  },
  {
    id: 8,
    name: GenreNames.War_Story,
  },
];

export const genreObjects = (arr: string[]): Genre[] => {
  const lookup = Object.fromEntries(mockGenres.map((g) => [g.name, g]));
  return arr.map((strGenre) => lookup[strGenre]).filter(Boolean);
};
