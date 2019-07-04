import React from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(4, 1, 0, 1),
    "& h4": {
      paddingBottom: ".3rem"
    },
    "& h3, h5": {
      paddingBottom: "1rem"
    },
    "& p": {
      marginTop: "1rem"
    }
  }
}));

const dummyData = {
  checkIns: [
    {
      date: "3/15/19",
      name: "Hefe Weissbier",
      brewery: "Bayerische Staatsbrauerei Weihenstephan",
      location: "Friesing, Bavaria",
      abv: "5.4%"
    },
    {
      date: "3/15/19",
      name: "Kristall",
      brewery: "Erdinger Weissbräu",
      location: "Erding, Bavaria",
      abv: "5.3%"
    },
    {
      date: "3/14/19",
      name: "Oktoberfest",
      brewery: "Spaten-Franziskaner-Bräu",
      location: "Munich, Bavaria",
      abv: "5.9%"
    },
    {
      date: "3/13/19",
      name: "Rauchbier Märzen",
      brewery: "Aecht Schlenkerla",
      location: "Bamberg, Bavaria",
      abv: "5.1%"
    },
    {
      date: "3/12/19",
      name: "Salvator Doppelbock",
      brewery: "Paulaner",
      location: "Munich, Bavaria",
      abv: "7.9%"
    },
    {
      date: "3/12/19",
      name: "Oktoberfest",
      brewery: "Hacker-Pschorr ",
      location: "Munich, Bavaria",
      abv: "6%"
    }
  ]
};

function Profile(props) {
  const classes = useStyles();
  const user = props.auth.user.name.split(" ", 1);
  const userID = props.auth.user.id;
  console.log(userID);

  const handleSubmit = e => {
    e.preventDefault();
    const testInput = document.getElementById("test").value;
    const testInput2 = document.getElementById("test2").value;

    axios
      .post("/api/userdata/testing", {
        checkIns: [testInput],
        translations: [testInput2]
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Container>
        <Grid container spacing={3} style={{ height: "100vh" }}>
          <Grid item xs={12}>
            {/* User greeting */}
            <Paper className={classes.root}>
              <Typography variant="h4" component="h3">
                Welcome, {user}
              </Typography>
              <Typography variant="body1" component="p">
                This is the profile page. More to come!
              </Typography>
            </Paper>

            {/* Check in Table */}
            <Paper className={classes.root}>
              <Typography variant="h4" component="h1">
                Check Ins
              </Typography>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Brewery</TableCell>
                    <TableCell align="right">Location</TableCell>
                    <TableCell align="right">ABV</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dummyData.checkIns.map((checkin, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {checkin.date}
                      </TableCell>
                      <TableCell align="right">{checkin.name}</TableCell>
                      <TableCell align="right">{checkin.brewery}</TableCell>
                      <TableCell align="right">{checkin.location}</TableCell>
                      <TableCell align="right">{checkin.abv}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={`${classes.paper} ${classes.center}`}>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="test"
                  label="Test DB Input"
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="test2"
                  label="Test DB Input"
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <Button variant="outlined" onClick={handleSubmit}>
                  <Typography variant="button">Test</Typography>
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Profile);
