import './App.css';
import { connect, useDispatch } from "react-redux";
import AppBar from './Components/AppBar/AppBar';
import { Switch } from 'react-router';
import { useEffect, Suspense, lazy } from 'react';
import { authOperations } from './redux/auth';
import PrivateRoute from './Components/AppBar/UserMenu/PrivatRoute';
import PublicRoute from './Components/AppBar/UserMenu/PublicRoute';
const HomeView = lazy(() => import('./Views/HomeView'));
const RegisterView = lazy(() => import('./Views/RegisterView'));
const LoginView = lazy(() => import('./Views/LoginView'));
const ContactsPage = lazy(() => import('./Components/ContactsPage/ContactsPage'));





function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <PublicRoute exact path='/'>
            <HomeView/>
          </PublicRoute>
          <PublicRoute exact path='/register' restricted>
            <RegisterView/>
          </PublicRoute>
          <PublicRoute exact path='/login' restricted>
            <LoginView/>
          </PublicRoute>
          <PrivateRoute path='/contacts'>
            <ContactsPage />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </div>)
    
  }
export default connect()(App)