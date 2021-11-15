import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore/Explore';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/explore">
              <Explore />
            </PrivateRoute>
            
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
// REACT_APP_API_KEY=AIzaSyC2MDE4N_5DBdAkI8N3NiUzintEpFFi0I8
// REACT_APP_AUTH_DOMAIN=doctors-portal-22630.firebaseapp.com
// REACT_APP_PROJECT_ID=doctors-portal-22630
// REACT_APP_STORAGE_BUCKET=doctors-portal-22630.appspot.com
// REACT_APP_MESSAGING_SENDER_ID=280034654866
// // REACT_APP_APP_ID=1:280034654866:web:f19275699b227721b3444b