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
    body: "Water, hops, barley and yeast. No more, no less.",
    image: "https://flaglane.com/download/german-flag/german-flag-medium.jpg"
  },
  {
    name: "Belgium",
    body: "Rich Quads, Spicy Saisons and Tart Lambics.",
    image: "https://flaglane.com/download/belgian-flag/belgian-flag-medium.jpg"
  },
  {
    name: "Czech Republic",
    body: "Not just Pilsners.",
    image: "https://flaglane.com/download/czech-flag/czech-flag-medium.jpg"
  },
  {
    name: "Austria",
    body: "Vienna to Salzburg, the Lager is king",
    image:
      "https://flaglane.com/download/austrian-flag/austrian-flag-medium.jpg"
  },
  {
    name: "Norway",
    body: "Where there's a farmhouse, there's a brewhouse.",
    image:
      "https://flaglane.com/download/norwegian-flag/norwegian-flag-medium.jpg"
  },
  {
    name: "Ireland",
    body: "Reds to Stouts to Wee Heavies. Sláinte!",
    image: "https://flaglane.com/download/irish-flag/irish-flag-medium.jpg"
  }
];

const object = arr => {
  arr.forEach(element => {
    if (element.name === currentPage()) {
      console.log("MATCH: ", element);
    }
  });
};

object(countries);

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(4, 1, 0, 1)
  }
}));

function Country() {
  const classes = useStyles();
  object(countries);
  console.log(currentPage());

  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Paper className={classes.root}>
              <Typography variant="h4" component="h3">
                Overview -
              </Typography>
              <Typography variant="body1" component="p">
                Willkommen aus Deutchland! The land of beer, brats and bretzels.
                When it comes to beer around the world, Germany is known for
                some of the purest, finest brews ever made. A traditional
                brewing culture holds the brewing process to a high standard,
                and the results speak for themselves.
              </Typography>
            </Paper>
            <Paper className={classes.root}>
              <Typography variant="h4" component="h3" onClick={() => object()}>
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
