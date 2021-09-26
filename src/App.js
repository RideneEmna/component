import logo from './logo.svg';
import './App.css';
import Search from './component/search_input';
import Catalog from './view/catalog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect
} from "react-router-dom";
import Navbars from './component/Navbars'

function App() {
  return (
    <Router>
    
     <Navbars/>
     <Switch>
       <Route path="/catalog/:id">
         <Catalog/>
       </Route>
     </Switch>
  </Router>
  );
}

export default App;
