
import './App.css';
// import {App} from './App'
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Asscets/Assets/banner_mens.png';
import women_banner from './Components/Asscets/Assets/banner_women.png';
import kids_banner from './Components/Asscets/Assets/banner_kids.png'
function App() {
  return (
    <div className="App">  
     <BrowserRouter>
     <Navbar/>
       <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory banner ={men_banner} category="men"/>}/>
        <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kid"/>}/>
        <Route path="/product/:productid" element={<Product />} />
       <Route path='/login' element={<LoginSignup/>}/>
       <Route path='/cart' element={<Cart/>}/>
       </Routes>
      <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}
export default App;
