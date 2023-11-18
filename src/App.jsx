import Form from './components/Form'
import { ToastContainer, toast } from 'react-toastify'
import ColorList from './components/ColorList'
import Values from 'values.js'
import { useState } from 'react'
const App = () => {
  const [colors, setColors] = useState([])
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10)
      setColors(newColors)
      toast.success('Generate Success')
    } catch (error) {
      toast.error(`Can not Generate Color from ${color}`)
    }
  }
  return (
    <div>
      <ToastContainer position="top-center" />
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </div>
  )
}
export default App
