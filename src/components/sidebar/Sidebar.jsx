import "./sidebar.css";
import { PermIdentity, BarChart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React from "react";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/chart" className="link">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Graphs
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
