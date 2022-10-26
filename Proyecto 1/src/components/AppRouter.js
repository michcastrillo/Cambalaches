import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import Login from './Login';
import { AuthProvider } from '../context/AuthContext';

const AppRouter = () => {


  return (
    <div>
        <h1>Router Principal</h1>
        <BrowserRouter>
        <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route path='/home/:userid' element={
        <AuthProvider>
        <Home/>
        </AuthProvider>
        }/>
        <Route path='/cart/:userid' element={
        <AuthProvider>
        <Cart/>
        </AuthProvider>
        }/>
        
        <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter;