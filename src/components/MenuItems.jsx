import Image from 'next/image'
import React from 'react'
import Button from './Button'

const MenuItems = () => {
    return (
        <div className="p-4 bg-gray-200 rounded-lg flex flex-col justify-center text-center items-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className=" relative">
                <Image src={'/pizza.png'} alt='pizza' width={200} height={200} className='max-h-auto max-h-40 block mx-auto'/>
            </div>
            <h4 className='text-xl font-semibold my-3'>Pepperoni Pizza</h4>
            <p className='text-gray-500 text-sm text-left mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit adipisicing. </p>
            <Button>Add to cart $12</Button>
        </div>
    )
}

export default MenuItems