import React, {useEffect} from 'react'
import { loginSuccess } from '../store/actions/authAction'
import { useParams, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const LoginSuccess = () => {
  const {userId,tokenLogin} = useParams()
  console.log(tokenLogin)

  const dispatch = useDispatch()
  const {isLoggedIn} = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(loginSuccess(userId, tokenLogin))
  }, [])
  
  
  return (
    <div>
      {
        isLoggedIn ? <Navigate to={'/'} replace={true}/> : <h3 >You have to login with google</h3>
      }
    </div>
  )
}

export default LoginSuccess