import type { Author } from "@/contexts/books";
import { mockBooks } from "@/mocks/data/books";
import { getAuthorMockBooks } from "@/mocks/services/bookService";

export const mockAuthors: Author[] = [
  {
    type: "author",
    id: 1,
    name: "Brandon Sanderson",
    bio: `I’m Brandon Sanderson, and I write stories of the fantastic: fantasy, science fiction, and thrillers.\n\nThe release of Wind and Truth in December 2024—the fifth and final book in the first arc of the #1 New York Times bestselling Stormlight Archive series—marks a significant milestone for me. This series is my love letter to the epic fantasy genre, and it’s the type of story I always dreamed epic fantasy could be. Now is a great time to get into the Stormlight Archive since the first arc, which begins with Way of Kings, is complete.\n\nDuring our crowdfunding campaign for the leatherbound edition of Words of Radiance, I announced a fifth Secret Project called Isles of the Emberdark, which came out in the summer of 2025. Coming December 2025 is Tailored Realities, my non-Cosmere short story collection featuring the new novella Moment Zero.\n\nDefiant, the fourth and final volume of the series that started with Skyward in 2018, came out in November 2023, capping an already book-filled year that saw the releases of all four Secret Projects: Tress of the Emerald Sea, The Frugal Wizard’s Handbook for Surviving Medieval England, Yumi and the Nightmare Painter, and The Sunlit Man. These four books were all initially offered to backers of the #1 Kickstarter campaign of all time.\n\nNovember 2022 saw the release of The Lost Metal, the seventh volume in the Mistborn saga, and the final volume of the Mistborn Era Two featuring Wax & Wayne. Now that the first arc of the Stormlight Archive is wrapped up, I’ve started writing the third era of Mistborn in 2025.\n\nMost readers have noticed that my adult fantasy novels are in a connected universe called the Cosmere. This includes The Stormlight Archive, both Mistborn series, Elantris, Warbreaker, four of the five Secret Projects, and various novellas, including The Emperor’s Soul, which won a Hugo Award in 2013. In November 2016 all of the existing Cosmere short fiction was released in one volume called Arcanum Unbounded. If you’ve read all of my adult fantasy novels and want to see some behind-the-scenes information, that collection is a must-read.\n\nI also have three YA series: The Rithmatist (currently at one book), The Reckoners (a trilogy beginning with Steelheart), and Skyward. For young readers I also have my humorous series Alcatraz vs. the Evil Librarians, which had its final book, Bastille vs. the Evil Librarians, released in 2022. Many of my adult readers enjoy all of those books as well, and many of my YA readers enjoy my adult books, usually starting with Mistborn.\n\nAdditionally, I have a few other novellas that are more on the thriller/sci-fi side. These include the three stories in Legion: The Many Lives of Stephen Leeds, as well as Perfect State and Snapshot. These two novellas are also featured in 2025’s Tailored Realities. There’s a lot of material to go around!\n\nGood starting places are Mistborn (a.k.a. The Final Empire), Skyward, Steelheart, The Emperor’s Soul, Tress of the Emerald Sea, and Alcatraz vs. the Evil Librarians. If you’re already a fan of big fat fantasies, you can jump right into The Way of Kings.\n\nI was also honored to be able to complete the final three volumes of The Wheel of Time, beginning with The Gathering Storm, using Robert Jordan’s notes.\n\nSample chapters from all of my books are available at brandonsanderson.com—and check out the rest of my site for chapter-by-chapter annotations, deleted scenes, and more.`,
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
    links: [
      {
        type: "website",
        url: "https://www.brandonsanderson.com/",
      },
      {
        type: "facebook",
        url: "https://www.facebook.com/BrandSanderson/",
      },
      {
        type: "twitter",
        url: "https://x.com/BrandSanderson",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/brandsanderson/",
      },
    ],
  },
  {
    type: "author",
    id: 2,
    name: "Brent Weeks",
    bio: "In a small-town Montana school at age 12, Brent Weeks met the two great loves of his life. Edgar Allan Poe introduced him to the power of literature to transcend time and death and loneliness. Fate introduced him to The Girl, Kristi Barnes. He began his pursuit of each immediately.\n\nThe novel was a failure. The Girl shot him down.\n\nSince then–skipping the boring parts–Brent has written eight best-selling novels with the Night Angel Trilogy and the Lightbringer Series, won several industry awards, and sold a few million books.\n\nBrent and his wife Kristi live in Oregon with their two daughters. (Yeah, he married The Girl.)",
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
    links: [
      {
        type: "website",
        url: "https://www.brentweeks.com/",
      },
      {
        type: "facebook",
        url: "https://www.facebook.com/BrentWeeksAuthor",
      },
      {
        type: "twitter",
        url: "https://x.com/brentweeks",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/androssguile",
      },
    ],
  },
  {
    type: "author",
    id: 3,
    name: "Joe Abercrombie",
    bio: "Joe Abercrombie was born in Lancaster, England, on the last day of 1974. He was educated at the stiflingly all-boy Lancaster Royal Grammar School, where he spent much of his time playing video games, rolling dice, and drawing maps of places that don’t exist. He went on to Manchester University to study Psychology. The dice and the maps stopped, but the video games continued. Having long dreamed of single-handedly redefining the fantasy genre, he started to write an epic trilogy based around the misadventures of thinking man’s barbarian Logen Ninefingers. The result was pompous toss, and swiftly abandoned.\n\nJoe then moved to London, lived in a slum with two men on the borders of madness, and found work making tea for minimum wage at a TV Post-Production company. Two years later he left to become a freelance film editor, and has worked since on a range of documentaries, awards shows, music videos, and concerts for artists ranging from Barry White to Coldplay.\n\nThis job gave him lots of time off, and realising that he needed something more useful to do than playing video games, in 2001 he sat down once again to write an epic fantasy trilogy based around the misadventures of thinking man’s barbarian Logen Ninefingers. This time, having learned not to take himself too seriously in the six years since the first effort, the results were a great deal more interesting.\n\nWith heroic help and support from his family the first volume, The Blade Itself, was completed in 2004. Following a heart-breaking trail of rejection at the hands of several of Britain’s foremost literary agencies, The First Law trilogy was snatched up by Gillian Redfearn of Gollancz in 2005 in a seven-figure deal (if you count the pence columns). A year later The Blade Itself was unleashed on an unsuspecting public. It now has publishers in thirty countries.  The sequels, Before They are Hanged and Last Argument of Kings were published in 2007 and 2008, when Joe was a finalist for the John W. Campbell award for best new writer.  Best Served Cold, a standalone book set in the same world, was published in June 2009, and a second standalone, The Heroes, came in January 2011 and made no. 3 on the Sunday Times Hardcover Bestseller List.  A third standalone, Red Country, was both a Sunday Times and New York Times Hardcover Bestseller in October 2012.\n\nThe first part of his viking-inspired Shattered Sea series for young and old adults, Half a King, came out in July 2014, when it won the Locus award for best young adult novel.  The other two books, Half the World, and Half a War, followed in January and July 2015.\n\nHis collection of short fiction, Sharp Ends was published in 2016.  A new trilogy set in the world of the First Law, The Age of Madness, began in September 2019 with A Little Hatred. The Trouble with Peace followed in September 2020, and the final part, The Wisdom of Crowds in September 2021. The first book in a new series, The Devils, will publish in May 2025.\n\nJoe now lives in Bath with his wife, Lou, his daughters Grace and Eve, and his son Teddy.  He spends most of his time writing edgy yet humorous fantasy novels…",
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
    links: [
      {
        type: "website",
        url: "https://joeabercrombie.com/",
      },
      {
        type: "facebook",
        url: "https://www.facebook.com/joeabercrombieauthor/",
      },
      {
        type: "twitter",
        url: "https://x.com/LordGrimdark",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/literarysewer",
      },
    ],
  },
];
