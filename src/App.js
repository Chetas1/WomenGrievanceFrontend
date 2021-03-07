
import './App.css';
import NavigationBar from './components/Navbar/Navbar';
import DefaultBody from './components/Body/DefaultBody';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import Complaint from './components/Complaints/Complaint';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
const store = createStore(rootReducer)

function App() {
  return (
   <Router> 
    <Provider store={store}>
      <NavigationBar />
      <Switch>
              <Route exact path='/' component = {DefaultBody}></Route> 
              <Route exact path='/complaints' component={Complaint}></Route>  
      </Switch> 
    </Provider>
   </Router>
  );
}

export default App;
