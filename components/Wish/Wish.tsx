import React from 'react'
import classes from './Wish.module.css'

type Props ={
  count: number,
  onClose: ()=> void
}

const Wish = ({ count = 1, onClose }: Props) => {
  const onSkip = () => {
    console.log('...on skip...')
    onClose()
  }
  const onEnd = () => {
    console.log('...on end...')
  }

  return (
    <>
      <button
        onClick={onSkip}
        className={classes.skipButton}>Skip</button>
      <video
        className={classes.wishContainer}
        onEnded={onEnd}
        playsInline
        autoPlay
        muted
      >
        <source
          src='/assets/videos/5starwish.mp4'
          type="video/mp4" />
      </video>
    </>
  )
}

export default Wish
