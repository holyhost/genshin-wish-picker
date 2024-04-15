import React, { useRef, useState } from 'react'
import classes from './Wish.module.css'
import WishResult from '../WishResult/WishResult'

type Props = {
  count: number,
  onClose: () => void
}

const Wish = ({ count = 1, onClose }: Props) => {
  const [end, setEnd] = useState(false)
  const eleAudio = useRef<HTMLAudioElement>(null)
  const onSkip = () => {
    console.log('...on skip...')
    onClose()
  }
  const onEnd = () => {
    console.log('...on end...')
    setEnd(true)
  }
  const onComplete = () => {
    console.log('...on complete...')
    eleAudio.current?.play()
  }

  return (
    <>
      {end ? (
        <>
          <img
            onClick={onSkip}
            src='/assets/icons/closing-button.png'
            className={classes.close} />
            <WishResult />
        </>
      ) : (
        <>
          <video
            className={classes.wishContainer}
            onEnded={onEnd}
            onCanPlayThrough={onComplete}
            playsInline
            autoPlay
            muted
          >
            <source
              src='/assets/videos/5starwish.mp4'
              type="video/mp4" />
          </video>
          <audio ref={eleAudio} src='/assets/mp3/wishing.wav' preload='auto' />
        </>
      )}
    </>
  )
}

export default Wish
