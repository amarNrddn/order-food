import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    return (
        <section className='text-center mt-8'>
            <h1 className='text-4xl text-primary font-bold mb-4'>Register</h1>
            <form className='max-w-xl mx-auto' action="">
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button type={"submit"}>Register</button>
                <div className="my-4 text-gray-500 text-center">
                    Or Login with Provider
                </div>
                <button className='flex justify-center items-center gap-2'>
                    < FcGoogle className='text-2xl'/>
                    Login with Google
                </button>
            </form>
        </section>
    )
}

export default Register