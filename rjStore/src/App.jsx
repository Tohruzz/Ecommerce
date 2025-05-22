import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Order from './components/Order'
import WishList from './components/WishList'
import Query from './components/Query'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import AddProduct from './components/AddProduct'
import LoginSign from './components/LoginSign'
import Signup from './components/Signup'
function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<LoginSign/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/orders' element={<Order/>}/>
        <Route path='/wishlist' element={<WishList/>}/> 
        <Route path='/query' element={<Query/>}/>
         <Route path='/signup' element={<Signup/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
