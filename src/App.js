import Home from "./components/Pages/Home";
import Navbar from "./components/Navigation/Navbar";
import VideoDetails from "./components/Pages/VideoDetails";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";


import './App.css';

function App() {
  return (
      <Router>
          <Navbar />
          <div class="container pt-5">

          <Switch>
            <Route exact path="/" exact component={() => <Home />} />
            <Route path="/videodetails/:id" render={ ({match}) => <VideoDetails id={match.params.id}/> } />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
