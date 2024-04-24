"use client"
import { Grid, Group, Stack, Text } from '@mantine/core'
import { identity } from '@mantine/core/lib/core/factory/factory'
import { IconDiamondFilled, IconDiamonds, IconSquareRotated, IconSquareRotatedFilled } from '@tabler/icons-react'
import React, { ReactElement, useState } from 'react'
import classes from './Content.module.css'
import ImportData from './ImportData/ImportData'
import GroupData from './GroupData/GroupData'
import Others from './Others/Others'

type MenuType = {
    selected: boolean,
    id: string,
    title: string,
    component: any
}

const menuConfig = [
    {
        selected: true,
        id: 'group',
        title: '我的分组',
        component: <GroupData/>
    },
    {
        selected: false,
        id: 'import-data',
        title: '新增分组',
        component: <ImportData/>
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
        component: <Others/>
    }
]

const Content = () => {
    const [curIndex, setcurIndex] = useState('group')
    const [menu, setMenu] = useState<MenuType[]>([...menuConfig])
    return (
        <Grid>
            <Grid.Col span='content'>
                <Stack
                    align="flex-start"
                    justify="flex-start"
                    >
                        {menu.map((item) => <Group className={item.id == curIndex ? classes.itemSelected:classes.item} key={item.id} onClick={()=> setcurIndex(item.id)}>
                            <IconSquareRotated size={16} color='#bba884' stroke={4}/>
                            <Text fw={600}> {item.title}</Text>
                        </Group> )}
                </Stack>
            </Grid.Col>
            <Grid.Col span='auto'>
                {menu.find(m => m.id == curIndex)?.component}
            </Grid.Col>
        </Grid>
    )
}

export default Content

