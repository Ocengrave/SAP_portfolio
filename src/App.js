import { Router } from 'react-router-dom';
import Connect_wrapper from './components/connect/connect_wrapper.jsx';
import Profile from './components/profile/profile.jsx';
import Footer from './components/footer/footer.jsx';
import './main.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Messages from './components/profile/messages/messages.jsx';
import Dialog from './components/profile/messages/dialog/dialog.jsx';
import Main from './components/profile/messages/dialog/main.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">

        <Route exact path="/" component={Connect_wrapper} />
        <Route path="/profile" component={Profile} />
        {/* For profile.jsx go to path on clic drop-down menu - messages */}
        <Route path="/messages" component={Messages} /> 
        {/* ************************************************************ */}
        <Route path="/dialog" component={Main} />
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
