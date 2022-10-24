import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Cart';
// import Card from './Card';
import Home from './Home';
import Login from './Login';
// import Product from './Product';
const AppRouter = () => {


  return (
    <div>
        <h1>Router Principal</h1>
        <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/home/:userid' element={<Home/>}/>'
        <Route path='/cart/:userid' element={<Cart/>}/>
        
        {/* <Route path='/product' element={<Product/>}/>
        <Route path='/card' element={<Card/>}/> */}
        <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter;