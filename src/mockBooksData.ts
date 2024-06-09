import { AuthorIds } from "authorsIdsEnum";
import { Genre } from "contexts/books";

export type APIBookFormat = {
  id: number;
  author_id: number;
  title: string;
  author_name: string;
  genres: Genre[];
  synopsis: string;
  cover: string;
  price: number;
};

export const booksData: APIBookFormat[] = [
  {
    id: 1,
    author_id: AuthorIds.BrentWeeks,
    cover:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91XfWTLEoXL._AC_UF1000,1000_QL80_.jpg",
    synopsis:
      "Guile is the Prism, the most powerful man in the world. He is high priest and emperor, a man whose power, wit, and charm are all that preserves a tenuous peace. Yet Prisms never last, and Guile knows exactly how long he has left to live.",
    genres: [
      { id: 5, name: "fantasy" },
      { id: 4, name: "fiction" },
      { id: 1, name: "epic fantasy" },
      { id: 2, name: "high fantasy" },
      { id: 3, name: "magic" },
    ],
    title: "The Black Prism",
    author_name: "Brent Weeks",
    price: 12.99,
  },
  {
    id: 2,
    author_id: AuthorIds.BrandonSanderson,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599911216l/49021976.jpg",
    synopsis:
      "After forming a coalition of human resistance against the enemy invasion, Dalinar Kholin and his Knights Radiant have spent a year fighting a protracted, brutal war. Neither side has gained an advantage, and the threat of a betrayal by Dalinar's crafty ally Taravangian looms over every strategic move.",
    genres: [
      { id: 5, name: "fantasy" },
      { id: 4, name: "fiction" },
      { id: 1, name: "epic fantasy" },
      { id: 2, name: "high fantasy" },
    ],
    title: "Rhythm of War",
    author_name: "Brandon Sanderson",
    price: 12.99,
  },
  {
    id: 3,
    author_id: AuthorIds.BrandonSanderson,
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660269968i/17182126.jpg",
    synopsis:
      "Ten years ago, Calamity came. It was a burst in the sky that gave ordinary men and women extraordinary powers. The awed public started calling them Epics. But Epics are no friend of man. With incredible gifts came the desire to rule. And to rule man you must crush his will.",
    genres: [
      { id: 5, name: "fantasy" },
      { id: 7, name: "young-adult" },
      { id: 6, name: "science-fiction" },
      { id: 8, name: "dystopia" },
    ],
    title: "Steelheart",
    author_name: "Brandon Sanderson",
    price: 12.99,
  },
  {
    id: 4,
    author_id: AuthorIds.BrandonSanderson,
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672574587i/60531406.jpg",
    synopsis:
      "The only life Tress has known on her island home in an emerald-green ocean has been a simple one, with the simple pleasures of collecting cups brought by sailors from faraway lands and listening to stories told by her friend Charlie. But when his father takes him on a voyage to find a bride and disaster strikes, Tress must stow away on a ship and seek the Sorceress of the deadly Midnight Sea. Amid the spore oceans where pirates abound, can Tress leave her simple life behind and make her own place sailing a sea where a single drop of water can mean instant death?",
    genres: [
      { id: 5, name: "fantasy" },
      { id: 4, name: "fiction" },
      { id: 10, name: "romance" },
      { id: 2, name: "high fantasy" },
      { id: 9, name: "adventure" },
    ],
    title: "Tress of the Emerald Sea",
    author_name: "Brandon Sanderson",
    price: 12.99,
  },
  {
    id: 5,
    author_id: AuthorIds.BrentWeeks,
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672601160i/3227063.jpg",
    synopsis:
      "For Azoth, survival is precarious. Something you never take for granted. As a guild rat, he's grown up in the slums, and learned to judge people quickly - and to take risks. Risks like apprenticing himself to Durzo Blint.",
    genres: [
      { id: 5, name: "fantasy" },
      { id: 4, name: "fiction" },
      { id: 1, name: "epic fantasy" },
      { id: 2, name: "high fantasy" },
      { id: 3, name: "magic" },
    ],
    title: "The Way of Shadows",
    author_name: "Brent Weeks",
    price: 12.99,
  },
  {
    id: 6,
    author_id: AuthorIds.BrandonSanderson,
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617768316i/68428.jpg",
    synopsis:
      'For a thousand years the ash fell and no flowers bloomed. For a thousand years the Skaa slaved in misery and lived in fear. For a thousand years the Lord Ruler, the "Sliver of Infinity," reigned with absolute power and ultimate terror, divinely invincible.',
    genres: [
      { id: 5, name: "fantasy" },
      { id: 4, name: "fiction" },
      { id: 1, name: "epic fantasy" },
      { id: 2, name: "high fantasy" },
    ],
    title: "The Final Empire",
    author_name: "Brandon Sanderson",
    price: 12.99,
  },
  {
    id: 7,
    author_id: AuthorIds.BrianMcClellan,
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659903996i/15790883.jpg",
    synopsis:
      "Guile is the Prism, the most powerful man in the world. He is high priest and emperor, a man whose power, wit, and charm are all that preserves a tenuous peace. Yet Prisms never last, and Guile knows exactly how long he has left to live.",
    genres: [
      { id: 5, name: "fantasy" },
      { id: 4, name: "fiction" },
      { id: 1, name: "epic fantasy" },
      { id: 2, name: "high fantasy" },
      { id: 3, name: "magic" },
    ],
    title: "Promise of Blood",
    author_name: "Brian McClellan",
    price: 12.99,
  },
  {
    id: 8,
    author_id: AuthorIds.BrandonSanderson,
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1475740953i/68427.jpg",
    synopsis:
      "Elantris was the capital of Arelon: gigantic, beautiful, literally radiant, filled with benevolent beings who used their powerful magical abilities for the benefit of all. Yet each of these demigods was once an ordinary person until touched by the mysterious transforming power of the Shaod.",
    genres: [
      { id: 5, name: "fantasy" },
      { id: 4, name: "fiction" },
      { id: 1, name: "epic fantasy" },
      { id: 2, name: "high fantasy" },
    ],
    title: "Elantris",
    author_name: "Brandon Sanderson",
    price: 12.99,
  },
  {
    id: 9,
    author_id: AuthorIds.BrianMcClellan,
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659901327i/20883847.jpg",
    synopsis:
      "Field Marshal Tamas returns to his beloved country to find that for the first time in history, the capital city of Adro lies in the hands of a foreign invader. His son is missing, his allies are indistinguishable from his foes, and reinforcements are several weeks away.",
    genres: [
      { id: 5, name: "fantasy" },
      { id: 4, name: "fiction" },
      { id: 1, name: "epic fantasy" },
      { id: 2, name: "high fantasy" },
      { id: 3, name: "magic" },
    ],
    title: "The Autumn Republic",
    author_name: "Brian McClellan",
    price: 12.99,
  },
  {
    id: 10,
    author_id: AuthorIds.BrandonSanderson,
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654573897i/34002132.jpg",
    synopsis:
      "n Oathbringer, the third volume of the New York Times bestselling Stormlight Archive, humanity faces a new Desolation with the return of the Voidbringers, a foe with numbers as great as their thirst for vengeance.",
    genres: [
      { id: 5, name: "fantasy" },
      { id: 4, name: "fiction" },
      { id: 1, name: "epic fantasy" },
      { id: 2, name: "high fantasy" },
    ],
    title: "Oathbringer",
    author_name: "Brandon Sanderson",
    price: 12.99,
  },
  {
    id: 11,
    author_id: AuthorIds.BrianMcClellan,
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659901305i/17608111.jpg",
    synopsis:
      "Guile is the Prism, the most powerful man in the world. He is high priest and emperor, a man whose power, wit, and charm are all that preserves a tenuous peace. Yet Prisms never last, and Guile knows exactly how long he has left to live.",
    genres: [
      { id: 5, name: "fantasy" },
      { id: 4, name: "fiction" },
      { id: 1, name: "epic fantasy" },
      { id: 2, name: "high fantasy" },
      { id: 3, name: "magic" },
    ],
    title: "The Crimson Campaign",
    author_name: "Brian McClellan",
    price: 12.99,
  },
  {
    id: 12,
    author_id: AuthorIds.BrandonSanderson,
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442889632i/10803121.jpg",
    synopsis:
      "Three hundred years after the events of the Mistborn trilogy, Scadrial is now on the verge of modernity, with railroads to supplement the canals, electric lighting in the streets and the homes of the wealthy, and the first steel-framed skyscrapers racing for the clouds.",
    genres: [
      { id: 5, name: "fantasy" },
      { id: 4, name: "fiction" },
      { id: 1, name: "epic fantasy" },
      { id: 2, name: "high fantasy" },
    ],
    title: "The Alloy of Law",
    author_name: "Brandon Sanderson",
    price: 12.99,
  },
  {
    id: 13,
    author_id: AuthorIds.BrandonSanderson,
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659906200i/13578175.jpg",
    synopsis:
      "A heretic thief is the empire’s only hope in this fascinating tale that inhabits the same world as the popular novel, Elantris.",
    genres: [
      { id: 5, name: "fantasy" },
      { id: 4, name: "fiction" },
      { id: 1, name: "epic fantasy" },
      { id: 2, name: "high fantasy" },
    ],
    title: "The Emperor's Soul",
    author_name: "Brandon Sanderson",
    price: 12.99,
  },
  {
    id: 14,
    author_id: AuthorIds.BrianMcClellan,
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1472056794i/28811016.jpg",
    synopsis:
      "The young nation of Fatrasta is a turbulent place -- a frontier destination for criminals, fortune-hunters, brave settlers, and sorcerers seeking relics of the past. Only the iron will of the lady chancellor and her secret police holds the capital city of Landfall together against the unrest of an oppressed population and the machinations of powerful empires.",
    genres: [
      { id: 5, name: "fantasy" },
      { id: 4, name: "fiction" },
      { id: 1, name: "epic fantasy" },
      { id: 2, name: "high fantasy" },
      { id: 3, name: "magic" },
    ],
    title: "Sins of Empire",
    author_name: "Brian McClellan",
    price: 12.99,
  },
  {
    id: 15,
    author_id: AuthorIds.BrandonSanderson,
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1569876576i/42769202.jpg",
    synopsis:
      "All her life, Spensa has dreamed of becoming a pilot. Of proving she's a hero like her father. She made it to the sky, but the truths she learned about her father were crushing.",
    genres: [
      { id: 6, name: "science-fiction" },
      { id: 7, name: "young-adult" },
      { id: 5, name: "fantasy" },
      { id: 4, name: "fiction" },
    ],
    title: "Starsight",
    author_name: "Brandon Sanderson",
    price: 12.99,
  },
];
