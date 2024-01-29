import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Hero = () => {
    return (
        <section className='hero mt-4'>
            <div className="py-12">
                <h1
                    className='text-4xl font-semibold'
                >
                    Evriting<br/>
                     is better with<br/> a&nbsp; 
                    <span className='text-primary'>Pizza</span>
                </h1>
                <p className='my-6 text-gray-500 text-sm'>Pizza is the missing pice that makes every day complete, a simple yet delicious joy in life </p>
                <div className="flex gap-4">
                    <Button>
                        Order now
                        <IoArrowForwardCircleOutline className='text-2xl font-semibold' />
                    </Button>
                    <button className='flex gap-2 items-center py-2 font-semibold text-md'>
                        Learn more
                        <IoArrowForwardCircleOutline className='text-2xl font-semibold' />
                    </button>
                </div>
            </div>

            <div className="relative">
                <Image src={'/pizza.png'} alt='---' layout={'fill'} objectFit={'contain'} />
            </div>
        </section>
    )
}

export default Hero