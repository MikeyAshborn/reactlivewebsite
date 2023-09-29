import Navbar from './Navbar';
import Home from './Home'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './create';
import SiteDetails from './SiteDetails';
import NotFound from './NotFound';

function App() {
  // const index ='Welcome to the app';
  // const num = 50;
  // const link ="www.google.com";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path ='/'>
              <Home />
            </Route>
            <Route path ='/create'>
              <Create />
            </Route>
            <Route path ='/SiteDetails/:id'>
              <SiteDetails /> 
            </Route>
            <Route path ='*'>
              <NotFound /> 
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
    
}


export default App;
