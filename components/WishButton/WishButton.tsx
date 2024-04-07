import React from 'react'
import classes from './WishButton.module.css'

type Props = {
  count?: number,
  doWish: ()=> void
}

const WishButton = ({count=1, doWish}: Props) => {
  return (
    <div className={classes.container} onClick={doWish}>
      <div style={{marginTop: '6px'}}>祈愿{count}次</div>
      <div className={classes.inline}>
        <img className={classes.ballIcon} src='/assets/icons/pink-ball.png'/>
        <span>x{count}</span>
      </div>
    </div>
  )
}

export default WishButton
