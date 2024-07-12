import { apiLoginSuccess } from '../../apis/authService'
import actionType from './actionType'
export const loginSuccess = (id) => async(dispatch) => { 
    try{
        let response = await apiLoginSuccess(id)
        if(response?.data?.err === 0){
            dispatch({
                type: actionType.LOGIN_SUCCESS,
                data: response?.data?.token
            })
        }
        else{
            dispatch({
                type: actionType.LOGIN_SUCCESS,
                data: null
            })
        }
    }
    catch(err){
        dispatch({
            type: actionType.LOGIN_SUCCESS,
            data: null
        })
    }
 }

export const logout = (id) => ({
    type: actionType.LOGOUT
})