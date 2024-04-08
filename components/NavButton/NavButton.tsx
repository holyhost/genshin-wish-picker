import React from 'react'
import classes from './NavButton.module.css'

type Props = {
  name?: 'left' | 'right',
  size?: string,
  click?: ()=> void
}

const NavButton = ({name='left', size='36px'}: Props) => {
  return (
    <img
      className={classes.container}
      style={{width: size, height: size}}
      src={`/assets/icons/${name}.png`} 
      alt='navigate button'/>
  )
}

export default NavButton
