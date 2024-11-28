import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import {toast } from 'react-hot-toast'

const ContactForm = () => {

  const myEmail = import.meta.env.VITE_EMAIL_SERVICE;
  const myTemplate = import.meta.env.VITE_TEMPLATE_SERVICE;
  const public_key = import.meta.env.VITE_EMAIL_PUBLIC;
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    // Form validation
    const name = form.current.user_name.value.trim()
    const email = form.current.user_email.value.trim()
    const message = form.current.message.value.trim()

    if (!name || name.length < 3) {
      toast.error('Please enter a valid name (at least 3 characters).')
      return
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address.')
      return
    }
    if (!message || message.length < 10) {
      toast.error('Please enter a message (at least 10 characters).')
      return
    }

    console.log('object',myEmail,myTemplate,public_key);
    // Send email if validation passes
    emailjs
      .sendForm(myEmail, myTemplate, form.current, {
        publicKey: public_key
      })
      .then(
        () => {
          toast.success('Message sent successfully')
          form.current.reset() // Reset the form
        },
        error => {
          toast.error(`FAILED... ${error.text}`)
        }
      )
  }

  return (
      <form
      ref={form}
      onSubmit={sendEmail}
      className='bg-gray-500 bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg rounded-lg p-6 max-w-md md:w-[1500px] mx-auto mt-10 transition-all hover:scale-105 duration-500'
    >
      <label className='block text-gray-700 font-bold mb-2'>Name</label>
      <input
        type='text'
        name='user_name'
        className='w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring-2 focus:ring-blue-400 transition-all duration-300 bg-transparent text-yellow-500 text-xl'
        placeholder='Enter your name'
      />

      <label className='block text-gray-700 font-bold mb-2'>Email</label>
      <input
        type='email'
        name='user_email'
        className='w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring-2 focus:ring-blue-400 transition-all duration-300 bg-transparent text-yellow-500'
        placeholder='Enter your email'
      />

      <label className='block text-gray-700 font-bold mb-2'>Message</label>
      <textarea
        name='message'
        className='w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring-2 focus:ring-blue-400 transition-all duration-300 bg-transparent text-yellow-500'
        placeholder='Type your message'
      ></textarea>
      <input
        type='submit'
        value='Send'
        className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-green-500 to-yellow-500'
      />
      
    </form>
  )
}

export default ContactForm
