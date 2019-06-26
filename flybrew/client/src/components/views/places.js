import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Card from "../layout/Card";

const countries = [
  {
    name: "Germany",
    body: "This is the body for Germany",
    image: "https://flaglane.com/download/german-flag/german-flag-medium.jpg"
  },
  {
    name: "Belgium",
    body: "This is the body for Belgium",
    image: "https://flaglane.com/download/belgian-flag/belgian-flag-medium.jpg"
  },
  {
    name: "Czech Republic",
    body: "This is the body for Czech Republic",
    image: "https://flaglane.com/download/czech-flag/czech-flag-medium.jpg"
  },
  {
    name: "Austria",
    body: "This is the body for Austria",
    image:
      "https://flaglane.com/download/austrian-flag/austrian-flag-medium.jpg"
  },
  {
    name: "Norway",
    body: "This is the body for Norway",
    image:
      "https://flaglane.com/download/norwegian-flag/norwegian-flag-medium.jpg"
  },
  {
    name: "Ireland",
    body: "This is the body for Ireland",
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
          <Grid xs={12}>
            <Paper className={classes.root}>
              <Typography variant="h4" component="h3">
                Let's find your next destination
              </Typography>
            </Paper>
          </Grid>
          {countries.map((item, index) => (
            <Grid item xs={4} key={index}>
              <Card header={item.name} body={item.body} image={item.image} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Places;
