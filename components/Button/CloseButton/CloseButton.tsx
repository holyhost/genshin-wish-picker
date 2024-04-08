import React from 'react'
import classes from './CloseButton.module.css'

type Props = {
  name?: 'left' | 'right',
  size?: string,
  click?: ()=> void
}

const CloseButton = ({size='36px', click}: Props) => {
  return (
    <img
      onClick={click}
      className={classes.container}
      style={{width: size, height: size}}
      src='/assets/icons/closing-button.png'
      alt='close button'/>
  )
}

export default CloseButton
