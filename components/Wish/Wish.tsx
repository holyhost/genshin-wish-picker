import React, { useEffect, useRef, useState } from 'react'
import classes from './Wish.module.css'
import WishResult from '../WishResult/WishResult'
import GenshinLoading from '../GenshinLoading/GenshinLoaing'
import { Characters } from '@/constants/characters'

type Props = {
  count: number,
  name: string,
  onClose: () => void
}

const Wish = ({ count = 1, name = '', onClose }: Props) => {
  const [end, setEnd] = useState(false)
  const eleAudio = useRef<HTMLAudioElement>(null)
  const [progress, setProgress] = useState(0)
  const [loadTime, setLoadTime] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const friends = [Characters.find(c => c.id == name) || Characters[Math.floor(Math.random()*Characters.length)]]
  for (let index = 0; index < count-1; index++) {
    friends.push(Characters[Math.floor(Math.random()*Characters.length)])
    
  }
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
    setLoaded(true)
    eleAudio.current?.play()
  }

  useEffect(()=>{
    let perTime = 20
    let perProg = 0.35
    if(loaded && progress < 84){
      perTime = 10
      perProg = 0.6
    }
    if(loaded || progress > 96) return
    setTimeout(()=> setProgress(progress + perProg), perTime)
    setLoadTime(loadTime + perTime)
      
  }, [progress, loaded])

  return (
    <>
      {end ? (
        <>
          <img
            onClick={onSkip}
            src='/assets/icons/closing-button.png'
            className={classes.close} />
            <WishResult friends={friends} count={count}/>
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
      {loaded ? null : <GenshinLoading progress={progress}/>}
    </>
  )
}

export default Wish
