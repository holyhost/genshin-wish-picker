import React, { useRef, useState } from 'react'
import classes from './WishResult.module.css'
import { IconStarFilled } from '@tabler/icons-react'
import { Character } from '@/constants/characters'

type Props = {
  count?: number,
  friends: Character[]
}

const WishResult = ({count=1, friends}: Props) => {
  const [ready, setReady] = useState(false)
  const [showRoles, setShowRoles] = useState(false)
  const [friend, setFriend] = useState(friends[0])
  const [leftCount, setLeftCount] = useState(count-1)
  const eleAudio = useRef<HTMLAudioElement>(null)
  const playResult = ()=>{
    eleAudio.current?.play()
    setReady(true)
  }
  const goNext = ()=> {
    if(leftCount){
      eleAudio.current?.play()
      setFriend(friends[friends.length - leftCount])
      setLeftCount(leftCount-1)
    }else if(count > 1){
      setShowRoles(true)
    }
    
  }
  return (
    <div className={classes.container} onClick={goNext}>
      <audio ref={eleAudio} onCanPlayThrough={playResult} src='/assets/mp3/wished.wav'/>
      {showRoles ? <div className={classes.roles}>
            {friends.map((f, ind) => (
              <div className={classes.card} key={f.id + "-role" + ind} style={{backgroundImage: 'url(/assets/images/bg-role-item.png)'}}>
                <img className={classes.roleItem} src={`/assets/images/character/${f.id}.png`} alt="role result" />
                {f.nick && <div className={classes.roleNickContainer}>
                  {f.nick.split('').map(w => <span key={w} className={classes.roleNick + ' ' + classes.star + ' ' + classes.threeD}>{w}</span>)}
                </div>}
                {f.star > 3 && <div className={classes.extra}>
                  <img src={`/assets/icons/extra-star-${f.star}.png`} alt="extra" />
                  <img style={{marginBottom: '16px'}} src={`/assets/icons/extra-${f.star}.png`} alt="extra" />
                </div>}
              </div>
            ))}
      </div> : <img className={classes.cover} src={`/assets/images/character/${friend.id}.png`}/>}
      {ready && !showRoles ? (<>
        <div className={classes.info}>
          <img src={`/assets/images/${friend.type}.png`} alt="character element" />
          <div className={classes.nameContainer}>
            {friend.name}
            <p style={{lineHeight: '2rem', margin:'0', marginTop: '-4px'}}>
              {new Array(friend.star).fill(1).map((i,j) => <IconStarFilled key={i+j} className={classes.star} color='gold'/>)}
          </p>
          </div>
        </div>
        {friend.nick && <div className={classes.nickName + ' ' + classes.threeD}>
          { friend.nick.split('').map(i => <span className={classes.star} key={i}>{i}
            </span>)}
        </div> }
        </>) : null}
      {/* {leftCount? <img className={classes.gonext} src="/assets/icons/right.png" alt="show next result" /> : null} */}
      
    </div>
  )
}

export default WishResult
