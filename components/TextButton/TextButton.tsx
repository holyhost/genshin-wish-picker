import React from 'react'
import classes from './TextButton.module.css'

const TextButton = ({title=''}) => {
  return (
    <div className={classes.container}>
      <span>{title}</span>
    </div>
  )
}

export default TextButton
