import React, { useState } from 'react'
import { Carousel, Embla } from '@mantine/carousel'
import classes from './Banner.module.css'
import { Group, Text, Stack, Center } from '@mantine/core'
import TextButton from '../TextButton/TextButton'
import WishButton from '../WishButton/WishButton'
import { IconCirclePlus } from '@tabler/icons-react'


type Props = {
  curIndex?: number,
  posts: {
    indexUrl: string,
    coverUrl: string,
    name: string,
    id: string
  }[]
}

const Banner = ({curIndex=0, posts}: Props) => {
  const [curPosition, setCurPosition] = useState(curIndex)
  const [embla, setEmbla] = useState<Embla | null>(null);

  const updateBanner = (index: number) => {
    embla?.scrollTo(index)
  }
  
  return (
    <Stack
          justify="space-between"
          gap="sm"
          style={{height: '100vh'}}
        >
      <Group justify='space-between' style={{alignItems: 'flex-start'}}>
      <Text c={'white'} fw={600} mt={'14px'} w={'256px'}>
        <img style={{ height: '50px', width: '50px', marginRight: '2rem', paddingBottom: '6px' }} alt='wish star' src='/assets/icons/star.png' className='icon' />
        祈愿
      </Text>
      <div>
          {posts.map(
            (post, index) => 
              <img
                key={'img-' + post.id}
                onClick={()=> updateBanner(index)}
                src={`/assets/images/${post.indexUrl}${index === curPosition ? '-selected' : ''}.png`} 
                alt="wish pool index" />
          )}
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
        getEmblaApi={setEmbla}
        onSlideChange={setCurPosition}>
        {posts.map(post => (
          <Carousel.Slide key={post.id}>
            <Group justify='center'>
              <img className={classes.container} alt='Genshi impact wish' src={post.coverUrl}/>
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
