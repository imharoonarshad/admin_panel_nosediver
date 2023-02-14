import Sidebar from "./components/sidebar/Sidebar";
import React from "react";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/Userlist";
import User from "./pages/user/User";
import IndexCharts from "./components/Charts/IndexCharts";
import { useState } from "react";
import { useEffect } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "@firebase/firestore";
import {
  getAuth,
  sendPasswordResetEmail,
  updateCurrentUser,
} from "@firebase/auth";

function App() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (auth.currentUser) {
        getDoc(doc(db, "users", auth.currentUser.email)).then((snapshot) => {
          let data = snapshot.data();

          if (data.isAdmin) setLogin(user);
          else console.log("Admin accoun required");
        });
      }
    });
  }, []);

  if (login) {
    return (
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>

            <Route path="/chart">
              <IndexCharts />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  } else {
    return <Login />;
  }
}

export default App;
