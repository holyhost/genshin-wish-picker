import React from 'react'
import classes from './GenshinButton.module.css'

type Props = {
  title: string,
  type?: 'ok' | 'cancel' | 'try',
  click?: ()=> void
}

const GenshinButton = ({title, type='ok', click}: Props) => {
  return (
    <div onClick={click} className={classes.container} style={{width: title.length * 16 + 100 + 'px'}}>
      <img
        src={`/assets/icons/${type}.png`}
        alt='retry button'/>
      <span>{title}</span>
    </div>
  )
}

export default GenshinButton
