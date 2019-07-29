import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import {Route, Switch, Redirect} from 'react-router-dom';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Posts from './components/posts';




class App extends React.Component {
 
  render() { 
    return ( 
      <main className="container">
        <NavBar/>
        <div className="row">
        <Switch>
          
          <Route path='/customers' render={(props) => (
            <Customers sortBy="name" {...props}/>
          )
            
          }/>
          <Route path='/register' component={RegisterForm}/>
          <Route path='/login' component={LoginForm}/>
          <Route path='/movies/:id' component={MovieForm}/>
          <Route path='/rentals' component={Rentals}/>
          <Route path='/movies' component={Movies}/>
          <Redirect from='/price' to='/rentals'/>
          <Route path='/not-found' component={NotFound}/>
          <Route path='/posts' component={Posts}/>
          <Route path='/' exact component={Movies}/>
          <Redirect to='not-found'/>
        </Switch>
        </div>
    </main>
     );
  }
}


 
export default App;
