const countryData = [
  {
    name: "Germany",
    language: "German",
    body: "Water, hops, barley and yeast. No more, no less.",
    image: "./flags/german-flag-medium.jpg",
    description:
      "Willkommen aus Deutchland! The land of beer, brats and bretzels. When it comes to beer around the world, Germany is known for some of the purest, finest brews ever made. A traditional brewing culture holds the brewing process to a high standard, and the results speak for themselves.",
    phrasebook: [
      {
        english: "I will have a pilsner, please.",
        translated: "Ich werde bitte einen Pilsener haben."
      },
      {
        english: "Do you have a lager?",
        translated: "Hast du ein Lager?"
      },
      {
        english: "May I have your favorite doppelbock?",
        translated: "Darf ich Ihren Lieblings-Doppelbock haben?"
      },
      {
        english: "I want something lighter.",
        translated: "Ich möchte etwas leichter."
      },
      {
        english: "I loved the lager! What else is similar?",
        translated: "Ich habe das Lager geliebt! Was ist sonst noch ähnlich?"
      },
      {
        english: "Thank You!",
        translated: "Vielen Dank!"
      },
      {
        english: "Cheers!",
        translated: "Prost!"
      }
    ],
    brewsAndBreweries: [
      {
        name: "Oktoberfest",
        brewery: "Spaten-Franziskaner-Bräu",
        description:
          "This medium bodied beer has achieved its impeccable taste by balancing the roasted malt flavor with the perfect amount of hops. Having a rich textured palate with an underlying sweetness true to tradition.",
        coordinates: {
          lat: 48.145018,
          lng: 11.554067
        }
      },
      {
        name: "Salvator Doppelbock",
        brewery: "Paulaner",
        description:
          "This unfiltered bottom fermented double bock beer has been brewed for over 375 years—always adhering to the original recipe. The taste is unmistakable, with its smooth chocolate flavor, caramel maltiness and a light note of hops—providing a nice intensity on the palate.",
        coordinates: {
          lat: 48.123367,
          lng: 11.581666
        }
      }
    ]
  },
  {
    name: "Belgium",
    language: "Dutch",
    body: "Rich Quads, Spicy Saisons and Tart Lambics.",
    image: "./flags/belgian-flag-medium.jpg",
    description:
      "Belgian brewers often supplement the balance of malt sweetness and hop bitterness you find in every beer with fruity, spicy, floral and herbal aromas. Some Belgian beers are like running through a hayfield at harvest and others explode with a whole orchard of fruit flavours. You can sometimes find earthiness, a savoury, mushroomy umami taste, and you can sometimes find sourness, ranging from a light tartness to a mouth-puckering acidity.",
    phrasebook: [
      {
        english: "I will have a dubbel, please.",
        translated: "Ik zal een dubbel hebben, alsjeblieft."
      },
      {
        english: "Do you have a lambic?",
        translated: "Heb je een lambiek?"
      },
      {
        english: "May I have your favorite beer?",
        translated: "Mag ik je favoriete bier?"
      },
      {
        english: "I want something lighter.",
        translated: "Ik wil iets zwaars."
      },
      {
        english: "I loved the lager! What else is similar?",
        translated: "Ik hield van de pils! Wat is er nog meer vergelijkbaar?"
      },
      {
        english: "Thank You!",
        translated: "Dank je!"
      },
      {
        english: "Cheers!",
        translated: "Proost!"
      }
    ],
    brewsAndBreweries: [
      {
        name: "Gulden Draak Classic",
        brewery: "Brouwerij Van Steenberge",
        description:
          "This characterful, fiery beer was originally commissioned by the Cruyl brewery in Assenede. At the time, it was a festive beer brewed just once a year for the Assenede fanfare.",
        coordinates: {
          lat: 51.176459,
          lng: 3.76459
        }
      },
      {
        name: "Leffe Royale Blonde",
        brewery: "Abbaye de Leffe",
        description:
          "Leffe Royale is a top-fermentation beer made from 3 different hop varieties. It provides the perfect balance between bitter and sweet. Hints of lemon and grapefruit complete this sense of harmony and in its own, special chalice, Leffe Royal’s flavour and aroma will carry you away.",
        coordinates: {
          lat: 50.268892,
          lng: 4.907636
        }
      }
    ]
  },
  {
    name: "Czech Republic",
    language: "Czech",
    body: "Not just Pilsners.",
    image: "./flags/czech-flag-medium.jpg",
    description:
      "Let's take it back. Like way back. Try over 1000 years back. Brewing has been a part of Czech history since the year 993, when beer was almost exclusively produced at monasteries. Bohemian brewing practices became world renowned by the mid-19th century when the citizens and brewers of Plzen created the now hugely popular style known as the Pilsner. Today, citizens of the Czech Republic proudly hold the title of highest annual beer consumption per capita at 142.4 liters. To that, we say Na Zdravi!",
    phrasebook: [
      {
        english: "I will have a pilsner, please.",
        translated: "Budu mít pilsner, prosím."
      },
      {
        english: "Do you have a lager?",
        translated: "Máte ležák?"
      },
      {
        english: "May I have your favorite beer?",
        translated: "Mohu mít vaše oblíbené pivo?"
      },
      {
        english: "I want something stronger.",
        translated: "Chci něco silnějšího"
      },
      {
        english: "I loved the pils! What else is similar?",
        translated: "Miloval jsem pils! Co jiného je podobné?"
      },
      {
        english: "Thank You!",
        translated: "Děkuji!"
      },
      {
        english: "Cheers!",
        translated: "Na zdraví!"
      }
    ],
    brewsAndBreweries: [
      {
        name: "Flekovský ležák 13°",
        brewery: "Pivovar U Fleků",
        description:
          "What kind of brewery only serves one beer? This one - and for a good reason. Pivovar U Fleků has been a brewpub since 1499, and is the only place in the world to get a hold of this Czech favorite.",
        coordinates: {
          lat: 50.078842,
          lng: 14.416957
        }
      },
      {
        name: "Černý ležák",
        brewery: "Pivovar Bernard",
        description:
          "A dark lager with a fine yeast culture, this beer is unpasteurized and brewed from four types of malt, with a distinctive full taste and a fine bitterness. Just one of many varieties from a brewhouse that has been producing beer since 1597.",
        coordinates: {
          lat: 49.539957,
          lng: 15.359785
        }
      }
    ]
  },
  {
    name: "Austria",
    language: "German",
    body: "Vienna to Salzburg, the Lager is king",
    image: "./flags/austrian-flag-medium.jpg",
    description:
      "The hills are alive with the sound of good beer. And lots of it, considering that Austria holds a close second position behind the Czech Republic for the highest annual beer consumption per capita, at 106	liters per person. The Viennese Lager made famous in the 1840s remains one of the highest regarded styles in Europe, but make sure to work your way through the full spectrum of tried and true styles from across the country.",
    phrasebook: [
      {
        english: "I will have a radler, please.",
        translated: "Ich werde bitte einen Radler haben."
      },
      {
        english: "Do you have a lager?",
        translated: "Hast du ein Lager?"
      },
      {
        english: "May I have your favorite doppelbock?",
        translated: "Darf ich Ihren Lieblings-Doppelbock haben?"
      },
      {
        english: "I want something lighter.",
        translated: "Ich möchte etwas leichter."
      },
      {
        english: "I loved the lager! What else is similar?",
        translated: "Ich habe das Lager geliebt! Was ist sonst noch ähnlich?"
      },
      {
        english: "Thank You!",
        translated: "Vielen Dank!"
      },
      {
        english: "Cheers!",
        translated: "Prost!"
      }
    ],
    brewsAndBreweries: [
      {
        name: "Gold Fassl Zwickl Rot",
        brewery: "Ottakringer Brauerei",
        description:
          "A special and extremely complex malting process gives the Zwickl Rot its typical red colour and unmistakeable chocolate and caramel notes. Austria's first amber, naturally cloudy and unique unfiltered red beer.",
        coordinates: {
          lat: 48.21189,
          lng: 16.325682
        }
      },
      {
        name: "Paracelsus Bio-Zwickl",
        brewery: "Stieglbrauerei zu Salzburg",
        description:
          "Only Austrian ingredients from controlled biological cultivation are used in this amber-colored, natural and traditional beer specialty from Salzburg. Stiegl brews this beer by adding Laufener Landweizen to the blend – a fine ancient grain grown on their own farms.",
        coordinates: {
          lat: 47.794077,
          lng: 13.02018
        }
      }
    ]
  },
  {
    name: "Norway",
    language: "Norwegian",
    body: "Where there's a farmhouse, there's a brewhouse.",
    image: "./flags/norwegian-flag-medium.jpg",
    description:
      "With a landscape so beautiful, there must be pints to match, right? Well lucky for us, Norway has over a millenium of brewing expertise in the hands of the farmers who frequently had a brew house on site. These farmers would use their own strains of yeast in the 'bryggehus' (farm-brew house) to create some one of a kind beers over the years. There are even historic Norwegian strains of yeast (Kveik) that have made a splash in the US craft brewing scene!",
    phrasebook: [
      {
        english: "I will have a beer, please.",
        translated: "Jeg vil ha en øl, vær så snill."
      },
      {
        english: "Do you have a farmhouse beer?",
        translated: "Har du en gårdsbesøl?"
      },
      {
        english: "May I have your favorite lager?",
        translated: "Kan jeg ha din favorittlager?"
      },
      {
        english: "I want something lighter.",
        translated: "Jeg vil ha noe lettere."
      },
      {
        english: "I loved the beer! What else is similar?",
        translated: "Jeg elsket øl! Hva mer er det samme?"
      },
      {
        english: "Thank You!",
        translated: "Takk skal du ha!"
      },
      {
        english: "Cheers!",
        translated: "Jubel!"
      }
    ],
    brewsAndBreweries: [
      {
        name: "Bosun's Call 2",
        brewery: "Nøgne Ø",
        description:
          "A blend of dierent vintages of Saison, aged in French red wine barrels for 3, 4 and 5 years. Bosun’s Call 2 has a complex taste of bittersweet citrus, grape, grass and grains.",
        coordinates: {
          lat: 58.40596,
          lng: 8.637227
        }
      },
      {
        name: "Nissefar",
        brewery: "HaandBryggeriet",
        description:
          "Juleøl, or a Christmas beer, is made with the good old traditional flavor from the days when the old farm breweries made dark, hearty, earthy beers with lots of x-masy flavours. Not pasteurized nor filtered for a longer shelf life.",
        coordinates: {
          lat: 59.742148,
          lng: 10.231629
        }
      }
    ]
  },
  {
    name: "Ireland",
    language: "Irish",
    body: "Reds to Stouts to Wee Heavies. Sláinte!",
    image: "./flags/irish-flag-medium.jpg",
    description:
      "Of course everyone who comes to Dublin has a pint of Guinness. It's a pilgrimage. But don't mistake this lovely land for a one trick pony. You can enjoy an array of traditional Irish stouts and red ales, or get adventurous and seek out the plethora of new craft breweries that have set up shop in the major cities across the country.",
    phrasebook: [
      {
        english: "I will have a beer, please.",
        translated: "Beidh beoir agam, le do thoil."
      },
      {
        english: "Do you have a red ale?",
        translated: "An bhfuil leann dearg agat?"
      },
      {
        english: "May I have your favorite stout?",
        translated: "An féidir liom do stout is fearr leat?"
      },
      {
        english: "I want something lighter.",
        translated: "Ba mhaith liom rud níos milse."
      },
      {
        english: "I loved the beer! What else is similar?",
        translated: "Bhí dúil mhór agam sa bheoir! Cad eile atá cosúil?"
      },
      {
        english: "Thank You!",
        translated: "Go raibh maith agat!"
      },
      {
        english: "Cheers!",
        translated: "Sláinte!"
      }
    ],
    brewsAndBreweries: [
      {
        name: "Blowhard",
        brewery: "Eight Degrees Brewing",
        description:
          "A classic Imperial Stout with all the best bits blown out of proportion: stuffed the mash tun to the gills, double mashed for extra flavour, premium Irish malt, gone overboard with toasted dark malts and extra roasted barley – all before committing the beer to a month long sentence in Jameson whiskey barrels, courtesy of their friends in Irish Distillers.",
        coordinates: {
          lat: 52.277282,
          lng: -8.269648
        }
      },
      {
        name: "Buried At Sea",
        brewery: "Galway Bay Brewery",
        description:
          "Buried at Sea is a rotating seasonal, brewed with milk sugars and chocolate, this smooth & complex yet surprisingly light brew is great for people looking for something different in a stout!",
        coordinates: {
          lat: 53.280471,
          lng: -8.925407
        }
      }
    ]
  }
];

export default countryData;
