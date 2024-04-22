"use client"
import GenshinButton from '@/components/Button/GenshinButton/GenshinButton'
import { Characters } from '@/constants/characters'
import { getFormatDateTime } from '@/hooks/date.util'
import useFriendsStore from '@/hooks/friends.store'
import { Button, Container, Group, Input, Mark, Modal, Stack, Text, Textarea } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { nanoid } from 'nanoid'
import React, { useState } from 'react'

const ImportData = () => {
    const [content, setContent] = useState('')
    const [groupName, setGroupName] = useState('')
    const [newFriends, setNewFriends] = useState<string[]>([])
    const [opened, { open, close }] = useDisclosure(false);
    const [contentError, setContentError] = useState('')
    const {friends, update} = useFriendsStore()
    const saveData = ()=> {
        close()
        const d = new Date()
        const updateTime = getFormatDateTime(d)
        const newGenshinFriends = Characters.sort(()=> Math.random() -0.5)
        const len = newGenshinFriends.length
        update({
            id: nanoid(),
            data: newFriends.map((name, i) => ({...newGenshinFriends[i%len], nick: name})),
            updateTime,
            name: groupName
        })
        setContent('')
        setGroupName('')
    }
    const checkInput = ()=>{
        if(content.length < 1){
            setContentError('请按提示输入指定格式名字！')
            setTimeout(() => {
                setContentError('')
            }, 2000);
        }else{
            const con = content.replaceAll('，', ',').replaceAll(' ', '').replaceAll('\n', ',')
            const names = con.split(',').filter(name => name.length)
            setNewFriends(names)
            open()
        }
    }
  return (
    <Container>
        <Stack>
            <Textarea
                label="导入信息"
                description="请用逗号隔开每个名字，或者每个名字回车换行"
                placeholder="肖二，张三，李四，王五，麻六"
                autosize
                error={contentError}
                value={content}
                onChange={(e)=>setContent(e.target.value)}
                w={'100%'}
                minRows={8}
            />
            <Group justify='flex-end'>
                <GenshinButton click={checkInput} type='try' title='校验信息' />
            </Group>
        </Stack>
        <Modal opened={opened} onClose={close} title="新建分组" centered>
            <Stack>
                <Text>为<Mark> {newFriends.length} </Mark>名朋友创建一个分组</Text>
                <Input value={groupName} onChange={e => setGroupName(e.target.value)} placeholder="请输入组名，比如: 三年级二班" />
                <Group justify='flex-end'>
                    <GenshinButton type='cancel' title='取消' click={close}/>
                    <GenshinButton type='ok' title='确定' click={saveData}/>
                </Group>
            </Stack>
        </Modal>
    </Container>
  )
}

export default ImportData
