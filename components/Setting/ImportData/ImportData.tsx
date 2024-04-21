"use client"
import RetryButton from '@/components/Button/RetryButton/RetryButton'
import { Button, Container, Group, Stack, Textarea } from '@mantine/core'
import React, { useState } from 'react'

const ImportData = () => {
    const [content, setContent] = useState('')
    const [contentError, setContentError] = useState('')
    const checkInput = ()=>{
        if(content.length < 1){
            setContentError('请按提示输入指定格式名字！')
            setTimeout(() => {
                setContentError('')
            }, 2000);
        }else{
            const con = content.replaceAll('，', ',').replaceAll(' ', '').replaceAll('\n', ',')
            const names = con.split(',').filter(name => name.length)
        }
    }
  return (
    <Container>
        <Stack>
            <Textarea
                label="导入信息"
                description="请用逗号隔开每个名字"
                placeholder="肖二，张三，李四，王五，麻六"
                autosize
                error={contentError}
                value={content}
                onChange={(e)=>setContent(e.target.value)}
                w={'100%'}
                minRows={8}
            />
            <Group justify='flex-end'>
                <RetryButton click={checkInput} title='校验并提交' />
            </Group>
        </Stack>
    </Container>
  )
}

export default ImportData
