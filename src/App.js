import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Water from "./Components/Water";
import FoodMain from "./Components/foodMain";
import HomePage from "./Components/homePage";
import ErrorNotFound from "./Components/pageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SignIn from "./Components/SignIn";
import { AuthProvider } from './firebase/Auth';
import ChangePassword from './Components/ChangePassword'
import Navigation from './Components/Navigation'
import PrivateRoute from './Components/PrivateRoutes';
import Landing from "./Components/Landing";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>This is a desperate attempt to code the 554 project</p>

          </header>

          <div className='App-body'>


            {/* <Link className="App-link" to="/">
              Home
            </Link>
            <Link className="App-link" to="/water">
              Water
            </Link>
            <Link className='App-Button' to='/foodMain'>
              Food Page
            </Link>
            <Link className='App-Button' to='/signup'>
              Sign Up
            </Link> */}
            {/* Deep Kakadia- Above routes are shifted to Navigation.js */}
            <Navigation />

            <Switch>
              <Route exact path='/' exact component={Landing}></Route>
              <PrivateRoute exact path='/home' exact component={HomePage} />
              <Route path='/signup' component={SignUp}></Route>
              <Route path='/signin' component={SignIn}></Route>

              <PrivateRoute path="/water" exact component={Water} />
              <PrivateRoute path='/foodMain' exact component={FoodMain} />
              <Route component={ErrorNotFound}></Route>

            </Switch>
          </div>


        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
