import React from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AddBox from "@material-ui/icons/AddBox";

import "./styles.css";
import "../../utils/untappedAPI";
import untappedAPI from "../../utils/untappedAPI";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: "30px",
    marginTop: "30px",
    color: "black"
  },
  center: {
    textAlign: "center"
  }
});

class Home extends React.Component {
  state = {
    value: "",
    beers: []
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.getBeers(this.state.value);
  };

  getBeers = query => {
    fetch(untappedAPI.searchBeersURL + query)
      .then(res => {
        return res.json();
      })
      .then(json => {
        const resList = json.response.beers.items;
        const beers = [];
        for (var i = 0; i < 15; i++) {
          beers.push(resList[i]);
        }
        this.setState({
          beers: beers
        });
      });
  };

  saveBeer = e => {
    const beer = e.currentTarget.id;

    console.log(e.currentTarget);
    console.log(beer);

    axios
      .post("/api/userdata/testing", {
        checkIns: [beer, beer]
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={`${classes.paper} search`}>
                <Typography variant="h2">Search via Untappd</Typography>
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={`${classes.paper} ${classes.center}`}>
                <form onSubmit={this.handleSubmit}>
                  <TextField
                    id="outlined-full-width"
                    label="Search Beers via Untappd"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                    onChange={this.handleChange}
                  />
                  <Button variant="outlined" onClick={this.handleSubmit}>
                    <Typography variant="button">Search</Typography>
                  </Button>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {this.state.beers.length < 1 ? (
                  <Typography variant="h4" className={classes.center}>
                    Search Above!
                  </Typography>
                ) : (
                  <List>
                    {this.state.beers.map(item => (
                      <div key={item.beer.bid}>
                        <ListItem
                          id={item.beer.bid}
                          button
                          onClick={this.saveBeer}
                        >
                          <ListItemIcon id={item.beer.bid} />
                          <ListItemText
                            primary={item.beer.beer_name}
                            secondary={item.brewery.brewery_name}
                            id={item.beer.bid}
                          />
                          <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="Comments">
                              <AddBox />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                      </div>
                    ))}
                  </List>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);
