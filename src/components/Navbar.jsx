import React from 'react'
import { navbar } from "@/constans/routeNavbar"
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            {navbar.map((logo, i) => (
                <Link
                    key={i}
                    href={logo.path}
                    className='text-primary text-2xl font-semibold'
                >
                    {logo.logo}
                </Link>
            ))}
            {navbar.map((nav, i) => {
                return (
                    <nav
                        key={i}
                        className="flex flex-row text-gray-500 font-semibold items-center"
                    >
                        <Link href={nav.path}>{nav.name}</Link>
                    </nav>
                )
            })}
            <div className="text-white font-semibold px-8 py-2 rounded-full bg-primary ">
                <Link href={'/register'}>
                    Register
                </Link>
            </div>
        </div>
    )
}

export default Navbar