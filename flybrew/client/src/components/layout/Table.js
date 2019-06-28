import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

function SimpleTable(props) {
  const classes = useStyles();
  const phrasebook = props.phrasebook;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>English</TableCell>
            <TableCell>{props.language}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {phrasebook.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.english}
              </TableCell>
              <TableCell>{row.translated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default SimpleTable;
