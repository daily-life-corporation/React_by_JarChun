import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const App = React.lazy(() => import("./App"));
const Login = React.lazy(() => import("./components/login/login"));

ReactDOM.render(
  <BrowserRouter>
    <React.Suspense fallback={loading()}>
      <Switch>
        <Route
          path="/login"
          name="Login"
          render={props => <Login {...props} />}
        />
        <Route path="/" name="App" render={props => <App {...props} />} />
      </Switch>
    </React.Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


