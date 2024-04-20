

export enum Ele  {
    Fire= 'fire',
    Ice= 'ice',
    Geo= 'geo',
    Water= 'water',
    Dendro= 'dendro',
    Electric= 'electric',
    Wind= 'wind'
} 

export enum Country  {
    Fire= 'fire',
    Ice= 'ice',
    Geo= 'geo',
    Water= 'water',
    Dendro= 'dendro',
    Electric= 'electric',
    Wind= 'wind'
} 
export type EleType = keyof typeof Ele

export type Character = {
    name: string,
    nick?: string,
    type: Ele,
    id: string,
    star: 1 | 2 | 3 | 4| 5
}

export const Characters: Character[] = [
    {
        name: '甘雨',
        type: Ele.Ice,
        nick: '',
        id: 'ganyu',
        star: 5
    },
    {
        name: '阿贝多',
        type: Ele.Geo,
        nick: '',
        id: 'abeiduo',
        star: 5
    },
    {
        name: '埃洛伊',
        type: Ele.Ice,
        nick: '',
        id: 'ailuoyi',
        star: 4
    },
    {
        name: '安柏',
        type: Ele.Fire,
        nick: '',
        id: 'anbo',
        star: 4
    },
    {
        name: '芭芭拉',
        type: Ele.Water,
        nick: '',
        id: 'babala',
        star: 4
    },
    {
        name: '班尼特',
        type: Ele.Fire,
        nick: '',
        id: 'bannite',
        star: 4
    },
    {
        name: '迪奥娜',
        type: Ele.Ice,
        nick: '',
        id: 'diaona',
        star: 4
    },
    {
        name: '迪卢克',
        type: Ele.Fire,
        nick: '',
        id: 'diluke',
        star: 5
    },
    {
        name: '菲谢尔',
        type: Ele.Electric,
        nick: '',
        id: 'feixier',
        star: 4
    },
    {
        name: '凯亚',
        type: Ele.Ice,
        nick: '',
        id: 'kaiya',
        star: 4
    },
    {
        name: '可莉',
        type: Ele.Fire,
        nick: '',
        id: 'klee',
        star: 5
    },
    {
        name: '雷泽',
        type: Ele.Electric,
        nick: '',
        id: 'leize',
        star: 4
    },
    {
        name: '丽莎',
        type: Ele.Electric,
        nick: '',
        id: 'lisha',
        star: 4
    },
    {
        name: '罗莎莉亚',
        type: Ele.Ice,
        id: 'luoshaliya',
        nick: '',
        star: 4
    },
    {
        name: '米卡',
        type: Ele.Ice,
        nick: '',
        id: 'mika',
        star: 4
    },
    {
        name: '莫娜',
        type: Ele.Water,
        nick: '',
        id: 'mona',
        star: 5
    },
    {
        name: '诺艾尔',
        type: Ele.Geo,
        nick: '',
        id: 'nuoaier',
        star: 4
    },
    {
        name: '琴',
        type: Ele.Wind,
        nick: '',
        id: 'qing',
        star: 5
    },
    {
        name: '砂糖',
        type: Ele.Wind,
        nick: '',
        id: 'shatang',
        star: 4
    },
    {
        name: '优菈',
        type: Ele.Ice,
        nick: '',
        id: 'ula',
        star: 5
    },
    {
        name: '温迪',
        type: Ele.Wind,
        nick: '',
        id: 'wendy',
        star: 5
    },
    {
        name: '纳维莱特',
        type: Ele.Water,
        nick: '孙悟空',
        id: 'naweilaite',
        star: 5
    },
    {
        name: '枫原万叶',
        type: Ele.Wind,
        nick: '',
        id: 'wangye',
        star: 5
    },
    {
        name: '七七',
        type: Ele.Ice,
        nick: '',
        id: '77',
        star: 5
    },
    {
        name: '白术',
        type: Ele.Dendro,
        nick: '',
        id: 'baishu',
        star: 5
    },
    {
        name: '魈',
        type: Ele.Wind,
        nick: '',
        id: 'xiao',
        star: 5
    },
    {
        name: '北斗',
        type: Ele.Electric,
        nick: '',
        id: 'beidou',
        star: 4
    },
    {
        name: '凝光',
        type: Ele.Geo,
        nick: '',
        id: 'ningguang',
        star: 4
    },
    {
        name: '香菱',
        type: Ele.Fire,
        nick: '',
        id: 'xiangling',
        star: 4
    },
    {
        name: '行秋',
        type: Ele.Water,
        nick: '',
        id: 'xingqiu',
        star: 4
    },
    {
        name: '重云',
        type: Ele.Ice,
        nick: '',
        id: 'chongyun',
        star: 4
    },
    {
        name: '刻晴',
        type: Ele.Electric,
        nick: '',
        id: 'keqing',
        star: 5
    },
    {
        name: '达达利亚',
        type: Ele.Water,
        nick: '',
        id: 'dadaliya',
        star: 5
    },
    {
        name: '钟离',
        type: Ele.Geo,
        nick: '',
        id: 'zhongli',
        star: 5
    },
    {
        name: '辛焱',
        type: Ele.Fire,
        nick: '',
        id: 'xinyan',
        star: 4
    },
    {
        name: '胡桃',
        type: Ele.Fire,
        nick: '',
        id: 'hutao',
        star: 5
    },
    {
        name: '烟绯',
        type: Ele.Fire,
        nick: '',
        id: 'yanfei',
        star: 4
    },
    {
        name: '申鹤',
        type: Ele.Ice,
        nick: '',
        id: 'shenhe',
        star: 5
    },
    {
        name: '云堇',
        type: Ele.Geo,
        nick: '',
        id: 'yunjin',
        star: 4
    },
    {
        name: '夜兰',
        type: Ele.Water,
        nick: '',
        id: 'yelan',
        star: 5
    },
    {
        name: '瑶瑶',
        type: Ele.Dendro,
        nick: '',
        id: 'yaoyao',
        star: 4
    },
    {
        name: '闲云',
        type: Ele.Wind,
        nick: '',
        id: 'xianyun',
        star: 5
    },
    {
        name: '嘉明',
        type: Ele.Fire,
        nick: '',
        id: 'jiaming',
        star: 4
    },
]