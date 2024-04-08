import React, { useState } from 'react'
import classes from './Wish.module.css'
import WishResult from '../WishResult/WishResult'

type Props ={
  count: number,
  onClose: ()=> void
}

const Wish = ({ count = 1, onClose }: Props) => {
  const [end, setEnd] = useState(false)
  const onSkip = () => {
    console.log('...on skip...')
    onClose()
  }
  const onEnd = () => {
    console.log('...on end...')
    setEnd(true)
  }

  return (
    <>
      { end ? <img
        onClick={onSkip}
        src='/assets/icons/closing-button.png'
        className={classes.close}/> : null}
        <audio src='/assets/mp3/wishing.wav' autoPlay/>
      {end ? <WishResult/> : <video
        className={classes.wishContainer}
        onEnded={onEnd}
        playsInline
        autoPlay
        muted
      >
        <source
          src='/assets/videos/5starwish.mp4'
          type="video/mp4" />
      </video>}
    </>
  )
}

export default Wish
