import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "../layout/List";

// import BreweryDB from "../../utils/breweryDB";
import PropTypes from "prop-types";

import "./styles.css";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary
//   }
// }));

// function Home() {
//   const classes = useStyles();

//   const breweries = [];

//   const getBeers = () => {
//     fetch(
//       "https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/locations/?key=ab91f8c08c9f4df4411ec21a266438c4&countryIsoCode=de"
//     )
//       .then(res => {
//         return res.json();
//       })
//       .then(json => {
//         console.log(json);
//         for (var i = 0; i < 10; i++) {
//           breweries.push(json.data[i].brewery.name);
//         }
//         console.log(breweries);
//       });
//   };

//   return (
//     <div className={classes.root}>
//       <Container>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <Paper className={classes.paper}>
//               <h2>Beer Search</h2>
//               <form>
//                 <TextField
//                   id="outlined-full-width"
//                   label="Search"
//                   style={{ margin: 8 }}
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   InputLabelProps={{
//                     shrink: true
//                   }}
//                 />
//                 <Button variant="outlined" onClick={() => getBeers()}>
//                   Search
//                 </Button>
//               </form>
//             </Paper>
//           </Grid>
//           <Grid item xs={12}>
//             <Paper className={classes.paper}>
//               <h2>Results</h2>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// }

// export default Home;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: "30px",
    marginTop: "30px",
    textAlign: "center",
    color: "black"
  }
});

class Home extends React.Component {
  state = {
    breweries: []
  };

  getBeers = () => {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/locations/?key=ab91f8c08c9f4df4411ec21a266438c4&countryIsoCode=de"
    )
      .then(res => {
        return res.json();
      })
      .then(json => {
        const breweries = [];
        for (var i = 0; i < 10; i++) {
          breweries.push(json.data[i].brewery.name);
        }
        this.setState(
          {
            breweries: breweries
          },
          function() {
            console.log(this.state);
          }
        );
      });
  };

  breweryList = this.state.breweries.map(brewery => <li>{brewery}</li>);

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h2>Beer Search</h2>
                <form>
                  <TextField
                    id="outlined-full-width"
                    label="Search"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <Button variant="outlined" onClick={() => this.getBeers()}>
                    Search
                  </Button>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h2>Results</h2>
                <List />
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
