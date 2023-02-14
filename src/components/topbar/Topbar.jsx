import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { auth } from "../../firebase";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Nose Drivers Admin Panel</span>
        </div>
        <div className="topRight">
          <Link to="/newUser">
            <button
              onClick={async () => {
                await auth.signOut();
              }}
              className="navUserAddButton"
            >
              Sign Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
