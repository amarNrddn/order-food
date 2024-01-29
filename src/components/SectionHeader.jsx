import React from 'react'

const SectionHeader = ({ subHeader, mainHeader }) => {
    return (
        <div className="text-center">
            <h3 className='uppercase text-gray-600 leading-4'>{subHeader}</h3>
            <h2 className='text-primary text-4xl font-bold italic'>{mainHeader}</h2>
        </div>
    )
}

export default SectionHeader