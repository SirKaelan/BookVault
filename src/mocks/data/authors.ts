import type { Author } from "@/contexts/books";
import { mockBooks } from "@/mocks/data/books";
import { getAuthorMockBooks } from "@/mocks/services/bookService";

export const mockAuthors: Author[] = [
  {
    type: "author",
    id: 1,
    name: "Brandon Sanderson",
    bio: "Brandon Winn Sanderson is an American author of high fantasy, science fiction, and young adult books. His best known novels include the Mistborn series and The Stormlight Archive, which are set in the Cosmere fictional universe.",
    books: getAuthorMockBooks(1, mockBooks),
  },
  {
    type: "author",
    id: 2,
    name: "Brent Weeks",
    bio: "Brent Weeks is an American fantasy writer. His debut novel, The Way of Shadows, was a New York Times best seller in April 2009. Each of the five books in his Lightbringer series made the NYT list as well, starting with The Black Prism in 2010.",
    books: getAuthorMockBooks(2, mockBooks),
  },
  {
    type: "author",
    id: 3,
    name: "Joe Abercrombie",
    bio: "Joseph Edward Abercrombie is a British author of epic fantasy books and a film editor. He is the author of The First Law and The Age of Madness trilogies, as well as other fantasy books in the same setting, and a trilogy of young adult novels. His novel Half a King won the 2015 Locus Award for best young adult book.",
    books: getAuthorMockBooks(3, mockBooks),
  },
];
