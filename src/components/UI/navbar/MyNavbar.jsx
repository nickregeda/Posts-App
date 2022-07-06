import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context/context";

const MyNavbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    return (
        <div className={'navbar '}>
            <MyButton onClick={() => {
                setIsAuth(false)
                localStorage.removeItem('auth')
            }}>Log out</MyButton>
            <div className="navbar__links">
                <Link to={'/posts'}><MyButton>Posts</MyButton></Link>
                <Link to={'/about'}><MyButton>About</MyButton></Link>
            </div>
        </div>
    );
};

export default MyNavbar;