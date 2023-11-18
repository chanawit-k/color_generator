import React from 'react'
import { toast } from 'react-toastify'
const SingleColor = ({ color, index }) => {
  const { hex, weight } = color
  const handleCopy = async () => {
    await navigator.clipboard.writeText(`#${hex}`)
    toast.success('Copy to Clipbord Success')
  }

  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={handleCopy}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  )
}

export default SingleColor
