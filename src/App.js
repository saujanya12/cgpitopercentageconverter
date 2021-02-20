import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import MU from './component/MU';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Pune from './component/Pune';
import ShivajiUniversity from './component/ShivajiUniversity';
import NagpurUniversity from './component/NagpurUniversity';
import NorthMaharashtraUniversity from './component/NorthMaharashtraUniversity';
import Footer from './component/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <Navbar />
        <Switch>
          <Route exact path='/' component={MU} />
          <Route exact path='/PuneUniversity' component={Pune} />
          <Route exact path='/ShivajiUniversity' component={ShivajiUniversity} />
          <Route exact path='/NagpurUniversity' component={NagpurUniversity} />
          <Route exact path='/NorthMaharashtraUniversity' component={NorthMaharashtraUniversity} />
          <Route exact path='/Footer' component={Footer} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
