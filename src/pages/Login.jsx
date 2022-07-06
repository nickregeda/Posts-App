import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context/context";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = (e) => {
        e.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Login</h1>
            <form action="" onSubmit={login}>
                <MyInput type="text" placeholder={'login'}/>
                <MyInput type="password" placeholder={'password'}/>
                <MyButton>Sign in</MyButton>
            </form>
        </div>
    );
};

export default Login;