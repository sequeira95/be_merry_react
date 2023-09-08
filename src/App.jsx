import './App.css'
import { Header } from './components/header/Header'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from './routes/home'
import { ProductTypes } from './routes/product-types'
import { Product } from './routes/product'



function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productos/:type" element={<ProductTypes/>}/>
          <Route path="/producto/:productId" element={<Product/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
