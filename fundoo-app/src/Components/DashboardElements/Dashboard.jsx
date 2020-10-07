import React, { useState } from "react";
import { ReactComponent as MenuLogo } from "../../Images&logos/Menu.svg";
import { ReactComponent as Note } from "../../Images&logos/Notes.svg";
import { ReactComponent as Reminder } from "../../Images&logos/Reminders.svg";
import { ReactComponent as EditLable } from "../../Images&logos/EditLables.svg";
import { ReactComponent as Archieve } from "../../Images&logos/Archies.svg";
import { ReactComponent as Trash } from "../../Images&logos/Trashes.svg";
import "./Dashboard.scss";
import { Navbar, Dropdown } from "react-bootstrap";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 170;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    marginTop: "85px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    marginTop: "85px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    if (open) {
      setOpen(false);
    }
    if (!open) {
      setOpen(true);
    }
  };

  return (
    <div>
      <Navbar bg="light" variant="light">
        <div className="navbar">
          <button style={{ outline: "none", border: "none" }}>
            <MenuLogo onClick={handleDrawerOpen} />
          </button>
          <img
            src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"
            srcset="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_48dp.png 2x "
            alt=""
            aria-hidden="true"
            style={{ width: "40px", height: "40px" }}
          />
          <span style={{ fontSize: "22px" }}>FundooNotes</span>
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search"
              style={{
                width: "60%",
                background: "transparent",
                border: "none",
                outline: "none",
                height: "100%",
              }}
            />
          </div>

          <div>
            <Dropdown menuAlign={{ lg: "right" }}>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <img
                  height="40px"
                  alt="MenuLogo"
                  src={require("../../Images&logos/pro.png")}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Navbar>

      <div className="drawer">
        <Drawer
          className="drawer"
          variant="permanent"
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <Note className="drawerElementsNote" />
          <Reminder className="RemainingdrawerElements" />
          <EditLable className="RemainingdrawerElements" />
          <Archieve className="RemainingdrawerElements" />
          <Trash className="RemainingdrawerElements" />
        </Drawer>
      </div>
    </div>
  );
}
