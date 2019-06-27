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

function createData(english, otherLanguage) {
  return { english, otherLanguage };
}

const rows = [
  createData(
    "I will have a pilsner, please.",
    "Ich werde bitte einen Pilsener haben."
  ),
  createData("Do you have a lager?", "Hast du ein Lager?"),
  createData(
    "May I have your favorite doppelbock?",
    "Darf ich Ihren Lieblings-Doppelbock haben?"
  ),
  createData("I want something lighter.", "Ich möchte etwas leichter."),
  createData(
    "I loved the lager! What else is similar?",
    "Ich habe das Lager geliebt! Was ist sonst noch ähnlich?"
  ),
  createData("Thank You!", "Vielen Dank!")
];

function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>English</TableCell>
            <TableCell>German</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.english}
              </TableCell>
              <TableCell>{row.otherLanguage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default SimpleTable;
