import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Cart from "./pages/Cart.jsx"
import ProductDetails from "./pages/ProductDetails.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import './styles/global.css'
import ProtectedRoute from "./routes/ProtectedRoute.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
    
  )
}

export default App
