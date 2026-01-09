import type { Author } from "@/contexts/books";
import { mockBooks } from "@/mocks/data/books";
import { getAuthorMockBooks } from "@/mocks/services/bookService";

export const mockAuthors: Author[] = [
  {
    type: "author",
    id: 1,
    name: "Brandon Sanderson",
    // FIXME: Increase bio size
    bio: "Brandon Winn Sanderson is an American author of high fantasy, science fiction, and young adult books. His best known novels include the Mistborn series and The Stormlight Archive, which are set in the Cosmere fictional universe.",
    books: getAuthorMockBooks(1, mockBooks),
    image:
      "https://m.media-amazon.com/images/S/amzn-author-media-prod/o1ehbft4gejvtoskr22jt89eit._SY600_.jpg",
    bioData: {
      birthday: "1975-12-19",
      birthplace: "Lincoln, Nebraska, United States",
      currentResidence: "American Fork, Utah, United States",
      education: "Brigham Young University",
      genres: "High Fantasy, Science Fiction",
      interests:
        "Fantasy world-building, Tabletop games, Video games with strong stories, Firsthand travel for sensory details",
    },
    awards: ["New York Times Bestseller", "Award-Winning Author"],
    booksPublished: "70+",
  },
  // FIXME: Dig out the data for the last 2 authors
  {
    type: "author",
    id: 2,
    name: "Brent Weeks",
    // FIXME: Increase bio size
    bio: "Brent Weeks is an American fantasy writer. His debut novel, The Way of Shadows, was a New York Times best seller in April 2009. Each of the five books in his Lightbringer series made the NYT list as well, starting with The Black Prism in 2010.",
    books: getAuthorMockBooks(2, mockBooks),
    image: "https://images.gr-assets.com/authors/1583875279p8/1370283.jpg",
    bioData: {
      birthday: "1977-03-07",
      birthplace: "Whitefish, Montana, United States",
      currentResidence: "near Portland, Oregon, United States",
      education: "Hillsdale College",
      genres: "Epic Fantasy, Mystery, Action, Suspense",
      interests: "Gaming, Reading, Community engagement, Advocacy",
    },
    awards: ["New York Times Bestseller", "Award-Winning Author"],
    booksPublished: "12+",
  },
  {
    type: "author",
    id: 3,
    name: "Joe Abercrombie",
    // FIXME: Increase bio size
    bio: "Joseph Edward Abercrombie is a British author of epic fantasy books and a film editor. He is the author of The First Law and The Age of Madness trilogies, as well as other fantasy books in the same setting, and a trilogy of young adult novels. His novel Half a King won the 2015 Locus Award for best young adult book.",
    books: getAuthorMockBooks(3, mockBooks),
    image: "https://images.gr-assets.com/authors/1421267339p8/276660.jpg",
    bioData: {
      birthday: "1974-12-31",
      birthplace: "Lancaster, England, United Kingdom",
      currentResidence: "Bath, England, United Kingdom",
      education: "University of Manchester",
      genres: "Grimdark/Epic Fantasy, Young Adult",
      interests: "Gaming, Film Editing, Reading, Drawing",
    },
    awards: ["New York Times Bestseller", "Award-Winning Author"],
    booksPublished: "15+",
  },
];
