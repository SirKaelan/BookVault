import type { Book } from "@/contexts/books";
import { genreObjects, GenreNames } from "@/mocks/data/genres";

export const mockBooks: Book[] = [
  {
    // Brandon Sanderson books
    type: "book",
    id: 1,
    author_id: 1,
    title: "The Way of Kings",
    author_name: "Brandon Sanderson",
    genres: genreObjects([
      GenreNames.Novel,
      GenreNames.Fantasy_Fiction,
      GenreNames.High_Fantasy,
    ]),
    synopsis:
      "The Way of Kings (Book 1 of The Stormlight Archive) introduces the storm-swept world of Roshar and follows three main characters: Kaladin, a soldier betrayed into slavery as a bridgeman who fights to protect his men; Dalinar Kholin, a warlord haunted by visions urging him to unite a fractured kingdom; and Shallan Davar, a scholar who seeks to become an apprentice to the famous Jasnah Kholin to uncover secrets and save her family, all while navigating political intrigue and the eroding honor of Alethi society, as ancient threats loom and the magic of the Knights Radiant begins to reawaken.",
    cover: null,
    price: 10.9,
  },
  {
    type: "book",
    id: 2,
    author_id: 1,
    title: "Oathbringer",
    author_name: "Brandon Sanderson",
    genres: genreObjects([
      GenreNames.Novel,
      GenreNames.Fantasy_Fiction,
      GenreNames.High_Fantasy,
    ]),
    synopsis:
      "Oathbringer, the third Stormlight Archive book, follows Dalinar Kholin as he unites Roshar's fractious nations against the returning Voidbringers, while confronting his own dark, forgotten past and the destructive Everstorm, alongside Kaladin's struggle with his oaths and Shallan's exploration of the Radiant city Urithiru, as ancient secrets and cosmic threats emerge, pushing everyone to choose who they are.",
    cover: null,
    price: 12.99,
  },
  {
    type: "book",
    id: 3,
    author_id: 1,
    title: "Rhythm of War",
    author_name: "Brandon Sanderson",
    genres: genreObjects([
      GenreNames.Fantasy_Fiction,
      GenreNames.High_Fantasy,
      GenreNames.Science_Fiction,
    ]),
    synopsis:
      "Rhythm of War, book four of Brandon Sanderson's Stormlight Archive, details a brutal war where human Radiants fight Singers, focusing on Navani's pursuit of fabrial technology, Kaladin's struggle with depression and leadership, and Shallan and Adolin's quest to win over the Honorspren in Shadesmar; meanwhile, the enemy invades Urithiru, leading to Navani bonding the Tower's spren, and the book culminates with a contest of champions agreed upon by Dalinar and Odium, with Taravangian seizing Odium's power, setting up future conflicts.",
    cover: null,
    price: 11.99,
  },
  {
    type: "book",
    id: 4,
    author_id: 1,
    title: "Wind and Truth",
    author_name: "Brandon Sanderson",
    genres: genreObjects([
      GenreNames.Fantasy_Fiction,
      GenreNames.High_Fantasy,
      GenreNames.Science_Fiction,
    ]),
    synopsis:
      "Wind and Truth (Stormlight Archive Book 5) sees Dalinar's desperate challenge to Odium leading to a ten-day countdown, forcing the Knights Radiant and Roshar to prepare for a decisive battle, with characters like Kaladin, Szeth, Shallan, and Navani uncovering ancient secrets about the Unmade (Ba-Ado-Mishram) and Odium's new champion (Taravangian), all while the fate of Roshar and the Cosmere hangs in the balance as they seek power in the Spiritual Realm and battle encroaching darkness.",
    cover: null,
    price: 13.99,
  },
  {
    type: "book",
    id: 5,
    author_id: 1,
    title: "Skyward",
    author_name: "Brandon Sanderson",
    genres: genreObjects([
      GenreNames.Fantasy_Fiction,
      GenreNames.High_Fantasy,
      GenreNames.Science_Fiction,
      GenreNames.Novel,
    ]),
    synopsis:
      "Skyward by Brandon Sanderson follows Spensa, a teenage girl on the planet Detritus, who dreams of becoming a starfighter pilot to defend humanity from the alien Krell, despite her disgraced father being labeled a coward for deserting his squadron years prior. Spensa overcomes societal stigma and a rigged entrance exam by discovering a crashed, sentient starship (M-Bot) in a cavern, which helps her get into flight school, leading to thrilling aerial combat, deep friendships with other misfit cadets, and uncovering the truth about her father's past and the Krell's true motives.",
    cover: null,
    price: 10.99,
  },
  // Brent Weeks books
  {
    type: "book",
    id: 6,
    author_id: 2,
    title: "The Black Prism",
    author_name: "Brent Weeks",
    genres: genreObjects([
      GenreNames.Fantasy_Fiction,
      GenreNames.High_Fantasy,
      GenreNames.Fantasy,
      GenreNames.Novel,
    ]),
    synopsis:
      "The Black Prism Read Along, Chapters 1-3 - JordanConThe Black Prism by Brent Weeks introduces Gavin Guile, the world's most powerful man, the Prism, who wields color magic (chromaturgy) but faces a looming death and a secret: he has a son, Kip, who might be a powerful drafter, all while navigating war, political intrigue, and the discovery of a legendary artifact, the Black Prism, which can kill other drafters. The story follows Gavin's struggle to fulfill his five great purposes before his time runs out, while Kip's own magical journey begins, revealing secrets about his father and his own burgeoning abilities in a world where magic users (\"drafters\") can break down from too much residue",
    cover: null,
    price: 12.99,
  },
  {
    type: "book",
    id: 7,
    author_id: 2,
    title: "The Blinding Knife",
    author_name: "Brent Weeks",
    genres: genreObjects([
      GenreNames.Fantasy_Fiction,
      GenreNames.High_Fantasy,
      GenreNames.Fantasy,
      GenreNames.Adventure_Fiction,
    ]),
    synopsis:
      "The Blinding Knife, the second novel in Brent Weeks' Lightbringer series, plunges the world into chaos as protagonist Gavin Guile loses control of his immense magical powers and faces a looming war with the enigmatic Color Prince",
    cover: null,
    price: 12.99,
  },
  {
    type: "book",
    id: 8,
    author_id: 2,
    title: "The Broken Eye",
    author_name: "Brent Weeks",
    genres: genreObjects([
      GenreNames.Fantasy_Fiction,
      GenreNames.Novel,
      GenreNames.High_Fantasy,
      GenreNames.Historical_Fiction,
    ]),
    synopsis:
      "Lorem of the ipsum because I don't want to actually read this synopsis because I am in the middle of reading this book. Have a nice day.",
    cover: null,
    price: 11.99,
  },
  {
    type: "book",
    id: 9,
    author_id: 2,
    title: "The Way of Shadows",
    author_name: "Brent Weeks",
    genres: genreObjects([GenreNames.Fantasy_Fiction, GenreNames.High_Fantasy]),
    synopsis:
      "The Way of Shadows follows Azoth, a young street urchin in the city of Cenaria, who apprentices himself to the legendary assassin Durzo Blint, becoming the infamous Kylar Stern, to learn the deadly arts of wetboys (magic-using assassins) and navigate a world of political intrigue, powerful artifacts (the ka'kari), and a looming war against a foreign invasion, all while trying to protect his past and reconcile his new deadly life with his moral compass.",
    cover: null,
    price: 15.99,
  },
  {
    type: "book",
    id: 10,
    author_id: 2,
    title: "Shadow's Edge",
    author_name: "Brent Weeks",
    genres: genreObjects([GenreNames.Fantasy_Fiction, GenreNames.High_Fantasy]),
    synopsis:
      "Shadow's Edge is the second book in Brent Weeks' Night Angel Trilogy, where Kylar Stern tries to live a peaceful life after the Godking's coup, but his past as an assassin calls him back when he learns his friend Logan Gyre might be alive, forcing him to choose between the quiet life he wants with his new family and the deadly path of shadows to save his friend and country, all while dealing with his complex relationship with Vi and exploring deeper into the world's magic and the cruel realities of his world.",
    cover: null,
    price: 13.99,
  },
  // Joe Abercrombie books
  {
    type: "book",
    id: 11,
    author_id: 3,
    title: "The Blade Itself",
    author_name: "Joe Abercrombie",
    genres: genreObjects([
      GenreNames.Novel,
      GenreNames.Fantasy_Fiction,
      GenreNames.High_Fantasy,
      GenreNames.Adventure_Fiction,
    ]),
    synopsis:
      "The Blade Itself introduces Logen Ninefingers (infamous barbarian), Jezal dan Luthar (selfish nobleman), and Sand dan Glokta (crippled torturer) as their lives intersect in a war-torn world where the ancient mage Bayaz gathers them for a perilous journey, setting up a grimdark fantasy story focused heavily on morally grey, complex characters, political intrigue, and brutal, realistic action rather than traditional heroic quests.",
    cover: null,
    price: 12.99,
  },
  {
    type: "book",
    id: 12,
    author_id: 3,
    title: "Before They Are Hanged",
    author_name: "Joe Abercrombie",
    genres: genreObjects([
      GenreNames.Fantasy_Fiction,
      GenreNames.High_Fantasy,
      GenreNames.Adventure_Fiction,
      GenreNames.War_Story,
    ]),
    synopsis:
      "Before They Are Hanged, book two of Joe Abercrombie's First Law Trilogy, follows three main threads: Inquisitor Glokta uncovers conspiracies in the besieged southern city of Dagoska; Colonel West fights a losing war in the North; and the wizard Bayaz leads Logen Ninefingers, Ferro, and a changed Jezal on a perilous quest for a powerful artifact, revealing deeper magic, betrayal, and the harsh realities of war, ultimately challenging their beliefs and forging new, complex bonds as they face the true threats of the world.",
    cover: null,
    price: 11.99,
  },
  {
    type: "book",
    id: 13,
    author_id: 3,
    title: "Last Argument of Kings",
    author_name: "Joe Abercrombie",
    genres: genreObjects([
      GenreNames.Fantasy_Fiction,
      GenreNames.High_Fantasy,
      GenreNames.Adventure_Fiction,
    ]),
    synopsis:
      "Last Argument of Kings is the third and final novel in Joe Abercrombie's The First Law trilogy, concluding the intertwined stories of its main characters amidst a backdrop of large-scale wars and political manipulation. The narrative focuses on the simultaneous crises facing the Union: a war in the North and a Gurkish invasion in the South, all orchestrated in a long-standing feud between two ancient Magi.",
    cover: null,
    price: 13.99,
  },
  {
    type: "book",
    id: 14,
    author_id: 3,
    title: "Best Served Cold",
    author_name: "Joe Abercrombie",
    genres: genreObjects([
      GenreNames.Novel,
      GenreNames.Fantasy_Fiction,
      GenreNames.High_Fantasy,
      GenreNames.Adventure_Fiction,
    ]),
    synopsis:
      'Best Served Cold is a gritty fantasy novel by Joe Abercrombie about the mercenary captain Monza Murcatto, betrayed and left for dead by her employer, Grand Duke Orso, who murdered her brother. Surviving, she gathers a motley crew of killers—a drunkard, a poisoner, a torturer, and others—to hunt down the seven men responsible for her downfall in the war-torn land of Styria, culminating in a bloody, "Ocean\'s Eleven"-style revenge mission filled with dark humor, political intrigue, and brutal violence.',
    cover: null,
    price: 14.99,
  },
  {
    type: "book",
    id: 15,
    author_id: 3,
    title: "The Heroes",
    author_name: "Joe Abercrombie",
    genres: genreObjects([
      GenreNames.Novel,
      GenreNames.Fantasy_Fiction,
      GenreNames.High_Fantasy,
      GenreNames.War_Story,
    ]),
    synopsis:
      'The Heroes by Joe Abercrombie is a grimdark fantasy novel focusing on a brutal, three-day battle between the Union and the North over a strategic hill known as "The Heroes," exploring the futility of war, political intrigue, and human nature through multiple perspectives, including a disgraced warrior, a scheming prince, and an honest soldier, all while deconstructing traditional heroic ideals. It’s a standalone set in the First Law universe, featuring recurring characters and highlighting the absurdity and horror of conflict through its large, diverse cast.',
    cover: null,
    price: 11.99,
  },
];
