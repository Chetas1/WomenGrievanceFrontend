
import './App.css';
import NavigationBar from './components/Navbar/Navbar';
import DefaultBody from './components/Body/DefaultBody';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <NavigationBar />
      <DefaultBody />
    </Provider>
  );
}

export default App;
