import React, { useState } from 'react'
import { Carousel, Embla } from '@mantine/carousel'
import classes from './Banner.module.css'
import { Group, Text, Stack, Center } from '@mantine/core'
import TextButton from '../Button/TextButton/TextButton'
import WishButton from '../Button/WishButton/WishButton'
import { IconCirclePlus, IconSettings } from '@tabler/icons-react'
import NavButton from '../Button/NavButton/NavButton'
import Link from 'next/link'


type Props = {
  curIndex?: number,
  posts: {
    indexUrl: string,
    name: string,
    id: string
  }[],
  doWish: (count: number, position: number) => void
}

const Banner = ({ curIndex = 0, posts, doWish }: Props) => {
  const [curPosition, setCurPosition] = useState(curIndex)
  const [stoneNum, setStoneNum] = useState(19998)
  const [embla, setEmbla] = useState<Embla | null>(null);
  const updateBanner = (index: number) => {
    embla?.scrollTo(index)
  }

  return (
    <Stack
      justify="space-between"
      gap="sm"
      className={classes.container}
    >
      <Group justify='space-between' style={{ alignItems: 'flex-start' }}>
        <Text c={'white'} fw={600} mt={'14px'} className={classes.title}>
          <img
            alt='wish star' src='/assets/icons/star.png'
            className={'icon ' + classes.titleIcon} />
          祈愿
        </Text>
        <div>
          {posts.map(
            (post, index) =>
              <img
                className={classes.indexBanner}
                loading='lazy'
                key={'img-' + post.id}
                onClick={() => updateBanner(index)}
                src={`/assets/images/${post.indexUrl}${index === curPosition ? '-selected' : ''}.png`}
                alt="wish pool index" />
          )}
        </div>
        <Center mt={'26px'}>
          <div className={classes.stone}>
            <img src='/assets/icons/stone.png' className='icon' alt='Genshin stone' />
            <span style={{ marginLeft: '.5rem', marginRight: '.5rem' }}>{stoneNum}</span>
            <IconCirclePlus className={classes.addIcon} color='#e3e3e3' onClick={()=> setStoneNum(stoneNum + 1)}/>
          </div>
          <div className={classes.stone}>
            <img src='/assets/icons/pink-ball.png' className='icon' alt='Genshin stone' />
            <span style={{ marginLeft: '.5rem', marginRight: '.5rem' }}>990</span>
          </div>
          <Link href={'/setting'} className={classes.closeBtn}>
            <IconSettings color='#ffb732' stroke={3} size={34}/>
          </Link>
          
        </Center>

      </Group>
      <Carousel
        orientation='horizontal'
        loop
        styles={{ control: { background: 'transparent', border: 'none' } }}
        previousControlIcon={<NavButton name='left' />}
        nextControlIcon={<NavButton name='right' />}
        getEmblaApi={setEmbla}
        onSlideChange={setCurPosition}>
        {posts.map(post => (
          <Carousel.Slide key={post.id}>
            <Group justify='center'>
              <img loading='lazy' className={classes.post} alt='Genshi impact wish' src={'/assets/images/' + post.indexUrl + '-up.png'} />
            </Group>
          </Carousel.Slide>
        ))}
      </Carousel>
      {/* bottom layout */}
      <Group justify='space-between'>
        <div style={{ marginTop: '-22px' }}>
          <Text c={'white'}>
            <img className='icon' src='/assets/icons/star-light.png' alt='icon star light' /> 999
            <img style={{ marginLeft: '2rem' }} className='icon' src='/assets/icons/star-dust.png' alt='icon star dust' /> 1999
          </Text>
          <Group mt={'4px'}>
            <TextButton title='尘辉兑换' />
            <TextButton title='详情' />
            <TextButton title='历史记录' />
          </Group>
        </div>

        <Group>
          <WishButton doWish={() => doWish(1, curPosition)} />
          <WishButton count={10} doWish={() => doWish(10, curPosition)} />
        </Group>

      </Group>
    </Stack>
  )
}

export default Banner
