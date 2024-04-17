import React from 'react'
import classes from './WishResult.module.css'
import { IconStarFilled } from '@tabler/icons-react'
import { Character } from '@/constants/characters'

type Props = {
  friend: Character
}

const WishResult = ({friend}: Props) => {
  return (
    <div className={classes.container}>
      <audio src='/assets/mp3/wished.wav' autoPlay/>
      <img className={classes.cover} src={`/assets/images/character/${friend?.nick || friend.id}.png`}/>
      <div className={classes.info}>
        <img src={`/assets/images/${friend.type}.png`} alt="character element" />
        <div className={classes.nameContainer}>
          {friend.name}
          <p style={{lineHeight: '2rem', margin:'0', marginTop: '-4px'}}>
            {new Array(friend.star).fill(1).map((i,j) => <IconStarFilled key={i+j} className={classes.star} color='gold'/>)}
        </p>
        </div>
        
      </div>
    </div>
  )
}

export default WishResult
