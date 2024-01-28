import React from 'react'

const Button = ({ children }) => {
    return (
        <button
            className='px-8 py-2 bg-primary rounded-full text-white flex items-center gap-1'
        >
            {children}
        </button>
    )
}

export default Button