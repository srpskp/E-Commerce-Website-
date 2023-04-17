import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Category from './Pages/Category';
import SingleProduct from './Pages/SingleProduct';
import Checkout from './Pages/Checkout';
import Confirmation from './Pages/Confirmation';
import Cart from './Pages/Cart';
import Blog from './Pages/Blog';
import SingleBlog from './Pages/SingleBlog';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Contact from './Pages/Contact';


function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/single-product' element={<SingleProduct/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/confirmation' element={<Confirmation/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/single-blog' element={<SingleBlog/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
   </BrowserRouter>
     
   </>
  );
}

export default App;
