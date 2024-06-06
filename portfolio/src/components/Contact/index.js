import React, { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_hwi9xbd',
        'template_8mcqjuk',
        form.current,
        '1V7vfQkqrz5xvVcBn'
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('Message sent successfully!')
        },
        (error) => {
          console.log(error.text)
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in working - especially on small or larger projects
            based on web development. However, if you have any other request or
            question, don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input placeholder="subject" type="text" name="subject" />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <Loader type="pacman" />
      </div>
    </>
  )
}

export default Contact
