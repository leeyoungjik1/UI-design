import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Main, About, ProductDetails, NotFound} from './pages'
import ProductsData from './ProductsData';
import Infomation from './Information';
import GNB from './component/GNB';

function App() {
  console.log(ProductsData)
  console.log(Infomation)
  return (
    <div className="App">
      <GNB/>
      <Routes>
        <Route exact path='/' element={<Main/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route path='/productdetails' element={<ProductDetails/>}>
          <Route path=':productName' element={<ProductDetails/>}></Route>
        </Route>
        <Route path='*' element={<NotFound/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
