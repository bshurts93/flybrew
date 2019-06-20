import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, brewery, location, abv) {
  return { id, date, name, brewery, location, abv };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Hefe Weissbier",
    "Bayerische Staatsbrauerei Weihenstephan",
    "Friesing, Bavaria",
    "5.4%"
  ),
  createData(
    1,
    "15 Mar, 2019",
    "Kristall",
    "Erdinger Weissbräu",
    "Erding, Bavaria",
    "5.3%"
  ),
  createData(
    2,
    "15 Mar, 2019",
    "Oktoberfest",
    "Spaten-Franziskaner-Bräu",
    "Munich, Bavaria",
    "5.9%"
  ),
  createData(
    3,
    "12 Mar, 2019",
    "Rauchbier Märzen",
    "Aecht Schlenkerla ",
    "Bamberg, Bavaria",
    "5.1%"
  ),
  createData(
    4,
    "11 Mar, 2019",
    "Salvator Doppelbock",
    "Paulaner",
    "Munich, Bavaria",
    "7.9%"
  )
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Brews</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Brewery</TableCell>
            <TableCell>Location</TableCell>
            <TableCell align="right">ABV</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.brewery}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell align="right">{row.abv}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#">
          See more
        </Link>
      </div>
    </React.Fragment>
  );
}
