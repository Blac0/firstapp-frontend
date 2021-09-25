
import { BrowserRouter , Route } from 'react-router-dom';
import './App.css';
import EventHandling from './components/events';
import Login from './components/login';
import Navbar from './components/navbar';
import SignUp from './components/signup';

function App() {
  return (
    <div>
      
      
      <BrowserRouter>
          <Navbar></Navbar>
          <Route path ="/login" component ={Login}></Route>
          <Route path ="/signup" component ={SignUp}></Route>
          <Route path ="/event" component ={EventHandling}></Route>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
