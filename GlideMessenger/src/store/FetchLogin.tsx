import { Dispatch } from "react";
import { ActionTypes, TAction } from "./store";

/*
export const FetchLogin = (nikname: string, password:string ) => {

    return async (dispatch: Dispatch<TAction>) => {
        try {
            let user = {
                login: nikname,
                password: password
            };
            console.log(JSON.stringify(user));
            let response = await fetch('https://glidemess.pw/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                if (response.status >= 200 && response.status < 300) {
                    dispatch({ type: ActionTypes.LOGEDIN, payload: true });
                }
                console.log('Successfully loged in');
            } 
            }
            catch(error) {
                console.log('error', error);
            }
    };
}*/