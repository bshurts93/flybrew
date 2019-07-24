import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import SearchBar from "../layout/SearchBar";
import ViewHeader from "../layout/ViewHeader";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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

class Home extends React.Component {
  state = {
    value: "",
    beers: []
  };

  userFirstName = this.props.auth.user.name.split(" ", 1);

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
    const beerID = e.currentTarget.id;
    const beerName = e.currentTarget.getAttribute("name");
    const date = new Date();

    const beerObj = {
      timestamp: date,
      beerID: beerID,
      beerName: beerName
    };

    axios
      .post("/api/userdata/save", {
        userID: this.props.auth.user.id,
        userName: this.props.auth.user.name,
        checkIns: beerObj
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ViewHeader
                main={`Hey, ${this.userFirstName}! Let's check in some brews.`}
                secondary="Search for your favorites and check them in"
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <SearchBar
                label="Search via Untappd"
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Paper>
                {this.state.beers.length < 1 ? (
                  <Typography
                    variant="h4"
                    style={{ textAlign: "center", padding: "2rem" }}
                  >
                    Search Above!
                  </Typography>
                ) : (
                  <List>
                    {this.state.beers.map(item => (
                      <div key={item.beer.bid}>
                        <ListItem
                          id={item.beer.bid}
                          name={item.beer.beer_name}
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
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Home);
