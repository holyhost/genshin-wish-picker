import React from 'react'
import classes from './GenshinLoading.module.css'


const GenshinLoading = ({progress=0}) => {
  const left = (-200 + progress*4).toString() + 'px'
  return (
    <div className={classes.container}>
      <img src="/assets/images/loading.png" alt="loading progress" className={classes.loading} />
      <div className={classes.loading2} style={{marginLeft: left}}></div>
    </div>
  )
}

export default GenshinLoading
