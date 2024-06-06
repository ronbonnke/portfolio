import React, { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
// import { FaLocationDot } from 'react-icons/fa6'

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
            I'm interested in working - especially on small or larger projects
            based on web development. However, if you have any other request or
            question, don't hesitate to contact me using the form below. onClick
            the mark shown in map. 😉
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
          <div className="info-map">
            Chikka Gubbi,
            <br /> #09, St. Antony's church road,
            <br /> near Gov't school, Bangalore, India
            <br />
            <span>ronbonnke789@gmail.com</span>
          </div>
        </div>
        <div className="map-wrap">
          {/* <MapContainer
            center={[13.0568, 77.6931]} // Chikka Gubbi coordinates
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[13.0568, 77.6931]}>
              <Popup>
                Ronbonnke lives here, come over for a cup of coffee <br /> :)
              </Popup>
            </Marker>
          </MapContainer> */}
          <MapContainer
            center={[13.0727696, 77.6693496]} // Chikka Gubbi coordinates
            zoom={13} // Adjust the zoom level if needed
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon-2x.png">OpenStreetMap</a> contributors'
            />
            <Marker position={[13.0568, 77.6931]}>
              <Popup>
                Ronbonnke lives here, come over for a cup of coffee <br /> :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
