import React, { useState } from "react";
import { ReactComponent as MenuLogo } from "../../Images&logos/Menu.svg";
import "./Dashboard.scss";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  NavItem,
  Dropdown,
} from "react-bootstrap";

export default function Dashboard(props) {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <div className="navbar">
          <button
            style={{ outline: "none", border: "none" }}
          >
            <MenuLogo />
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
            <Dropdown menuAlign={{ lg: 'right' }}>
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
    </div>
  );
}
