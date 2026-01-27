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
      "Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter. It has been centuries since the fall of the ten consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Men trade kingdoms for Shardblades. Wars were fought for them, and won by them. One such war rages on a ruined landscape called the Shattered Plains.\n\nThere, Kaladin, who traded his medical apprenticeship for a spear to protect his little brother, has been reduced to slavery. In a war that makes no sense, where ten armies fight separately against a single foe, he struggles to save his men and to fathom the leaders who consider them expendable. Brightlord Dalinar Kholin commands one of those other armies. Like his brother, the late king, he is fascinated by an ancient text called The Way of Kings. Troubled by over-powering visions of ancient times and the Knights Radiant, he has begun to doubt his own sanity. Across the ocean, an untried young woman named Shallan seeks to train under an eminent scholar and notorious heretic, Dalinar's niece, Jasnah. Though she genuinely loves learning, Shallan's motives are less than pure. As she plans a daring theft, her research for Jasnah hints at secrets of the Knights Radiant and the true cause of the war.",
    cover:
      "https://m.media-amazon.com/images/I/81pJXhRLdoL._AC_UF1000,1000_QL80_.jpg",
    price: 29.79,
    metadata: {
      publisher: "Tor Books (US) & Gollancz (UK)",
      firstPublish: "August 31, 2010",
      isbn: "978-0765326355",
      language: "English",
      pages: "1007",
      series: "The Stormlight Archive (Book 1 of 10)",
    },
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
      "In Oathbringer, the third volume of the New York Times bestselling Stormlight Archive, humanity faces a new Desolation with the return of the Voidbringers, a foe with numbers as great as their thirst for vengeance.\n\nDalinar Kholin's Alethi armies won a fleeting victory at a terrible cost: The enemy Parshendi summoned the violent Everstorm, which now sweeps the world with destruction, and in its passing awakens the once peaceful and subservient parshmen to the horror of their millennia-long enslavement by humans. While on a desperate flight to warn his family of the threat, Kaladin Stormblessed must come to grips with the fact that the newly kindled anger of the parshmen may be wholly justified. Nestled in the mountains high above the storms, in the tower city of Urithiru, Shallan Davar investigates the wonders of the ancient stronghold of the Knights Radiant and unearths dark secrets lurking in its depths.\n\nAnd Dalinar realizes that his holy mission to unite his homeland of Alethkar was too narrow in scope. Unless all the nations of Roshar can put aside Dalinar's blood-soaked past and stand together―and unless Dalinar himself can confront that past―even the restoration of the Knights Radiant will not prevent the end of civilization.",
    cover: "https://mpd-biblio-covers.imgix.net/9780765326379.jpg?w=900&dpr=1",
    price: 39.99,
    metadata: {
      publisher: "Tor Books (US) & Gollancz (UK)",
      firstPublish: "November 14, 2017",
      isbn: "978-0765326379",
      language: "English",
      pages: "1248",
      series: "The Stormlight Archive (Book 3 of 10)",
    },
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
      "After forming a coalition of human resistance against the enemy invasion, Dalinar Kholin and his Knights Radiant have spent a year fighting a protracted, brutal war. Neither side has gained an advantage, and the threat of a betrayal by Dalinar's crafty ally Taravangian looms over every strategic move.\n\nNow, as new technological discoveries by Navani Kholin's scholars begin to change the face of the war, the enemy prepares a bold and dangerous operation. The arms race that follows will challenge the very core of the Radiant ideals, and potentially reveal the secrets of the ancient tower that was once the heart of their strength.\n\nAt the same time that Kaladin Stormblessed must come to grips with his changing role within the Knights Radiant, his Windrunners face their own problem: As more and more deadly enemy Fused awaken to wage war, no more honorspren are willing to bond with humans to increase the number of Radiants. Adolin and Shallan must lead the coalition's envoy to the honorspren stronghold of Lasting Integrity and either convince the spren to join the cause against the evil god Odium, or personally face the storm of failure.",
    cover: "https://mpd-biblio-covers.imgix.net/9781250757302.jpg?w=900&dpr=1",
    price: 39.99,
    metadata: {
      publisher: "Tor Books (US) & Gollancz (UK)",
      firstPublish: "November 17, 2020",
      isbn: "978-0765326386",
      language: "English",
      pages: "1232",
      series: "The Stormlight Archive (Book 4 of 10)",
    },
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
      "Dalinar Kholin challenged the evil god Odium to a contest of champions with the future of Roshar on the line. The Knights Radiant have only ten days to prepare―and the sudden ascension of the crafty and ruthless Taravangian to take Odium's place has thrown everything into disarray.\n\nDesperate fighting continues simultaneously worldwide―Adolin in Azir, Sigzil and Venli at the Shattered Plains, and Jasnah in Thaylenah. The former assassin, Szeth, must cleanse his homeland of Shinovar from the dark influence of the Unmade. He is accompanied by Kaladin, who faces a new battle helping Szeth fight his own demons and who must do the same for the insane Herald of the Almighty, Ishar.\n\nAt the same time, Shallan, Renarin, and Rlain work to unravel the mystery behind the Unmade Ba-Ado-Mishram and her involvement in the enslavement of the singer race and in the ancient Knights Radiant killing their spren. And Dalinar and Navani seek an edge against Odium's champion that can be found only in the Spiritual Realm, where memory and possibility combine in chaos. The fate of the entire Cosmere hangs in the balance.",
    cover: "https://mpd-biblio-covers.imgix.net/9781250319180.jpg?w=900&dpr=1",
    price: 39.99,
    metadata: {
      publisher: "Tor Books (US) & Gollancz (UK)",
      firstPublish: "December 6, 2024",
      isbn: "978-1250319180",
      language: "English",
      pages: "1344",
      series: "The Stormlight Archive (Book 5 of 10)",
    },
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
      "Spensa's world has been under attack for decades. Now pilots are the heroes of what's left of the human race, and becoming one has always been Spensa's dream. Since she was a little girl, she has imagined soaring skyward and proving her bravery. But her fate is intertwined with her father's--a pilot himself who was killed years ago when he abruptly deserted his team, leaving Spensa's chances of attending flight school at slim to none.\n\nNo one will let Spensa forget what her father did, yet fate works in mysterious ways. Flight school might be a long shot, but she is determined to fly. And an accidental discovery in a long-forgotten cavern of Detritus just might provide her with a way to claim the stars.\n\nDefeated, crushed, and driven almost to extinction, the remnants of the human race are trapped on a planet that is constantly attacked by mysterious alien starfighters. Spensa, a teenage girl living among them, longs to be a pilot. When she discovers the wreckage of an ancient ship, she realizes this dream might be possible—assuming she can repair the ship, navigate flight school, and (perhaps most importantly) persuade the strange machine to help her. Because this ship, uniquely, appears to have a soul.",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1531845177i/36642458.jpg",
    price: 25,
    metadata: {
      publisher: "Delacorte Press (US) & Gollancz (UK)",
      firstPublish: "November 6, 2018",
      isbn: "978-0399555770",
      language: "English",
      pages: "528",
      series: "Skyward (Book 1 of 4)",
    },
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
      "Gavin Guile is the Prism, the most powerful man in the world. He is high priest and emperor, a man whose power, wit, and charm are all that preserves a tenuous peace. Yet Prisms never last, and Gavin knows exactly how long he has left to live.\n\nWhen Gavin discovers he has a son, born in a far kingdom after the war that put him in power, he must decide how much he's willing to pay to protect a secret that could tear his world apart.\n\nIn a world where magic is tightly controlled, the most powerful man in history must choose between his kingdom and his son. The magic system is based on light and color, where drafters can manipulate light through colors to create luxin, a solid magical substance. The Prism can split and wield all colors, making him the most powerful drafter. The story follows multiple perspectives including Gavin Guile, his newly discovered son Kip, and various other characters as they navigate political intrigue, ancient mysteries, and personal secrets in the Seven Satrapies.",
    cover:
      "https://m.media-amazon.com/images/I/91XfWTLEoXL._AC_UF1000,1000_QL80_.jpg",
    price: 25,
    metadata: {
      publisher: "Orbit Books",
      firstPublish: "August 25, 2010",
      isbn: "978-0316075558",
      language: "English",
      pages: "640",
      series: "Lightbringer (Book 1 of 5)",
    },
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
      "Gavin Guile is dying. He'd thought he had five years left - now he's got less than one. With fifty thousand refugees, a bastard son and an ex-fiancée who may have learned his darkest secret, Gavin's got problems on every side.\n\nThe old gods are being reborn and their army of colour wights is unstoppable. The only salvation may be the brother whose freedom and life Gavin stole sixteen years ago.\n\nThe second book in the Lightbringer series continues the story of Gavin Guile as he races against time with his powers fading. Kip Guile's training as a Drafter intensifies while the world faces threats from multiple directions. The existence of the Blinding Knife itself, a powerful artifact that can kill Drafters by stealing their colors, sends shockwaves through the world of Chromaturgy and becomes a central focus of the plot.",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1659765885i/12499290.jpg",
    price: 25,
    metadata: {
      publisher: "Orbit Books",
      firstPublish: "September 12, 2012",
      isbn: "978-0316079914",
      language: "English",
      pages: "671",
      series: "Lightbringer (Book 2 of 5)",
    },
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
      "As the old gods awaken and satrapies splinter, the Chromeria races to find the only man who can still end a civil war before it engulfs the known world. But Gavin Guile has been captured by an old enemy and enslaved on a pirate galley. Worse still, Gavin has lost more than his powers as Prism--he can't use magic at all.\n\nWithout the protection of his father, Kip Guile will face a master of shadows as his grandfather moves to choose a new Prism and put himself in power. With Teia and Karris, Kip will have to use all his wits to survive a secret war between noble houses, religious factions, rebels, and an ascendant order of hidden assassins called The Broken Eye.\n\nThe third book in the Lightbringer series expands the mythology and secrets surrounding the prophecy of the Lightbringer, Diakoptes, Orholam, the Nine Kings, the Order of the Broken Eye, and Paryl drafting.",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1659765822i/12652457.jpg",
    price: 25,
    metadata: {
      publisher: "Orbit Books",
      firstPublish: "August 26, 2014",
      isbn: "978-0316235556",
      language: "English",
      pages: "816",
      series: "Lightbringer (Book 3 of 5)",
    },
  },
  {
    type: "book",
    id: 9,
    author_id: 2,
    title: "The Way of Shadows",
    author_name: "Brent Weeks",
    genres: genreObjects([GenreNames.Fantasy_Fiction, GenreNames.High_Fantasy]),
    synopsis:
      "For Durzo Blint, assassination is an art -- and he is the city's most accomplished artist. For Azoth, survival is precarious. Something you never take for granted. As a guild rat, he's grown up in the slums, and learned to judge people quickly -- and to take risks. Risks like apprenticing himself to Durzo Blint.\n\nBut to be accepted, Azoth must turn his back on his old life and embrace a new identity and name. As Kylar Stern, he must learn to navigate the assassins' world of dangerous politics and strange magics -- and cultivate a flair for death.\n\nThe first book in the Night Angel Trilogy follows Azoth's transformation from a desperate street urchin into Kylar Stern, apprentice to the city's most legendary and feared assassin. Set in a world of dangerous politics and strange magics, Azoth must learn the art of death while navigating the complex and brutal world of professional killers.",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1672601160i/3227063.jpg",
    price: 20,
    metadata: {
      publisher: "Orbit Books",
      firstPublish: "October 2008",
      isbn: "978-0316033671",
      language: "English",
      pages: "688",
      series: "Night Angel (Book 1 of 3)",
    },
  },
  {
    type: "book",
    id: 10,
    author_id: 2,
    title: "Shadow's Edge",
    author_name: "Brent Weeks",
    genres: genreObjects([GenreNames.Fantasy_Fiction, GenreNames.High_Fantasy]),
    synopsis:
      "Kylar Stern has rejected the assassin's life. The Godking's successful coup has left Kylar's master, Durzo, and his best friend, Logan, dead. He is starting over: new city, new friends, and new profession.\n\nBut when he learns that Logan might actually be alive and in hiding, Kylar is faced with an agonizing choice: will he give up the way of shadows forever and live in peace with his new family, or will he risk everything by taking on the ultimate hit?\n\nThe second book in the Night Angel Trilogy follows Kylar as he attempts to leave his life as an assassin behind, only to be drawn back into the world of shadows when he discovers his best friend may still be alive. Kylar must make a deadly choice between the peaceful life he desires and the violent skills that define him.",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1672601132i/3754016.jpg",
    price: 19.99,
    metadata: {
      publisher: "Orbit Books",
      firstPublish: "November 2008",
      isbn: "978-0316033657",
      language: "English",
      pages: "656",
      series: "Night Angel (Book 2 of 3)",
    },
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
      "Logen Ninefingers, infamous barbarian, has finally run out of luck. Caught in one feud too many, he's on the verge of becoming a dead barbarian -- leaving nothing behind him but bad songs, dead friends, and a lot of happy enemies.\n\nNobleman, dashing officer, and paragon of selfishness, Captain Jezal dan Luthar has nothing more dangerous in mind than fleecing his friends at cards and dreaming of glory in the fencing circle. But war is brewing, and on the battlefields of the frozen North they fight by altogether bloodier rules.\n\nInquisitor Glokta, cripple turned torturer, would like nothing better than to see Jezal come home in a box. But then Glokta hates everyone: cutting treason out of the Union one confession at a time leaves little room for friendship.\n\nThe first novel in The First Law Trilogy introduces multiple point-of-view characters in a dark fantasy world inspired by medieval Europe. The story features elements of grimdark fantasy with morally ambiguous characters and brutal realism. Bayaz, a powerful wizard claiming to be the First of the Magi, gathers various characters for a perilous journey with his own mysterious agenda.",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1747782133i/944073.jpg",
    price: 20,
    metadata: {
      publisher: "Gollancz (UK) & Pyr (US)",
      firstPublish: "May 4, 2006",
      isbn: "978-0575077867",
      language: "English",
      pages: "432",
      series: "The First Law (Book 1 of 3)",
    },
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
      "Superior Glokta has a problem. How do you defend a city surrounded by enemies and riddled with traitors, when your allies can by no means be trusted, and your predecessor vanished without a trace? It's enough to make a torturer want to run – if he could even walk without a stick.\n\nNorthmen have spilled over the border of Angland and are spreading fire and death across the frozen country. Crown Prince Ladisla is poised to drive them back and win undying glory. There is only one problem – he commands the worst-armed, worst-trained, worst-led army in the world.\n\nAnd Bayaz, the First of the Magi, is leading a party of bold adventurers on a perilous mission through the ruins of the past. The most hated woman in the South, the most feared man in the North, and the most selfish boy in the Union make a strange alliance, but a deadly one. They might even stand a chance of saving mankind from the Eaters -- if they didn't hate each other quite so much.\n\nAncient secrets will be uncovered. Bloody battles will be won and lost. Bitter enemies will be forgiven -- but not before they are hanged.",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1737810309i/902715.jpg",
    price: 20,
    metadata: {
      publisher: "Gollancz (UK) & Pyr (US)",
      firstPublish: "March 15, 2007",
      isbn: "978-0316387354",
      language: "English",
      pages: "539",
      series: "The First Law (Book 2 of 3)",
    },
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
      "The third and final book of The First Law Trilogy brings the sprawling story to its conclusion. Murderous conspiracies rise to the surface, old scores are ready to be settled, and the line between hero and villain is sharp enough to draw blood.\n\nThe narrative continues from where Before They Are Hanged left off, with multiple storylines converging as the characters face the ultimate consequences of their actions. War continues, political intrigue deepens, and the true nature of power and heroism is revealed. The trilogy concludes with Abercrombie's signature dark realism, where good actions are not necessarily rewarded and the bad guys don't always get their comeuppance.",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1737810948i/944076.jpg",
    price: 20,
    metadata: {
      publisher: "Gollancz (UK) & Pyr (US)",
      firstPublish: "March 20, 2008",
      isbn: "978-0575077898",
      language: "English",
      pages: "603",
      series: "The First Law (Book 3 of 3)",
    },
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
      "Springtime in Styria. And that means war. There have been nineteen years of blood. The ruthless Grand Duke Orso is locked in a vicious struggle with the squabbling League of Eight, and between them they have bled the land white.\n\nMonza Murcatto, the Snake of Talins, the most feared and famous mercenary in Duke Orso's employ, has been her loyal servant for seven years. Betrayed, thrown down a mountain and left for dead, Murcatto's reward is a broken body and a burning hunger for vengeance. Whatever the cost, seven men must die.\n\nHer allies include Styria's least reliable drunkard, Styria's most treacherous poisoner, a mass-murderer obsessed with numbers and a Northman who just wants to do the right thing. Her enemies number the better half of the nation. And that's all before the most dangerous man in the world is dispatched to hunt her down and finish the job Duke Orso started.\n\nA standalone novel set in the First Law world, Best Served Cold is a dark revenge tale that follows Monza's brutal quest for vengeance against the seven men who betrayed her. The story takes place in Styria and features both new characters and familiar faces from the original trilogy.",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1739462265i/2315892.jpg",
    price: 20,
    metadata: {
      publisher: "Gollancz (UK) & Orbit (US)",
      firstPublish: "June 5, 2009",
      isbn: "978-0316198356",
      language: "English",
      pages: "534",
      series: "World of The First Law (Book 1 of 3)",
    },
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
      'They say Black Dow\'s killed more men than winter, and clawed his way to the throne of the North up a hill of skulls. The King of the Union, ever a jealous neighbour, is not about to stand smiling by while he claws his way any higher.\n\nThe battle takes place in the valley of Osrung which holds no military significance for either side. There are three key positions over which the battle is fought: the small town of Osrung itself in the east, a steep hill in the centre on which a stonehenge-like structure (the eponymous "Heroes") resides, and a bridge over the river to the west.\n\nAnother standalone novel in the First Law world, The Heroes focuses on a single three-day battle told from multiple perspectives on both sides of the conflict. Characters include Colonel Bremer dan Gorst, Prince Calder, Curnden Craw, and others, with the narrative exploring the brutal reality of war and the questionable nature of heroism. The book examines how a battle with no real strategic importance can still consume and destroy countless lives.',
    cover:
      "https://i0.wp.com/joeabercrombie.com/wp-content/uploads/2010/11/The-Heroes-HB_cover.jpg?w=453&ssl=1",
    price: 20,
    metadata: {
      publisher: "Gollancz (UK) & Orbit (US)",
      firstPublish: "January 27, 2011",
      isbn: "978-0316193566",
      language: "English",
      pages: "506",
      series: "World of The First Law (Book 2 of 3)",
    },
  },
];
