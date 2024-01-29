import Image from 'next/image'
import React from 'react'
import MenuItems from './MenuItems'
import SectionHeader from './SectionHeader'

const HomeMenu = () => {
    return (
        <section>
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className=" absolute left-0 -top-24 text-left -z-10">
                    <Image src={'/sallad1.png'} alt={'salad'} width={109} height={189} />
                </div>
                <div className=" absolute -top-36 right-0 z-10">
                    <Image src={'/sallad2.png'} alt={'salad'} width={107} height={195} />
                </div>
            </div>

            <SectionHeader subHeader={'Check out'} mainHeader={'Menu'} />

            <div className="grid grid-cols-3 gap-4 mt-4">
                <MenuItems />
                <MenuItems />
                <MenuItems />
                <MenuItems />
                <MenuItems />
                <MenuItems />
            </div>
        </section>
    )
}

export default HomeMenu