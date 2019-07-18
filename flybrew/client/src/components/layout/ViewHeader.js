import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: "2rem",
    "& p": {
      paddingTop: "1rem"
    }
  }
}));

export default function ViewHeader(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h3">
          {props.main}
        </Typography>
        <Typography component="p">{props.secondary}</Typography>
      </Paper>
    </div>
  );
}
