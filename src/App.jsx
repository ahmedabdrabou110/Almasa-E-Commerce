import React from 'react'
import HomePage from './Pages/Home/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './Pages/Cart/CartPage'
import ChoosePayMethoudPage from './Pages/Checkout/ChoosePayMethoudPage'
import LoginPage from './Pages/Auth/LoginPage'
import RegisterPage from './Pages/Auth/RegisterPage'
import ProductsContainer from './components/Products/ProductsContainer'
import Navigation from './utility/Navigation'
import Footer from './utility/Footer'
import ProductDetalisPage from './Pages/Products/ProductDetalisPage'
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Pages/User/UserFavoriteProductsPage";
import UserAllAddresPage from './Pages/User/UserAllAddresPage';
import UserAddAddressPage from './Pages/User/UserAddAddressPage';
import UserEditAddressPage from './Pages/User/UserEditAddressPage';
import UserProfilePage from "./Pages/User/UserProfilePage";
import AdminAllOrdersPage from './Pages/Admin/AdminAllOrdersPage'
import AdminOrderDetalisPage from './Pages/Admin/AdminOrderDetalisPage'
import AdminAddBrandPage from './Pages/Admin/AdminAddBrandPage'
import AdminAddCategoryPage from './Pages/Admin/AdminAddCategoryPage'
import AdminAddSubCategoryPage from './Pages/Admin/AdminAddSubCategoryPage'
import AdminAddProductsPage from './Pages/Admin/AdminAddProductsPage'
import AdminAllProductsPage from './Pages/Admin/AdminAllProductsPage'
import DeliveryMethod from './components/Checkout/DeliveryMethod'
import ProtectedRoute from './utility/ProtectedRoute'
import ProtectedRouteHook from './Hooks/ProtectedRouteHook'
import AdminEditProduct from './components/Admin/AdminEditProduct'
import AllUsersPage from './Pages/Users/AllUsersPage'
import AdminAddUserPage from './Pages/Admin/AdminAddUserPage'
import AdminAdsPage from './Pages/Admin/AdminAdsPage'
import PaypalMethod from './components/Checkout/PaypalMethod'
import BlackAbaiat from './Pages/Products/BlackAbaiat'
import ColorAbaiat from './Pages/Products/ColorAbaiat'
import BishtAbaiat from './Pages/Products/BishtAbaiat'
import TravelAbaiat from './components/Products/TravelAbaiat'
import Torah from './Pages/Products/Torah'
import WinterCollection from './Pages/Products/WinterCollection'
import LatestAdded from './Pages/Products/LatestAdded'
const App = () => {
  const [isUser, isAdmin] = ProtectedRouteHook()
  return (
    <div className="font">
        <BrowserRouter>
        <Navigation />
        <Routes>
            
            <Route index element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/products" element={<ProductsContainer title="منتجاتنا" btnTitle=""  />} />
            <Route path="/products/:id" element={<ProductDetalisPage />} />
            <Route path="/عبايات سوداء" element={<BlackAbaiat />} />
            <Route path="/عبايات ملونه" element={<ColorAbaiat />} />
            <Route path="/عبايات مناسبات" element={<ColorAbaiat />} />
            <Route path="/عبايات البشت و الفرشة" element={<BishtAbaiat />} />
            <Route path="/عبايات سفر" element={<TravelAbaiat />} />
            <Route path="/النقابات و الطرح" element={<Torah />} />
            <Route path="/التشكيلة الشتوية" element={<WinterCollection />} />
            <Route path="/المنتجات المضافة حديثا" element={<LatestAdded />} />
            <Route element={<ProtectedRoute auth={isAdmin} />}>

            {/* <Route path="/admin" element={<Dashboard />} /> */}
              <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
              <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
              <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
              <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
              <Route path="admin/addcategory" element={<AdminAddCategoryPage />} />
              <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
              <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
              <Route path="/admin/product/:id/edit" element={<AdminEditProduct />} />
              <Route path="/admin/allusers" element={<AllUsersPage />} />
              <Route path="/admin/adduser" element={<AdminAddUserPage />} />
              <Route path="/admin/ads" element={<AdminAdsPage />} />
            </Route>
            {/* <Route path="/admin/addcoupon" element={<AdminAddCouponPage />} />
            <Route path="/admin/editcoupon/:id" element={<AdminEditCouponPage />} />
          <Route path="/admin/editproduct/:id" element={<AdminEditProductsPage />} /> */}
          {/* </Route> */}

          <Route element={<ProtectedRoute auth={isUser}  />}>
            <Route path="/user/allorders" element={<UserAllOrdersPage />} />
            <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />
          <Route path="/user/order/paymethod/delivery" element={<DeliveryMethod />} />
          <Route path="/user/order/paymethod/paypal" element={<PaypalMethod />} />
            <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
            <Route path="/user/addresses" element={<UserAllAddresPage />} />
            <Route path="/user/add-address" element={<UserAddAddressPage />} />
            <Route path="/user/edit-address/:id" element={<UserEditAddressPage />} />
            <Route path="/user/profile" element={<UserProfilePage />} />
            <Route path="/user/addProfile" element={<UserAddAddressPage />} />
          </Route>
        </Routes>
        <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App