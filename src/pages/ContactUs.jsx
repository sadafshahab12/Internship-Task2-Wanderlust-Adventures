import React from 'react'
import Contact from '../components/Contact'

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact us | Wanderlust Adventure"
  })
  return (
    <div className='mt-22'>
      <Contact />
    </div>
  )
}

export default ContactUs
