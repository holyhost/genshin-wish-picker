"use client"
import classes from './app.module.css'
import GenshinLoaing from '@/components/GenshinLoading/GenshinLoaing';
import { useEffect, useState } from 'react';
import Banner from '@/components/Banner/Banner';
import Wish from '@/components/Wish/Wish';
import { count } from 'console';


export default function HomePage() {
  const [progress, setProgress] = useState(0)
  const [loadTime, setLoadTime] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [wishing, setWishing] = useState(false)
  const [wishCount, setWishCount] = useState(1)
  const [aimName, setAimName] = useState('')
  useEffect(()=>{
    let perTime = 20
    let perProg = 0.85
    if(loaded && progress < 84){
      perTime = 10
      perProg = 0.6
    }
    if(loaded || progress > 96) return
    setTimeout(()=> updateProgress(progress + perProg), perTime)
    setLoadTime(loadTime + perTime)
      
  }, [progress, loaded])
  const updateProgress = ( p: number) => {
    setProgress(p)
  }

  const startWish = (count: number, position: number)=>{
    setWishing(true)
    setWishCount(count)
    setAimName(posts[position].indexUrl)
  }

  const posts = [
    {
      indexUrl: 'aleiqinuo',
      name: 'aleiqinuo',
      id: '1'
    },
    {
      indexUrl: 'linni',
      name: 'linni',
      id: '2'
    },
    {
      indexUrl: 'wuqi240425',
      name: 'wuqi240425',
      id: '3'
    },
    {
      indexUrl: 'friends',
      name: 'friends',
      id: '4'
    }
  ]

  return (
    <>
      <div className={classes.mainbg}>
          {wishing ? 
            <Wish count={wishCount} name={aimName} onClose={()=> setWishing(false)}/> : 
              <Banner doWish={startWish} posts={posts}/>}
          
          {progress > 96 ? null : <GenshinLoaing progress={progress}/>}
      </div>
    </>
  );
}
