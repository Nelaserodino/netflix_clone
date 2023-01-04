import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { MoviesNavBar } from './components/navBar/MoviesNavBar';
import { Home } from './home/Home';
import './components/navBar/MoviesNavBar.scss';
import { AuthContextProvider } from './context/AuthContext';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { Account } from './pages/Account';
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <AuthContextProvider> 
        <MoviesNavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route 
              path='/account' 
              element={
              <ProtectedRoute>
                <Account/>
              </ProtectedRoute>}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
