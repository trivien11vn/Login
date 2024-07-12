import React, {useEffect} from 'react'
import { loginSuccess } from '../store/actions/authAction'
import { useParams, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const LoginSuccess = () => {
  const {userId} = useParams()
  const dispatch = useDispatch()
  const {isLoggedIn} = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(loginSuccess(userId))
  }, [])
  
  
  return (
    <div>
      {
        isLoggedIn && <Navigate to={'/'} replace={true}/>
      }
    </div>
  )
}

export default LoginSuccess