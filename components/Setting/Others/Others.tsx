import { Container, Timeline, Title, Text, Paper, Image, ScrollArea, ThemeIcon, Group, Card, Button } from '@mantine/core'
import { IconBrandWechat, IconCloud, IconCoffee, IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots, IconTeapot } from '@tabler/icons-react'
import React from 'react'

const Others = () => {
    return (
        <Paper shadow='md' pl={20} pt={10}>
            <ScrollArea h={'82vh'} scrollbarSize='0'>
                <Title order={3}>
                    问题/意见建议/反馈
                </Title>
                <Timeline mt={20} active={2} bulletSize={24} lineWidth={2}>

                    <Timeline.Item title="1. 微信公众号" bullet={<ThemeIcon
                        size={22}
                        color={'green'}
                        radius="xl"
                    >
                        <IconBrandWechat size="12" />
                    </ThemeIcon>}>
                        <Text c={'dimmed'} size="sm">不定期查看公众号留言信息</Text>
                        <Text c="dimmed" size="sm">公众号名称 ：<Text c={'orange'} component={'span'}>生活小怪兽</Text></Text>
                        <Text c="dimmed" size="sm">公众号id : <Text c={'orange'} component={'span'}>lifexgs</Text></Text>
                        <Text size="xs" mt={4}>🍒🍒🍒🍒</Text>
                    </Timeline.Item>

                    <Timeline.Item bullet={<IconCoffee size={16} />} title="2. 请作者喝一杯咖啡" lineVariant='dashed'>
                        <Text c="dimmed" size="sm">编码不易，请作者喝一杯咖啡，继续加油打代码！</Text>
                        <Text c="dimmed" size="sm">打赏并留言，作者能第一时间收到通知！</Text>
                        <Group mt={5}>
                            <Card shadow="sm" padding="xs" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src="/assets/images/tea1.png"
                                        height={160}
                                        alt="Wechat pricing"
                                    />
                                </Card.Section>

                                <Button size='xs' color="#bba884" fullWidth mt="1" radius="md">
                                    微 信
                                </Button>
                            </Card>
                            <Card shadow="sm" ml={'60'} padding="xs" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src="/assets/images/tea2.png"
                                        height={160}
                                        alt="Wechat pricing"
                                    />
                                </Card.Section>

                                <Button size='xs' color="#bba884" fullWidth mt="1" radius="md">
                                    支付宝
                                </Button>
                            </Card>
                        </Group>
                    </Timeline.Item>
                </Timeline>

                <Title order={3} mt={20}>
                    版本更新记录
                </Title>
                <Timeline mt={20} active={1} bulletSize={24} lineWidth={2}>

                    <Timeline.Item title="Code review" bullet={<IconCloud size={12} />}>
                        <Text c="dimmed" size="sm">持续更新中... / coding</Text>
                        <Text size="xs" mt={4}>🍒🍒🍒🍒</Text>
                    </Timeline.Item>

                    <Timeline.Item bullet={<IconGitCommit size={12} />} title="Release: v1.0.1" lineVariant='solid'>
                        <Text c="orange" size="sm">功能更新</Text>
                        <Text c="indigo" size="sm">1. 10连抽的逻辑更改为：从分组中抽10次</Text>
                        <Text c="indigo" size="sm">2. "我的分组"中第一个分组用于随机抽的数据</Text>
                        <Text c="indigo" size="sm">3. 点击分组中的条目，可以删除，修改</Text>
                        <Text c="indigo" size="sm">4. 点击分组更多选项，可以新增条目</Text>
                        <Text size="xs" mt={4}>2024-08-17</Text>
                    </Timeline.Item>
                    <Timeline.Item bullet={<IconGitCommit size={12} />} title="Release: v1.0.1" lineVariant='dashed'>
                        <Text c="orange" size="sm">初始化版本，基本功能：</Text>
                        <Text c="indigo" size="sm">1. 单抽，10连抽</Text>
                        <Text c="indigo" size="sm">2. 新增分组信息</Text>
                        <Text c="indigo" size="sm">3. 查看我创建的分组信息： 修改分组名称，删除分组数据</Text>
                        <Text size="xs" mt={4}>2024-04-24</Text>
                    </Timeline.Item>
                    <Timeline.Item mb={20} bullet={<IconGitBranch size={12} />} title="创建项目 / Create Repository">
                        <Text c="indigo" size="md">框架/Framwork: Nextjs</Text>
                        <Text c="indigo" size="md">组件库/UI Libiary: Mantine</Text>
                        <Text c="indigo" size="md">数据库/Database: MongoDB</Text>
                        <Text c="indigo" size="md">Node: v20.12.0</Text>
                        <Text c="indigo" size="md">数据源: Bilibili, 官网</Text>
                        <Text size="xs" mt={4}>2024-04-01 22:14</Text>
                    </Timeline.Item>
                </Timeline>
            </ScrollArea>

        </Paper>
    )
}

export default Others
