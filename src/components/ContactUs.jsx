import React from 'react'
import SectionHeader from './SectionHeader'

const ContactUs = () => {
  return (
    <section className='my-8 text-center'>
        <SectionHeader subHeader={"Don\'t hestitate"} mainHeader={"Contact Us"}/>
        <div className="mt-5 text-4xl underline text-gray-500">
            <p>+62895-3223-21248</p>
        </div>
    </section>
  )
}

export default ContactUs