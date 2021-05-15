import React from 'react'
import '../App.css'

const Notification = ({ message, type }) => {
  if (message === null || type === null) {
    return null
  }

  return (
    <div className={type}>
      {message}
    </div>
  )
}

export default Notification