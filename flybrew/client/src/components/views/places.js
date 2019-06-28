import React from "react";
import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Card from "../layout/Card";
import countryData from "../../utils/countryData";

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
          {countryData.map((item, index) => (
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
