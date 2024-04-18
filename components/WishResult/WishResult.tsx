import React, { useRef, useState } from 'react'
import classes from './WishResult.module.css'
import { IconStarFilled } from '@tabler/icons-react'
import { Character } from '@/constants/characters'

type Props = {
  friend: Character
}

const WishResult = ({friend}: Props) => {
  const [ready, setReady] = useState(false)
  const eleAudio = useRef<HTMLAudioElement>(null)
  const playResult = ()=>{
    eleAudio.current?.play()
    setReady(true)
  }
  return (
    <div className={classes.container}>
      <audio ref={eleAudio} onCanPlayThrough={playResult} src='/assets/mp3/wished.wav'/>
      <img className={classes.cover} src={`/assets/images/character/${friend?.nick || friend.id}.png`}/>
      {ready ? (<>
        <div className={classes.info}>
          <img src={`/assets/images/${friend.type}.png`} alt="character element" />
          <div className={classes.nameContainer}>
            {friend.name}
            <p style={{lineHeight: '2rem', margin:'0', marginTop: '-4px'}}>
              {new Array(friend.star).fill(1).map((i,j) => <IconStarFilled key={i+j} className={classes.star} color='gold'/>)}
          </p>
          </div>
        </div>
        <div className={classes.nickName + ' ' + classes.threeD}>
          {'孙悟空'.split('').map(i => <span className={classes.star} key={i}>{i}
            </span>)}
            </div> </>) : null}
    </div>
  )
}

export default WishResult
