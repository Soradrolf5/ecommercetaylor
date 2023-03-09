import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import ItemListContainer from './containers/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer'
import Cart from './components/Cart'
import Welcome from './components/Welcome'
import {ShoppingCartProvider}  from './contexts/ShoppingCartContext'
function App() {
  

  return (
    <ShoppingCartProvider>
   <BrowserRouter>
      <div className='Background'>
       <NavBar/>
    <Routes>
      <Route exact path="/" element={<Welcome greeting="Bienvenidos a mi ecommerce"/>}/>
      <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route exact path="/catalogue" element={<ItemListContainer/>}/>
      <Route exact path="/category/:categoryid" element={<ItemListContainer/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
