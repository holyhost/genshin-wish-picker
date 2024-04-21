import { Container, Group, Title } from '@mantine/core'
import React from 'react'
import classes from './page.module.css'
import Content from '@/components/Setting/Content'
import Link from 'next/link'

const SettingPage = () => {
  return (
    <div className={classes.container}>
        <div className={classes.blurBox}>
            <div className={classes.titleContainer}>
                <Group justify='space-between'>
                    <Title order={4} c={'#bba884'}>
                        <img className={classes.settingIcon} src="/assets/icons/setting.png" alt="setting icon" />
                        设置
                    </Title>
                    <Link href={'/'}>
                        <img className='iconBig' src="/assets/icons/closing-button.png" alt="close button" />
                    </Link>
                    
                </Group>
            </div> 
            <div className={classes.contentContainer}>
                <Content/>
            </div> 
        </div>
    </div>
  )
}

export default SettingPage
