import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'

const Form = ({ addColor }) => {
  const [color, setColor] = useState('#ffffff')

  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }

  return (
    <section className="container">
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          name="color"
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          name="text"
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
    </section>
  )
}

export default Form
