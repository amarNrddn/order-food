import React from 'react'

const Button = ({type, children }) => {
    return (
        <button
            type={type}
            className='px-8 py-2 bg-primary rounded-full text-white flex items-center gap-1'
        >
            {children}
        </button>
    )
}

export default Button