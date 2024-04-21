"use client"
import { Grid, Group, Stack, Text } from '@mantine/core'
import { identity } from '@mantine/core/lib/core/factory/factory'
import { IconDiamondFilled, IconDiamonds, IconSquareRotated, IconSquareRotatedFilled } from '@tabler/icons-react'
import React, { useState } from 'react'
import classes from './Content.module.css'

const menuConfig = [
    {
        selected: true,
        id: 'name',
        title: '名字',
        component: null
    },
    {
        selected: false,
        id: 'source',
        title: '资源',
        component: null
    },
    {
        selected: false,
        id: 'account',
        title: '账户',
        component: null
    },
    {
        selected: false,
        id: 'others',
        title: '其他',
        component: null
    }
]

const Content = () => {
    const [menu, setMenu] = useState([...menuConfig])
    const updateMenu = (id: string) =>{
        menu.map((m: any) => m.id == id ? (m.selected = true): (m.selected = false))
        setMenu([...menu])
    }
    return (
        <Grid>
            <Grid.Col span='content'>
                <Stack
                    align="flex-start"
                    justify="flex-start"
                    >
                        {menuConfig.map(item => <Group className={item.selected ? classes.itemSelected:classes.item} key={item.id} onClick={()=> updateMenu(item.id)}>
                            {item.selected ? <IconSquareRotatedFilled size={16} color='#bba884' stroke={4}/> :<IconSquareRotated size={16} color='#bba884' stroke={4}/>}
                            <Text fw={600}> {item.title}</Text>
                        </Group> )}
                        
                </Stack>
            </Grid.Col>
            <Grid.Col span='auto'>2</Grid.Col>
        </Grid>
    )
}

export default Content

