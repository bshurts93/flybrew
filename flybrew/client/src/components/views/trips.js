import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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

function Trips(props) {
  const classes = useStyles();
  const user = props.auth.user.name.split(" ", 1);

  console.log(user);

  return (
    <div>
      <Container>
        <Grid container spacing={3} style={{ height: "100vh" }}>
          <Grid item xs={12}>
            {/* User greeting */}
            <Paper className={classes.root}>
              <Typography variant="h4" component="h3">
                {user}'s Trips
              </Typography>
              <Typography variant="body1" component="p">
                View your planned trips here
              </Typography>
            </Paper>

            {/* Check in Table */}
            <Paper className={classes.root}>
              <Typography variant="h4" component="h1">
                TBD
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Trips.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Trips);
