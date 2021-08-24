import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
<<<<<<< HEAD
import Fruits from "./components/pages/Fruits";
=======
import Apple from "./components/pages/Apple";
import Mango from "./components/pages/Mango";
import Banana from "./components/pages/Banana";
import Orange from "./components/pages/Orange";
import Guava from "./components/pages/Guava";
import Potato from "./components/pages/Potato";
import Onion from "./components/pages/Onion";
import Tomato from "./components/pages/Tomato";
import Ladyfinger from "./components/pages/Ladyfinger";
import Cauliflower from "./components/pages/Cauliflower";
>>>>>>> 22a02bf (Initial commit)

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App}/>
<<<<<<< HEAD
    <Route exact path="/:fruit" component={Fruits}/>
=======
    <Route exact path="/apple" component={Apple}/>
    <Route exact path="/mango" component={Mango}/>
    <Route exact path="/banana" component={Banana}/>
    <Route exact path="/orange" component={Orange}/>
    <Route exact path="/guava" component={Guava}/>
    <Route exact path="/potato" component={Potato}/>
    <Route exact path="/onion" component={Onion}/>
    <Route exact path="/tomato" component={Tomato}/>
    <Route exact path="/ladyfinger" component={Ladyfinger}/>
    <Route exact path="/cauliflower" component={Cauliflower}/>
>>>>>>> 22a02bf (Initial commit)
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
