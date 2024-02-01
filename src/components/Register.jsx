"use client"
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        return new promise((succes, failed) => {
            if (StatusCode === 200) {
                succes(
                    fetch('/api/registers', {
                        method: 'POST',
                        body: JSON.stringify({ email, password }),
                        headers: { 'Content-Type': 'application/json' },
                    })

                )
            }
            failed('asdkjad')
        })
    }

    return (
        <section className='text-center mt-8'>
            <h1 className='text-4xl text-primary font-bold mb-4'>Register</h1>
            <form className='max-w-xl mx-auto' method='post' onSubmit={handleSubmit}>
                <input
                    name='email'
                    value={form.email}
                    type="email"
                    placeholder='Email'
                    onChange={handleChange}
                />
                <input
                    name='password'
                    value={form.password}
                    type="password"
                    placeholder='Password'
                    onChange={handleChange}
                />
                <button type="submit" >Register</button>
                <div className="my-4 text-gray-500 text-center">
                    Or Login with Provider
                </div>
                <button className='flex justify-center items-center gap-2'>
                    < FcGoogle className='text-2xl' />
                    Login with Google
                </button>
            </form>
        </section>
    )
}

export default Register