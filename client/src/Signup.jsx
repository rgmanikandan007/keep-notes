import React from 'react'

const Signup = () => {
    return (
        <div className='signup-container'>
            <form>
                <label>Username :</label>
                <input type='text' placeholder='Please Enter Username' />
                <label>Email :</label>
                <input type='email' placeholder='Please Enter Email' />
                <label>Password :</label>
                <input type='text' placeholder='Please Enter password' />
                <label>Confirm Password :</label>
                <input type='text' placeholder='Please Enter Confirm password' />
                <span>Already have an account? <a href=''>Login</a></span>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signup