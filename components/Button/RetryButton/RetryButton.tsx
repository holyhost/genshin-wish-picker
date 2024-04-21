import React from 'react'
import classes from './RetryButton.module.css'

type Props = {
  title: string,
  size?: string,
  click?: ()=> void
}

const RetryButton = ({title, size='36px', click}: Props) => {
  return (
    <div onClick={click} className={classes.container} style={{width: title.length * 16 + 100 + 'px'}}>
      <img
        src='/assets/icons/try.png'
        alt='retry button'/>
      <span>{title}</span>
    </div>
  )
}

export default RetryButton
