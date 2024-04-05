import React from 'react'
import classes from './WishButton.module.css'

const WishButton = ({count=1}) => {
  return (
    <div className={classes.container}>
      <div style={{marginTop: '6px'}}>祈愿{count}次</div>
      <div className={classes.inline}>
        <img className={classes.ballIcon} src='/assets/icons/pink-ball.png'/>
        <span>x{count}</span>
      </div>
    </div>
  )
}

export default WishButton
