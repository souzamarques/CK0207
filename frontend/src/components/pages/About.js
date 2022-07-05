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
        <p>O site Adote um Pet busca lares para cachorros e gatos encontrados disponíveis para adoção.</p>
    </section>
  )
}

export default About
