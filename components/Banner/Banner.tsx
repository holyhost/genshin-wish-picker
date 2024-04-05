import React from 'react'
import { Carousel } from '@mantine/carousel'
import classes from './Banner.module.css'
import { Group, Text, Stack, Center } from '@mantine/core'
import TextButton from '../TextButton/TextButton'
import WishButton from '../WishButton/WishButton'
import { IconCirclePlus } from '@tabler/icons-react'

const Banner = ({index=0}) => {
  const posts = [
    {
      src: '/assets/images/sparkling-steps-2.png',
      name: '',
      id: 1
    },
    {
      src: '/assets/images/born-of-ocean-swell.png',
      name: '',
      id: 2
    },
    {
      src: '/assets/images/drifting-luminescence.png',
      name: '',
      id: 3
    }
  ]
  const updateBanner = (index: number) => {
    console.log(index)
  }
  
  return (
    <Stack
          justify="space-between"
          gap="sm"
          style={{height: '99vh'}}
        >
      <Group justify='space-between' style={{alignItems: 'flex-start'}}>
      <Text c={'white'} fw={600} mt={'14px'} w={'256px'}>
        <img style={{ height: '50px', width: '50px', marginRight: '2rem', paddingBottom: '6px' }} alt='wish star' src='/assets/icons/star.png' className='icon' />
        祈愿
      </Text>
      <div>
        <img src={`/assets/images/klee${index === 0 ? '-selected':''}.png`} alt="wish pool index" />
        <img src={`/assets/images/eula${index === 1 ? '-selected':''}.png`} alt="wish pool index" />
        <img src={`/assets/images/kokomi${index === 2 ? '-selected':''}.png`} alt="wish pool index" />
      </div>
      <Center mt={'26px'}>
        <div className={classes.stone}>
          <img src='/assets/icons/stone.png' className='icon' alt='Genshin stone' />
          <span style={{ marginLeft: '.5rem', marginRight: '.5rem' }}>19998</span>
          <IconCirclePlus color='#e3e3e3' />
        </div>
        <div className={classes.stone}>
          <img src='/assets/icons/pink-ball.png' className='icon' alt='Genshin stone' />
          <span style={{ marginLeft: '.5rem', marginRight: '.5rem' }}>990</span>
        </div>
        <img src='/assets/icons/closing-button.png' className={classes.closeBtn} alt='Genshin stone' />
      </Center>

    </Group>
      <Carousel
        orientation='horizontal'
        loop
        onSlideChange={updateBanner}>
        {posts.map(post => (
          <Carousel.Slide key={post.id}>
            <Group justify='center'>
              <img className={classes.container} alt='Genshi impact wish' src={post.src}/>
            </Group>
          </Carousel.Slide>
        ))}
        </Carousel>
        {/* bottom layout */}
        <Group justify='space-between'>
            <div style={{marginTop: '-22px'}}>
              <Text c={'white'}>
                <img className='icon' src='/assets/icons/star-light.png' alt='icon star light'/> 999
                <img style={{marginLeft: '2rem'}} className='icon' src='/assets/icons/star-dust.png' alt='icon star dust'/> 1999
              </Text>
              <Group mt={'4px'}>
                <TextButton title='尘辉兑换'/>
                <TextButton title='详情'/>
                <TextButton title='历史记录'/>
            </Group>
            </div>
            
            <Group>
              <WishButton/>
              <WishButton count={10}/>
            </Group>
            
          </Group>
    </Stack>
  )
}

export default Banner
