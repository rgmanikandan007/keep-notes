import React from 'react'

const Nav = () => {
    return (
        <div className='nav-container'>
            <div className='logo'>
                <h2>Notes.</h2>
            </div>
            <div className='search'>
                <input type='text' placeholder='Enter Notes' />
            </div>
            <div className='logout'>
                <h4>Logout</h4>
            </div>
        </div>
    )
}

export default Nav