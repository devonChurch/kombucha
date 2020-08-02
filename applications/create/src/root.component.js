import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Invoice from "./views/Invoice";
import Ticket from "./views/Ticket";

export default function Root(props) {
  return (
    <Router basename="/create">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="alert alert-primary">React Application</div>

            <nav className="navbar navbar-light mb-3 bg-light">
              <span className="navbar-brand flex-grow-1">Create</span>
              {/* - - - - */}
              <Link to="." className="nav-link">
                Invoice
              </Link>
              <Link to="./ticket" className="nav-link">
                Ticket
              </Link>
            </nav>

            <div>
              <Switch>
                <Route path="/ticket">
                  <Ticket />
                </Route>
                <Route>
                  <Invoice />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
