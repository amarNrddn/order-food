import React from 'react'
import SectionHeader from './SectionHeader'

const AboutUs = () => {
    return (
        <section>
            <section className="my-16">
                <SectionHeader subHeader={'Our story'} mainHeader={'About Us'} />
                <div className="max-w-md mx-auto text-center flex flex-col gap-4 mt-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorem blanditiis recusandae temporibus vel est adipisci id? Doloribus aspernatur totam magnam, tempora veniam perspiciatis impedit dolorum quo inventore, rem iusto?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorem blanditiis recusandae temporibus vel est adipisci id? Doloribus aspernatur totam magnam,</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorem blanditiis recusandae temporibus vel est adipisci id? </p>
                </div>
            </section>
        </section>
    )
}

export default AboutUs