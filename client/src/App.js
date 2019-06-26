import React, { Component } from "react";
import logo from "./d20-folio-logo-1.png";
import {Jumbotron} from 'reactstrap';
import "./App.css";
import {BrowserRouter, Route} from 'react-router-dom';
import NavigationBar from './components/Navbar/index';
import ViewAllCharacters from './pages/ViewAllCharacters';
import EditCharacter from './pages/EditCharacter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavigationBar />
          <Route exact path="/" component={()=><ViewAllCharacters />} />
          <Route exact path="/mychars" component={()=><div>mychars</div>} />
          <Route exact path="/new" component={()=><EditCharacter new={true} />} />
          <Route exact path="/edit/:id" component={({match})=><div>Editing {match.params.id}</div>} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
