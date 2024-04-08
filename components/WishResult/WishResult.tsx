import React from 'react'
import classes from './WishResult.module.css'
import { IconStarFilled } from '@tabler/icons-react'

type Props = {
  star?: number,
  name?: string,
}

const WishResult = ({star=4}: Props) => {
  return (
    <div className={classes.container}>
      <audio src='/assets/mp3/wished.wav' autoPlay/>
      <img className={classes.cover} src='/assets/images/c-eula.png'/>
      <div className={classes.info}>
        <img src="/assets/images/ice.png" alt="character element" />
        <div className={classes.nameContainer}>
          尤拉每集
          <p style={{lineHeight: '2rem', margin:'0', marginTop: '-4px'}}>
            <IconStarFilled className={classes.star} color='gold'/>
            <IconStarFilled className={classes.star} color='gold'/>
            <IconStarFilled className={classes.star} color='gold'/>
            <IconStarFilled className={classes.star} color='gold'/>
            <IconStarFilled className={classes.star} color='gold'/>
        </p>
        </div>
        
      </div>
    </div>
  )
}

export default WishResult
