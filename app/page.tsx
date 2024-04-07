"use client"
import classes from './app.module.css'
import GenshinLoaing from '@/components/GenshinLoading/GenshinLoaing';
import { useEffect, useState } from 'react';
import Banner from '@/components/Banner/Banner';
import Wish from '@/components/Wish/Wish';


export default function HomePage() {
  const [progress, setProgress] = useState(0)
  const [loadTime, setLoadTime] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [wishing, setWishing] = useState(false)
  const [wishCount, setWishCount] = useState(1)
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

  const startWish = (count: number)=>{
    setWishing(true)
    setWishCount(count)
  }

  const posts = [
    {
      indexUrl: 'klee',
      coverUrl: '/assets/images/sparkling-steps-2.png',
      name: '',
      id: '1'
    },
    {
      indexUrl: 'eula',
      coverUrl: '/assets/images/born-of-ocean-swell.png',
      name: '',
      id: '2'
    },
    {
      indexUrl: 'kokomi',
      coverUrl: '/assets/images/drifting-luminescence.png',
      name: '',
      id: '3'
    }
  ]

  return (
    <>
      <div className={classes.mainbg}>
        {progress > 96 ? 
          (wishing ? 
            <Wish count={1} onClose={()=> setWishing(false)}/> : 
              <Banner doWish={startWish} posts={posts}/>
          ) : 
          <GenshinLoaing progress={progress}/>}
      </div>
    </>
  );
}
