import { Router } from 'react-router-dom';
import Connect_wrapper from './components/connect/connect_wrapper.jsx';
import Profile from './components/profile/profile.jsx';
import Footer from './components/footer/footer.jsx';
import './main.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Messages from './components/profile/messages/messages.jsx';

function App(props) {

  return (
    <BrowserRouter>
      <div className="wrapper">

        <Route exact path="/" render={() => <Connect_wrapper />} />
        <Route path="/profile" render={() => <Profile myPost={props.myPost} />} />
        {/* For profile.jsx go to path on click drop-down menu - messages */}
        <Route path="/messages" render={() => <Messages newPost={props.newPost}/>} />
        {/* ************************************************************ */}
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
