import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"

import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Profile from "./pages/Profile"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"

import Login from "./pages/Login"
import Register from "./pages/Register"

import ProtectedRoute from "./components/ProtectedRoute"

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
        <Route path="cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Route>
    </Routes>
  )
}