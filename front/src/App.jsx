import { useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState("")
  console.log("Nombres:",firstName)
  console.log("Apellidos:",lastName)
  console.log("Age:",age)

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const data = {
      firstName,
      lastName,
      age: Number(age)
    }
    try {
      const response = await axios.post("http://localhost:3001/student",data)
      console.log("Guardado:",response.data)
      //Limpiar el formulario
      setFirstName("")
      setLastName("")
      setAge("")

      alert("Estudiante registrado exitosamente.")
    } catch (error) {
      console.error(error)
      alert("Ha ocurrido un problema...")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Estudiante</h2>
      <label>Nombres:</label>
      <input 
        type='text'
        value={firstName}
        onChange={(e)=> setFirstName(e.target.value)}
        required
      />

      <label>Apellidos:</label>
      <input
        type='text'
        value={lastName}
        onChange={(e)=> setLastName(e.target.value)}
        required
      />

      <label>Edad:</label>
      <input
        type='number'
        value={age}
        onChange={(e)=> setAge(e.target.value)}
        required
      />
      <button type='submit'>Guardar</button>
    </form>
  )
}

export default App
