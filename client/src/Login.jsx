import React from 'react'

const Login = () => {
    return (
        <div className='login-container'>
            <form>
                <label>Email :</label>
                <input type='email' placeholder='Please Enter Email' />
                <label>Password :</label>
                <input type='password' placeholder='Please Enter username' />
                <h5>Don't have an account? <a href=''>Signup</a></h5>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login