import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { env } from '../env';
import { setToken } from '../utilities/getToken';



const LoginPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('accessToken');
        if (token) {
            setToken(token)
            navigate("/");
        }
    }, [])

    return (
        <div className="bg-sky-400 w-screen h-screen
        flex flex-col justify-center items-center">

            <a href={env.VITE_SERVER_BASE_URL + "/auth/login"}>
                <button className='py-2 px-6 rounded-xl bg-white'>
                    Sign In With Google
                </button>
            </a>

        </div>
    );
}

export default LoginPage;