import React from 'react'
const handleLogin = (type) => {
  window.open(`http://localhost:5000/api/auth/${type}`,'_self')
}

const Login = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '32px'}}>
      <button type='button' className='btn btn-primary' onClick={()=>handleLogin('facebook')}>
        Login with Facebook
      </button>
      <button type='button' className='btn btn-danger' onClick={()=>handleLogin('google')}>
        Login with Google
      </button>
    </div>
  )
}

export default Login