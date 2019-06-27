import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// import Card from "../layout/Card";
import Table from "../layout/Table";

const currentPage = () => {
  return decodeURIComponent(window.location.pathname.slice(8));
};

const countries = [
  {
    name: "Germany",
    body:
      "Willkommen aus Deutchland! The land of beer, brats and bretzels. When it comes to beer around the world, Germany is known for some of the purest, finest brews ever made. A traditional brewing culture holds the brewing process to a high standard, and the results speak for themselves."
  },
  {
    name: "Belgium",
    body:
      "Belgian brewers often supplement the balance of malt sweetness and hop bitterness you find in every beer with fruity, spicy, floral and herbal aromas. Some Belgian beers are like running through a hayfield at harvest and others explode with a whole orchard of fruit flavours. You can sometimes find earthiness, a savoury, mushroomy umami taste, and you can sometimes find sourness, ranging from a light tartness to a mouth-puckering acidity."
  },
  {
    name: "Czech Republic",
    body:
      "Let's take it back. Like way back. Try over 1000 years back. Brewing has been a part of Czech history since the year 993, when beer was almost exclusively produced at monasteries. Bohemian brewing practices became world renowned by the mid-19th century when the citizens and brewers of Plzen created the now hugely popular style known as the Pilsner. Today, citizens of the Czech Republic proudly hold the title of highest annual beer consumption per capita at 142.4 liters. To that, we say Na Zdravi!"
  },
  {
    name: "Austria",
    body:
      "The hills are alive with the sound of good beer. And lots of it, considering that Austria holds a close second position behind the Czech Republic for the highest annual beer consumption per capita, at 106	liters per person. The Viennese Lager made famous in the 1840s remains one of the highest regarded styles in Europe, but make sure to work your way through the full spectrum of tried and true styles from across the country."
  },
  {
    name: "Norway",
    body:
      "With a landscape so beautiful, there must be pints to match, right? Well lucky for us, Norway has over a millenium of brewing expertise in the hands of the farmers who frequently had a brew house on site. These farmers would use their own strains of yeast in the 'bryggehus' (farm-brew house) to create some one of a kind beers over the years. There are even historic Norwegian strains of yeast (Kveik) that have made a splash in the US craft brewing scene!"
  },
  {
    name: "Ireland",
    body:
      "Of course everyone who comes to Dublin has a pint of Guinness. It's a pilgrimage. But don't mistake this lovely land for a one trick pony. You can enjoy an array of traditional Irish stouts and red ales, or get adventurous and seek out the plethora of new craft breweries that have set up shop in the major cities across the country."
  }
];

const object = arr => {
  let match = {};
  arr.forEach(element => {
    if (element.name === currentPage()) {
      match = element;
    }
  });
  return match;
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(4, 1, 0, 1)
  }
}));

function Country() {
  const classes = useStyles();
  const country = object(countries);

  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Paper className={classes.root}>
              <Typography variant="h4" component="h3">
                Overview - {country.name}
              </Typography>
              <Typography variant="body1" component="p">
                {country.body}
              </Typography>
            </Paper>
            <Paper className={classes.root}>
              <Typography variant="h4" component="h3">
                Phrasebook
              </Typography>
              <Table />
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.root}>
              <Typography variant="h4" component="h3">
                Brews
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Country;
