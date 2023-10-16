import React from 'react'

const SignIn = () => {
  return (
    <div className='sign-in-container'>
      <form>
        <h1>Log In</h1>
        <input type='email' placeholder='Enter your email'></input>
        <input type='password' placeholder='Enter your password'></input>
      </form>
    </div>
  )
}

export default SignIn
