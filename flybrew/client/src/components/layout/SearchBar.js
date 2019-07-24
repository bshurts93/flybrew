import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  button: {
    width: "100%"
  }
}));

export default function SearchBar(props) {
  const classes = useStyles();

  return (
    <Paper>
      <form className={classes.container} onSubmit={props.handleSubmit}>
        <TextField
          id="outlined-full-width"
          label={props.label}
          style={{ margin: 18 }}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onChange={props.handleChange}
        />
        <Button
          className={classes.button}
          style={{ marginLeft: 18, marginRight: 18, marginBottom: 18 }}
          variant="outlined"
          onClick={props.handleSubmit}
        >
          <Typography variant="button">Search</Typography>
        </Button>
      </form>
    </Paper>
  );
}
