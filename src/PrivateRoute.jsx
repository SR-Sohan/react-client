import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    let isLogin = false;

   return isLogin ? children : <Navigate to="/login" />


}

export default PrivateRoute;