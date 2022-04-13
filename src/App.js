
import './App.css';
import Register from './Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import landingPage from './landingPage';
import Login from './Login';
function App() {
  return (
    <BrowserRouter basename='/landingPage'>
      <div className='App'><landingPage /></div>
      
      <switch>
        <Route path="/" component={landingPage} exact />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />

      </switch>

    </BrowserRouter>
  );
}

export default App;
