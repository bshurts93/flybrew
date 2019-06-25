import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import BreweryDB from "../../utils/breweryDB";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function Home() {
  const classes = useStyles();

  const showBeers = () => {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/locations/?key=ab91f8c08c9f4df4411ec21a266438c4&countryIsoCode=de"
    )
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log(json);
        const breweries = [];
        for (var i = 0; i < 10; i++) {
          breweries.push(json.data[i].brewery.name);
        }
        console.log(breweries);
      });
  };

  return (
    <div className={classes.root}>
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
                <Button variant="outlined" onClick={() => showBeers()}>
                  Search
                </Button>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>Results</h2>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;

// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: "30px",
//     marginTop: "30px",
//     textAlign: "center",
//     color: "#fff"
//   }
// });

// class Home extends React.Component {
//   render() {
//     const { classes } = this.props;

//     return (
//       <div>
//         <Container>
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <Paper className={classes.paper}>
//                 <h2>Beer Search</h2>
//                 <form>
//                   <TextField
//                     id="outlined-full-width"
//                     label="Search"
//                     style={{ margin: 8 }}
//                     fullWidth
//                     margin="normal"
//                     variant="outlined"
//                     InputLabelProps={{
//                       shrink: true
//                     }}
//                   />
//                   <Button variant="outlined">Search</Button>
//                 </form>
//               </Paper>
//             </Grid>
//             <Grid item xs={12}>
//               <Paper className={classes.paper}>
//                 <h2>Results</h2>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Container>
//       </div>
//     );
//   }
// }

// Home.propTypes = {
//   classes: PropTypes.object.isRequired
// };
// export default withStyles(styles)(Home);
