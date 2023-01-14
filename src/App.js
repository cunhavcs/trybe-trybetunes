import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // adicionar Link
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Trybe Tunes</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/album/:id" render={ () => <Album /> } />
            <Route path="/profile/edit" component={ ProfileEdit } />
            <Route path="/profile" component={ Profile } />
            <Route path="/favorites" component={ Favorites } />
            <Route path="/search" component={ Search } />
            <Route exact path="/" render={ (props) => <Login { ...props } /> } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
