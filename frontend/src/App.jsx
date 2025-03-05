import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router> {/* Move Router here */}
      <div className='container-fluid' style={{ height: "100vh" }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addproduct' element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;