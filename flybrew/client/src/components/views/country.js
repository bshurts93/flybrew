import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// import Card from "../layout/Card";
import Table from "../layout/Table";

import countryData from "../../utils/countryData";

const currentPage = () => {
  return decodeURIComponent(window.location.pathname.slice(8));
};

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
  const country = object(countryData);

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
                {country.description}
              </Typography>
            </Paper>
            <Paper className={classes.root}>
              <Typography variant="h4" component="h3">
                Phrasebook
              </Typography>
              <Table
                phrasebook={country.phrasebook}
                language={country.language}
              />
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
