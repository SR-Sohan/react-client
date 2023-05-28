import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductsDetails from "./pages/Products-Details";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoPage from "./pages/No-page";
import DashboardLayout from "./Admin/DashboardLayout";
import DashHome from "./Admin/pages/DashHome";
import AddProduct from "./Admin/pages/AddProduct";
import PrivateRoute from "./PrivateRoute";

const AppRouting = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>} />
                        <Route path="about" element={<About/>}/>
                        <Route path="contact" element={<Contact/>}/>
                        <Route path="products" element={<Products/>}/>
                        <Route path="products/:id" element={<ProductsDetails/>}/>
                        <Route path="cart" element={<Cart/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                        <Route path="*" element={<NoPage/>} />
                    </Route>
                    
                    <Route path="dashboard" element={ <PrivateRoute> <DashboardLayout/> </PrivateRoute>}>
                        <Route index element={<DashHome/>}/>
                        <Route path="add-product" element={<AddProduct/>} />
                    </Route>

                    
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRouting;