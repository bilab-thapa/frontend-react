import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import PopUp from "../components/PopUp";
import axios from "axios";



export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await axios.post("http://localhost:3001/api/auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log(res.data);

  } catch (err) {
    dispatch(loginFailure());
  
  }
};
export const register = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:3001/api/auth/register", user);
    dispatch(loginSuccess(res.data));
   console.log(res.data)
    
  } catch (err) {
    dispatch(loginFailure());
  }
};
