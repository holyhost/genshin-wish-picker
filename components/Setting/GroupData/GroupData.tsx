"use client"
import GenshinButton from '@/components/Button/GenshinButton/GenshinButton'
import { Characters } from '@/constants/characters'
import { getFormatDateTime } from '@/hooks/date.util'
import useFriendsStore, { GroupType } from '@/hooks/friends.store'
import { Accordion, Avatar, Paper, Center, ScrollArea, Group, Input, Mark, Menu, Modal, Stack, Table, Text, Textarea, Title, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { nanoid } from 'nanoid'
import React, { MouseEvent, useState } from 'react'
import { EMOJIS } from '@/constants/emojis'
import { IconDotsVertical, IconEdit, IconTrash } from '@tabler/icons-react'

const GroupData = () => {
    const [content, setContent] = useState('')
    const [showCheck, setShowCheck] = useState(false)
    const [group, setGroup] = useState<GroupType>()
    const [opened, { open, close }] = useDisclosure(false);
    const {friends, updateGroup, removeGroup} = useFriendsStore()
    const alterGroupName = (event: MouseEvent, gp: GroupType)=>{
        setGroup(gp)
        event.stopPropagation()
        open()
    }
    const saveData = ()=> {
        if(!content) return
        close()
        if(group){
            const d = new Date()
            const updateTime = getFormatDateTime(d)
            group.updateTime = updateTime
            group.name = content
            group && updateGroup({...group})
            setContent('')
        }
        
    }
    const willRemoveGroup = (event: MouseEvent, gp: GroupType)=>{
        // removeGroup(gp.id) 
        setGroup(gp)
        setShowCheck(true)
        event.stopPropagation()
    }
    const doRemove = ()=>{
        group && removeGroup(group.id)
        setShowCheck(false)
    }

  return (
    <Paper shadow='md' pl={20} pt={10}>
        <ScrollArea h={'82vh'} scrollbarSize='0'>
            <Title order={3}>共有{friends.length}个分组</Title>
            <Accordion>
                {friends.map((f,fin) => <Accordion.Item key={f.id} value={f.name}>
                    <Accordion.Control icon={EMOJIS[fin]}>
                        <Group justify='space-between' mr={26}>
                            {f.name} 
                            <Menu trigger='hover'>
                                <Menu.Target>
                                    <IconDotsVertical color='#bba884' size={16} onClick={(e)=> (e.stopPropagation())}/>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Item 
                                        onClick={(e)=>alterGroupName(e, f)}
                                        leftSection={<IconEdit style={{ width: rem(14), height: rem(14) }} />}>
                                        修改分组名称
                                    </Menu.Item>
                                    <Menu.Item
                                        onClick={(e)=> willRemoveGroup(e, f)}
                                        color="red"
                                        leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                                        >
                                        删除分组
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                            
                        </Group>
                        
                    </Accordion.Control>
                    <Accordion.Panel>
                        <Table>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>头像</Table.Th>
                                    <Table.Th>姓名</Table.Th>
                                    <Table.Th>护道人</Table.Th>
                                    <Table.Th>元素类型</Table.Th>
                                    <Table.Th>星级</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {f.data.map((item,ind) =>(
                                    <Table.Tr key={item.name + '-' + item.nick + ind}>
                                        <Table.Td><Avatar className='user' src={`/assets/images/avatar/${item.id}.png`} alt="friend's avatar" /></Table.Td>
                                        <Table.Td>{item.nick}</Table.Td>
                                        <Table.Td>{item.name}</Table.Td>
                                        <Table.Td>
                                        <Avatar ml={16} size={26} className='user' src={`/assets/images/${item.type}.png`} alt="it's me" />
                                            {/* <img className='icon' src={`/assets/images/${item.type}.png`} alt="element type" />  */}
                                        </Table.Td>
                                        <Table.Td>{item.star}</Table.Td>
                                    </Table.Tr>
                                ))}
                            </Table.Tbody>
                        </Table>
                    </Accordion.Panel>
                </Accordion.Item>)}
            </Accordion>
        </ScrollArea>
        <Modal opened={opened} onClose={close} title="修改分组名称" centered>
            {group && <Stack>
                <Text><Mark> {group.name} </Mark></Text>
                <Input value={content} onChange={e => setContent(e.target.value)} placeholder="请输入组名，比如: 三年级二班" />
                <Group justify='flex-end'>
                    <GenshinButton type='cancel' title='取消' click={close}/>
                    <GenshinButton type='ok' title='确定' click={saveData}/>
                </Group>
            </Stack>}
        </Modal>
        <Modal opened={showCheck} onClose={()=> setShowCheck(false) } title="删除" centered>
            {group && <Stack>
                <Text>请确认是否删除分组：<Mark> {group.name} </Mark></Text>
                <Group justify='flex-center'>
                    <GenshinButton type='cancel' title='取消' click={()=>setShowCheck(false)}/>
                    <GenshinButton type='ok' title='确定' click={()=> doRemove()}/>
                </Group>
            </Stack>}
        </Modal>
    </Paper>
  )
}

export default GroupData
