import React, { useState } from "react";
import { ReactComponent as MenuLogo } from "../../Images&logos/Menu.svg";
import { ReactComponent as Note } from "../../Images&logos/Notes.svg";
import { ReactComponent as Reminder } from "../../Images&logos/Reminders.svg";
import { ReactComponent as EditLable } from "../../Images&logos/EditLables.svg";
import { ReactComponent as Archieve } from "../../Images&logos/Archies.svg";
import { ReactComponent as Trash } from "../../Images&logos/Trashes.svg";
import "./Dashboard.scss";
import { Navbar, Dropdown, Button } from "react-bootstrap";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CreateNote from "../../Components/CreateNote/CreateNote";

const drawerWidth = 200;

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
    }
    ),
    // display : "flex",
    // flexDirection: "row-reverse",
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

  const logOut =()=> {
    localStorage.clear();
    this.props.history.push({pathname:"/signin"});
  }

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
            style={{ width: "40px",
              height: "40px",
              marginLeft: "-27%",
               }}
          />
          <span style={{ fontSize: "22px", marginLeft: "-28%" }}>
            FundooNotes
          </span>
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search"
              style={{
                textAlign: "center",
                width: "90%",
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

              <Dropdown.Menu style={{left: "-223px", top: "70px"}}>
                <div className="logout" >
                  <div className = "logoutinner"></div>
                  <div className = "buttonMargin"><Button variant="outline-secondary" type="submit" onClick = {logOut} >Sign out</Button></div>
                </div>
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
          <div style={{ display:"flex",  }} ><Note className="drawerElementsNote" type="Button"/><span style={!open?{display:"none"}: {display:"block", marginLeft: "15%" }} >Note</span></div>
          <div style={{ display:"flex",  marginTop: "30px" }} ><Reminder className="RemainingdrawerElements" type="Button" /><span style={!open?{display:"none"}: {display:"block", marginLeft: "15%" }}>Reminders</span></div>
          <div style={{ display:"flex" ,  marginTop: "30px" }} ><EditLable className="RemainingdrawerElements" type="Button" /><span style={!open?{display:"none"}: {display:"block", marginLeft: "15%" }} >Edit lable</span></div>
          <div style={{ display:"flex" ,  marginTop: "30px"  }} ><Archieve className="RemainingdrawerElements" type="Button" /><span style={!open?{display:"none"}: {display:"block", marginLeft: "15%" }} >Archieve</span></div>
          <div style={{ display:"flex" ,  marginTop: "30px"  }} ><Trash className="RemainingdrawerElements" type="Button" /><span style={!open?{display:"none"}: {display:"block", marginLeft: "15%" }} >Trash</span></div>
        </Drawer>
      </div>
         <CreateNote/>
    </div>
  );
}
