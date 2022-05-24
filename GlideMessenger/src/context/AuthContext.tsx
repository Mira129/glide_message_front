import React, { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelestor } from "../store/store";

let defaultValue: boolean = false;
export const AuthContext = createContext(defaultValue);

export const AuthProvider = (children: any) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const isLogedIn = useTypedSelestor((state) => state.isLogedIn);
/*
    let logIn = async (nikname:string, password:string) => { 
        try {
            let user = {
                nikname: nikname,
                password: password,
            };
            console.log(JSON.stringify(user));
            let response = await fetch('http://glidemess.pw/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                let data = await response.json();
                if (response.status >= 200 && response.status < 300) {
                }
                return data;
            };
            // else {
            //     console.log(response.statusText);
            // };
        } 
        catch(error) {
            console.log(error);
        }
    };*/
    return(
        <AuthContext.Provider value={isLogedIn} >{{children}}</AuthContext.Provider>
    )
};

