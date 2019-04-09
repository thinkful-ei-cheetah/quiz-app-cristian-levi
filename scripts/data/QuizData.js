'use strict';
/* global Quiz */

// This data is a sample set from the Open Trivia API. It could be stored as
// a static property on Quiz class, but has been extracted out for code
// cleanliness.  Once API is implemented, this data would be removed.
Quiz.QUIZ_DATA = [
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Electronic music producer Kygo&#039;s popularity skyrocketed after a certain remix. Which song did he remix?",
    correct_answer: "Ed Sheeran - I See Fire",
    incorrect_answers: [
      "Marvin Gaye - Sexual Healing",
      "Coldplay - Midnight",
      "a-ha - Take On Me"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "This field is sometimes known as &ldquo;The Dismal Science.&rdquo;",
    correct_answer: "Economics",
    incorrect_answers: [
      "Philosophy",
      "Politics",
      "Physics"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "What type of dog is &#039;Handsome Dan&#039;, the mascot of Yale University?",
    correct_answer: "Bulldog",
    incorrect_answers: [
      "Yorkshire Terrier",
      "Boxer",
      "Pug"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which company did Valve cooperate with in the creation of the Vive?",
    correct_answer: "HTC",
    incorrect_answers: [
      "Oculus",
      "Google",
      "Razer"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most common surname Wales?",
    correct_answer: "Jones",
    incorrect_answers: [
      "Williams",
      "Davies",
      "Evans"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What name represents the letter &quot;M&quot; in the NATO phonetic alphabet?",
    correct_answer: "Mike",
    incorrect_answers: [
      "Matthew",
      "Mark",
      "Max"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the defining characteristic of someone who is described as hirsute?",
    correct_answer: "Hairy",
    incorrect_answers: [
      "Rude",
      "Funny",
      "Tall"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What does a funambulist walk on?",
    correct_answer: "A Tight Rope",
    incorrect_answers: [
      "Broken Glass",
      "Balls",
      "The Moon"
    ]
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "medium",
    question: "The US emergency hotline is 911 because of the September 11th terrorist attacks.",
    correct_answer: "False",
    incorrect_answers: [
      "True"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "How would one say goodbye in Spanish?",
    correct_answer: "Adi&oacute;s",
    incorrect_answers: [
      " Hola",
      "Au Revoir",
      "Salir"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "What is the airspeed velocity of an unladen swallow?",
    correct_answer: "24 MPH",
    incorrect_answers: [
      "15 MPH",
      "20 MPH",
      "200 MPH"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which American president appears on a one dollar bill?",
    correct_answer: "George Washington",
    incorrect_answers: [
      "Thomas Jefferson",
      "Abraham Lincoln",
      "Benjamin Franklin"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What does the &quot;G&quot; mean in &quot;G-Man&quot;?",
    correct_answer: "Government",
    incorrect_answers: [
      "Going",
      "Ghost",
      "Geronimo"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Which language is NOT Indo-European?",
    correct_answer: "Hungarian",
    incorrect_answers: [
      "Russian",
      "Greek",
      "Latvian"
    ]
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "medium",
    question: "The vapor produced by e-cigarettes is actually water.",
    correct_answer: "False",
    incorrect_answers: [
      "True"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "The words &quot;bungalow&quot; and &quot;shampoo&quot; originate from the languages of which country?",
    correct_answer: "India",
    incorrect_answers: [
      "Papua New Guinea",
      "Ethiopia",
      "China"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the shape of the toy invented by Hungarian professor Ernő Rubik?",
    correct_answer: "Cube",
    incorrect_answers: [
      "Sphere",
      "Cylinder",
      "Pyramid"
    ]
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "medium",
    question: "There are 86400 seconds in a day.",
    correct_answer: "True",
    incorrect_answers: [
      "False"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the name of the very first video uploaded to YouTube?",
    correct_answer: "Me at the zoo",
    incorrect_answers: [
      "tribute",
      "carrie rides a truck",
      "Her new puppy from great grandpa vern."
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Before the 19th Century, the &quot;Living Room&quot; was originally called the...",
    correct_answer: "Parlor",
    incorrect_answers: [
      "Open Room",
      "Sitting Room",
      "Loft"
    ]
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "medium",
    question: "An eggplant is a vegetable.",
    correct_answer: "False",
    incorrect_answers: [
      "True"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Red Vines is a brand of what type of candy?",
    correct_answer: "Licorice",
    incorrect_answers: [
      "Lollipop",
      "Chocolate",
      "Bubblegum"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "A factiod is what?",
    correct_answer: "A falsehood",
    incorrect_answers: [
      "Useless trivia",
      "A tiny fact",
      "A scientific figure"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Sciophobia is the fear of what?",
    correct_answer: "Shadows",
    incorrect_answers: [
      "Eating",
      "Bright lights",
      "Transportation"
    ]
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "medium",
    question: "You are allowed to sell your soul on eBay.",
    correct_answer: "False",
    incorrect_answers: [
      "True"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these banks are NOT authorized to issue currency notes in Hong Kong?",
    correct_answer: "OCBC",
    incorrect_answers: [
      "HSBC",
      "Standard Chartered",
      "Bank of China"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Which Italian automobile manufacturer gained majority control of U.S. automobile manufacturer Chrysler in 2011?",
    correct_answer: "Fiat",
    incorrect_answers: [
      "Maserati",
      "Alfa Romeo",
      "Ferrari"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the name given to Indian food cooked over charcoal in a clay oven?",
    correct_answer: "Tandoori",
    incorrect_answers: [
      "Biryani",
      "Pani puri",
      "Tiki masala"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the German word for &quot;spoon&quot;?",
    correct_answer: "L&ouml;ffel",
    incorrect_answers: [
      "Gabel",
      "Messer",
      "Essst&auml;bchen"
    ]
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "easy",
    question: "The color orange is named after the fruit.",
    correct_answer: "True",
    incorrect_answers: [
      "False"
    ]
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "medium",
    question: "The French word to travel is &quot;Travail&quot;",
    correct_answer: "False",
    incorrect_answers: [
      "True"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which one of these is not a typical European sword design?",
    correct_answer: "Scimitar",
    incorrect_answers: [
      "Falchion",
      "Ulfberht",
      "Flamberge"
    ]
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "easy",
    question: "One of Donald Trump&#039;s 2016 Presidential Campaign promises was to build a border wall between the United States and Mexico.",
    correct_answer: "True",
    incorrect_answers: [
      "False"
    ]
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "easy",
    question: "Romanian belongs to the Romance language family, shared with French, Spanish, Portuguese and Italian. ",
    correct_answer: "True",
    incorrect_answers: [
      "False"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "In what year was McDonald&#039;s founded?",
    correct_answer: "1955",
    incorrect_answers: [
      "1964",
      "1951",
      "1947"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What was Mountain Dew&#039;s original slogan?",
    correct_answer: "Yahoo! Mountain Dew... It&#039;ll tickle your innards!",
    incorrect_answers: [
      "Give Me A Dew",
      "Do The Dew",
      "Get&#039; that barefoot feelin&#039; drinkin&#039; Mountain Dew"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the Portuguese word for &quot;Brazil&quot;?",
    correct_answer: "Brasil",
    incorrect_answers: [
      "Brazil",
      "Brasilia",
      "Bras&iacute;l"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which of the following card games revolves around numbers and basic math?",
    correct_answer: "Uno",
    incorrect_answers: [
      "Go Fish",
      "Twister",
      "Munchkin"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "What was Bank of America originally established as?",
    correct_answer: "Bank of Italy",
    incorrect_answers: [
      "Bank of Long Island",
      "Bank of Pennsylvania",
      "Bank of Charlotte"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Apple co-founder Steve Jobs died from complications of which form of cancer?",
    correct_answer: "Pancreatic",
    incorrect_answers: [
      "Bone",
      "Liver",
      "Stomach"
    ]
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "easy",
    question: "&quot;27 Club&quot; is a term used to refer to a list of famous actors, musicians, and artists who died at the age of 27.",
    correct_answer: "True",
    incorrect_answers: [
      "False"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Which slogan did the fast food company, McDonald&#039;s, use before their &quot;I&#039;m Lovin&#039; It&quot; slogan?",
    correct_answer: "We Love to See You Smile",
    incorrect_answers: [
      "Why Pay More!?",
      "Have It Your Way",
      "Making People Happy Through Food"
    ]
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "easy",
    question: "Dihydrogen Monoxide was banned due to health risks after being discovered in 1983 inside swimming pools and drinking water.",
    correct_answer: "False",
    incorrect_answers: [
      "True"
    ]
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "easy",
    question: "Scotland voted to become an independent country during the referendum from September 2014.",
    correct_answer: "False",
    incorrect_answers: [
      "True"
    ]
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "hard",
    question: "Spoon theory is a theory, utilizing &quot;Spoons&quot; as a metaphor for energy they can use in a day.",
    correct_answer: "True",
    incorrect_answers: [
      "False"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which sign of the zodiac comes between Virgo and Scorpio?",
    correct_answer: "Libra",
    incorrect_answers: [
      "Gemini",
      "Taurus",
      "Capricorn"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is Tasmania?",
    correct_answer: "An Australian State",
    incorrect_answers: [
      "A flavor of Ben and Jerry&#039;s ice-cream",
      "A Psychological Disorder",
      "The Name of a Warner Brothers Cartoon Character"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What company developed the vocaloid Hatsune Miku?",
    correct_answer: "Crypton Future Media",
    incorrect_answers: [
      "Sega",
      "Sony",
      "Yamaha Corporation"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Originally another word for poppy, coquelicot is a shade of what?",
    correct_answer: "Red",
    incorrect_answers: [
      "Green",
      "Blue",
      "Pink"
    ]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Which item of clothing is usually worn by a Scotsman at a wedding?",
    correct_answer: "Kilt",
    incorrect_answers: [
      "Skirt",
      "Dress",
      "Rhobes"
    ]
  }
];
