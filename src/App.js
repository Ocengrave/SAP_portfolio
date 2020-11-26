import { Router } from 'react-router-dom';
import Connect_wrapper from './components/connect/connect_wrapper.jsx';
import Profile from './components/profile/profile.jsx';
import Footer from './components/footer/footer.jsx';
import './main.css';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      
      <Route exact path="/" component={Connect_wrapper}/>
      <Route path="/profile" component={Profile}/>
      <Footer/>
    </div>
    </BrowserRouter>
     
  );
}

export default App;
