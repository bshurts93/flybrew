import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CardTravel from "@material-ui/icons/CardTravel";
import PersonOutlineSharp from "@material-ui/icons/PersonOutlineSharp";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/dashboard" style={{ textDecoration: "none", color: "black" }}>
        <ListItemText primary="Dashboard" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonOutlineSharp />
      </ListItemIcon>
      <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
        <ListItemText primary="My Profile" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CardTravel />
      </ListItemIcon>
      <Link to="/trips" style={{ textDecoration: "none", color: "black" }}>
        <ListItemText primary="My Trips" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="/places" style={{ textDecoration: "none", color: "black" }}>
        <ListItemText primary="Places" />
      </Link>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="My Brews" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="My Places" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="My Translations" />
    </ListItem>
  </div>
);
