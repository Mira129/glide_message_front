import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import Thunk from 'redux-thunk'
import { TypedUseSelectorHook } from "react-redux";

export interface IState {
  isLogedIn: boolean,
  password: string,
  nickname: string,
  fullname:  string,
  avatar: string,
  about: string,
  age: number,
  country: string,
  languages: [],
}

export interface ITransferData {
  password: string,
  nickname: string,
  fullname:  string,
}

const InitialState: IState = {
  isLogedIn: false,
  avatar: "",
  password: "",
  nickname: "",
  fullname: "",
  about: "",
  age: 0,
  country: "",
  languages: [],
}

export enum ActionTypes {  // перечисление типов actions
  LOGEDIN = 'LogedIn',
  TRANSFERDATA = 'TransferData',
  DOWNLOADPHOTO = 'DownloadPhoto',
  GETUSER = 'GetUser',
}

// интерфейсы actions
interface LogedInAction {
  type: ActionTypes.LOGEDIN
  payload: boolean;
}

interface TransferDataAction {
  type: ActionTypes.TRANSFERDATA
  payload: {
    password: string,
    nickname: string,
    fullname:  string,
  };
}

interface DownloadPhotoAction {
  type: ActionTypes.DOWNLOADPHOTO
  payload: string;
}

interface GetUserAction {
  type: ActionTypes.GETUSER
  payload: {
    password: string,
    nickname: string,
    fullname:  string,
    avatar: string,
    about: string,
    age: number,
    country: string,
    languages: [],
  };
}


// типы actions
export type TAction = LogedInAction | TransferDataAction | DownloadPhotoAction | GetUserAction

export const reducer = (state = InitialState, action: TAction): IState => {
  switch(action.type) {
      case ActionTypes.LOGEDIN:
          return {...state, isLogedIn: action.payload}
      case ActionTypes.TRANSFERDATA:
          return {...state, 
                  nickname: action.payload.nickname,
                  password: action.payload.password,
                  fullname: action.payload.fullname
                }
      case ActionTypes.DOWNLOADPHOTO:
          return {...state, avatar: action.payload}
      case ActionTypes.GETUSER:
          return {...state,
                  password: action.payload.password,
                  nickname: action.payload.nickname,
                  fullname: action.payload.fullname,
                  avatar: action.payload.avatar,
                  about: action.payload.about,
                  age: action.payload.age,
                  country: action.payload.country,
                  languages: action.payload.languages,
                }
      default:
          return state
  }
}
/*
export function transferDataReducer(state = InitialState, action: PayloadAction<ITransferData>) {
    switch (action.type) {
      case 'TRANSFER':
        return {
            ... state,
            firstData: action.payload
        }
      default:
        return state
    };
};*/

export const rootReducer = combineReducers({
  reducer,
});


export const store = configureStore({ 
    reducer: reducer, 
    middleware: [Thunk] 
})
