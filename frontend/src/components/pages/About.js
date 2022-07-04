import api from '../../utils/api'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Home.module.css'

function About() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    api.get('/pets').then((response) => {
      setPets(response.data.pets)
    })
  }, [])

  return (
    <section>
        <h1>Sobre</h1>
        <p>jhdfhagsdfjhagsdkjhfgasdkhfgadkhfgadkfhagsdfjhagdkfjhgadfhgadkfhgadhg</p>
    </section>
  )
}

export default About
