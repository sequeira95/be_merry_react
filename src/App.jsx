import './App.css'
import { Header } from './components/header/Header'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from './routes/home'

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App