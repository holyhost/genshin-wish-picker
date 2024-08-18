import React, { useEffect, useRef, useState } from 'react'
import classes from './Wish.module.css'
import WishResult from '../WishResult/WishResult'
import GenshinLoading from '../GenshinLoading/GenshinLoaing'
import { Character, Characters } from '@/constants/characters'
import useFriendsStore from '@/hooks/friends.store'

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
  const store = useFriendsStore()
  const friends = [{...(Characters.find(c => c.id == name) || Characters[Math.floor(Math.random()*Characters.length)])}]
  for (let index = 0; index < count-1; index++) {
    const tempCharacter = Characters[Math.floor(Math.random()*Characters.length)]
    friends.push({...tempCharacter})
  }
  const slen = store.friends.length
  if(slen){
    // if import names , give a random name to display
    const dlen = store.friends[0].data.length
    let i = count + 10
    const ramdomArr = []
    while(i--) ramdomArr.push(Math.floor(Math.random()*dlen))
    friends[0].nick = store.friends[0].data[ramdomArr[ramdomArr.length-1]].nick
    for (let index = 1; index < count; index++) {
      const element: Character = store.friends[0].data[ramdomArr[ramdomArr.length-1-index]];
      friends[index] = {...element}
    }
  }
  const onSkip = () => {
    onClose()
  }
  const onEnd = () => {
    setEnd(true)
  }
  const onComplete = () => {
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
