const easyQuestions = [
    {
        type: ["text","image"],
        image: "assets/questions/easy-1.jpeg",
        sound: null,
        question: "What color is the sky?",
        choices: ["Green", "Blue", "Red", "Yellow"],
        correct: "Blue"
    },
    {
        type: ["text","sound"],
        image: null,
        sound: "assets/questions/easy-2.mp3",
        question: "Please hear the question?",
        choices: ["Green", "Blue", "Red", "Yellow"],
        correct: "Green"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-1.jpeg",
        sound: null,
        question: "What color is the sky?",
        choices: ["Green", "Blue", "Red", "Yellow"],
        correct: "Blue"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-1.jpeg",
        sound: null,
        question: "What color is the cloud?",
        choices: ["Black", "White", "Gray", "Brown"],
        correct: "White"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-1.jpeg",
        sound: null,
        question: "What do we call the white color in the sky?",
        choices: ["Mist", "Cloud", "Sky", "Sun"],
        correct: "Cloud"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-1.jpeg",
        sound: null,
        question: "What shape do the clouds often take?",
        choices: ["Square", "Round", "Fluffy", "Flat"],
        correct: "Fluffy"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-1.jpeg",
        sound: null,
        question: "What do you usually see in the sky during the day?",
        choices: ["Stars", "Moon", "Clouds", "Northern Lights"],
        correct: "Clouds"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-1.jpeg",
        sound: null,
        question: "What time of day is usually associated with a clear blue sky?",
        choices: ["Morning", "Afternoon", "Evening", "Night"],
        correct: "Afternoon"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-3.webp",
        sound: null,
        question: "Where we can found fish?",
        choices: ["Mountain", "Tree", "Lake", "Sky"],
        correct: "Lake"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-3.webp",
        sound: null,
        question: "What natural body of water is visible?",
        choices: ["River", "Ocean", "Lake", "Pond"],
        correct: "Lake"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-3.webp",
        sound: null,
        question: "What color are the trees?",
        choices: ["Red", "Brown", "Green", "Yellow"],
        correct: "Green"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-3.webp",
        sound: null,
        question: "What type of environment is depicted in the image?",
        choices: ["Urban", "Desert", "Forest", "Rural"],
        correct: "Forest"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-3.webp",
        sound: null,
        question: "What element indicates fresh water in the image?",
        choices: ["Tree", "Lake", "Mountain", "Sun"],
        correct: "Lake"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-3.webp",
        sound: null,
        question: "What is a common activity people do at a lake?",
        choices: ["Hiking", "Swimming", "Shopping", "Driving"],
        correct: "Swimming"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-4.webp",
        sound: null,
        question: "What activity are the people participating in?",
        choices: ["Running", "Swimming", "Cycling", "Walking"],
        correct: "Cycling"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-4.webp",
        sound: null,
        question: "What is the role of the people on the side of the track?",
        choices: ["Racing", "Watching", "Coaching", "Competing"],
        correct: "Watching"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-4.webp",
        sound: null,
        question: "What type of event is being held?",
        choices: ["Competition", "Training", "Festival", "Concert"],
        correct: "Competition"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-4.webp",
        sound: null,
        question: "What might the cyclists wear for safety?",
        choices: ["Hats", "Helmets", "Knife", "Sandals"],
        correct: "Helmets"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-4.webp",
        sound: null,
        question: "What might be the mood of the crowd?",
        choices: ["Bored", "Excited", "Angry", "Tired"],
        correct: "Excited"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-4.webp",
        sound: null,
        question: "How many cyclists can you see in the image?",
        choices: ["One", "Two", "Several", "None"],
        correct: "Several"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-5.webp",
        sound: null,
        question: "What are the people doing in the image?",
        choices: ["Dancing", "Sleeping", "Talking", "Working"],
        correct: "Talking"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-5.webp",
        sound: null,
        question: "How many people are in the image?",
        choices: ["Two", "Three", "Four", "Five"],
        correct: "Four"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-5.webp",
        sound: null,
        question: "What expression do the people have?",
        choices: ["Angry", "Sad", "Smiling", "Bored"],
        correct: "Smiling"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-5.webp",
        sound: null,
        question: "What are the people holding in their hands?",
        choices: ["Books", "Glasses", "Phones", "Plates"],
        correct: "Glasses"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-5.webp",
        sound: null,
        question: "What are their condition?",
        choices: ["Sitting", "Standing", "Walking", "Running"],
        correct: "Sitting"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-5.webp",
        sound: null,
        question: "What is the mood of the group in the image?",
        choices: ["Joyful", "Tense", "Serious", "Lonely"],
        correct: "Joyful"
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-6.jpg",
        sound: null,
        question: "What sport are the people playing?",
        choices: ["Football", "Basketball", "Baseball", "Tennis"],
        correct: "Basketball",
        tags: ["basketball", "sport"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-6.jpg",
        sound: null,
        question: "How many players are in red color?",
        choices: ["One", "Two", "Three", "Four"],
        correct: "Two",
        tags: ["basketball", "sport"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-6.jpg",
        sound: null,
        question: "What is one of the players holding?",
        choices: ["A racket", "A ball", "A glove", "A bat"],
        correct: "A ball",
        tags: ["basketball", "sport"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-6.jpg",
        sound: null,
        question: "What color are the opposing players wearing?",
        choices: ["Blue", "White", "Green", "Black"],
        correct: "White",
        tags: ["basketball", "sport"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-6.jpg",
        sound: null,
        question: "What is the role of the person who use whistle?",
        choices: ["Player", "Coach", "Referee", "Spectator"],
        correct: "Referee",
        tags: ["basketball", "sport"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-6.jpg",
        sound: null,
        question: "What is happening in the image?",
        choices: ["A training session", "A basketball game", "A timeout", "A halftime show"],
        correct: "A basketball game",
        tags: ["basketball", "sport"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-6.jpg",
        sound: null,
        question: "How many spectators can be seen?",
        choices: ["None", "A few", "Many", "One"],
        correct: "Many",
        tags: ["basketball", "sport"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-6.jpg",
        sound: null,
        question: "Which team have the ball?",
        choices: ["Red team", "White team", "Neither", "Both teams"],
        correct: "Red team",
        tags: ["basketball", "sport"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-6.jpg",
        sound: null,
        question: "What type of court are they playing on?",
        choices: ["Soccer field", "Tennis court", "Basketball court", "Baseball field"],
        correct: "Basketball court",
        tags: ["basketball", "sport"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-6.jpg",
        sound: null,
        question: "What could the spectators be doing?",
        choices: ["Eating", "Cheering", "Sleeping", "Leaving"],
        correct: "Cheering",
        tags: ["basketball", "sport"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-7.jpg",
        sound: null,
        question: "What is the family doing?",
        choices: ["Eating", "Playing", "Watching TV", "Cooking"],
        correct: "Eating",
        tags: ["eat", "family", "grandpa", "grandma", "parent", "parenting", "father", "mother", "kid"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-7.jpg",
        sound: null,
        question: "How many generations are present in the image?",
        choices: ["One", "Two", "Three", "Four"],
        correct: "Three",
        tags: ["eat", "family", "grandpa", "grandma", "parent", "parenting", "father", "mother", "kid"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-7.jpg",
        sound: null,
        question: "Who is likely the youngest member of the family?",
        choices: ["Grandpa", "Grandma", "Father", "Daughter"],
        correct: "Daughter",
        tags: ["eat", "family", "grandpa", "grandma", "parent", "parenting", "father", "mother", "kid"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-7.jpg",
        sound: null,
        question: "What are the adults likely doing while the child eats?",
        choices: ["Sleeping", "Talking", "Watching TV", "Cooking"],
        correct: "Talking",
        tags: ["eat", "family", "grandpa", "grandma", "parent", "parenting", "father", "mother", "kid"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-7.jpg",
        sound: null,
        question: "What are they drinking?",
        choices: ["Juice", "Mineral water", "Soda", "Coffee"],
        correct: "Mineral water",
        tags: ["eat", "family", "grandpa", "grandma", "parent", "parenting", "father", "mother", "kid"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-7.jpg",
        sound: null,
        question: "How do the family members appear in the image?",
        choices: ["Angry", "Happy", "Sad", "Tired"],
        correct: "Happy",
        tags: ["eat", "family", "grandpa", "grandma", "parent", "parenting", "father", "mother", "kid"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-7.jpg",
        sound: null,
        question: "What is likely on the table?",
        choices: ["Books", "Food", "Toys", "Games"],
        correct: "Food",
        tags: ["eat", "family", "grandpa", "grandma", "parent", "parenting", "father", "mother", "kid"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-7.jpg",
        sound: null,
        question: "What expression is likely on the child's face?",
        choices: ["Angry", "Happy", "Surprised", "Bored"],
        correct: "Happy",
        tags: ["eat", "family", "grandpa", "grandma", "parent", "parenting", "father", "mother", "kid"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-7.jpg",
        sound: null,
        question: "How many family members are sitting at the table?",
        choices: ["Three", "Four", "Five", "Six"],
        correct: "Five",
        tags: ["eat", "family", "grandpa", "grandma", "parent", "parenting", "father", "mother", "kid"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-7.jpg",
        sound: null,
        question: "What is a positive aspect of family meals?",
        choices: ["Less talking", "More food", "Stronger family bonds", "No distractions"],
        correct: "Stronger family bonds",
        tags: ["eat", "family", "grandpa", "grandma", "parent", "parenting", "father", "mother", "kid"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-7.jpg",
        sound: null,
        question: "What type of atmosphere is likely present at the table?",
        choices: ["Tense", "Quiet", "Joyful", "Boring"],
        correct: "Joyful",
        tags: ["eat", "family", "grandpa", "grandma", "parent", "parenting", "father", "mother", "kid"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-8.jpeg",
        sound: null,
        question: "What activity are the kids doing?",
        choices: ["Playing soccer", "Playing guitar", "Drawing", "Dancing"],
        correct: "Playing guitar",
        tags: ["kid", "boy", "guitar", "hobby", "music", "song"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-8.jpeg",
        sound: null,
        question: "What type of instrument are the kids playing?",
        choices: ["Piano", "Violin", "Guitar", "Drums"],
        correct: "Guitar",
        tags: ["kid", "boy", "guitar", "hobby", "music", "song"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-8.jpeg",
        sound: null,
        question: "How many kids are playing the guitar?",
        choices: ["One", "Two", "Three", "Four"],
        correct: "One",
        tags: ["kid", "boy", "guitar", "hobby", "music", "song"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-8.jpeg",
        sound: null,
        question: "What might the kids be learning?",
        choices: ["Cooking", "Music", "Math", "Sports"],
        correct: "Music",
        tags: ["kid", "boy", "guitar", "hobby", "music", "song"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-8.jpeg",
        sound: null,
        question: "Which of the following might they be playing?",
        choices: ["A song", "A game", "A story", "A movie"],
        correct: "A song",
        tags: ["kid", "boy", "guitar", "hobby", "music", "song"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-8.jpeg",
        sound: null,
        question: "What could the kids be practicing?",
        choices: ["Singing", "Dancing", "Playing guitar", "Drawing"],
        correct: "Playing guitar",
        tags: ["kid", "boy", "guitar", "hobby", "music", "song"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-8.jpeg",
        sound: null,
        question: "What skills can playing guitar help develop?",
        choices: ["Listening skills", "Cooking skills", "Driving skills", "Reading skills"],
        correct: "Listening skills",
        tags: ["kid", "boy", "guitar", "hobby", "music", "song"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-9.jpg",
        sound: null,
        question: "What type of dance are the kids performing?",
        choices: ["Hip Hop", "Ballet", "Jazz", "Salsa"],
        correct: "Ballet",
        tags: ["kid", "girl", "ballet", "dance", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-9.jpg",
        sound: null,
        question: "What color are the kids wearing?",
        choices: ["Red", "Blue", "White", "Pink"],
        correct: "White",
        tags: ["kid", "girl", "ballet", "dance", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-9.jpg",
        sound: null,
        question: "How many kids are in the ballet class?",
        choices: ["Two", "Three", "Four", "Five"],
        correct: "Four",
        tags: ["kid", "girl", "ballet", "dance", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-9.jpg",
        sound: null,
        question: "What is likely the setting of this activity?",
        choices: ["At home", "In a park", "In a dance studio", "At a party"],
        correct: "In a dance studio",
        tags: ["kid", "girl", "ballet", "dance", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-9.jpg",
        sound: null,
        question: "What could be a reason for the kids to be taking ballet classes?",
        choices: ["To learn a skill", "To make friends", "To have fun", "All of the above"],
        correct: "All of the above",
        tags: ["kid", "girl", "ballet", "dance", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-9.jpg",
        sound: null,
        question: "What is one benefit of learning ballet?",
        choices: ["Improved flexibility", "Better cooking skills", "Stronger voice", "Faster running speed"],
        correct: "Improved flexibility",
        tags: ["kid", "girl", "ballet", "dance", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-9.jpg",
        sound: null,
        question: "What could be an essential skill learned in ballet?",
        choices: ["Balance", "Cooking", "Drawing", "Writing"],
        correct: "Balance",
        tags: ["kid", "girl", "ballet", "dance", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-9.jpg",
        sound: null,
        question: "What might the kids feel after a ballet class?",
        choices: ["Tired", "Excited", "Happy", "All of the above"],
        correct: "All of the above",
        tags: ["kid", "girl", "ballet", "dance", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What is the girl holding in her hand?",
        choices: ["A book", "A mic", "A pencil", "A toy"],
        correct: "A mic",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What color is the girl's t-shirt?",
        choices: ["Blue", "Yellow", "Pink", "Green"],
        correct: "Pink",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What is the girl doing?",
        choices: ["Dancing", "Running", "Singing", "Reading"],
        correct: "Singing",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What hobby might the girl be interested in?",
        choices: ["Painting", "Singing", "Playing games", "Swimming"],
        correct: "Singing",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What object is commonly used while singing?",
        choices: ["Mic", "Pencil", "Brush", "Ball"],
        correct: "Mic",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What might the girl be singing?",
        choices: ["A poem", "A speech", "A song", "A story"],
        correct: "A song",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What is the likely mood of the girl while singing?",
        choices: ["Sad", "Happy", "Angry", "Scared"],
        correct: "Happy",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What color is commonly associated with the girl's t-shirt in the image?",
        choices: ["Red", "Pink", "Purple", "Yellow"],
        correct: "Pink",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What color is commonly associated with the girl's t-shirt in the image?",
        choices: ["Red", "Pink", "Purple", "Yellow"],
        correct: "Pink",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "Why might the girl be holding a mic?",
        choices: ["To write", "To sing", "To draw", "To play"],
        correct: "To sing",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "Which activity is related to using a mic?",
        choices: ["Running", "Singing", "Drawing", "Jumping"],
        correct: "Singing",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What might the girl's hobby be?",
        choices: ["Cooking", "Singing", "Reading", "Swimming"],
        correct: "Singing",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What color is the t-shirt the girl is wearing?",
        choices: ["Pink", "Orange", "Green", "Blue"],
        correct: "Pink",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What is the girl using the mic for?",
        choices: ["Talking", "Singing", "Reading", "Dancing"],
        correct: "Singing",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What could be the girl’s favorite activity?",
        choices: ["Singing", "Running", "Drawing", "Jumping"],
        correct: "Singing",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What might the girl be doing for fun?",
        choices: ["Singing", "Reading", "Playing", "Running"],
        correct: "Singing",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "Why might the girl be smiling while holding the mic?",
        choices: ["She is happy to sing", "She is scared", "She is tired", "She is angry"],
        correct: "She is happy to sing",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What could be the girl’s emotion while holding the mic?",
        choices: ["Excited", "Sad", "Bored", "Nervous"],
        correct: "Excited",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What is an essential tool for a singer?",
        choices: ["Mic", "Ball", "Brush", "Book"],
        correct: "Mic",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-10.jpg",
        sound: null,
        question: "What might the girl be preparing for?",
        choices: ["A performance", "A dance", "A game", "A race"],
        correct: "A performance",
        tags: ["kid", "girl", "sing", "hobby"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "What is the woman selling?",
        choices: ["Phone", "Fruits", "Toys", "Clothes"],
        correct: "Fruits",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "Who is selling the fruits?",
        choices: ["A man", "A boy", "A woman", "A grandmother"],
        correct: "A woman",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "What could be the woman’s job in this image?",
        choices: ["Doctor", "Fruit seller", "Teacher", "Engineer"],
        correct: "Fruit seller",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "What might the woman be doing?",
        choices: ["Selling fruits", "Buying fruits", "Cooking", "Studying"],
        correct: "Selling fruits",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "What is the main product shown in the image?",
        choices: ["Shirts", "Fruits", "Books", "Shoes"],
        correct: "Fruits",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "Who is standing in the image?",
        choices: ["A kid", "A woman", "A boy", "A man"],
        correct: "A woman",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "Which type of job is shown in the image?",
        choices: ["Teacher", "Fruit seller", "Mechanic", "Driver"],
        correct: "Fruit seller",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "What type of food is the woman selling?",
        choices: ["Fruits", "Bread", "Meat", "Soup"],
        correct: "Fruits",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "What kind of business might the woman be running?",
        choices: ["Restaurant", "Fruit stand", "Toy store", "Bookstore"],
        correct: "Fruit stand",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "What is the woman likely doing in the image?",
        choices: ["Selling", "Eating", "Studying", "Playing"],
        correct: "Selling",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "Which job involves selling fruits?",
        choices: ["Fruit seller", "Teacher", "Doctor", "Driver"],
        correct: "Fruit seller",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "What do you think the woman is earning money from?",
        choices: ["Selling fruits", "Teaching", "Fixing cars", "Dancing"],
        correct: "Selling fruits",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "What food is the woman likely selling?",
        choices: ["Fruits", "Vegetables", "Snacks", "Drinks"],
        correct: "Fruits",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "What is the woman’s main role in this image?",
        choices: ["Buying", "Selling", "Watching", "Eating"],
        correct: "Selling",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "What is the most likely product that the woman is selling?",
        choices: ["Fruits", "Flowers", "Beverages", "Candies"],
        correct: "Fruits",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "What kind of food might the customers buy from the woman?",
        choices: ["Fruits", "Cookies", "Ice cream", "Chips"],
        correct: "Fruits",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "Which of the following might the woman be selling?",
        choices: ["Books", "Fruits", "Toys", "Movies"],
        correct: "Fruits",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "What kind of food stand is shown in the image?",
        choices: ["Fruit stand", "Ice cream stand", "Burger stand", "Pizza stand"],
        correct: "Fruit stand",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "image"],
        image: "assets/questions/easy-11.webp",
        sound: null,
        question: "Who might be running the stand?",
        choices: ["A woman", "A kid", "A man", "A boy"],
        correct: "A woman",
        tags: ["kid", "woman", "fruit", "job"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "What is the boy planning to do tomorrow?",
        choices: ["Run", "Swim", "Play", "Study"],
        correct: "Swim",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "At what time does the boy want to swim?",
        choices: ["3 pm", "4 pm", "5 pm", "6 pm"],
        correct: "5 pm",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "Where does the boy plan to swim?",
        choices: ["At a lake", "At the beach", "At his school swimming pool", "In the river"],
        correct: "At his school swimming pool",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "How many friends is the boy planning to swim with?",
        choices: ["1", "2", "3", "4"],
        correct: "3",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "Who does the boy want to swim with?",
        choices: ["Family", "His classmates", "Friends", "Teachers"],
        correct: "Friends",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "What activity is the boy planning for tomorrow?",
        choices: ["Reading", "Running", "Swimming", "Singing"],
        correct: "Swimming",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "When is the boy planning to swim?",
        choices: ["Today", "Tomorrow", "Next Week", "Yesterday"],
        correct: "Tomorrow",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "What location does the boy mention for swimming?",
        choices: ["Community pool", "His school swimming pool", "River", "Ocean"],
        correct: "His school swimming pool",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "How many people will be in the group including the boy?",
        choices: ["2", "3", "4", "5"],
        correct: "4",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "Does the boy mention the day of his swimming plan?",
        choices: ["Yes, tomorrow", "No, today", "Yes, yesterday", "No, next week"],
        correct: "Yes, tomorrow",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "What time is mentioned for swimming?",
        choices: ["3 pm", "4 pm", "5 pm", "6 pm"],
        correct: "5 pm",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "Who is accompanying the boy to swim?",
        choices: ["His teacher", "His friends", "His parents", "His dog"],
        correct: "His friends",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "What is the boy’s plan related to?",
        choices: ["Homework", "A swimming activity", "Cycling", "Watching TV"],
        correct: "A swimming activity",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "How many friends will join the boy?",
        choices: ["2", "3", "4", "5"],
        correct: "3",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "Is the boy swimming alone?",
        choices: ["Yes", "No, with 3 friends", "No, with family", "Yes, with 1 friend"],
        correct: "No, with 3 friends",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "What kind of place does the boy mention for his plan?",
        choices: ["Playground", "Swimming pool", "Library", "Sports field"],
        correct: "Swimming pool",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "What specific activity is the boy planning?",
        choices: ["Swimming", "Running", "Playing soccer", "Reading"],
        correct: "Swimming",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-12.mp3",
        question: "What time is mentioned in the boy's plan?",
        choices: ["3 pm", "4 pm", "5 pm", "6 pm"],
        correct: "5 pm",
        tags: ["kid", "boy", "swim", "hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "When is the birthday?",
        choices: ["Next month", "Next week", "Tomorrow", "Today"],
        correct: "Next month",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "How old will her mom be?",
        choices: ["40", "45", "50", "60"],
        correct: "50",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "On which date is the birthday?",
        choices: ["21", "22", "23", "24"],
        correct: "23",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "What does she want to buy for her mom?",
        choices: ["Shoes", "Dress", "Jewelry", "Hat"],
        correct: "Dress",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "What color dress does she want to buy?",
        choices: ["Red", "Blue", "Pink", "Green"],
        correct: "Pink",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "Who is having a birthday next month?",
        choices: ["Her dad", "Her mom", "Her sister", "Her friend"],
        correct: "Her mom",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "What event is happening on the 23rd?",
        choices: ["A wedding", "A birthday", "A graduation", "A holiday"],
        correct: "A birthday",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "Who is turning 50 years old?",
        choices: ["Her sister", "Her aunt", "Her mom", "Her grandmother"],
        correct: "Her mom",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "What does she want to do for her mom?",
        choices: ["Buy a gift", "Throw a party", "Sing a song", "Bake a cake"],
        correct: "Buy a gift",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "What month will the birthday be?",
        choices: ["This month", "Next month", "Last month", "Two months later"],
        correct: "Next month",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "What kind of dress does she want to buy?",
        choices: ["Pink", "Blue", "Green", "Yellow"],
        correct: "Pink",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "What will be the special occasion?",
        choices: ["A trip", "A party", "A birthday", "A holiday"],
        correct: "A birthday",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "What gift is she planning to buy?",
        choices: ["A necklace", "A pink dress", "A pair of shoes", "A bracelet"],
        correct: "A pink dress",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "What is the age her mom will turn?",
        choices: ["45", "50", "55", "60"],
        correct: "50",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "What will happen next month?",
        choices: ["A party", "A graduation", "A wedding", "A birthday"],
        correct: "A birthday",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "When will her mom's birthday be?",
        choices: ["Next week", "Next month", "Tomorrow", "Next year"],
        correct: "Next month",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "What does she want to buy for the birthday?",
        choices: ["A gift", "A cake", "A card", "Flowers"],
        correct: "A gift",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "What kind of party will it be?",
        choices: ["A birthday party", "A graduation party", "A wedding party", "A farewell party"],
        correct: "A birthday party",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "Who will she buy the dress for?",
        choices: ["Her sister", "Her mom", "Her friend", "Her grandmother"],
        correct: "Her mom",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-13.mp3",
        question: "How old will her mom turn?",
        choices: ["50", "40", "60", "55"],
        correct: "50",
        tags: ["woman", "shopping", "birthday", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-14.mp3",
        question: "What are the girl's hobbies?",
        choices: ["Singing and dancing", "Painting and swimming", "Reading and writing", "Playing and drawing"],
        correct: "Singing and dancing",
        "tags" : ["kids","girl","sing","dance","hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-14.mp3",
        question: "What does the girl dream of becoming?",
        choices: ["A doctor", "A dancer", "An artist", "A teacher"],
        correct: "An artist",
        "tags" : ["kids","girl","sing","dance","hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-14.mp3",
        question: "What does the girl enjoy doing?",
        choices: ["Singing and dancing", "Reading and cooking", "Drawing and writing", "Swimming and running"],
        correct: "Singing and dancing",
        "tags" : ["kids","girl","sing","dance","hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-14.mp3",
        question: "What are the two hobbies mentioned?",
        choices: ["Singing and dancing", "Singing and swimming", "Dancing and cooking", "Writing and painting"],
        correct: "Singing and dancing",
        "tags" : ["kids","girl","sing","dance","hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-14.mp3",
        question: "What future goal does the girl have?",
        choices: ["To be an artist", "To be a doctor", "To be a teacher", "To be a singer"],
        correct: "To be an artist",
        "tags" : ["kids","girl","sing","dance","hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-14.mp3",
        question: "What does the girl dream of?",
        choices: ["Becoming an artist", "Becoming a singer", "Becoming a teacher", "Becoming a writer"],
        correct: "Becoming an artist",
        "tags" : ["kids","girl","sing","dance","hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-14.mp3",
        question: "Which activity is not mentioned?",
        choices: ["Singing", "Dancing", "Cooking", "Dancing"],
        correct: "Cooking",
        "tags" : ["kids","girl","sing","dance","hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-14.mp3",
        question: "What artistic talent does the girl dream of having?",
        choices: ["Being an artist", "Being a teacher", "Being a doctor", "Being a dancer"],
        correct: "Being an artist",
        "tags" : ["kids","girl","sing","dance","hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-14.mp3",
        question: "What does the girl want to become in the future?",
        choices: ["A teacher", "An artist", "A doctor", "A dancer"],
        correct: "An artist",
        "tags" : ["kids","girl","sing","dance","hobby"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-15.mp3",
        question: "When did the boy visit his grandparents' house?",
        choices: ["One month ago", "Two months ago", "Three months ago", "A week ago"],
        correct: "Two months ago",
        tags: ["kids", "boy", "holiday"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-15.mp3",
        question: "Whose house did the boy visit?",
        choices: ["His friends'", "His grandparents'", "His uncle's", "His aunt's"],
        correct: "His grandparents'",
        tags: ["kids", "boy", "holiday"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-15.mp3",
        question: "What kind of animals did the boy see at his grandparents' house?",
        choices: ["Dogs", "Birds", "Cats", "Fish"],
        correct: "Cats",
        tags: ["kids", "boy", "holiday"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-15.mp3",
        question: "How many cats did the boy see?",
        choices: ["A few", "Many", "One", "None"],
        correct: "Many",
        tags: ["kids", "boy", "holiday"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-15.mp3",
        question: "What was nearby the boy's grandparents' house?",
        choices: ["A shopping mall", "A beautiful park", "A school", "A lake"],
        correct: "A beautiful park",
        tags: ["kids", "boy", "holiday"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-15.mp3",
        question: "What type of place did the boy visit?",
        choices: ["A zoo", "A park", "A house", "A museum"],
        correct: "A house",
        tags: ["kids", "boy", "holiday"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-16.mp3",
        question: "What subject is the girl having an exam in?",
        choices: ["Math", "Science", "English", "History"],
        correct: "Math",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-16.mp3",
        question: "How many days are left until the exam?",
        choices: ["1 day", "2 days", "3 days", "4 days"],
        correct: "2 days",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-16.mp3",
        question: "Who is coming to study with her?",
        choices: ["Sarah", "William, Diana, and Patrick", "John and Alice", "Mike"],
        correct: "William, Diana, and Patrick",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-16.mp3",
        question: "Where will they study?",
        choices: ["At school", "At the library", "At her house", "At the park"],
        correct: "At her house",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-16.mp3",
        question: "What time of day will they study?",
        choices: ["Morning", "Afternoon", "Evening", "Night"],
        correct: "Evening",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-16.mp3",
        question: "What are they going to do at her house?",
        choices: ["Watch a movie", "Play games", "Study", "Eat dinner"],
        correct: "Study",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-16.mp3",
        question: "How many friends are studying with her?",
        choices: ["1", "2", "3", "4"],
        correct: "3",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-16.mp3",
        question: "What is the relationship between the girl and her friends?",
        choices: ["Classmates", "Neighbors", "Cousins", "Strangers"],
        correct: "Classmates",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-16.mp3",
        question: "Why is it important for her to study with friends?",
        choices: ["To have fun", "To get help", "To eat snacks", "To play games"],
        correct: "To get help",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-17.mp3",
        question: "How many dolls does the girl have in her room?",
        choices: ["10", "15", "20", "25"],
        correct: "15",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-17.mp3",
        question: "What is the name of the girl's favorite doll?",
        choices: ["Lola", "Chiko", "Roxy", "Bunny"],
        correct: "Chiko",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-17.mp3",
        question: "What color is Chiko?",
        choices: ["Blue", "Pink", "Yellow", "Green"],
        correct: "Pink",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-17.mp3",
        question: "What kind of animal is Chiko?",
        choices: ["Cat", "Dog", "Rabbit", "Bear"],
        correct: "Dog",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-17.mp3",
        question: "What feature does Chiko have?",
        choices: ["Wings", "Smiley face", "Glasses", "Hat"],
        correct: "Smiley face",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-17.mp3",
        question: "Where does the girl keep her dolls?",
        choices: ["In the kitchen", "In the garden", "In her room", "In the living room"],
        correct: "In her room",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-17.mp3",
        question: "Does the girl like Chiko?",
        choices: ["Yes", "No", "Maybe", "Not mentioned"],
        correct: "Yes",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-17.mp3",
        question: "Which doll does the girl mention first?",
        choices: ["Chiko", "Bunny", "Teddy", "Dolly"],
        correct: "Chiko",
        tags: ["kids", "girl", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-18.mp3",
        question: "What sport does the boy love?",
        choices: ["Basketball", "Football", "Tennis", "Cricket"],
        correct: "Football",
        tags: ["kids", "boy", "football", "hobby", "sports", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-18.mp3",
        question: "Who does he usually play with?",
        choices: ["His parents", "His friends from school", "His neighbors", "His coach"],
        correct: "His friends from school",
        tags: ["kids", "boy", "football", "hobby", "sports", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-18.mp3",
        question: "When does he usually play football?",
        choices: ["In the morning", "During physical education class", "After school", "On weekends"],
        correct: "During physical education class",
        tags: ["kids", "boy", "football", "hobby", "sports", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-18.mp3",
        question: "Who is his favorite football player?",
        choices: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Pele"],
        correct: "Lionel Messi",
        tags: ["kids", "boy", "football", "hobby", "sports", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-18.mp3",
        question: "What does he think about Messi and Ronaldo?",
        choices: ["Messi is better than Ronaldo", "Ronaldo is better than Messi", "They are equal", "He doesn't know"],
        correct: "Messi is better than Ronaldo",
        tags: ["kids", "boy", "football", "hobby", "sports", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-18.mp3",
        question: "What is a hobby mentioned in the audio?",
        choices: ["Reading", "Swimming", "Playing football", "Drawing"],
        correct: "Playing football",
        tags: ["kids", "boy", "football", "hobby", "sports", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-18.mp3",
        question: "What kind of class is he playing football in?",
        choices: ["Math class", "Physical education class", "Art class", "Science class"],
        correct: "Physical education class",
        tags: ["kids", "boy", "football", "hobby", "sports", "school"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-19.mp3",
        question: "Where does the man love to play?",
        choices: ["At home", "At the park", "At school", "At the beach"],
        correct: "At the park",
        tags: ["man", "family", "parent", "parenting", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-19.mp3",
        question: "How many children does the man have?",
        choices: ["One", "Two", "Three", "Four"],
        correct: "Three",
        tags: ["man", "family", "parent", "parenting", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-19.mp3",
        question: "What are the genders of the man's children?",
        choices: ["All boys", "All girls", "Two sons and one daughter", "One son and two daughters"],
        correct: "Two sons and one daughter",
        tags: ["man", "family", "parent", "parenting", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-19.mp3",
        question: "Who does the man play with at the park?",
        choices: ["His friends", "His wife and children", "Strangers", "His parents"],
        correct: "His wife and children",
        tags: ["man", "family", "parent", "parenting", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-19.mp3",
        question: "What day does the man plan to visit the park again?",
        choices: ["Next Saturday", "Next Sunday", "Tomorrow", "This Friday"],
        correct: "Next Sunday",
        tags: ["man", "family", "parent", "parenting", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-19.mp3",
        question: "What is the relationship of the woman mentioned?",
        choices: ["Sister", "Wife", "Friend", "Mother"],
        correct: "Wife",
        tags: ["man", "family", "parent", "parenting", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-19.mp3",
        question: "What is the main theme of the audio?",
        choices: ["Cooking", "Shopping", "Family activities", "School activities"],
        correct: "Family activities",
        tags: ["man", "family", "parent", "parenting", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-20.mp3",
        question: "Where does the woman work?",
        choices: ["At a school", "At a shopping mall", "At a restaurant", "At a park"],
        correct: "At a shopping mall",
        tags: ["woman", "family", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-20.mp3",
        question: "What is near the woman's workplace?",
        choices: ["A river", "The mountains", "A lake", "A forest"],
        correct: "A lake",
        tags: ["woman", "family", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-20.mp3",
        question: "How does the view make her feel?",
        choices: ["Happy", "Sad", "Like a princess", "Tired"],
        correct: "Like a princess",
        tags: ["woman", "family", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-20.mp3",
        question: "What does she often do with the view?",
        choices: ["Draw it", "Take pictures of it", "Ignore it", "Describe it"],
        correct: "Take pictures of it",
        tags: ["woman", "family", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-20.mp3",
        question: "Who does she share the pictures with?",
        choices: ["Her friends", "Her family", "Her coworkers", "Her neighbors"],
        correct: "Her family",
        tags: ["woman", "family", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-20.mp3",
        question: "What type of pictures does she take?",
        choices: ["Selfies", "Pictures of her friends", "Pictures of the view", "Pictures of her food"],
        correct: "Pictures of the view",
        tags: ["woman", "family", "activity"]
    },
    {
        type: ["text", "sound"],
        image: null,
        sound: "assets/questions/easy-20.mp3",
        question: "Is the view described as beautiful?",
        choices: ["Yes", "No", "Not sure", "Only sometimes"],
        correct: "Yes",
        tags: ["woman", "family", "activity"]
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "How many legs does a dog have?",
        choices: ["2", "4", "6", "8"],
        correct: "4"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What sound does a cat make?",
        choices: ["Moo", "Bark", "Meow", "Roar"],
        correct: "Meow"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the opposite of 'hot'?",
        choices: ["Cold", "Warm", "Boiling", "Cool"],
        correct: "Cold"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which fruit is yellow?",
        choices: ["Apple", "Banana", "Grape", "Orange"],
        correct: "Banana"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a baby dog?",
        choices: ["Puppy", "Kitten", "Cub", "Calf"],
        correct: "Puppy"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the opposite of 'happy'?",
        choices: ["Sad", "Excited", "Joyful", "Angry"],
        correct: "Sad"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which animal is known as 'man's best friend'?",
        choices: ["Cat", "Dog", "Bird", "Fish"],
        correct: "Dog"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the capital of France?",
        choices: ["London", "Berlin", "Paris", "Madrid"],
        correct: "Paris"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which shape has three sides?",
        choices: ["Square", "Rectangle", "Triangle", "Circle"],
        correct: "Triangle"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the opposite of 'big'?",
        choices: ["Large", "Small", "Tall", "Wide"],
        correct: "Small"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do bees make?",
        choices: ["Honey", "Milk", "Butter", "Jam"],
        correct: "Honey"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the color of an orange?",
        choices: ["Blue", "Green", "Orange", "Purple"],
        correct: "Orange"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which animal is known for its stripes?",
        choices: ["Lion", "Tiger", "Bear", "Elephant"],
        correct: "Tiger"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a person who writes books?",
        choices: ["Artist", "Teacher", "Author", "Doctor"],
        correct: "Author"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the name of the fairy in Peter Pan?",
        choices: ["Cinderella", "Tinkerbell", "Snow White", "Elsa"],
        correct: "Tinkerbell"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which instrument has keys?",
        choices: ["Guitar", "Drums", "Piano", "Flute"],
        correct: "Piano"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you drink in the morning?",
        choices: ["Water", "Juice", "Tea", "All of the above"],
        correct: "All of the above"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "How many months are there in a year?",
        choices: ["10", "11", "12", "13"],
        correct: "12"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which part of the body is used for hearing?",
        choices: ["Eyes", "Ears", "Nose", "Mouth"],
        correct: "Ears"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is a baby cat called?",
        choices: ["Puppy", "Kitten", "Cub", "Calf"],
        correct: "Kitten"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which day comes after Monday?",
        choices: ["Sunday", "Tuesday", "Wednesday", "Thursday"],
        correct: "Tuesday"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a place where you can see many animals?",
        choices: ["Park", "Zoo", "Farm", "Aquarium"],
        correct: "Zoo"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the first month of the year?",
        choices: ["February", "March", "January", "December"],
        correct: "January"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which vegetable is orange?",
        choices: ["Broccoli", "Carrot", "Potato", "Spinach"],
        correct: "Carrot"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a story about imaginary events?",
        choices: ["Biography", "Fiction", "Non-fiction", "Documentary"],
        correct: "Fiction"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the color of the grass?",
        choices: ["Yellow", "Green", "Brown", "Blue"],
        correct: "Green"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which animal is known as the king of the jungle?",
        choices: ["Elephant", "Lion", "Tiger", "Giraffe"],
        correct: "Lion"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "How many days are in a week?",
        choices: ["5", "6", "7", "8"],
        correct: "7"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call the person who helps you with your health?",
        choices: ["Teacher", "Doctor", "Engineer", "Chef"],
        correct: "Doctor"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What color is a typical banana?",
        choices: ["Green", "Yellow", "Red", "Blue"],
        correct: "Yellow"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the main ingredient in bread?",
        choices: ["Sugar", "Flour", "Butter", "Salt"],
        correct: "Flour"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a place where books are kept?",
        choices: ["Library", "Bookstore", "School", "Office"],
        correct: "Library"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you wear on your feet?",
        choices: ["Hat", "Shirt", "Shoes", "Belt"],
        correct: "Shoes"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the opposite of 'fast'?",
        choices: ["Quick", "Slow", "Rapid", "Swift"],
        correct: "Slow"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a frozen dessert made from milk?",
        choices: ["Ice cream", "Cake", "Pie", "Pudding"],
        correct: "Ice cream"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which fruit is red and often mistaken for a vegetable?",
        choices: ["Strawberry", "Tomato", "Banana", "Grapes"],
        correct: "Tomato"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call the leader of a country?",
        choices: ["President", "King", "Mayor", "Governor"],
        correct: "President"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the opposite of 'dark'?",
        choices: ["Bright", "Light", "Dim", "Dull"],
        correct: "Light"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which animal can fly?",
        choices: ["Cat", "Dog", "Bird", "Fish"],
        correct: "Bird"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call the season when it snows?",
        choices: ["Spring", "Summer", "Fall", "Winter"],
        correct: "Winter"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you use to write on paper?",
        choices: ["Paint", "Pen", "Glue", "Tape"],
        correct: "Pen"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which vehicle runs on tracks?",
        choices: ["Car", "Bus", "Train", "Bicycle"],
        correct: "Train"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a young sheep?",
        choices: ["Calf", "Kid", "Lamb", "Pup"],
        correct: "Lamb"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call the food eaten at breakfast?",
        choices: ["Dinner", "Lunch", "Snack", "Breakfast"],
        correct: "Breakfast"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Jupiter"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a group of stars?",
        choices: ["Galaxy", "Planet", "Moon", "Comet"],
        correct: "Galaxy"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which month is Halloween celebrated?",
        choices: ["October", "November", "September", "December"],
        correct: "October"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a place where you can buy food?",
        choices: ["Market", "School", "Office", "Library"],
        correct: "Market"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you use to take photos?",
        choices: ["Camera", "Phone", "Mirror", "Television"],
        correct: "Camera"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the main ingredient in salad?",
        choices: ["Rice", "Lettuce", "Bread", "Pasta"],
        correct: "Lettuce"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a place where you can see fish?",
        choices: ["Aquarium", "Zoo", "Museum", "Park"],
        correct: "Aquarium"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the name of the first man on the moon?",
        choices: ["Neil Armstrong", "Buzz Aldrin", "John Glenn", "Yuri Gagarin"],
        correct: "Neil Armstrong"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which animal is known for its long neck?",
        choices: ["Elephant", "Giraffe", "Lion", "Tiger"],
        correct: "Giraffe"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the opposite of 'empty'?",
        choices: ["Full", "Vacant", "Clear", "Hollow"],
        correct: "Full"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which shape is round?",
        choices: ["Square", "Rectangle", "Circle", "Triangle"],
        correct: "Circle"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call the main meal of the day?",
        choices: ["Breakfast", "Lunch", "Dinner", "Snack"],
        correct: "Dinner"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call the person who teaches students?",
        choices: ["Doctor", "Engineer", "Teacher", "Chef"],
        correct: "Teacher"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which fruit is known for being red and round?",
        choices: ["Apple", "Banana", "Grape", "Orange"],
        correct: "Apple"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the opposite of 'new'?",
        choices: ["Old", "Young", "Fresh", "Modern"],
        correct: "Old"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which animal is known for its ability to change colors?",
        choices: ["Chameleon", "Lizard", "Snake", "Frog"],
        correct: "Chameleon"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a vehicle that travels on water?",
        choices: ["Car", "Boat", "Bicycle", "Plane"],
        correct: "Boat"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the color of coal?",
        choices: ["Black", "White", "Green", "Blue"],
        correct: "Black"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call the largest ocean on Earth?",
        choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: "Pacific"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a place where you can see movies?",
        choices: ["Theater", "Library", "Restaurant", "Park"],
        correct: "Theater"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which animal has a pouch?",
        choices: ["Kangaroo", "Elephant", "Tiger", "Lion"],
        correct: "Kangaroo"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the opposite of 'love'?",
        choices: ["Like", "Hate", "Adore", "Cherish"],
        correct: "Hate"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a person who repairs cars?",
        choices: ["Doctor", "Mechanic", "Chef", "Teacher"],
        correct: "Mechanic"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which animal has a long tail?",
        choices: ["Dog", "Fish", "Monkey", "Cat"],
        correct: "Monkey"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the main ingredient in chocolate?",
        choices: ["Sugar", "Cocoa", "Flour", "Butter"],
        correct: "Cocoa"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call the study of plants?",
        choices: ["Biology", "Botany", "Geology", "Chemistry"],
        correct: "Botany"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the main meal eaten at midday?",
        choices: ["Breakfast", "Dinner", "Snack", "Lunch"],
        correct: "Lunch"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call the sport played on ice with a puck?",
        choices: ["Football", "Hockey", "Basketball", "Baseball"],
        correct: "Hockey"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the currency used in the United States?",
        choices: ["Euro", "Dollar", "Pound", "Yen"],
        correct: "Dollar"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a food that is made from milk and used on sandwiches?",
        choices: ["Butter", "Cheese", "Yogurt", "Cream"],
        correct: "Cheese"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a device that keeps food cold?",
        choices: ["Oven", "Refrigerator", "Microwave", "Stove"],
        correct: "Refrigerator"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which insect is known for its ability to make honey?",
        choices: ["Ant", "Bee", "Fly", "Mosquito"],
        correct: "Bee"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call the act of reading a book?",
        choices: ["Listening", "Writing", "Watching", "Reading"],
        correct: "Reading"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the main source of light during the day?",
        choices: ["Moon", "Sun", "Stars", "Fire"],
        correct: "Sun"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a place where you go to exercise?",
        choices: ["Gym", "Library", "School", "Park"],
        correct: "Gym"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which fruit is known for its high vitamin C content?",
        choices: ["Banana", "Apple", "Orange", "Grape"],
        correct: "Orange"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a place where you can buy clothes?",
        choices: ["Market", "Library", "Store", "Restaurant"],
        correct: "Store"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the name of the longest river in the world?",
        choices: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        correct: "Nile"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        type: ["text"],
        image: null,
        sound: null,question: "What do you call the study of animals?",
        choices: ["Biology", "Zoology", "Botany", "Geology"],
        correct: "Zoology"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the name of the fairy tale character who leaves a shoe behind?",
        choices: ["Cinderella", "Snow White", "Sleeping Beauty", "Rapunzel"],
        correct: "Cinderella"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What do you call a frozen dessert made from cream and sugar?",
        choices: ["Ice cream", "Cake", "Pie", "Candy"],
        correct: "Ice cream"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the color of a ripe strawberry?",
        choices: ["Yellow", "Red", "Green", "Purple"],
        correct: "Red"
    }

];

const mediumQuestions = [
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which is a synonym for 'happy'?",
        choices: ["Sad", "Elated", "Angry", "Boring"],
        correct: "Elated"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the past tense of 'run'?",
        choices: ["Ran", "Running", "Runs", "Runned"],
        correct: "Ran"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the plural of 'mouse'?",
        choices: ["Mice", "Mouses", "Moose", "Mices"],
        correct: "Mice"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which sentence is correct?",
        choices: ["He go to the store.", "He goes to the store.", "He going to the store.", "He gone to the store."],
        correct: "He goes to the store."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct past tense form: She (to walk) to school yesterday.",
        choices: ["walk", "walked", "walking", "walks"],
        correct: "walked"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the plural of 'child'?",
        choices: ["Childs", "Children", "Childrens", "Childer"],
        correct: "Children"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which sentence is in the future tense?",
        choices: ["I eat breakfast.", "I will eat breakfast.", "I ate breakfast.", "I eating breakfast."],
        correct: "I will eat breakfast."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct preposition: She is good ___ math.",
        choices: ["in", "on", "at", "for"],
        correct: "at"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct form? If it rains, we ___ inside.",
        choices: ["stay", "stays", "stayed", "staying"],
        correct: "stay"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct word: I have ___ friends.",
        choices: ["much", "many", "more", "few"],
        correct: "many"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct question form? Where ___ you live?",
        choices: ["do", "does", "is", "are"],
        correct: "do"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Complete the sentence: They ___ playing soccer now.",
        choices: ["are", "is", "am", "be"],
        correct: "are"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct comparative form? This book is ___ than that one.",
        choices: ["more interesting", "most interesting", "interestinger", "interesting"],
        correct: "more interesting"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct article: I saw ___ elephant at the zoo.",
        choices: ["a", "an", "the", "none"],
        correct: "an"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which of these is a possessive pronoun?",
        choices: ["his", "he", "him", "they"],
        correct: "his"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct past form? She (to eat) lunch before class.",
        choices: ["eats", "eating", "ate", "eaten"],
        correct: "ate"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct conjunction: I like tea, ___ I don't like coffee.",
        choices: ["and", "but", "or", "so"],
        correct: "but"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct question form? What time ___ the movie start?",
        choices: ["does", "do", "is", "are"],
        correct: "does"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct form: She (to play) the piano every day.",
        choices: ["play", "plays", "played", "playing"],
        correct: "plays"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct form? If you heat ice, it ___.",
        choices: ["melt", "melts", "melted", "melting"],
        correct: "melts"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct word: I need to buy ___ milk.",
        choices: ["some", "any", "much", "many"],
        correct: "some"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the superlative form of 'fast'?",
        choices: ["fastest", "faster", "most fast", "more fast"],
        correct: "fastest"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Complete the sentence: She is taller ___ her brother.",
        choices: ["than", "then", "that", "which"],
        correct: "than"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct question form? How many apples ___ you want?",
        choices: ["do", "does", "is", "are"],
        correct: "do"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which sentence is correct?",
        choices: ["They is going to the party.", "They are going to the party.", "They going to the party.", "They goes to the party."],
        correct: "They are going to the party."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct pronoun: ___ gave me the book.",
        choices: ["She", "Her", "Him", "They"],
        correct: "She"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct negative form? I (to like) pizza.",
        choices: ["don't like", "not like", "doesn't like", "don't likes"],
        correct: "don't like"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct form? He ___ (to read) a book every night.",
        choices: ["reads", "read", "reading", "reader"],
        correct: "reads"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct form? She (to be) my best friend.",
        choices: ["is", "am", "are", "be"],
        correct: "is"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct word: We went to the store to buy ___.",
        choices: ["fruits", "fruit", "fruitses", "fruity"],
        correct: "fruit"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct form? He ___ a lot of homework yesterday.",
        choices: ["has", "had", "have", "having"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which sentence is correct?",
        choices: ["She don't understand the lesson.", "She doesn't understand the lesson.", "She not understand the lesson.", "She understands not the lesson."],
        correct: "She doesn't understand the lesson."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct form? They (to play) soccer every weekend.",
        choices: ["play", "plays", "played", "playing"],
        correct: "play"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct word: There are ___ people in the room.",
        choices: ["much", "many", "more", "few"],
        correct: "many"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct future form? I (to visit) my grandparents next week.",
        choices: ["will visit", "visit", "visiting", "visited"],
        correct: "will visit"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct article: I would like ___ apple.",
        choices: ["a", "an", "the", "none"],
        correct: "an"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct form? She is ___ than her sister.",
        choices: ["more intelligent", "intelligenter", "most intelligent", "intelligent"],
        correct: "more intelligent"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which of these is a plural noun?",
        choices: ["Child", "Childs", "Children", "Childrens"],
        correct: "Children"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct form? If I see him, I ___ him the truth.",
        choices: ["tell", "tells", "told", "telling"],
        correct: "tell"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which sentence is correct?",
        choices: ["He are my friend.", "He is my friend.", "He be my friend.", "He am my friend."],
        correct: "He is my friend."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct form: They (to go) to the cinema last night.",
        choices: ["go", "went", "gone", "going"],
        correct: "went"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct negative form? We (to have) any questions.",
        choices: ["don't have", "doesn't have", "not have", "haven't"],
        correct: "don't have"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct question form? Where ___ you from?",
        choices: ["is", "are", "do", "does"],
        correct: "are"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct word: I can't find my ___ anywhere.",
        choices: ["book", "books", "bookes", "booked"],
        correct: "book"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct form? She (to study) English for three years.",
        choices: ["studies", "have been studying", "have studied", "study"],
        correct: "have been studying"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the superlative form of 'big'?",
        choices: ["biggest", "bigger", "most big", "more big"],
        correct: "biggest"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which sentence is correct?",
        choices: ["They doesn't like ice cream.", "They don't like ice cream.", "They not like ice cream.", "They likes ice cream."],
        correct: "They don't like ice cream."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct word: There is ___ milk in the fridge.",
        choices: ["any", "some", "much", "many"],
        correct: "some"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct form? I (to go) to the gym every day.",
        choices: ["go", "goes", "going", "gone"],
        correct: "go"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct past form? He (to finish) his homework.",
        choices: ["finishes", "finished", "finishing", "finish"],
        correct: "finished"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct word: I would like to ___ a cake for my birthday.",
        choices: ["make", "making", "makes", "made"],
        correct: "make"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct future form? They (to play) football tomorrow.",
        choices: ["will play", "play", "playing", "played"],
        correct: "will play"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct word: My brother is ___ than I am.",
        choices: ["tall", "taller", "tallest", "more tall"],
        correct: "taller"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct question form? When ___ the concert start?",
        choices: ["does", "do", "is", "are"],
        correct: "does"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which sentence is correct?",
        choices: ["I can speaks English.", "I can speak English.", "I can spoke English.", "I can speaking English."],
        correct: "I can speak English."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct form? If you (to study), you will pass.",
        choices: ["study", "studies", "studying", "studied"],
        correct: "study"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct article: She is ___ honest person.",
        choices: ["a", "an", "the", "none"],
        correct: "an"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct plural form? One foot, two ___.",
        choices: ["feet", "foots", "foot", "foote"],
        correct: "feet"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which of these is a present continuous form?",
        choices: ["She is reading.", "She read.", "She was read.", "She reads."],
        correct: "She is reading."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct form? They ___ (to go) to the store.",
        choices: ["goes", "went", "gone", "go"],
        correct: "go"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct word: I would prefer tea ___ coffee.",
        choices: ["than", "then", "to", "and"],
        correct: "to"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct form? If he (to study), he will pass exam.",
        choices: ["study", "studies", "studied", "studying"],
        correct: "studies"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which sentence is correct?",
        choices: ["We goes to the park.", "We going to the park.", "We go to the park.", "We gone to the park."],
        correct: "We go to the park."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct past form? She (to write) a letter.",
        choices: ["writes", "wrote", "writing", "write"],
        correct: "wrote"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct word: The weather is ___ today than yesterday.",
        choices: ["better", "good", "best", "well"],
        correct: "better"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct negative form? I (to like) chocolate.",
        choices: ["don't like", "doesn't like", "not like", "haven't liked"],
        correct: "don't like"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct future form? We (to travel) to Spain next year.",
        choices: ["will travel", "travels", "travel", "traveling"],
        correct: "will travel"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct preposition: She is interested ___ art.",
        choices: ["in", "on", "at", "for"],
        correct: "in"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct form? He (to play) the guitar.",
        choices: ["plays", "played", "playing", "play"],
        correct: "plays"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Choose the correct question form: Who ___ that book?",
        choices: ["wrote", "writes", "write", "writing"],
        correct: "wrote"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the correct form? They ___ happy about the news.",
        choices: ["are", "is", "am", "be"],
        correct: "are"
    }

];

const hardQuestions = [
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Read the paragraph: 'The quick brown fox jumps over the lazy dog.' What is the main idea of the paragraph?",
        choices: ["The dog is lazy.", "The fox is quick.", "The fox jumps.", "All of the above."],
        correct: "All of the above."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Which word is a noun in this sentence: 'She sells seashells by the seashore.'",
        choices: ["She", "Sells", "Seashells", "By"],
        correct: "Seashells"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the antonym of 'difficult'?",
        choices: ["Hard", "Easy", "Tough", "Complicated"],
        correct: "Easy"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'ephemeral' mean?",
        choices: ["Lasting for a very short time", "Long-lasting", "Eternal", "Irregular"],
        correct: "Lasting for a very short time"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'meticulous'?",
        choices: ["Careless", "Detailed", "Quick", "Vague"],
        correct: "Detailed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'cogent' mean in the context of an argument?",
        choices: ["Weak", "Clear and convincing", "Irrelevant", "Confusing"],
        correct: "Clear and convincing"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'salient' refer to?",
        choices: ["Insignificant", "Prominent", "Hidden", "Obscure"],
        correct: "Prominent"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'ubiquitous'?",
        choices: ["Rare", "Everywhere", "Local", "Uncommon"],
        correct: "Everywhere"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'arduous' mean?",
        choices: ["Easy", "Challenging", "Pleasant", "Simple"],
        correct: "Challenging"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'paradigm' refer to?",
        choices: ["Example", "Model", "Mistake", "Anomaly"],
        correct: "Model"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'ameliorate' mean?",
        choices: ["To worsen", "To improve", "To ignore", "To complicate"],
        correct: "To improve"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'innate' mean?",
        choices: ["Acquired", "Inherited", "Learned", "Temporary"],
        correct: "Inherited"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'dichotomy'?",
        choices: ["A division into two parts", "Unity", "A complex situation", "Ambiguity"],
        correct: "A division into two parts"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'tenacious' mean?",
        choices: ["Weak", "Persistent", "Indifferent", "Temporary"],
        correct: "Persistent"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'proclivity'?",
        choices: ["Reluctance", "Natural inclination", "Aversion", "Indifference"],
        correct: "Natural inclination"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'substantiate' mean?",
        choices: ["To prove", "To deny", "To ignore", "To hypothesize"],
        correct: "To prove"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'recalcitrant' mean?",
        choices: ["Obedient", "Defiant", "Passive", "Agreeable"],
        correct: "Defiant"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'conundrum'?",
        choices: ["A simple problem", "A confusing problem", "A clear solution", "An obvious answer"],
        correct: "A confusing problem"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'obfuscate' mean?",
        choices: ["To clarify", "To confuse", "To enlighten", "To simplify"],
        correct: "To confuse"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'cursory' mean?",
        choices: ["Detailed", "Superficial", "Thorough", "Meticulous"],
        correct: "Superficial"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'quintessential'?",
        choices: ["Unusual", "Typical", "Rare", "Irregular"],
        correct: "Typical"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'malleable' mean?",
        choices: ["Rigid", "Flexible", "Brittle", "Fragile"],
        correct: "Flexible"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'antithesis' mean?",
        choices: ["The opposite", "The same", "A synonym", "An analogy"],
        correct: "The opposite"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'veracity' mean?",
        choices: ["Truthfulness", "Lying", "Ambiguity", "Deceit"],
        correct: "Truthfulness"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'vociferous'?",
        choices: ["Quiet", "Loud and forceful", "Subtle", "Calm"],
        correct: "Loud and forceful"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'equanimity' mean?",
        choices: ["Agitation", "Composure", "Excitement", "Anxiety"],
        correct: "Composure"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'insidious'?",
        choices: ["Harmless", "Cunning and deceitful", "Open", "Honest"],
        correct: "Cunning and deceitful"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'panacea' mean?",
        choices: ["A remedy for all diseases", "A simple solution", "A complex issue", "An irrelevant topic"],
        correct: "A remedy for all diseases"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'sanguine' mean?",
        choices: ["Pessimistic", "Optimistic", "Neutral", "Indifferent"],
        correct: "Optimistic"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'resilient'?",
        choices: ["Fragile", "Able to recover quickly", "Weak", "Sensitive"],
        correct: "Able to recover quickly"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'nefarious' mean?",
        choices: ["Good", "Wicked", "Kind", "Benevolent"],
        correct: "Wicked"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'epiphany'?",
        choices: ["A moment of sudden revelation", "A routine event", "A common occurrence", "An unexpected mistake"],
        correct: "A moment of sudden revelation"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'exacerbate' mean?",
        choices: ["To improve", "To make worse", "To neutralize", "To mitigate"],
        correct: "To make worse"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'cogitate' mean?",
        choices: ["To think deeply", "To ignore", "To act quickly", "To speak loudly"],
        correct: "To think deeply"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'malevolent'?",
        choices: ["Benevolent", "Wishing harm to others", "Caring", "Friendly"],
        correct: "Wishing harm to others"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'dilapidated' mean?",
        choices: ["In good condition", "In ruins", "Well-maintained", "Recently built"],
        correct: "In ruins"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'quixotic'?",
        choices: ["Practical", "Idealistic and unrealistic", "Sensible", "Rational"],
        correct: "Idealistic and unrealistic"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'pugnacious' mean?",
        choices: ["Peaceful", "Aggressive", "Friendly", "Calm"],
        correct: "Aggressive"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'supercilious'?",
        choices: ["Humble", "Arrogant", "Modest", "Submissive"],
        correct: "Arrogant"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'lucid' mean?",
        choices: ["Confusing", "Clear and easy to understand", "Obscure", "Ambiguous"],
        correct: "Clear and easy to understand"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'fortuitous' mean?",
        choices: ["Accidental", "Intentional", "Planned", "Predictable"],
        correct: "Accidental"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'ineffable'?",
        choices: ["Able to be expressed", "Too great to be expressed in words", "Commonplace", "Boring"],
        correct: "Too great to be expressed in words"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'perfunctory' mean?",
        choices: ["Diligent", "Mechanical and unthinking", "Careful", "Thorough"],
        correct: "Mechanical and unthinking"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'austere'?",
        choices: ["Luxurious", "Severe and strict", "Pleasant", "Comfortable"],
        correct: "Severe and strict"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'serendipity' mean?",
        choices: ["Luck", "Misfortune", "Disaster", "Coincidence"],
        correct: "Luck"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'obsequious'?",
        choices: ["Assertive", "Excessively submissive", "Independent", "Confident"],
        correct: "Excessively submissive"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'reprehensible' mean?",
        choices: ["Commendable", "Deserving blame", "Praiseworthy", "Neutral"],
        correct: "Deserving blame"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'capricious' mean?",
        choices: ["Stable", "Whimsical and unpredictable", "Consistent", "Routine"],
        correct: "Whimsical and unpredictable"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'stentorian'?",
        choices: ["Soft-spoken", "Extremely loud", "Quiet", "Whispering"],
        correct: "Extremely loud"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'voracious' mean?",
        choices: ["Satisfied", "Having a huge appetite", "Indifferent", "Picky"],
        correct: "Having a huge appetite"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'taciturn'?",
        choices: ["Talkative", "Reserved", "Eager", "Outgoing"],
        correct: "Reserved"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'repudiate' mean?",
        choices: ["To accept", "To reject", "To agree", "To confirm"],
        correct: "To reject"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'garrulous'?",
        choices: ["Quiet", "Excessively talkative", "Reserved", "Laconic"],
        correct: "Excessively talkative"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'insipid' mean?",
        choices: ["Flavorful", "Dull and lacking flavor", "Exciting", "Invigorating"],
        correct: "Dull and lacking flavor"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'facilitate'?",
        choices: ["To hinder", "To make easier", "To complicate", "To obstruct"],
        correct: "To make easier"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'abstruse' mean?",
        choices: ["Simple", "Difficult to understand", "Clear", "Straightforward"],
        correct: "Difficult to understand"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'solicitous' mean?",
        choices: ["Indifferent", "Concerned", "Uninterested", "Apathetic"],
        correct: "Concerned"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'magnanimous'?",
        choices: ["Selfish", "Generous and forgiving", "Greedy", "Avaricious"],
        correct: "Generous and forgiving"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'juxtapose' mean?",
        choices: ["To compare", "To separate", "To ignore", "To analyze"],
        correct: "To compare"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'dissonant'?",
        choices: ["Harmonious", "Inconsistent or conflicting", "Agreeable", "Pleasant"],
        correct: "Inconsistent or conflicting"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'rescind' mean?",
        choices: ["To enact", "To revoke", "To approve", "To support"],
        correct: "To revoke"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'superfluous' mean?",
        choices: ["Necessary", "Unnecessary and excessive", "Essential", "Vital"],
        correct: "Unnecessary and excessive"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'intransigent'?",
        choices: ["Flexible", "Uncompromising", "Cooperative", "Agreeable"],
        correct: "Uncompromising"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'polemical' mean?",
        choices: ["Non-controversial", "Relating to a strong verbal or written attack", "Supportive", "Uninformed"],
        correct: "Relating to a strong verbal or written attack"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'efficacious' mean?",
        choices: ["Ineffective", "Effective", "Unsuccessful", "Weak"],
        correct: "Effective"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'equivocate'?",
        choices: ["To speak clearly", "To use ambiguous language", "To clarify", "To decide"],
        correct: "To use ambiguous language"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'exemplary' mean?",
        choices: ["Worthy of imitation", "Poor", "Average", "Unremarkable"],
        correct: "Worthy of imitation"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'sophistry' mean?",
        choices: ["Honesty", "Deceptive reasoning", "Clear logic", "Truthfulness"],
        correct: "Deceptive reasoning"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'cacophony'?",
        choices: ["Pleasant sound", "Harsh discordant mixture of sounds", "Melodious", "Symphony"],
        correct: "Harsh discordant mixture of sounds"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'spurious' mean?",
        choices: ["Genuine", "False or fake", "True", "Authentic"],
        correct: "False or fake"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'exuberant' mean?",
        choices: ["Restrained", "Full of energy and enthusiasm", "Dull", "Indifferent"],
        correct: "Full of energy and enthusiasm"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'interminable'?",
        choices: ["Endless", "Brief", "Temporary", "Limited"],
        correct: "Endless"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'chagrin' mean?",
        choices: ["Joy", "Distress or embarrassment", "Happiness", "Excitement"],
        correct: "Distress or embarrassment"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'disparate'?",
        choices: ["Similar", "Different in kind", "Identical", "Uniform"],
        correct: "Different in kind"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'haphazard' mean?",
        choices: ["Careful", "Random and lacking order", "Organized", "Systematic"],
        correct: "Random and lacking order"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'capitulate'?",
        choices: ["To resist", "To surrender", "To fight back", "To retreat"],
        correct: "To surrender"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'inexorable' mean?",
        choices: ["Flexible", "Relentless and unstoppable", "Bendable", "Changeable"],
        correct: "Relentless and unstoppable"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What does 'apathy' mean?",
        choices: ["Interest", "Lack of concern", "Involvement", "Engagement"],
        correct: "Lack of concern"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "What is the meaning of 'temerity'?",
        choices: ["Caution", "Recklessness", "Wisdom", "Carefulness"],
        correct: "Recklessness"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (study) harder, he would have passed the exam.",
        choices: ["had studied", "studied", "studies", "has studied"],
        correct: "had studied"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The report ___ (complete) by the time the meeting started.",
        choices: ["was completed", "is completed", "has been completed", "will be completed"],
        correct: "was completed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Had I known you were coming, I ___ (prepare) more food.",
        choices: ["would prepare", "would have prepared", "will prepare", "have prepared"],
        correct: "would have prepared"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She wishes she ___ (not leave) her job last year.",
        choices: ["didn't leave", "hadn't left", "doesn't leave", "doesn't left"],
        correct: "hadn't left"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "He suggested that she ___ (take) the train instead of driving.",
        choices: ["takes", "took", "take", "taken"],
        correct: "take"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (be) you, I would reconsider that decision.",
        choices: ["was", "am", "were", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The book, which ___ (write) by the famous author, was a bestseller.",
        choices: ["was written", "wrote", "written", "is written"],
        correct: "was written"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "It’s essential that everyone ___ (be) on time for the meeting.",
        choices: ["is", "was", "be", "are"],
        correct: "be"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "By the time we arrived, the concert ___ (already/start).",
        choices: ["had already started", "already started", "was already starting", "has already started"],
        correct: "had already started"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "He would rather you ___ (not smoke) in the house.",
        choices: ["didn't smoke", "not smoked", "don't smoke", "haven't smoked"],
        correct: "didn't smoke"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The proposal, ___ (accept) by the board yesterday, will be implemented next month.",
        choices: ["accepted", "was accepted", "is accepted", "has accepted"],
        correct: "was accepted"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I will call you as soon as I ___ (finish) my work.",
        choices: ["finished", "finish", "finishing", "have finished"],
        correct: "finish"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She can’t be at the party; she ___ (already/leave) for her trip.",
        choices: ["has already left", "had already left", "already left", "is already leaving"],
        correct: "has already left"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not forget) his keys, he would have gotten in.",
        choices: ["hadn't forgotten", "didn't forget", "doesn't forget", "wouldn't forget"],
        correct: "hadn't forgotten"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "___ (see) the movie yet?",
        choices: ["Did you see", "Have you seen", "Had you seen", "You see"],
        correct: "Have you seen"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "He didn’t mention whether he ___ (attend) the meeting or not.",
        choices: ["will attend", "attends", "attended", "would attend"],
        correct: "would attend"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If it ___ (rain) tomorrow, the match will be canceled.",
        choices: ["rains", "rained", "rain", "will rain"],
        correct: "rains"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The research paper, ___ (submit) last week, was accepted for publication.",
        choices: ["submitted", "was submitted", "has submitted", "submitting"],
        correct: "was submitted"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Neither the manager nor the employees ___ (be) aware of the changes.",
        choices: ["was", "are", "is", "were"],
        correct: "are"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "It is crucial that he ___ (understand) the instructions clearly.",
        choices: ["understands", "understand", "understood", "has understood"],
        correct: "understand"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She said that she ___ (not like) chocolate cake.",
        choices: ["didn't like", "doesn't like", "not like", "hadn't liked"],
        correct: "didn't like"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The house, which ___ (belong) to my grandparents, is now for sale.",
        choices: ["belongs", "belonged", "belong", "was belonging"],
        correct: "belonged"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (know) you were coming, I would have baked a cake.",
        choices: ["knew", "know", "had known", "knowing"],
        correct: "had known"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The committee has decided that the meeting ___ (postpone) until next week.",
        choices: ["is postponed", "was postponed", "has postponed", "be postponed"],
        correct: "is postponed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "It’s important that he ___ (attend) the workshop next week.",
        choices: ["attends", "attend", "is attending", "has attended"],
        correct: "attend"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "They would have joined us if they ___ (know) about the event.",
        choices: ["had known", "knew", "have known", "know"],
        correct: "had known"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "You should have informed us before you ___ (decide).",
        choices: ["decided", "decide", "had decided", "have decided"],
        correct: "decided"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "As soon as the sun ___ (set), it became dark.",
        choices: ["set", "sets", "setting", "had set"],
        correct: "set"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The teacher requires that each student ___ (submit) their assignment on time.",
        choices: ["submit", "submits", "submitted", "is submitting"],
        correct: "submit"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (ask) me, I would have helped her.",
        choices: ["had asked", "asked", "was asking", "has asked"],
        correct: "had asked"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "He is the only one who ___ (pass) the exam this time.",
        choices: ["passed", "passes", "has passed", "passing"],
        correct: "has passed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "You ___ (see) that movie before, haven’t you?",
        choices: ["saw", "have seen", "seen", "had seen"],
        correct: "have seen"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The cake was so delicious that it ___ (disappear) in minutes.",
        choices: ["disappeared", "had disappeared", "disappears", "was disappearing"],
        correct: "disappeared"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Unless she ___ (apologize), I will not forgive her.",
        choices: ["apologizes", "apologized", "had apologized", "is apologizing"],
        correct: "apologizes"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish I ___ (go) to the concert last night.",
        choices: ["had gone", "went", "was going", "have gone"],
        correct: "had gone"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "He promised that he ___ (call) me later.",
        choices: ["will call", "calls", "called", "would call"],
        correct: "would call"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (have) the time, I would travel more.",
        choices: ["had", "have", "having", "would have"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The movie ___ (be) interesting enough to watch again.",
        choices: ["was", "is", "had been", "would be"],
        correct: "was"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Should he ___ (not attend) the meeting, we will reschedule.",
        choices: ["not attend", "not attended", "does not attend", "did not attend"],
        correct: "not attend"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Had she ___ (realize) the consequences, she might have acted differently.",
        choices: ["realized", "realize", "had realized", "realizes"],
        correct: "realized"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The task must ___ (complete) by Friday.",
        choices: ["be completed", "completed", "completing", "have completed"],
        correct: "be completed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If you ___ (see) her, please let her know.",
        choices: ["saw", "see", "seen", "have seen"],
        correct: "see"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The project, ___ (fund) by the government, was a success.",
        choices: ["was funded", "has funded", "funded", "was funding"],
        correct: "was funded"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Neither of the answers ___ (be) correct.",
        choices: ["was", "were", "is", "are"],
        correct: "was"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "It’s high time we ___ (leave) for the airport.",
        choices: ["leave", "left", "leaving", "have left"],
        correct: "left"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The students were informed that the exam ___ (postpone) until next week.",
        choices: ["was postponed", "has postponed", "is postponed", "had postponed"],
        correct: "was postponed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I would appreciate it if you ___ (send) me the details.",
        choices: ["could send", "send", "can send", "sent"],
        correct: "could send"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The meeting was scheduled for tomorrow, but it ___ (cancel).",
        choices: ["was canceled", "has canceled", "is canceled", "canceled"],
        correct: "was canceled"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (work) harder, he would have succeeded.",
        choices: ["had worked", "worked", "works", "was working"],
        correct: "had worked"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The teacher explained that we ___ (need) to study more for the exam.",
        choices: ["needed", "need", "have needed", "had needed"],
        correct: "need"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Had it not been for your help, I ___ (not succeed).",
        choices: ["would not have succeeded", "did not succeed", "would not succeed", "will not succeed"],
        correct: "would not have succeeded"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The results ___ (announce) yesterday have been positive.",
        choices: ["announced", "were announced", "have been announced", "had been announced"],
        correct: "were announced"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "He acts as if he ___ (know) everything.",
        choices: ["knew", "knows", "has known", "is knowing"],
        correct: "knows"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If it ___ (be) sunny tomorrow, we will go to the beach.",
        choices: ["is", "was", "were", "be"],
        correct: "is"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She was reading a book while I ___ (watch) TV.",
        choices: ["watched", "was watching", "watch", "was watched"],
        correct: "was watching"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "He acted as though he ___ (not see) me.",
        choices: ["didn't see", "hadn't seen", "doesn't see", "isn't seeing"],
        correct: "hadn't seen"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The concert will start as soon as everyone ___ (arrive).",
        choices: ["arrives", "arrived", "has arrived", "had arrived"],
        correct: "arrives"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "By next year, I ___ (complete) my degree.",
        choices: ["will have completed", "have completed", "completed", "was completing"],
        correct: "will have completed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "You may leave early, provided that you ___ (finish) your work.",
        choices: ["finish", "finished", "finishing", "will finish"],
        correct: "finish"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The teacher told the students that they ___ (need) to study for the test.",
        choices: ["needed", "needs", "need", "had needed"],
        correct: "needed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "They suggested that he ___ (take) the job offer.",
        choices: ["take", "takes", "took", "taken"],
        correct: "take"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (not rain) tomorrow.",
        choices: ["won't rain", "didn't rain", "doesn't rain", "hadn't rained"],
        correct: "won't rain"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The article ___ (write) by an expert in the field.",
        choices: ["was written", "written", "had written", "is written"],
        correct: "was written"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "He wishes he ___ (not miss) the opportunity.",
        choices: ["hadn't missed", "didn't miss", "doesn't miss", "had missed"],
        correct: "hadn't missed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "They will not leave until they ___ (finish) the project.",
        choices: ["have finished", "finished", "are finishing", "will finish"],
        correct: "have finished"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She has lived here since she ___ (be) a child.",
        choices: ["was", "is", "has been", "had been"],
        correct: "was"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (be) more organized, I wouldn’t have forgotten the meeting.",
        choices: ["were", "was", "am", "had been"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "They will call you as soon as they ___ (arrive).",
        choices: ["arrived", "arrives", "arrive", "have arrived"],
        correct: "arrive"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The document needs to ___ (submit) by Friday.",
        choices: ["be submitted", "submit", "submitting", "has submitted"],
        correct: "be submitted"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She told me that she ___ (meet) him before.",
        choices: ["had met", "met", "has met", "was meeting"],
        correct: "had met"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The students were advised to ___ (study) harder for the next exam.",
        choices: ["study", "studied", "studying", "studies"],
        correct: "study"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If it ___ (snow), we will cancel the picnic.",
        choices: ["snows", "snowed", "has snowed", "was snowing"],
        correct: "snows"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "He would have finished the project if he ___ (have) more time.",
        choices: ["had", "has", "have", "was having"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The team expects that the results ___ (be) available by next week.",
        choices: ["will be", "are", "were", "have been"],
        correct: "will be"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She acted as if she ___ (know) the answer all along.",
        choices: ["knew", "knows", "has known", "is knowing"],
        correct: "knew"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (study) harder, he would be passing the course.",
        choices: ["studied", "studies", "had studied", "was studying"],
        correct: "studied"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The movie ___ (be) released last year received great reviews.",
        choices: ["was", "is", "had been", "has been"],
        correct: "was"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Unless it ___ (stop) raining, we cannot go outside.",
        choices: ["stops", "stopped", "stop", "was stopping"],
        correct: "stops"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish you ___ (come) to the party next week.",
        choices: ["would come", "will come", "come", "had come"],
        correct: "would come"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "By the time we arrive, the meeting ___ (already/start).",
        choices: ["will have already started", "had already started", "already starts", "has already started"],
        correct: "will have already started"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "It’s essential that you ___ (be) on time.",
        choices: ["are", "be", "were", "is"],
        correct: "be"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The report must ___ (complete) before the deadline.",
        choices: ["be completed", "completed", "have completed", "completing"],
        correct: "be completed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Had he known the truth, he ___ (not act) so foolishly.",
        choices: ["would not have acted", "did not act", "would not act", "will not act"],
        correct: "would not have acted"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "As soon as I ___ (finish) my homework, I will call you.",
        choices: ["finish", "finished", "finishing", "will finish"],
        correct: "finish"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not arrive) soon, we will leave without them.",
        choices: ["do not arrive", "did not arrive", "have not arrived", "arrive"],
        correct: "do not arrive"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The committee decided that the proposal ___ (reject).",
        choices: ["should be rejected", "should reject", "was rejected", "has rejected"],
        correct: "should be rejected"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "He insisted that she ___ (not tell) anyone about the surprise.",
        choices: ["should not tell", "did not tell", "would not tell", "not tell"],
        correct: "should not tell"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I would prefer that you ___ (not smoke) in here.",
        choices: ["did not smoke", "would not smoke", "not smoke", "does not smoke"],
        correct: "did not smoke"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The students wish they ___ (have) more time for the project.",
        choices: ["had", "have", "would have", "could have"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "It is crucial that he ___ (complete) the task on time.",
        choices: ["completes", "complete", "has completed", "completed"],
        correct: "complete"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The solution to the problem could have ___ (find) earlier.",
        choices: ["been found", "find", "found", "was found"],
        correct: "been found"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (take) my advice, he would be better off.",
        choices: ["had taken", "takes", "took", "take"],
        correct: "had taken"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "They demanded that the rules ___ (change).",
        choices: ["be changed", "changed", "changing", "are changed"],
        correct: "be changed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "It is important that you ___ (review) the materials before the test.",
        choices: ["review", "reviews", "reviewed", "will review"],
        correct: "review"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Had I known you were coming, I ___ (prepare) something special.",
        choices: ["would have prepared", "prepared", "will prepare", "had prepared"],
        correct: "would have prepared"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (see) her tomorrow, I will tell her the news.",
        choices: ["see", "saw", "have seen", "will see"],
        correct: "see"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "You would have understood better if you ___ (listen) carefully.",
        choices: ["had listened", "listened", "listen", "were listening"],
        correct: "had listened"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The decision ___ (make) last week was not easy.",
        choices: ["made", "was made", "had made", "is made"],
        correct: "was made"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She wishes she ___ (travel) more when she was younger.",
        choices: ["had traveled", "travels", "would travel", "travelled"],
        correct: "had traveled"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Had it ___ (not rain), we would have gone to the park.",
        choices: ["not rained", "not rain", "did not rain", "would not rain"],
        correct: "not rained"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "They recommended that she ___ (be) more assertive.",
        choices: ["is", "should be", "be", "was"],
        correct: "be"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If you ___ (have) any questions, please let me know.",
        choices: ["have", "had", "has", "will have"],
        correct: "have"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She suggested that he ___ (see) a doctor.",
        choices: ["see", "saw", "sees", "has seen"],
        correct: "see"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The book, which ___ (write) by a famous author, became a bestseller.",
        choices: ["was written", "wrote", "written", "had written"],
        correct: "was written"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I would have called you if I ___ (know) you were in town.",
        choices: ["had known", "knew", "knowing", "know"],
        correct: "had known"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The plan must ___ (present) to the committee next week.",
        choices: ["be presented", "presented", "have presented", "present"],
        correct: "be presented"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (be) more careful, he wouldn't have made that mistake.",
        choices: ["had been", "was", "is", "were"],
        correct: "had been"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The presentation needs to ___ (improve) significantly before the meeting.",
        choices: ["be improved", "improved", "have improved", "improving"],
        correct: "be improved"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish I ___ (not forget) my keys.",
        choices: ["had not forgotten", "did not forget", "would not forget", "haven't forgotten"],
        correct: "had not forgotten"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She is the kind of person who ___ (help) others whenever she can.",
        choices: ["helps", "help", "is helping", "helped"],
        correct: "helps"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The homework should ___ (complete) by the end of the week.",
        choices: ["be completed", "completed", "completing", "has completed"],
        correct: "be completed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If you ___ (ask) her, she would have come.",
        choices: ["had asked", "asked", "ask", "was asking"],
        correct: "had asked"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "He wishes he ___ (not leave) the project unfinished.",
        choices: ["had not left", "doesn't leave", "didn't leave", "has not left"],
        correct: "had not left"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "It is crucial that he ___ (arrive) early for the meeting.",
        choices: ["arrives", "arrive", "arrived", "is arriving"],
        correct: "arrive"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Had you ___ (tell) me earlier, I could have helped.",
        choices: ["told", "tell", "telling", "have told"],
        correct: "told"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She seemed as if she ___ (know) the answer all along.",
        choices: ["knew", "knows", "had known", "was knowing"],
        correct: "knew"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The cake ___ (make) by my mother was delicious.",
        choices: ["made", "was made", "is made", "had made"],
        correct: "was made"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If you ___ (not study) harder, you will not pass the exam.",
        choices: ["do not study", "did not study", "have not studied", "studied"],
        correct: "do not study"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I would rather you ___ (not smoke) in my car.",
        choices: ["did not smoke", "would not smoke", "not smoke", "does not smoke"],
        correct: "did not smoke"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The presentation ___ (give) yesterday was very informative.",
        choices: ["given", "was given", "gives", "gave"],
        correct: "was given"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (have) more time, he would travel more.",
        choices: ["had", "has", "have", "was having"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The project will be completed by the end of the month if everything ___ (go) according to plan.",
        choices: ["goes", "went", "going", "gone"],
        correct: "goes"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She suggested that he ___ (take) the day off.",
        choices: ["take", "takes", "took", "taken"],
        correct: "take"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Had I known about the meeting, I ___ (attend) it.",
        choices: ["would have attended", "attended", "will attend", "had attended"],
        correct: "would have attended"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not help) us, we will be in trouble.",
        choices: ["do not help", "did not help", "have not helped", "not help"],
        correct: "do not help"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She would have been happier if she ___ (make) different choices.",
        choices: ["had made", "made", "makes", "was making"],
        correct: "had made"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish I ___ (know) the answer.",
        choices: ["knew", "know", "had known", "knowing"],
        correct: "knew"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The homework ___ (complete) before class.",
        choices: ["must be completed", "was completed", "has been completed", "completed"],
        correct: "must be completed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (tell) me the truth, I would have believed him.",
        choices: ["had told", "told", "tell", "was telling"],
        correct: "had told"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She prefers that he ___ (wait) for her.",
        choices: ["waits", "wait", "waiting", "to wait"],
        correct: "wait"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The package must ___ (deliver) by noon.",
        choices: ["be delivered", "delivered", "have delivered", "deliver"],
        correct: "be delivered"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Had they ___ (know) about the storm, they would have left earlier.",
        choices: ["known", "knowing", "know", "knew"],
        correct: "known"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If you ___ (not like) the food, let me know.",
        choices: ["do not like", "did not like", "had not liked", "not like"],
        correct: "do not like"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She would prefer that he ___ (not go) to the party.",
        choices: ["did not go", "would not go", "not go", "does not go"],
        correct: "did not go"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (have) a million dollars, I would travel the world.",
        choices: ["had", "have", "has", "were having"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "He wishes he ___ (be) more confident.",
        choices: ["were", "was", "is", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The report ___ (submit) by the end of the week.",
        choices: ["must be submitted", "submitted", "have been submitted", "submitting"],
        correct: "must be submitted"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not attend) the meeting, important information will be missed.",
        choices: ["do not attend", "did not attend", "had not attended", "not attend"],
        correct: "do not attend"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She asked that he ___ (complete) the project on time.",
        choices: ["completes", "complete", "is completing", "completed"],
        correct: "complete"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Had they ___ (leave) earlier, they would have avoided the traffic.",
        choices: ["left", "leave", "leaving", "leaves"],
        correct: "left"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If you ___ (want) to succeed, you must work hard.",
        choices: ["want", "wants", "wanted", "wanting"],
        correct: "want"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I would have been there if I ___ (know) you were going.",
        choices: ["had known", "knew", "know", "knowing"],
        correct: "had known"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (be) more organized, he wouldn't lose things.",
        choices: ["were", "was", "is", "are"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The meeting needs to ___ (schedule) for next week.",
        choices: ["be scheduled", "scheduled", "schedules", "scheduling"],
        correct: "be scheduled"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (have) a chance, I would go for it.",
        choices: ["had", "have", "has", "were having"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The project ___ (complete) by the end of the month.",
        choices: ["must be completed", "was completed", "has been completed", "completed"],
        correct: "must be completed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Had he ___ (know) the consequences, he would have acted differently.",
        choices: ["known", "know", "knew", "had known"],
        correct: "known"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If you ___ (not believe) in yourself, no one else will.",
        choices: ["do not believe", "did not believe", "have not believed", "not believe"],
        correct: "do not believe"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "He wishes he ___ (not be) so shy.",
        choices: ["were not", "was not", "is not", "not be"],
        correct: "were not"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not pay) attention, they will miss the instructions.",
        choices: ["do not pay", "did not pay", "had not paid", "not pay"],
        correct: "do not pay"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The event ___ (organize) by the team was a success.",
        choices: ["organized", "was organized", "organizes", "organizing"],
        correct: "was organized"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If you ___ (have) a problem, please let me know.",
        choices: ["have", "had", "has", "having"],
        correct: "have"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She suggested that we ___ (meet) later.",
        choices: ["meet", "meets", "met", "meeting"],
        correct: "meet"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The solution ___ (find) yesterday was effective.",
        choices: ["found", "was found", "find", "had found"],
        correct: "was found"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not study) for the exam, he will not pass.",
        choices: ["does not study", "did not study", "had not studied", "not study"],
        correct: "does not study"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish he ___ (tell) me the truth.",
        choices: ["had told", "told", "tell", "was telling"],
        correct: "had told"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The project ___ (start) on time was a success.",
        choices: ["started", "was started", "starts", "starting"],
        correct: "was started"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (know) the answer, she would tell us.",
        choices: ["knew", "knows", "had known", "was knowing"],
        correct: "knew"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The decision ___ (make) by the board was final.",
        choices: ["made", "was made", "had made", "makes"],
        correct: "was made"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She wishes she ___ (be) more adventurous.",
        choices: ["were", "was", "is", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The report must ___ (submit) by Friday.",
        choices: ["be submitted", "submitted", "have submitted", "submitting"],
        correct: "be submitted"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not leave) now, they will miss the train.",
        choices: ["do not leave", "did not leave", "had not left", "not leave"],
        correct: "do not leave"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I would have gone to the party if I ___ (be) invited.",
        choices: ["had been", "was", "am", "were"],
        correct: "had been"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (know) about the event, I would have attended.",
        choices: ["had known", "knew", "know", "knowing"],
        correct: "had known"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The task ___ (complete) by the end of the day.",
        choices: ["must be completed", "completed", "was completed", "has been completed"],
        correct: "must be completed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not forget) to call me, I would have been happy.",
        choices: ["did not forget", "does not forget", "had not forgotten", "not forget"],
        correct: "did not forget"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish I ___ (be) taller.",
        choices: ["were", "was", "am", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (work) harder, she would have succeeded.",
        choices: ["had worked", "worked", "works", "working"],
        correct: "had worked"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The application ___ (submit) on time.",
        choices: ["must be submitted", "submitted", "has submitted", "submitting"],
        correct: "must be submitted"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Had he ___ (realize) the consequences, he would have acted differently.",
        choices: ["realized", "realize", "had realized", "realizing"],
        correct: "realized"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (take) the advice, they would have avoided the problem.",
        choices: ["had taken", "took", "take", "taking"],
        correct: "had taken"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She prefers that he ___ (not smoke) in the house.",
        choices: ["does not smoke", "not smoke", "did not smoke", "smokes"],
        correct: "does not smoke"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The meeting must ___ (reschedule) to next week.",
        choices: ["be rescheduled", "rescheduled", "has rescheduled", "reschedules"],
        correct: "be rescheduled"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (know) you were coming, I would have baked a cake.",
        choices: ["had known", "knew", "know", "was knowing"],
        correct: "had known"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The task ___ (complete) before the deadline.",
        choices: ["must be completed", "was completed", "completed", "has been completed"],
        correct: "must be completed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not prepare) for the exam, they will struggle.",
        choices: ["do not prepare", "did not prepare", "had not prepared", "not prepare"],
        correct: "do not prepare"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She suggested that we ___ (go) for a walk.",
        choices: ["go", "went", "going", "to go"],
        correct: "go"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The decision ___ (make) last week was controversial.",
        choices: ["made", "was made", "had made", "makes"],
        correct: "was made"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (be) more attentive, he would have noticed.",
        choices: ["had been", "was", "is", "were"],
        correct: "had been"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The report ___ (review) before submission.",
        choices: ["must be reviewed", "was reviewed", "has reviewed", "reviewed"],
        correct: "must be reviewed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If you ___ (not believe) in your dreams, who will?",
        choices: ["do not believe", "did not believe", "had not believed", "not believe"],
        correct: "do not believe"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (not rain) tomorrow.",
        choices: ["would not rain", "did not rain", "does not rain", "not rain"],
        correct: "would not rain"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not act) now, they will regret it later.",
        choices: ["do not act", "did not act", "had not acted", "not act"],
        correct: "do not act"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She wishes she ___ (have) more time.",
        choices: ["had", "has", "have", "was having"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The presentation ___ (give) by the manager was impressive.",
        choices: ["given", "was given", "gives", "giving"],
        correct: "was given"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (know) the way, I would help you.",
        choices: ["knew", "know", "had known", "was knowing"],
        correct: "knew"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The project ___ (approve) last week is now underway.",
        choices: ["approved", "was approved", "approves", "approving"],
        correct: "was approved"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (take) my advice, he would have succeeded.",
        choices: ["had taken", "took", "take", "taking"],
        correct: "had taken"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She suggested that he ___ (apply) for the job.",
        choices: ["apply", "applies", "applying", "applied"],
        correct: "apply"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not listen) to the advice, they will regret it.",
        choices: ["do not listen", "did not listen", "had not listened", "not listen"],
        correct: "do not listen"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish I ___ (not be) so busy.",
        choices: ["were not", "was not", "am not", "not be"],
        correct: "were not"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (be) more careful, she would not have made that mistake.",
        choices: ["had been", "was", "is", "were"],
        correct: "had been"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The book ___ (write) by a famous author was a bestseller.",
        choices: ["written", "was written", "writes", "writing"],
        correct: "was written"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (have) the time, I would help you.",
        choices: ["had", "have", "has", "were having"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The results ___ (announce) last week were surprising.",
        choices: ["announced", "were announced", "announces", "announcing"],
        correct: "were announced"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If you ___ (not take) the chance, you will never know.",
        choices: ["do not take", "did not take", "had not taken", "not take"],
        correct: "do not take"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (be) sunny tomorrow.",
        choices: ["were", "was", "is", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not start) now, they will miss the deadline.",
        choices: ["do not start", "did not start", "had not started", "not start"],
        correct: "do not start"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The report ___ (submit) by the team was thorough.",
        choices: ["submitted", "was submitted", "submits", "submitting"],
        correct: "was submitted"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (have) a choice, she would choose differently.",
        choices: ["had", "have", "has", "were having"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The presentation ___ (deliver) yesterday was impressive.",
        choices: ["delivered", "was delivered", "delivers", "delivering"],
        correct: "was delivered"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not listen) to the instructions, he will make mistakes.",
        choices: ["does not listen", "did not listen", "had not listened", "not listen"],
        correct: "does not listen"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish I ___ (not have) to work this weekend.",
        choices: ["did not have", "had not", "do not have", "not have"],
        correct: "did not have"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (know) the answer, I would tell you.",
        choices: ["knew", "know", "had known", "was knowing"],
        correct: "knew"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The meeting ___ (schedule) for next week is important.",
        choices: ["scheduled", "was scheduled", "schedules", "scheduling"],
        correct: "was scheduled"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If you ___ (not act) now, you will regret it later.",
        choices: ["do not act", "did not act", "had not acted", "not act"],
        correct: "do not act"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish I ___ (be) on vacation right now.",
        choices: ["were", "was", "am", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The document ___ (approve) by the committee is ready.",
        choices: ["approved", "was approved", "approves", "approving"],
        correct: "was approved"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (take) the time to study, he would have done better.",
        choices: ["had taken", "took", "take", "taking"],
        correct: "had taken"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "She recommended that he ___ (visit) the museum.",
        choices: ["visit", "visits", "visiting", "visited"],
        correct: "visit"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not prepare) for the test, they will struggle.",
        choices: ["do not prepare", "did not prepare", "had not prepared", "not prepare"],
        correct: "do not prepare"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish he ___ (not leave) so soon.",
        choices: ["had not left", "did not leave", "does not leave", "not leave"],
        correct: "had not left"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (have) more time, I would help you.",
        choices: ["had", "have", "has", "were having"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The email ___ (send) yesterday was important.",
        choices: ["sent", "was sent", "sends", "sending"],
        correct: "was sent"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not make) the call, I will be disappointed.",
        choices: ["does not make", "did not make", "had not made", "not make"],
        correct: "does not make"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish I ___ (have) a pet.",
        choices: ["had", "have", "has", "were having"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (study) harder, he would have passed the exam.",
        choices: ["had studied", "studied", "study", "studying"],
        correct: "had studied"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The report ___ (review) by the manager was positive.",
        choices: ["reviewed", "was reviewed", "reviews", "reviewing"],
        correct: "was reviewed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (know) about the changes, I would have spoken up.",
        choices: ["had known", "knew", "know", "was knowing"],
        correct: "had known"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The book ___ (read) by the students is due tomorrow.",
        choices: ["read", "was read", "reads", "reading"],
        correct: "was read"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not follow) the guidelines, they will face consequences.",
        choices: ["do not follow", "did not follow", "had not followed", "not follow"],
        correct: "do not follow"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (not rain) today.",
        choices: ["would not rain", "did not rain", "does not rain", "not rain"],
        correct: "would not rain"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (be) more punctual, she would not have missed the bus.",
        choices: ["had been", "was", "is", "were"],
        correct: "had been"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The presentation ___ (give) by the professor was enlightening.",
        choices: ["given", "was given", "gives", "giving"],
        correct: "was given"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not have) a deadline, I would work slower.",
        choices: ["did not have", "had not", "do not have", "not have"],
        correct: "did not have"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish she ___ (be) here with us.",
        choices: ["were", "was", "is", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (have) a car, he would drive to work.",
        choices: ["had", "have", "has", "were having"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The work ___ (complete) on time was appreciated.",
        choices: ["completed", "was completed", "completes", "completing"],
        correct: "was completed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not prepare) for the meeting, they will be unprepared.",
        choices: ["do not prepare", "did not prepare", "had not prepared", "not prepare"],
        correct: "do not prepare"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish I ___ (be) more confident.",
        choices: ["were", "was", "am", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (be) more diligent, she would have finished the project.",
        choices: ["had been", "was", "is", "were"],
        correct: "had been"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The results ___ (announce) earlier were accurate.",
        choices: ["announced", "were announced", "announces", "announcing"],
        correct: "were announced"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (know) the truth, I would have acted differently.",
        choices: ["had known", "knew", "know", "was knowing"],
        correct: "had known"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The proposal ___ (review) by the committee is pending approval.",
        choices: ["reviewed", "was reviewed", "reviews", "reviewing"],
        correct: "was reviewed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not act) soon, they will miss the opportunity.",
        choices: ["do not act", "did not act", "had not acted", "not act"],
        correct: "do not act"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (be) easier to learn a new language.",
        choices: ["were", "was", "is", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (have) the time, he would help.",
        choices: ["had", "have", "has", "were having"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The task ___ (complete) by the team was challenging.",
        choices: ["completed", "was completed", "completes", "completing"],
        correct: "was completed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not leave) early, she will miss the bus.",
        choices: ["does not leave", "did not leave", "had not left", "not leave"],
        correct: "does not leave"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish I ___ (be) able to travel more.",
        choices: ["were", "was", "am", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (have) a plan, they would have succeeded.",
        choices: ["had", "have", "has", "were having"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The results ___ (announce) today will be shared.",
        choices: ["announced", "were announced", "announces", "announcing"],
        correct: "were announced"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not remember) the details, I will ask for help.",
        choices: ["do not remember", "did not remember", "had not remembered", "not remember"],
        correct: "do not remember"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish she ___ (be) more understanding.",
        choices: ["were", "was", "is", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not take) the opportunity, he will regret it.",
        choices: ["does not take", "did not take", "had not taken", "not take"],
        correct: "does not take"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The meeting ___ (hold) last week was productive.",
        choices: ["held", "was held", "holds", "holding"],
        correct: "was held"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (have) the chance, I would speak to her.",
        choices: ["had", "have", "has", "were having"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The cake ___ (bake) by my mother was delicious.",
        choices: ["baked", "was baked", "bakes", "baking"],
        correct: "was baked"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not listen) to the advice, they will face consequences.",
        choices: ["do not listen", "did not listen", "had not listened", "not listen"],
        correct: "do not listen"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish I ___ (be) more organized.",
        choices: ["were", "was", "am", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not forget) the meeting, she would be here.",
        choices: ["does not forget", "did not forget", "had not forgotten", "not forget"],
        correct: "does not forget"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The project ___ (complete) by the team was a success.",
        choices: ["completed", "was completed", "completes", "completing"],
        correct: "was completed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not see) the results, I will be disappointed.",
        choices: ["do not see", "did not see", "had not seen", "not see"],
        correct: "do not see"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (not snow) this winter.",
        choices: ["would not snow", "did not snow", "does not snow", "not snow"],
        correct: "would not snow"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not speak) up, no one will know.",
        choices: ["does not speak", "did not speak", "had not spoken", "not speak"],
        correct: "does not speak"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The assignment ___ (submit) on time was appreciated.",
        choices: ["submitted", "was submitted", "submits", "submitting"],
        correct: "was submitted"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not apologize), I will be upset.",
        choices: ["does not apologize", "did not apologize", "had not apologized", "not apologize"],
        correct: "does not apologize"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish I ___ (be) able to help.",
        choices: ["were", "was", "am", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (be) more cautious, they would not have made that mistake.",
        choices: ["had been", "was", "is", "were"],
        correct: "had been"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The task ___ (complete) on time was critical.",
        choices: ["completed", "was completed", "completes", "completing"],
        correct: "was completed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not feel) well, I will stay home.",
        choices: ["do not feel", "did not feel", "had not felt", "not feel"],
        correct: "do not feel"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (be) sunny tomorrow.",
        choices: ["were", "was", "is", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not meet) the deadline, they will be penalized.",
        choices: ["do not meet", "did not meet", "had not met", "not meet"],
        correct: "do not meet"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The task ___ (assign) to me was challenging.",
        choices: ["assigned", "was assigned", "assigns", "assigning"],
        correct: "was assigned"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not call), I will be worried.",
        choices: ["does not call", "did not call", "had not called", "not call"],
        correct: "does not call"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish I ___ (be) able to go.",
        choices: ["were", "was", "am", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not study) for the exam, he will fail.",
        choices: ["does not study", "did not study", "had not studied", "not study"],
        correct: "does not study"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The book ___ (publish) last year was a bestseller.",
        choices: ["published", "was published", "publishes", "publishing"],
        correct: "was published"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not finish) my homework, I will be in trouble.",
        choices: ["do not finish", "did not finish", "had not finished", "not finish"],
        correct: "do not finish"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish he ___ (not quit) the job.",
        choices: ["had not quit", "did not quit", "does not quit", "not quit"],
        correct: "had not quit"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (be) more prepared, they would not have panicked.",
        choices: ["had been", "was", "is", "were"],
        correct: "had been"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The proposal ___ (accept) by the board is pending approval.",
        choices: ["accepted", "was accepted", "accepts", "accepting"],
        correct: "was accepted"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not understand) the instructions, I will ask for clarification.",
        choices: ["do not understand", "did not understand", "had not understood", "not understand"],
        correct: "do not understand"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (be) different.",
        choices: ["were", "was", "is", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not complete) the task, he will be reprimanded.",
        choices: ["does not complete", "did not complete", "had not completed", "not complete"],
        correct: "does not complete"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The package ___ (deliver) yesterday was lost.",
        choices: ["delivered", "was delivered", "delivers", "delivering"],
        correct: "was delivered"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not see) you at the party, I will be disappointed.",
        choices: ["do not see", "did not see", "had not seen", "not see"],
        correct: "do not see"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish we ___ (be) able to travel again.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not listen) to the warnings, they will regret it.",
        choices: ["do not listen", "did not listen", "had not listened", "not listen"],
        correct: "do not listen"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The presentation ___ (give) last week was well-received.",
        choices: ["given", "was given", "gives", "giving"],
        correct: "was given"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not plan) the event well, it will be chaotic.",
        choices: ["does not plan", "did not plan", "had not planned", "not plan"],
        correct: "does not plan"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish you ___ (be) here to celebrate.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not keep) the secret, I will be in trouble.",
        choices: ["do not keep", "did not keep", "had not kept", "not keep"],
        correct: "do not keep"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The report ___ (prepare) by the team was comprehensive.",
        choices: ["prepared", "was prepared", "prepares", "preparing"],
        correct: "was prepared"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not follow) the rules, they will be punished.",
        choices: ["do not follow", "did not follow", "had not followed", "not follow"],
        correct: "do not follow"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (be) easier.",
        choices: ["were", "was", "is", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not check) his work, he will make mistakes.",
        choices: ["does not check", "did not check", "had not checked", "not check"],
        correct: "does not check"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The meeting ___ (schedule) for tomorrow is important.",
        choices: ["scheduled", "was scheduled", "schedules", "scheduling"],
        correct: "was scheduled"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not receive) the package, I will call customer service.",
        choices: ["do not receive", "did not receive", "had not received", "not receive"],
        correct: "do not receive"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish he ___ (be) more responsible.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not report) the incident, they will be in trouble.",
        choices: ["do not report", "did not report", "had not reported", "not report"],
        correct: "do not report"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The article ___ (write) by a famous author is captivating.",
        choices: ["written", "was written", "writes", "writing"],
        correct: "was written"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not know) the answer, I will admit it.",
        choices: ["do not know", "did not know", "had not known", "not know"],
        correct: "do not know"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (not rain) tomorrow.",
        choices: ["would not rain", "did not rain", "does not rain", "not rain"],
        correct: "would not rain"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not arrive) on time, we will leave without her.",
        choices: ["does not arrive", "did not arrive", "had not arrived", "not arrive"],
        correct: "does not arrive"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The solution ___ (implement) by the team improved efficiency.",
        choices: ["implemented", "was implemented", "implements", "implementing"],
        correct: "was implemented"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not hear) from you by noon, I will assume everything is fine.",
        choices: ["do not hear", "did not hear", "had not heard", "not hear"],
        correct: "do not hear"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish we ___ (not have) to leave so soon.",
        choices: ["did not have", "had not had", "do not have", "not have"],
        correct: "did not have"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not complete) the assignment, they will receive a zero.",
        choices: ["do not complete", "did not complete", "had not completed", "not complete"],
        correct: "do not complete"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The decision ___ (make) by the committee is final.",
        choices: ["made", "was made", "makes", "making"],
        correct: "was made"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not listen) to my advice, he will regret it.",
        choices: ["does not listen", "did not listen", "had not listened", "not listen"],
        correct: "does not listen"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish they ___ (be) more understanding.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not submit) their work, they will fail the course.",
        choices: ["do not submit", "did not submit", "had not submitted", "not submit"],
        correct: "do not submit"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The report ___ (present) last week was thorough.",
        choices: ["presented", "was presented", "presents", "presenting"],
        correct: "was presented"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not pay) my bills on time, I will incur late fees.",
        choices: ["do not pay", "did not pay", "had not paid", "not pay"],
        correct: "do not pay"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish he ___ (be) more honest.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not attend) the meeting, she will miss important information.",
        choices: ["does not attend", "did not attend", "had not attended", "not attend"],
        correct: "does not attend"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The policy ___ (change) last year has been effective.",
        choices: ["changed", "was changed", "changes", "changing"],
        correct: "was changed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not receive) the email, I will reach out again.",
        choices: ["do not receive", "did not receive", "had not received", "not receive"],
        correct: "do not receive"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish they ___ (be) here to support us.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not inform) us, we will not know what to do.",
        choices: ["does not inform", "did not inform", "had not informed", "not inform"],
        correct: "does not inform"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The data ___ (analyze) by the team revealed interesting trends.",
        choices: ["analyzed", "was analyzed", "analyzes", "analyzing"],
        correct: "was analyzed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not express) my feelings, I will regret it.",
        choices: ["do not express", "did not express", "had not expressed", "not express"],
        correct: "do not express"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (be) possible to change the past.",
        choices: ["were", "was", "is", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not consider) my proposal, I will be disappointed.",
        choices: ["does not consider", "did not consider", "had not considered", "not consider"],
        correct: "does not consider"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The results ___ (publish) last month were promising.",
        choices: ["published", "was published", "publishes", "publishing"],
        correct: "was published"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not prepare) for the test, they will struggle.",
        choices: ["do not prepare", "did not prepare", "had not prepared", "not prepare"],
        correct: "do not prepare"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish we ___ (be) able to help you.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not show) up, we will have to start without him.",
        choices: ["does not show", "did not show", "had not shown", "not show"],
        correct: "does not show"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The task ___ (finish) yesterday was completed successfully.",
        choices: ["finished", "was finished", "finishes", "finishing"],
        correct: "was finished"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not wear) a jacket, I will be cold.",
        choices: ["do not wear", "did not wear", "had not worn", "not wear"],
        correct: "do not wear"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish they ___ (not argue) so much.",
        choices: ["would not argue", "did not argue", "does not argue", "not argue"],
        correct: "would not argue"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not help) me, I will struggle.",
        choices: ["does not help", "did not help", "had not helped", "not help"],
        correct: "does not help"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The task ___ (assign) to her was completed on time.",
        choices: ["assigned", "was assigned", "assigns", "assigning"],
        correct: "was assigned"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not think) ahead, I will regret it later.",
        choices: ["do not think", "did not think", "had not thought", "not think"],
        correct: "do not think"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish we ___ (have) more time.",
        choices: ["had", "have", "did have", "not have"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not follow) the instructions, they will fail.",
        choices: ["do not follow", "did not follow", "had not followed", "not follow"],
        correct: "do not follow"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The meeting ___ (hold) next week will be important.",
        choices: ["held", "was held", "holds", "holding"],
        correct: "was held"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not understand) the question, I will ask for clarification.",
        choices: ["do not understand", "did not understand", "had not understood", "not understand"],
        correct: "do not understand"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (not be) so complicated.",
        choices: ["were not", "was not", "is not", "be not"],
        correct: "were not"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not agree) on the terms, we will have to renegotiate.",
        choices: ["do not agree", "did not agree", "had not agreed", "not agree"],
        correct: "do not agree"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The document ___ (sign) by the manager was essential.",
        choices: ["signed", "was signed", "signs", "signing"],
        correct: "was signed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not change) my mind, I will stick to my plan.",
        choices: ["do not change", "did not change", "had not changed", "not change"],
        correct: "do not change"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish you ___ (be) here with us.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not check) his work, he will make mistakes.",
        choices: ["does not check", "did not check", "had not checked", "not check"],
        correct: "does not check"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The project ___ (complete) last week is now underway.",
        choices: ["completed", "was completed", "completes", "completing"],
        correct: "was completed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not prepare) for the meeting, I will feel unprepared.",
        choices: ["do not prepare", "did not prepare", "had not prepared", "not prepare"],
        correct: "do not prepare"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish we ___ (not be) in a hurry.",
        choices: ["were not", "was not", "are not", "be not"],
        correct: "were not"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not plan) ahead, they will face difficulties.",
        choices: ["do not plan", "did not plan", "had not planned", "not plan"],
        correct: "do not plan"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The presentation ___ (deliver) yesterday was well-received.",
        choices: ["delivered", "was delivered", "delivers", "delivering"],
        correct: "was delivered"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not ask) for help, I will struggle.",
        choices: ["do not ask", "did not ask", "had not asked", "not ask"],
        correct: "do not ask"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish they ___ (be) more supportive.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not tell) me, I will never know.",
        choices: ["does not tell", "did not tell", "had not told", "not tell"],
        correct: "does not tell"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The results ___ (analyze) last month were significant.",
        choices: ["analyzed", "was analyzed", "analyzes", "analyzing"],
        correct: "was analyzed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not clarify) the situation, misunderstandings will arise.",
        choices: ["do not clarify", "did not clarify", "had not clarified", "not clarify"],
        correct: "do not clarify"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish we ___ (have) more time to discuss.",
        choices: ["had", "have", "did have", "not have"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not address) the issue, it will worsen.",
        choices: ["does not address", "did not address", "had not addressed", "not address"],
        correct: "does not address"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The report ___ (submit) last week was comprehensive.",
        choices: ["submitted", "was submitted", "submits", "submitting"],
        correct: "was submitted"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not learn) from my mistakes, I will repeat them.",
        choices: ["do not learn", "did not learn", "had not learned", "not learn"],
        correct: "do not learn"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish you ___ (be) here with us.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not receive) the invitation, she will be upset.",
        choices: ["does not receive", "did not receive", "had not received", "not receive"],
        correct: "does not receive"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The analysis ___ (conduct) by the team was thorough.",
        choices: ["conducted", "was conducted", "conducts", "conducting"],
        correct: "was conducted"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not prioritize) their tasks, they will feel overwhelmed.",
        choices: ["do not prioritize", "did not prioritize", "had not prioritized", "not prioritize"],
        correct: "do not prioritize"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (be) easier to understand.",
        choices: ["were", "was", "is", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not confirm) the details, we will have to reschedule.",
        choices: ["does not confirm", "did not confirm", "had not confirmed", "not confirm"],
        correct: "does not confirm"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The findings ___ (report) yesterday were enlightening.",
        choices: ["reported", "was reported", "reports", "reporting"],
        correct: "was reported"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not improve) my skills, I will lag behind.",
        choices: ["do not improve", "did not improve", "had not improved", "not improve"],
        correct: "do not improve"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish they ___ (be) more patient.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not respect) the rules, there will be consequences.",
        choices: ["do not respect", "did not respect", "had not respected", "not respect"],
        correct: "do not respect"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The results ___ (publish) last month were impressive.",
        choices: ["published", "was published", "publishes", "publishing"],
        correct: "was published"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not take) responsibility, I will face consequences.",
        choices: ["do not take", "did not take", "had not taken", "not take"],
        correct: "do not take"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (be) easier to communicate.",
        choices: ["were", "was", "is", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not follow) the guidelines, she will be penalized.",
        choices: ["does not follow", "did not follow", "had not followed", "not follow"],
        correct: "does not follow"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The presentation ___ (prepare) last week was well-received.",
        choices: ["prepared", "was prepared", "prepares", "preparing"],
        correct: "was prepared"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not express) my concerns, they will go unaddressed.",
        choices: ["do not express", "did not express", "had not expressed", "not express"],
        correct: "do not express"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish they ___ (be) more understanding.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not acknowledge) the issue, it will persist.",
        choices: ["does not acknowledge", "did not acknowledge", "had not acknowledged", "not acknowledge"],
        correct: "does not acknowledge"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The report ___ (create) last month was comprehensive.",
        choices: ["created", "was created", "creates", "creating"],
        correct: "was created"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not focus) on their goals, they will drift off course.",
        choices: ["do not focus", "did not focus", "had not focused", "not focus"],
        correct: "do not focus"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish we ___ (have) more clarity on the issue.",
        choices: ["had", "have", "did have", "not have"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not communicate) effectively, there will be misunderstandings.",
        choices: ["does not communicate", "did not communicate", "had not communicated", "not communicate"],
        correct: "does not communicate"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The feedback ___ (provide) last week was helpful.",
        choices: ["provided", "was provided", "provides", "providing"],
        correct: "was provided"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not advocate) for myself, no one else will.",
        choices: ["do not advocate", "did not advocate", "had not advocated", "not advocate"],
        correct: "do not advocate"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish they ___ (be) more collaborative.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not innovate), they will fall behind the competition.",
        choices: ["do not innovate", "did not innovate", "had not innovated", "not innovate"],
        correct: "do not innovate"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The analysis ___ (perform) last week was insightful.",
        choices: ["performed", "was performed", "performs", "performing"],
        correct: "was performed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not adapt) to the changes, I will struggle.",
        choices: ["do not adapt", "did not adapt", "had not adapted", "not adapt"],
        correct: "do not adapt"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish we ___ (not be) so stressed.",
        choices: ["were not", "was not", "are not", "be not"],
        correct: "were not"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not collaborate), they will miss out on valuable insights.",
        choices: ["do not collaborate", "did not collaborate", "had not collaborated", "not collaborate"],
        correct: "do not collaborate"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The training ___ (conduct) last week was beneficial.",
        choices: ["conducted", "was conducted", "conducts", "conducting"],
        correct: "was conducted"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not participate), I will miss out on opportunities.",
        choices: ["do not participate", "did not participate", "had not participated", "not participate"],
        correct: "do not participate"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (be) easier to find solutions.",
        choices: ["were", "was", "is", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not contribute), the project will lack depth.",
        choices: ["does not contribute", "did not contribute", "had not contributed", "not contribute"],
        correct: "does not contribute"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The proposal ___ (review) yesterday was approved.",
        choices: ["reviewed", "was reviewed", "reviews", "reviewing"],
        correct: "was reviewed"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not improve) my performance, I will be at risk of losing my job.",
        choices: ["do not improve", "did not improve", "had not improved", "not improve"],
        correct: "do not improve"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish they ___ (be) more committed.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not mentor) new employees, they will struggle to adapt.",
        choices: ["does not mentor", "did not mentor", "had not mentored", "not mentor"],
        correct: "does not mentor"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The event ___ (organize) last month was a success.",
        choices: ["organized", "was organized", "organizes", "organizing"],
        correct: "was organized"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not remain) focused, I will miss important details.",
        choices: ["do not remain", "did not remain", "had not remained", "not remain"],
        correct: "do not remain"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish you ___ (be) more open to feedback.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not learn) from their mistakes, they will repeat them.",
        choices: ["do not learn", "did not learn", "had not learned", "not learn"],
        correct: "do not learn"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The report ___ (prepare) last week was informative.",
        choices: ["prepared", "was prepared", "prepares", "preparing"],
        correct: "was prepared"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not review) my notes, I will forget key points.",
        choices: ["do not review", "did not review", "had not reviewed", "not review"],
        correct: "do not review"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish they ___ (be) more respectful.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not engage) in discussions, her insights will go unnoticed.",
        choices: ["does not engage", "did not engage", "had not engaged", "not engage"],
        correct: "does not engage"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The survey ___ (conduct) last week was enlightening.",
        choices: ["conducted", "was conducted", "conducts", "conducting"],
        correct: "was conducted"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not keep) track of my progress, I will lose motivation.",
        choices: ["do not keep", "did not keep", "had not kept", "not keep"],
        correct: "do not keep"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish we ___ (have) more resources.",
        choices: ["had", "have", "did have", "not have"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not celebrate) achievements, morale will decline.",
        choices: ["do not celebrate", "did not celebrate", "had not celebrated", "not celebrate"],
        correct: "do not celebrate"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The workshop ___ (offer) last week was beneficial.",
        choices: ["offered", "was offered", "offers", "offering"],
        correct: "was offered"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not take) initiative, I will miss opportunities.",
        choices: ["do not take", "did not take", "had not taken", "not take"],
        correct: "do not take"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (be) easier to connect with others.",
        choices: ["were", "was", "is", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not improve) her skills, she will struggle to advance.",
        choices: ["does not improve", "did not improve", "had not improved", "not improve"],
        correct: "does not improve"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The meeting ___ (schedule) for next week will be crucial.",
        choices: ["scheduled", "was scheduled", "schedules", "scheduling"],
        correct: "was scheduled"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not embrace) change, I will stagnate.",
        choices: ["do not embrace", "did not embrace", "had not embraced", "not embrace"],
        correct: "do not embrace"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish they ___ (be) more supportive.",
        choices: ["were", "was", "are", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If he ___ (not adapt) to the new system, he will face difficulties.",
        choices: ["does not adapt", "did not adapt", "had not adapted", "not adapt"],
        correct: "does not adapt"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The analysis ___ (conduct) last month was enlightening.",
        choices: ["conducted", "was conducted", "conducts", "conducting"],
        correct: "was conducted"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not set) clear goals, I will lack direction.",
        choices: ["do not set", "did not set", "had not set", "not set"],
        correct: "do not set"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish it ___ (be) easier to communicate.",
        choices: ["were", "was", "is", "be"],
        correct: "were"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If they ___ (not support) each other, they will struggle.",
        choices: ["do not support", "did not support", "had not supported", "not support"],
        correct: "do not support"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The initiative ___ (launch) last quarter was a success.",
        choices: ["launched", "was launched", "launches", "launching"],
        correct: "was launched"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If I ___ (not stay) informed, I will miss opportunities.",
        choices: ["do not stay", "did not stay", "had not stayed", "not stay"],
        correct: "do not stay"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "I wish we ___ (have) more time for this project.",
        choices: ["had", "have", "did have", "not have"],
        correct: "had"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "If she ___ (not take) the lead, the project will lack direction.",
        choices: ["does not take", "did not take", "had not taken", "not take"],
        correct: "does not take"
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "In recent years, the phenomenon of remote work has gained significant traction across various industries. Companies have realized that allowing employees to work from home not only increases productivity but also enhances employee satisfaction. As a result, many organizations are adopting flexible work policies, which are seen as beneficial for both the employer and the employee. This shift reflects a broader trend towards embracing technology and innovation in the workplace.\n\nWhat is the main idea of the passage?",
        choices: ["A) Remote work is a temporary trend.", "B) Remote work enhances employee satisfaction and productivity.", "C) Technology is not affecting workplace policies.", "D) All organizations are against remote work."],
        correct: "B) Remote work enhances employee satisfaction and productivity."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The benefits of regular exercise are widely recognized by health professionals. Studies show that engaging in physical activity for at least 30 minutes a day can significantly reduce the risk of chronic diseases, such as heart disease and diabetes. Additionally, exercise is linked to improved mental health, including lower rates of depression and anxiety. People who maintain a regular exercise routine often report higher energy levels and better sleep quality.\n\nWhich of the following is a supporting detail mentioned in the passage?",
        choices: ["A) Exercise can lead to better relationships.", "B) Regular exercise can reduce the risk of chronic diseases.", "C) Many people do not enjoy exercising.", "D) Chronic diseases are becoming more common."],
        correct: "B) Regular exercise can reduce the risk of chronic diseases."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "As climate change continues to alter weather patterns, many regions are experiencing more frequent and severe natural disasters. Coastal areas are particularly vulnerable, facing rising sea levels and intensified hurricanes. While some communities have begun implementing adaptive measures, others remain unprepared, raising concerns about the long-term impacts on human life and local economies.\n\nWhat can be inferred about the impact of climate change on coastal communities?",
        choices: ["A) All coastal communities are equally prepared for natural disasters.", "B) Climate change has no significant impact on coastal communities.", "C) Some coastal communities are taking action, while others are not.", "D) Rising sea levels will benefit coastal economies."],
        correct: "C) Some coastal communities are taking action, while others are not."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "With the rise of social media platforms, many businesses have shifted their marketing strategies to target online audiences. Digital marketing allows companies to reach a wider range of customers more effectively and measure the success of their campaigns with greater precision. As a result, traditional advertising methods such as television and radio have seen a decline in popularity.\n\nWhat is the main idea of the passage?",
        choices: ["A) Social media is not a useful marketing tool.", "B) Traditional advertising is becoming more popular.", "C) Businesses are increasingly relying on digital marketing.", "D) Digital marketing is ineffective."],
        correct: "C) Businesses are increasingly relying on digital marketing."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Climate change is a pressing issue that has garnered significant attention globally. As temperatures rise, we are witnessing more extreme weather events, such as hurricanes and floods. Governments and organizations are working to mitigate its effects through renewable energy and sustainability initiatives. However, progress remains slow, and more action is needed.\n\nWhat is the main idea of the passage?",
        choices: ["A) Climate change is not affecting the planet.", "B) Governments are ignoring climate change.", "C) Climate change is causing extreme weather events and requires urgent action.", "D) Renewable energy is a waste of resources."],
        correct: "C) Climate change is causing extreme weather events and requires urgent action."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Healthy eating is becoming more prevalent as people become more aware of the benefits of nutritious foods. Eating fruits, vegetables, and whole grains is linked to lower risks of diseases like heart disease and diabetes. As a result, many people are shifting away from processed foods and choosing healthier alternatives.\n\nWhat is the main idea of the passage?",
        choices: ["A) Processed foods are healthy.", "B) People are becoming more aware of the importance of healthy eating.", "C) Eating healthy has no benefits.", "D) Heart disease is not preventable."],
        correct: "B) People are becoming more aware of the importance of healthy eating."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "As cities continue to grow, there is a rising demand for sustainable urban development. Urban planners are now focusing on creating eco-friendly environments that reduce pollution and encourage the use of public transportation. The goal is to create livable cities that balance economic growth with environmental preservation.\n\nWhat is the main idea of the passage?",
        choices: ["A) Cities are shrinking.", "B) Urban planners are focused on sustainable development.", "C) Public transportation is not popular.", "D) Cities are harmful to the environment."],
        correct: "B) Urban planners are focused on sustainable development."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The invention of the smartphone has revolutionized the way people communicate. With the ability to send instant messages, make video calls, and access social media, smartphones have become an essential part of daily life. This technology has not only changed personal communication but also transformed industries like business, education, and healthcare.\n\nWhat is the main idea of the passage?",
        choices: ["A) Smartphones are used only for personal communication.", "B) The smartphone has had a significant impact on various industries.", "C) Video calls are the most important feature of smartphones.", "D) Healthcare has not been affected by smartphones."],
        correct: "B) The smartphone has had a significant impact on various industries."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Research indicates that getting at least eight hours of sleep is essential for overall health. Lack of sleep has been linked to a higher risk of chronic conditions like obesity, diabetes, and cardiovascular disease. In addition to physical health, sleep is important for cognitive function and emotional well-being.\n\nWhich of the following is a supporting detail mentioned in the passage?",
        choices: ["A) Sleep is not linked to chronic conditions.", "B) Lack of sleep can increase the risk of diseases like diabetes and heart disease.", "C) Cognitive function is unaffected by sleep.", "D) Emotional well-being is not related to sleep."],
        correct: "B) Lack of sleep can increase the risk of diseases like diabetes and heart disease."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Solar energy is a renewable resource that has gained attention for its potential to reduce reliance on fossil fuels. It is a clean source of energy that does not emit harmful pollutants. Additionally, advances in solar technology have made it more affordable and accessible to homeowners and businesses.\n\nWhich of the following is a supporting detail mentioned in the passage?",
        choices: ["A) Solar energy is expensive.", "B) Solar energy emits harmful pollutants.", "C) Advances in technology have made solar energy more affordable.", "D) Fossil fuels are a clean source of energy."],
        correct: "C) Advances in technology have made solar energy more affordable."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The Mediterranean diet, rich in fruits, vegetables, and healthy fats like olive oil, has been shown to improve heart health. Studies suggest that following this diet can lower cholesterol levels and reduce the risk of heart disease. Additionally, it may help with weight management and improve overall well-being.\n\nWhich of the following is a supporting detail mentioned in the passage?",
        choices: ["A) The Mediterranean diet increases cholesterol levels.", "B) The Mediterranean diet can reduce the risk of heart disease.", "C) Olive oil is not a part of the Mediterranean diet.", "D) The Mediterranean diet is bad for heart health."],
        correct: "B) The Mediterranean diet can reduce the risk of heart disease."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Time management is an important skill that can lead to success in both personal and professional life. By prioritizing tasks and setting realistic goals, individuals can reduce stress and improve productivity. People who effectively manage their time tend to experience better work-life balance and greater satisfaction.\n\nWhich of the following is a supporting detail mentioned in the passage?",
        choices: ["A) Time management has no effect on productivity.", "B) Prioritizing tasks can reduce stress.", "C) People who manage time well have more stress.", "D) Setting goals leads to dissatisfaction."],
        correct: "B) Prioritizing tasks can reduce stress."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "Overfishing has become a major concern in recent years, with many species of fish now at risk of extinction. Unsustainable fishing practices are depleting fish populations, which can have devastating effects on marine ecosystems. Efforts to address this issue include stricter regulations and promoting sustainable fishing methods.\n\nWhich of the following is a supporting detail mentioned in the passage?",
        choices: ["A) Overfishing is helping marine ecosystems thrive.", "B) Fish populations are declining due to unsustainable fishing.", "C) There are no regulations to address overfishing.", "D) Marine ecosystems are unaffected by fishing."],
        correct: "B) Fish populations are declining due to unsustainable fishing."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The rise of automation in the workplace has led to concerns about job displacement. While machines can perform repetitive tasks more efficiently than humans, there is growing debate about whether automation will create new opportunities or exacerbate unemployment. Some argue that the transition to automation will require workers to develop new skills to remain relevant in the workforce.\n\nWhat can be inferred about the impact of automation on jobs?",
        choices: ["A) Automation will not affect job opportunities.", "B) Workers may need to develop new skills to adapt to automation.", "C) Automation will eliminate all jobs.", "D) There is no debate about the impact of automation."],
        correct: "B) Workers may need to develop new skills to adapt to automation."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "As the demand for electric vehicles increases, car manufacturers are investing heavily in research and development. Governments are also offering incentives to encourage the adoption of electric cars. However, there are still concerns about the availability of charging infrastructure, which could limit widespread use.\n\nWhat can be inferred about the future of electric vehicles?",
        choices: ["A) Electric vehicles will become less popular.", "B) Charging infrastructure is a challenge for widespread adoption.", "C) Governments are not supportive of electric vehicles.", "D) Car manufacturers are ignoring electric vehicle trends."],
        correct: "B) Charging infrastructure is a challenge for widespread adoption."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The use of artificial intelligence (AI) is becoming more prevalent in various industries, from healthcare to finance. While AI has the potential to improve efficiency and decision-making, there are concerns about data privacy and the ethical implications of relying too heavily on automated systems. Many experts believe that balancing innovation with regulation will be crucial in the future.\n\nWhat can be inferred about the future of AI in industries?",
        choices: ["A) AI will have no impact on industries.", "B) Data privacy concerns may influence how AI is implemented.", "C) AI will completely replace human workers in all sectors.", "D) Experts are not concerned about AI regulation."],
        correct: "B) Data privacy concerns may influence how AI is implemented."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "As housing prices continue to rise in major cities, many people are moving to suburban or rural areas in search of more affordable living options. While this can lead to lower housing costs, some individuals find that the longer commute times and lack of urban amenities are significant drawbacks.\n\nWhat can be inferred about the trend of moving to suburban areas?",
        choices: ["A) People are only moving to cities.", "B) Rising housing costs are pushing people to move to more affordable areas.", "C) Suburban areas are more expensive than cities.", "D) Commute times are shorter in suburban areas."],
        correct: "B) Rising housing costs are pushing people to move to more affordable areas."
    },
    {
        type: ["text"],
        image: null,
        sound: null,
        question: "The global demand for water is increasing as populations grow and industrial needs expand. Many regions are facing water shortages, which has led to efforts to conserve and manage water resources more effectively. Without significant changes in water usage, some areas may experience severe shortages in the coming years.\n\nWhat can be inferred about the future of water resources?",
        choices: ["A) Water shortages are not a concern.", "B) Water demand is decreasing.", "C) Changes in water usage are necessary to prevent shortages.", "D) Industrial needs are not affecting water resources."],
        correct: "C) Changes in water usage are necessary to prevent shortages."
    }
    
    
    
    
    
    


];
