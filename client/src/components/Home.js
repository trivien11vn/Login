import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {logout} from '../store/actions/authAction'
import { useDispatch, useSelector} from 'react-redux'
import {apiGetOneUser} from '../apis/userService'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isLoggedIn, token} = useSelector(state => state.auth)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetchUser = async() => {
      let response = await apiGetOneUser(token)
      console.log(response)
      if(response?.data?.err === 0){
        setUserData(response?.data?.response)
      }
      else{
        setUserData({})
      }
    }
    fetchUser()
  }, [isLoggedIn])
  
  return (
    <div style={{display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '32px'}}>
      <div>{isLoggedIn 
      ? 
      <button type='button' className='btn btn-danger' onClick={() => dispatch(logout())}>
        Logout
      </button>
      :
      <button type='button' className='btn btn-primary' onClick={()=>navigate('/login')}>
        Login
      </button>
      }</div>
      <div>
        <h4>{userData.name}</h4>
        <h4>{userData.email}</h4>
        {userData?.avatarUrl && 
          <img 
          src={userData?.avatarUrl} 
          alt='avatar'
          style={{width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover'}}
          />
        }
      </div>
    </div>
  )
}

export default Home