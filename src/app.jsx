import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"

import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Profile from "./pages/Profile"

import Login from "./pages/Login"
import Register from "./pages/Register"

import ProtectedRoute from "./components/ProtectedRoute"
import AdminLayout from "./layouts/AdminLayout"
import AdminDashboard from "./pages/admin/AdminDashboard"
import Products from "./pages/admin/Products"
import Orders from "./pages/admin/Orders"
import Sales from "./pages/admin/Sales"

export default function App() {
  return (
    <Routes>
        <Route path="/admin" element={<AdminLayout />}>
  <Route index element={<AdminDashboard />} />
  <Route path="products" element={<Products />} />
  <Route path="orders" element={<Orders />} />
  <Route path="sales" element={<Sales />} />
</Route>
      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* CUSTOMER UI */}
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="menu"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />

        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  )
}

