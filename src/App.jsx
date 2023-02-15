import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import ItemListContainer from './containers/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailtContainer from './containers/ItemDetailContainer'
import Cart from './components/Cart'
import Welcome from './components/Welcome'
function App() {
  

  return (
   <BrowserRouter>
      <div className='Background'>
       <NavBar/>
    <Routes>
      <Route exact path="/" element={<Welcome greeting="Bienvenidos a mi ecommerce"/>}/>
      <Route exact path="/item/:id" element={<ItemDetailtContainer/>}/>
      <Route exact path="/catalogue" element={<ItemListContainer/>}/>
      <Route exact path="/category/:categoryid" element={<ItemListContainer/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
