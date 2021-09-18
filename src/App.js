import {BrowserRouter, Route, Switch, Redirect, Link, NavLink} from 'react-router-dom'
import Home  from "./Home";
import About from "./About";
import Posts from "./Posts";
import PageNotFound from './PageNotFounf';
import "./index.css";


function App() {
  return (

    <BrowserRouter>
    <div>
      <Link to = "/">Home</Link>
      <Link to = "/about">About</Link>
      <Link to = "/posts">Posts</Link>
    </div>
    <div>
      <NavLink exact activeStyle = {{color : "Red"}} to = "/">Home</NavLink>
      <NavLink activeClassName = "active" to = "/about">About</NavLink>
      <NavLink activeStyle = {{color : "Red"}} to = "/posts">Posts</NavLink>
    </div>
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/about" component = {About}/>
        <Route path = "/posts" component = {Posts}/>
        <Route path = "/home">
          <Redirect to = "/"/>
        </Route>
        <Route path = "*" component = {PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
