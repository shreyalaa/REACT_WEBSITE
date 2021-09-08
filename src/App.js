import logo from './logo.svg';
import Greeting from './Greeting';
import NavBar from './NavBar';
import Heading from './Heading';
import Footer from './Footer';
import {Route , Switch} from "react-router-dom"
import Formm from './Formm';
import Shopping from "./Shopping"
import Contact from "./Contact"
import Home from './Home';

const  App =()=> {
  return (
    <div className="App">
         <Switch>
           <Route exact path = "/" component = {Home}/>
           <Route exact path = "/Form" component = {Formm}/>
           <Route exact path = "/Shopping" component ={Shopping}/>
           <Route exact path = "/Contact" component = {Contact}/>
           
         </Switch>

       
    </div>
  );
}

export default App;
