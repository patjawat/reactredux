import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

export default function Login() {
    const isLogin = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <div>

            <hr />
            <button 
            className="btn btn-success" 
            onClick={() => dispatch({
                type:"USER_LOGIN"
            }) }
            >Login</button>
            {' '}
            <button 
            className="btn btn-danger" 
            onClick={() => dispatch({
                type:"USER_LOGOUT"
            }) }
            >Logout</button>
        </div>
    )
}
