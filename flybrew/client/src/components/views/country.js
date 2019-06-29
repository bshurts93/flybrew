import React from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Divider } from "@material-ui/core";
import DraftsIcon from "@material-ui/icons/Drafts";
import Table from "../layout/Table";
import SimpleMap from "../../utils/googleMapsAPI";

import countryData from "../../utils/countryData";
import "../../utils/untappedAPI";

const currentPage = () => {
  return decodeURIComponent(window.location.pathname.slice(8));
};

const countryObject = arr => {
  let match = {};
  arr.forEach(element => {
    if (element.name === currentPage()) {
      match = element;
    }
  });
  return match;
};

const countryBeers = () => {
  axios.get("/api/untappd").then(res => {
    console.log("ROUTE HIT!");
    console.log(res.data.items);
  });
};

const sample = [
  {
    checkin_count: 301256,
    have_had: false,
    your_count: 0,
    beer: {
      bid: 10703,
      beer_name: "Warsteiner Premium Verum / German Pilsener",
      beer_label:
        "https://untappd.akamaized.net/site/beer_logos/beer-10703_646a2_sm.jpeg",
      beer_abv: 4.8,
      beer_slug: "warsteiner-warsteiner-premium-verum-german-pilsener",
      beer_ibu: 28,
      beer_description:
        "Enjoy this world-class international premium pilsener.\r\n\r\nUnique: the slightly tart taste experience.\r\n\r\nExceptional: the top quality of the ingredients.\r\n\r\nInimitable: the exquisite premium character.\r\n\r\nPleasantly light: thanks to especially soft brewing water.\r\n\r\n“Öko-Test”: “First Class”\r\n\r\nThe “Öko Test” magazine compared 46 beers including known brands distributed throughout Germany and regional brands. The Warsteiner Brewery’s Premium-Pils was rated “First Class” by the Öko-Test jurors as the best beer distributed throughout Germany from a family-run brewery (August 2009).\r\n\r\nThis outstanding result impressively underscores Warsteiner’s traditional quality attributes.",
      created_at: "Wed, 24 Nov 2010 15:55:19 +0000",
      beer_style: "Pilsner - German",
      in_production: 1,
      auth_rating: 0,
      wish_list: false
    },
    brewery: {
      brewery_id: 1337,
      brewery_name: "Warsteiner",
      brewery_slug: "warsteiner",
      brewery_page_url: "/Warsteiner",
      brewery_type: "Macro Brewery",
      brewery_label:
        "https://untappd.akamaized.net/site/brewery_logos/brewery-1337_24802.jpeg",
      country_name: "Germany",
      contact: {
        twitter: "warsteiner",
        facebook: "http://www.facebook.com/Warsteiner",
        instagram: "warsteiner",
        url: "http://www.warsteiner.de"
      },
      location: {
        brewery_city: "Warstein",
        brewery_state: "Nordrhein-Westfalen",
        lat: 51.4215,
        lng: 8.34323
      },
      brewery_active: 1
    }
  },
  {
    checkin_count: 157697,
    have_had: false,
    your_count: 0,
    beer: {
      bid: 9945,
      beer_name: "Krombacher Pils",
      beer_label:
        "https://untappd.akamaized.net/site/beer_logos/beer-9945_3a43c_sm.jpeg",
      beer_abv: 4.8,
      beer_slug: "krombacher-gruppe-krombacher-pils",
      beer_ibu: 24,
      beer_description:
        "Krombacher, situated in the beautiful hills of Westfalia, draws upon the local mountain spring water, soft and low in minerals, ideal for brewing a Pilsner style beer. Taste: a wonderful balance of hops and malt with a distinct crispness on the finish.",
      created_at: "Fri, 19 Nov 2010 11:51:46 +0000",
      beer_style: "Pilsner - German",
      in_production: 1,
      auth_rating: 0,
      wish_list: false
    },
    brewery: {
      brewery_id: 1569,
      brewery_name: "Krombacher Gruppe",
      brewery_slug: "krombacher-gruppe",
      brewery_page_url: "/w/krombacher-gruppe/1569",
      brewery_type: "Macro Brewery",
      brewery_label:
        "https://untappd.akamaized.net/site/brewery_logos/brewery-KrombacherPrivatbrauereiKreuztal_1569.jpeg",
      country_name: "Germany",
      contact: {
        twitter: "krombacher",
        facebook: "https://www.facebook.com/Krombacher/",
        instagram: "krombacher",
        url: "https://www.krombacher.de/"
      },
      location: {
        brewery_city: "Kreuztal",
        brewery_state: "Nordrhein-Westfalen",
        lat: 50.9909,
        lng: 7.95561
      },
      brewery_active: 1
    }
  },
  {
    checkin_count: 147659,
    have_had: false,
    your_count: 0,
    beer: {
      bid: 25784,
      beer_name: "Köstritzer Schwarzbier",
      beer_label:
        "https://untappd.akamaized.net/site/beer_logos/beer-25784_5f321_sm.jpeg",
      beer_abv: 4.8,
      beer_slug: "kostritzer-schwarzbierbrauerei-kostritzer-schwarzbier",
      beer_ibu: 22,
      beer_description:
        'Since April 1991, the Köstritzer black beer brewery, a subsidiary of the Bitburger brewery, has emerged as of one of the most modern breweries in Thuringia. In September 1993, it was with great pride we (re-) introduced the "original Köstritzer black beer".',
      created_at: "Sat, 22 Jan 2011 10:21:08 +0000",
      beer_style: "Schwarzbier",
      in_production: 1,
      auth_rating: 0,
      wish_list: false
    },
    brewery: {
      brewery_id: 104871,
      brewery_name: "Köstritzer Schwarzbierbrauerei",
      brewery_slug: "kostritzer-schwarzbierbrauerei",
      brewery_page_url: "/w/kostritzer-schwarzbierbrauerei/104871",
      brewery_type: "Macro Brewery",
      brewery_label:
        "https://untappd.akamaized.net/site/brewery_logos/brewery-KostritzerSchwarzbierbrauerei_104871_e3948.jpeg",
      country_name: "Germany",
      contact: {
        twitter: "koestritzerDE",
        facebook: "http://www.facebook.com/koestritzer",
        instagram: "koestritzer",
        url: "http://www.koestritzer.de"
      },
      location: {
        brewery_city: "Bad Köstritz",
        brewery_state: "Thüringen",
        lat: 50.9307,
        lng: 12.0146
      },
      brewery_active: 1
    }
  },
  {
    checkin_count: 138603,
    have_had: false,
    your_count: 0,
    beer: {
      bid: 468518,
      beer_name: "The Kimmie, The Yink and The Holy Gose Ale",
      beer_label:
        "https://untappd.akamaized.net/site/beer_logos/beer-468518_28ffe_sm.jpeg",
      beer_abv: 5,
      beer_slug:
        "anderson-valley-brewing-company-the-kimmie-the-yink-and-the-holy-gose-ale",
      beer_ibu: 12,
      beer_description:
        "With a bright, golden color and tight, creamy head, the earthy wood undertones in this beer develop into a light mineral aroma with a hint of lemon zest and tropical fruit. An initial refreshing tartness gives way to a subtle fullness, with flavors of guava and peach followed by a slight sea salt dryness and lemon sourness. The finish is dry, effervescent, and lemon tangy, reminiscent of a fresh sea breeze.",
      created_at: "Fri, 04 Oct 2013 20:50:55 +0000",
      beer_style: "Sour - Gose",
      in_production: 1,
      auth_rating: 0,
      wish_list: false
    },
    brewery: {
      brewery_id: 3880,
      brewery_name: "Anderson Valley Brewing Company",
      brewery_slug: "anderson-valley-brewing-company",
      brewery_page_url: "/andersonvalley",
      brewery_type: "Regional Brewery",
      brewery_label:
        "https://untappd.akamaized.net/site/brewery_logos/brewery-AndersonValleyBrewingCompany_3880.jpeg",
      country_name: "United States",
      contact: {
        twitter: "avbc",
        facebook: "http://www.facebook.com/AndersonValleyBrewingCompany",
        instagram: "andersonvalleybrewing",
        url: "http://www.avbc.com"
      },
      location: {
        brewery_city: "Boonville",
        brewery_state: "CA",
        lat: 39.0005,
        lng: -123.356
      },
      brewery_active: 1
    }
  },
  {
    checkin_count: 128477,
    have_had: false,
    your_count: 0,
    beer: {
      bid: 16851,
      beer_name: "Schneider Weisse Mein Aventinus (TAP6)",
      beer_label:
        "https://untappd.akamaized.net/site/beer_logos/beer-_16851_sm_1248149dc2b1f1c284a7fe33516f0b.jpeg",
      beer_abv: 8.2,
      beer_slug:
        "schneider-weisse-g-schneider-and-sohn-schneider-weisse-mein-aventinus-tap6",
      beer_ibu: 16,
      beer_description:
        "Dark ruby, glistening mysteriously, streaked with fine, top-fermented yeast, this beer has a compact, stable and long-lasting head. It has an intensive, typically top-fermented clove-like aroma. The palate experiences a gentle touch, on the tongue it is very full-bodied, compact and yet fresh with a hint of caramel. It finishes with a light and delicate taste of bitters leaving behind a strong, smoothly rounded, sour impression.",
      created_at: "Sat, 25 Dec 2010 06:56:24 +0000",
      beer_style: "Bock - Weizenbock",
      in_production: 1,
      auth_rating: 0,
      wish_list: false
    },
    brewery: {
      brewery_id: 1023,
      brewery_name: "Schneider Weisse G. Schneider & Sohn",
      brewery_slug: "schneider-weisse-g-schneider-sohn",
      brewery_page_url: "/schneiderweisse",
      brewery_type: "Regional Brewery",
      brewery_label:
        "https://untappd.akamaized.net/site/brewery_logos/brewery-1023_589bc.jpeg",
      country_name: "Germany",
      contact: {
        twitter: "schneiderweisse",
        facebook: "http://www.facebook.com/schneiderweisse",
        instagram: "schneiderweisse",
        url: "http://www.schneider-weisse.com"
      },
      location: {
        brewery_city: "Kelheim",
        brewery_state: "Bavaria",
        lat: 48.9175,
        lng: 11.8735
      },
      brewery_active: 1
    }
  },
  {
    checkin_count: 128356,
    have_had: false,
    your_count: 0,
    beer: {
      bid: 1633,
      beer_name: "Spaten München / Münchner Hell / Premium Lager",
      beer_label:
        "https://untappd.akamaized.net/site/beer_logos/beer-1633_d78e8_sm.jpeg",
      beer_abv: 5.2,
      beer_slug:
        "spatenfranziskanerlowenbraugruppe-spaten-munchen-munchner-hell-premium-lager",
      beer_ibu: 21,
      beer_description:
        "Sold as Spaten Premium Lager in the U.S. and Spaten München in the U.K.",
      created_at: "Sat, 21 Aug 2010 14:26:35 +0000",
      beer_style: "Lager - Helles",
      in_production: 1,
      auth_rating: 0,
      wish_list: false
    },
    brewery: {
      brewery_id: 1176,
      brewery_name: "Spaten-Franziskaner-Löwenbräu-Gruppe",
      brewery_slug: "spatenfranziskanerlowenbraugruppe",
      brewery_page_url: "/w/spatenfranziskanerlowenbraugruppe/1176",
      brewery_type: "Macro Brewery",
      brewery_label:
        "https://untappd.akamaized.net/site/brewery_logos/brewery-SpatenFranziskanerBrau_1176.jpeg",
      country_name: "Germany",
      contact: {
        twitter: "DrinkSpaten",
        facebook:
          "https://www.facebook.com/pages/Spaten-Franziskaner-Bräu/112121258800107",
        instagram: "",
        url: "https://www.franziskaner-weissbier.de/ext/visitorcenters/de/index"
      },
      location: {
        brewery_city: "München",
        brewery_state: "",
        lat: 48.1477,
        lng: 11.5561
      },
      brewery_active: 1
    }
  },
  {
    checkin_count: 68048,
    have_had: false,
    your_count: 0,
    beer: {
      bid: 1487488,
      beer_name: "El Gose",
      beer_label:
        "https://untappd.akamaized.net/site/beer_logos/beer-1487488_c57eb_sm.jpeg",
      beer_abv: 4.5,
      beer_slug: "avery-brewing-co-el-gose",
      beer_ibu: 13,
      beer_description:
        "A timeless, traditional tart gose (goes-uh) with its zesty and salty disposition is brightened by a tangy citrus twist. A bier for every día!",
      created_at: "Tue, 29 Mar 2016 02:07:46 +0000",
      beer_style: "Sour - Gose",
      in_production: 1,
      auth_rating: 0,
      wish_list: false
    },
    brewery: {
      brewery_id: 62,
      brewery_name: "Avery Brewing Co.",
      brewery_slug: "avery-brewing-co",
      brewery_page_url: "/AveryBrewingCo",
      brewery_type: "Regional Brewery",
      brewery_label:
        "https://untappd.akamaized.net/site/brewery_logos/brewery-62_00c58.jpeg",
      country_name: "United States",
      contact: {
        twitter: "AveryBrewingCo",
        facebook: "https://www.facebook.com/AveryBrewingCo",
        instagram: "averybrewingco",
        url: "http://www.averybrewing.com/"
      },
      location: {
        brewery_city: "Boulder",
        brewery_state: "CO",
        lat: 40.0625,
        lng: -105.205
      },
      brewery_active: 1
    }
  },
  {
    checkin_count: 38341,
    have_had: false,
    your_count: 0,
    beer: {
      bid: 317,
      beer_name: "Harvest Hefeweizen®",
      beer_label:
        "https://untappd.akamaized.net/site/beer_logos/beer-317_b46d2_sm.jpeg",
      beer_abv: 4.9,
      beer_slug: "bjs-restaurant-and-brewhouse-harvest-hefeweizen",
      beer_ibu: 15,
      beer_description:
        "Not just another wheat beer. This award-winning hefeweizen is fermented with an authentic Bavarian weizen yeast to produce its unique flavor profile — fruity, spicy and refreshing. Try it without a lemon!",
      created_at: "Sat, 21 Aug 2010 14:26:35 +0000",
      beer_style: "Hefeweizen",
      in_production: 1,
      auth_rating: 0,
      wish_list: false
    },
    brewery: {
      brewery_id: 7132,
      brewery_name: "BJ's Restaurant & Brewhouse",
      brewery_slug: "bj-s-restaurant-brewhouse",
      brewery_page_url: "/BJs_Brewhouse",
      brewery_type: "Regional Brewery",
      brewery_label:
        "https://untappd.akamaized.net/site/brewery_logos/brewery-BJsRestaurantBrewery_7132.jpeg",
      country_name: "United States",
      contact: {
        twitter: "bjsrestaurants",
        facebook: "http://www.facebook.com/BJsRestaurants",
        instagram: "bjsrestaurants",
        url: "http://www.bjsbrewhouse.com/"
      },
      location: {
        brewery_city: "Huntington Beach",
        brewery_state: "CA",
        lat: 33.7348,
        lng: -117.995
      },
      brewery_active: 1
    }
  },
  {
    checkin_count: 38142,
    have_had: false,
    your_count: 0,
    beer: {
      bid: 10822,
      beer_name: "Oaktoberfest",
      beer_label:
        "https://untappd.akamaized.net/site/beer_logos/beer-10822_0f098_sm.jpeg",
      beer_abv: 5,
      beer_slug: "firestone-walker-brewing-company-oaktoberfest",
      beer_ibu: 24,
      beer_description:
        "Oaktoberfest is a true German Märzen bier, brewed with premium imported Pilsner and Vienna malts. It’s spiced with Bavarian hops from the Fatherland, and fermented with the famous Bavarian Augustiner Lager yeast from Munich. We utilized German Hallertauer traditions for both bittering and aroma additions, adding a rich, noble hop presence to this beer. Now in bottles. ",
      created_at: "Thu, 25 Nov 2010 00:35:25 +0000",
      beer_style: "Märzen",
      in_production: 1,
      auth_rating: 0,
      wish_list: false
    },
    brewery: {
      brewery_id: 524,
      brewery_name: "Firestone Walker Brewing Company",
      brewery_slug: "firestone-walker-brewing-company",
      brewery_page_url: "/firestonewalker",
      brewery_type: "Regional Brewery",
      brewery_label:
        "https://untappd.akamaized.net/site/brewery_logos/brewery-524_e835d.jpeg",
      country_name: "United States",
      contact: {
        twitter: "FirestoneWalker",
        facebook: "http://www.facebook.com/#!/firestone.walker",
        instagram: "firestonewalker",
        url: "http://www.firestonebeer.com/"
      },
      location: {
        brewery_city: "Paso Robles",
        brewery_state: "CA",
        lat: 35.5953,
        lng: -120.694
      },
      brewery_active: 1
    }
  },
  {
    checkin_count: 37239,
    have_had: false,
    your_count: 0,
    beer: {
      bid: 185351,
      beer_name: "Perlenbacher Premium Pils",
      beer_label:
        "https://untappd.akamaized.net/site/beer_logos/beer-_185351_699d3e44361da4677483f728e1b2.jpeg",
      beer_abv: 4.8,
      beer_slug: "lidl-deutschland-germany-perlenbacher-premium-pils",
      beer_ibu: 15,
      beer_description: "",
      created_at: "Sun, 10 Jun 2012 11:36:14 +0000",
      beer_style: "Pilsner - German",
      in_production: 1,
      auth_rating: 0,
      wish_list: false
    },
    brewery: {
      brewery_id: 182278,
      brewery_name: "Lidl Deutschland / Germany",
      brewery_slug: "lidl-deutschland-germany",
      brewery_page_url: "/w/lidl-deutschland-germany/182278",
      brewery_type: "Bar / Restaurant / Store",
      brewery_label:
        "https://untappd.akamaized.net/site/brewery_logos/brewery-182278_77a01.jpeg",
      country_name: "Germany",
      contact: {
        twitter: "",
        facebook: "",
        instagram: "",
        url: ""
      },
      location: {
        brewery_city: "Neckarsulm",
        brewery_state: "Baden-Württemberg",
        lat: 49.1837,
        lng: 9.23611
      },
      brewery_active: 1
    }
  },
  {
    checkin_count: 37022,
    have_had: false,
    your_count: 0,
    beer: {
      bid: 76731,
      beer_name: "Wernesgrüner Pils",
      beer_label:
        "https://untappd.akamaized.net/site/beer_logos/beer-WernesgrunerPils_76731.jpeg",
      beer_abv: 4.9,
      beer_slug: "wernesgruner-brauerei-wernesgruner-pils",
      beer_ibu: 35,
      beer_description: "",
      created_at: "Sun, 04 Sep 2011 19:38:46 +0000",
      beer_style: "Pilsner - German",
      in_production: 1,
      auth_rating: 0,
      wish_list: false
    },
    brewery: {
      brewery_id: 160881,
      brewery_name: "Wernesgrüner Brauerei",
      brewery_slug: "wernesgra-ner-brauerei",
      brewery_page_url: "/w/wernesgra-ner-brauerei/160881",
      brewery_type: "Micro Brewery",
      brewery_label:
        "https://untappd.akamaized.net/site/brewery_logos/brewery-160881_5dfc4.jpeg",
      country_name: "Germany",
      contact: {
        twitter: "",
        facebook: "",
        instagram: "wernesgruener",
        url: "http://www.wernesgruener.de/"
      },
      location: {
        brewery_city: "08237 Wernesgrün",
        brewery_state: "",
        lat: 50.5337,
        lng: 12.4723
      },
      brewery_active: 1
    }
  },
  {
    checkin_count: 36962,
    have_had: false,
    your_count: 0,
    beer: {
      bid: 80574,
      beer_name: "Guinness Original (Europe)",
      beer_label:
        "https://untappd.akamaized.net/site/beer_logos/beer-80574_e898c_sm.jpeg",
      beer_abv: 4.2,
      beer_slug: "guinness-guinness-original-europe",
      beer_ibu: 0,
      beer_description:
        "NOTE: This is NOT Guinness Draught. This is the original Guinness Stout sold only in bottles in Europe that is bottled with CO2, NOT nitrogen.\n\nThe ABV varies. This is not to be confused with Guinness Draught. The label clearly defines this as Guinness Original. Ensure you are checking into the correct beer.\n\nThis is it, the one that started it all. Crafted to perfection for over 200 years.\n\nCrack it open, and the first sip tastes as fresh as ever. \n\nThe unmistakeable deep-dark colour. The crisp hint of roasted barley, the fresh breeze of hops. The refreshing bite. The bittersweet reward.\n\nPure beauty. Pure GUINNESS.",
      created_at: "Thu, 22 Sep 2011 19:57:49 +0000",
      beer_style: "Stout - Irish Dry",
      in_production: 1,
      auth_rating: 0,
      wish_list: false
    },
    brewery: {
      brewery_id: 49,
      brewery_name: "Guinness",
      brewery_slug: "guinness",
      brewery_page_url: "/Guinness",
      brewery_type: "Macro Brewery",
      brewery_label:
        "https://untappd.akamaized.net/site/brewery_logos/brewery-49_49cf6.jpeg",
      country_name: "Ireland",
      contact: {
        twitter: "GuinnessIreland",
        facebook: "https://www.facebook.com/guinness",
        instagram: "guinness",
        url: "http://www.guinness.com"
      },
      location: {
        brewery_city: "Saint James' Gate",
        brewery_state: "Leinster",
        lat: 53.3443,
        lng: -6.28538
      },
      brewery_active: 1
    }
  },
  {
    checkin_count: 29430,
    have_had: false,
    your_count: 0,
    beer: {
      bid: 9493,
      beer_name: "Czech Style Pilsner",
      beer_label:
        "https://untappd.akamaized.net/site/beer_logos/beer-9493_43278_sm.jpeg",
      beer_abv: 5.2,
      beer_slug: "gordon-biersch-brewing-company-czech-style-pilsner",
      beer_ibu: 37,
      beer_description:
        "Czech Style Pilsner is a celebration of hops. It was first brewed in the Czech town of Pilsen in 1842 using special yeast smuggled out of Germany by a Czech monk. The region surrounding Pilsen is famous for its hops. Pilsner was the first clear golden brew: beers before it were dark and cloudy. We use imported Bavarian Hallertau and Tettnang aroma hops along with the finest pilsner malt.",
      created_at: "Tue, 16 Nov 2010 17:35:46 +0000",
      beer_style: "Pilsner - Czech",
      in_production: 1,
      auth_rating: 0,
      wish_list: false
    },
    brewery: {
      brewery_id: 588,
      brewery_name: "Gordon Biersch Brewing Company",
      brewery_slug: "gordon-biersch-brewing-company",
      brewery_page_url: "/GordonBierschBrewingCompany",
      brewery_type: "Regional Brewery",
      brewery_label:
        "https://untappd.akamaized.net/site/brewery_logos/brewery-588_10659.jpeg",
      country_name: "United States",
      contact: {
        twitter: "GBBrewingCo",
        facebook: "https://www.facebook.com/gordonbierschbrewingco/?ref=hl",
        instagram: "GBBrewingCo",
        url: "http://www.gordonbiersch.com/brewery/"
      },
      location: {
        brewery_city: "San Jose",
        brewery_state: "CA",
        lat: 37.3533,
        lng: -121.892
      },
      brewery_active: 1
    }
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(4, 1, 0, 1),
    "& h3": {
      paddingBottom: "1rem"
    }
  }
}));

function Country() {
  const classes = useStyles();
  const country = countryObject(countryData);
  countryBeers();

  return (
    <div>
      <Container>
        <Grid container spacing={3} style={{ height: "100vh" }}>
          <Grid item xs={8}>
            <Paper className={classes.root}>
              <Typography variant="h4" component="h3">
                Overview - {country.name}
              </Typography>
              <Typography variant="body1" component="p">
                {country.description}
              </Typography>
            </Paper>
            <Paper className={classes.root}>
              <Typography variant="h4" component="h1">
                Phrasebook
              </Typography>
              <Table
                phrasebook={country.phrasebook}
                language={country.language}
              />
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper
              className={classes.root}
              style={{ height: "80vh", overflow: "auto" }}
            >
              <Typography variant="h4" component="h3">
                Brews
              </Typography>
              <List>
                {sample.map((item, index) => (
                  <div key={index}>
                    <ListItem button>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.beer.beer_name}
                        secondary={item.brewery.brewery_name}
                      />
                    </ListItem>
                    <Divider />
                  </div>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.root}>
              <Typography variant="h4" component="h3">
                Brews and Breweries - {country.name}
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography
                    variant="h4"
                    style={{ fontWeight: "bold", letterSpacing: "2px" }}
                  >
                    Oktoberfest
                  </Typography>
                  <Typography variant="h5" style={{ fontStyle: "italic" }}>
                    Spaten-Franziskaner-Bräu{" "}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Paper>
                    <SimpleMap />
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Country;
