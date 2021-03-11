import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamDetails from './components/TeamDetails/TeamDetails';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
          <Footer/>
        </Route>
        <Route path="/home">
          <Home/>
          <Footer/>
        </Route>
        <Route path="/teams/:idTeam">
          <TeamDetails/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
