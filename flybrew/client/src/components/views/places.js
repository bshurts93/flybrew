import React from "react";
import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Card from "../layout/Card";

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

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(5)
  }
}));

function Places() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.root}>
              <Typography variant="h4" component="h3">
                Let's find your next destination
              </Typography>
            </Paper>
          </Grid>
          {countries.map((item, index) => (
            <Grid item xs={4} key={index}>
              <Link
                to={"/places/" + item.name}
                style={{ textDecoration: "none" }}
              >
                <Card header={item.name} body={item.body} image={item.image} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Places;
