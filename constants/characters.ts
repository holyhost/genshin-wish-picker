

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
    type: Ele,
    id: string,
    star: 1 | 2 | 3 | 4| 5
}

export const Characters: Character[] = [
    {
        name: '甘雨',
        type: Ele.Ice,
        id: 'ganyu',
        star: 5
    },
    {
        name: '阿贝多',
        type: Ele.Geo,
        id: 'abeiduo',
        star: 5
    },
    {
        name: '埃洛伊',
        type: Ele.Ice,
        id: 'ailuoyi',
        star: 4
    },
    {
        name: '安柏',
        type: Ele.Fire,
        id: 'anbo',
        star: 4
    },
    {
        name: '芭芭拉',
        type: Ele.Water,
        id: 'babala',
        star: 4
    },
    {
        name: '班尼特',
        type: Ele.Fire,
        id: 'bannite',
        star: 4
    },
    {
        name: '迪奥娜',
        type: Ele.Ice,
        id: 'diaona',
        star: 4
    },
    {
        name: '迪卢克',
        type: Ele.Fire,
        id: 'diluke',
        star: 5
    },
    {
        name: '菲谢尔',
        type: Ele.Electric,
        id: 'feixier',
        star: 4
    },
    {
        name: '凯亚',
        type: Ele.Ice,
        id: 'kaiya',
        star: 4
    },
    {
        name: '可莉',
        type: Ele.Fire,
        id: 'klee',
        star: 5
    },
    {
        name: '雷泽',
        type: Ele.Electric,
        id: 'leize',
        star: 4
    },
    {
        name: '丽莎',
        type: Ele.Electric,
        id: 'lisha',
        star: 4
    },
    {
        name: '罗莎莉亚',
        type: Ele.Ice,
        id: 'luoshaliya',
        star: 4
    },
    {
        name: '米卡',
        type: Ele.Ice,
        id: 'mika',
        star: 4
    },
    {
        name: '莫娜',
        type: Ele.Water,
        id: 'mona',
        star: 5
    },
    {
        name: '诺艾尔',
        type: Ele.Geo,
        id: 'nuoaier',
        star: 4
    },
    {
        name: '琴',
        type: Ele.Wind,
        id: 'qing',
        star: 5
    },
    {
        name: '砂糖',
        type: Ele.Wind,
        id: 'shatang',
        star: 4
    },
    {
        name: '优菈',
        type: Ele.Ice,
        id: 'ula',
        star: 5
    },
    {
        name: '温迪',
        type: Ele.Wind,
        id: 'wendy',
        star: 5
    }
]