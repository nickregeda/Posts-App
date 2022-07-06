import React, {useCallback, useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router/routes";
import {AuthContext} from "../context/context";
import MyLoader from "./UI/loader/MyLoader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <MyLoader/>
    }

    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(r => {
                    return <Route key={r.path} path={r.path} element={r.element}/>
                })}
                <Route path="/*" element={<Navigate to="/posts" replace/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(r => {
                    return <Route key={r.path} path={r.path} element={r.element}/>
                })}
                <Route path="/*" element={<Navigate to="/login" replace/>}/>
            </Routes>
    );
};

export default AppRouter;