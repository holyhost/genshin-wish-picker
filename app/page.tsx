"use client"
import classes from './app.module.css'
import GenshinLoaing from '@/components/GenshinLoading/GenshinLoaing';
import { useEffect, useState } from 'react';
import Banner from '@/components/Banner/Banner';

export default function HomePage() {
  const [progress, setProgress] = useState(100)
  const [itv, setItv] = useState(null)
  useEffect(()=>{
    console.log(progress)
    if(progress > 96){
      console.log('end.')
    }else{
      setTimeout(()=> updateProgress(progress + 0.25), 20)
    }
    
      
  }, [progress])
  const updateProgress = ( p: number) => {
    setProgress(p)
  }
  
  return (
    <>
      <div className={classes.mainbg}>
        {progress > 96 ? null : <GenshinLoaing progress={progress}/>}
        <Banner/>
      </div>
    </>
  );
}
