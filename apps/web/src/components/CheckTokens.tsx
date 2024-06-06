import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../utilities/getToken";

const CheckTokens = () => {

    const isLoggedIn = getToken() ? true : false;

    if (isLoggedIn === false)
        return (
            <Navigate to={"/login"} />
        );


    return (
        <Outlet />
    );
}

export default CheckTokens;