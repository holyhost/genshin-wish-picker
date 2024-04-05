"use client"
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import classes from './app.module.css'
import GenshinLoaing from '@/components/GenshinLoading/GenshinLoaing';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [progress, setProgress] = useState(0)
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
        123
        {progress > 96 ? null : <GenshinLoaing progress={progress}/>}
      </div>
    </>
  );
}
