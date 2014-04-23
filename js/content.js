var Dozepoa = {};

Dozepoa.languages = {
  swahili: 'Swahili',
  luganda: 'Luganda',
  lugbara: 'Lugbara'
};

Dozepoa.content = {
  categories: [{
    name: "salamz",
    swahili: 'Salamz',
    luganda: 'Okubuuza',
    lugbara: 'Zita',
    english: 'Greetings',
    gridPosition: "a",
    phrases: [
      {
        swahili: "Mambo",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "How are you?",
        // answer: ["Poa - Cool", "Niko poa - I'm fine", luganda "Gyendi" lugbara "mamuke"],
        explanation: "maybe the most common greeting to start a great conversation"
      },
      {
        swahili: "Sasa",
        luganda: "nkulamusiza",
        lugbara: "Ikini",
        english: "Hi",
        // answer: ["Poa - Cool", "Niko poa - I'm fine", lugbara "Eyo aziyo"],
        explanation: "the most common greeting if you do not want to start a conversation"
      },
      {
        swahili: "Niaje",
        luganda: "Bigenda bitya",
        lugbara: "Mi ngoni",
        english: "How is it?",
        // answer: ["Poa - Cool", "Niko poa - I'm fine", luganda: "Birungi"],
        explanation: "checking on someone else"
      },
      {
        swahili: "Sasa niaje",
        luganda: "Biri bitya kati",
        lugbara: "Mi ngoni",
        english: "Hey, how is it now?",
        // answer: ["Poa - Cool", "Niko poa - I'm fine", luganda "Birungi" lugbara "mamuke"],
        explanation: "checking how things are"
      },
      {
        swahili: "Niaje",
        luganda: "Gundi ali atya",
        lugbara: "Mi ngoni",
        english: "How is it?",
        // answer: ["Poa - Cool", "Niko poa - I'm fine", luganda: "Gyali mulungi"],
        explanation: "checking on someone else"
      }
    ]
  },
  {
    name: "food",
    swahili: 'Dish',
    luganda: 'Emmere',
    lugbara: 'Enya',
    english: 'Food and Drinks',
    gridPosition: "b",
    phrases: [
      {
        swahili: "Nini iko?",
        luganda: "kiki ekiri ku menu",
        lugbara: "Menu madria aduni",
        english: "What's on the menu?",
        // answer: ["kila kitu, buli kimu, ako piri"],
        explanation: ""
      },
      {
        swahili: "Mko na nini leo?",
        luganda: "Kyanjawulo ki kyetulya leero",
        lugbara: "Enya amani nya andru aduni",
        english: "What's on the special of today?",
        // answer: [],
        explanation: ""
      },
      {
        swahili: "hiko beer",
        luganda: "Bampeyo beer emu",
        lugbara: "Iffe mani iwa",
        english: "Can I have a beer",
        // answer: [ndeo,ka ndeete,majila],
        explanation: ""
      },
      {
        swahili: "hiko soda",
        luganda: "Waliwo soda",
        lugbara: "Soda chi",
        english: "Is there soda?",
        // answer: [],
        explanation: ""
      }
    ]
  },
  {
    name: "directions",
    swahili: 'Kusaka',
    luganda: 'Endagiriro',
    lugbara: "pala engwa",
    english: 'Directions',
    gridPosition: "a",
    phrases: [
      {
        swahili: "Naeza fika vipi [your place]?",
        luganda: "Ntuuka ntya ewuwo",
        lugbara: "Ale mumidi",
        english: "How do I get to [your place]?",
        // answer: [],
        explanation: ""
      },
      {
        swahili: "[place] iko wapi",
        luganda: "Kiri wa",
        lugbara: "Angu ngonga",
        english: "Where is [place]?",
        // answer: [],
        explanation: ""
      }
    ]
  },
  {
    name: "whatthe",
    swahili: 'Ei...?!',
    luganda: 'Banange',
    lugbara: 'Category Lugbara',
    english: 'What the..?!',
    gridPosition: "b",
    phrases: [
      {
        swahili: "Ei...",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "What the...?",
        // answer: [],
        explanation: ""
      },
      {
        swahili: "Eishhhh",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "ouch!",
        // answer: [],
        explanation: ""
      },
      {
        swahili: "wa wa wa",
        luganda: "Katonda wange!",
        lugbara: "Adrongaa...",
        english: "expresion of being surprised",
        // answer: [],
        explanation: ""
      },
      {
        swahili: "Kwenda uko",
        luganda: "Genda eri",
        lugbara: "Imule",
        english: "get outta here",
        // answer: [],
        explanation: ""
      }
    ]
  },
  {
    name: "shopping",
    swahili: "Ku-shop",
    luganda: 'Kushopinga',
    lugbara: 'ma mu makokiba',
    english: 'Shopping',
    gridPosition: "a",
    phrases: [
      {
        swahili: "[fish] samaki niyangapi?",
        luganda: "Ekyenyanja kyammeka",
        lugbara: "ebbi mi zingoni?",
        english: "how much is the [fish]?",
        // answer: [],
        explanation: "asking how much the fish is"
      },
      {
        swahili: "[fish] ina uzwa ngapi?",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "how much is the [fish]?",
        // answer: [],
        explanation: ""
      },
      {
        swahili: "[fish] ni beyi kali",
        luganda: "Ekyenyanja oki seera nnyo",
        lugbara: "sente ambabamba",
        english: "That [fish] is way too expensive?",
        // answer: [],
        explanation: ""
      }
    ]
  },
  {
    name: "pickup",
    swahili: 'Mambo m-super',
    luganda: 'Okukwana',
    lugbara: 'Category Lugbara',
    english: 'Pickup lines',
    gridPosition: "b",
    phrases: [
      {
        swahili: "Mambo m-super",
        luganda: "Ogambaki mumbeja",
        lugbara: "Mi ngoni",
        english: "Hey gorgeous",
        // answer: [],
        explanation: "Only when adressing girls!"
      },
      {
        swahili: "ona semajje sweet?",
        luganda: "Ki Owakabi",
        lugbara: "",
        english: "Hey handsome",
        // answer: ["Poa -", "sina noma", luganda "Tewali" lugbara "akozi yu"],
        explanation: "Only when adressing guys!"
      },
      {
        swahili: " ni kuitaje?",
        luganda: "Nkuyite ntya",
        lugbara: "me munve ngoni?",
        english: "How do I call you?",
        // answer: ["niyotaka", luganda "Ky'oyagala" lugbara "mileeli"],
        explanation: "to any gender"
      }
    ]
  }]
};

Dozepoa.categories = function(language) {
  var languageCategories = [];

  _.each(Dozepoa.content.categories, function(category) {
    var languageCategory = {
      name: category.name,
      mainLanguageName: category[language],
      secondLanguageName: category['english'],
      gridPosition: category.gridPosition,
    };
    languageCategories.push(languageCategory);
  });

  return languageCategories;
};

Dozepoa.phrases = function(language, categoryName) {
  var category = _.findWhere(Dozepoa.content.categories, {name: categoryName});

  var languagePhrases = _.map(category.phrases, function(phrase) {
    return {
      mainLanguagePhrase: phrase[language],
      secondLanguagePhrase: phrase['english'],
      // answer: phrase.answer,
      explanation: phrase.explanation || '...'
    };
  });

  return languagePhrases;
};

// FIXME ugly crap from the Interwebz
var getParam = function(name) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
};
console.log(getParam('language'));

Dozepoa.currentLanguage = getParam('language') || 'swahili';
