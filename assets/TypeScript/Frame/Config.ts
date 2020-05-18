import { ColorData, ThemeData, MonsterConfig } from "./dts";
export enum PrefabPath{
    heart = "Prefab/Prop/Heart",
    shield = "Prefab/Prop/Shield",
    clock = "Prefab/Prop/Clock",
    coinBag = "Prefab/Prop/CoinBag",
    monster = "Prefab/Monster/Monster",
}
export enum DirType{
    Upward,     //向上
    HorFlip,    //水平方向翻转
    Forwards,   //朝向前方
    Rotate,     //旋转
}
export namespace Config{
    export let unlockPaintTimes = 2;
    export let heroAdvises = [
        "猫咪🐱","狗🐶","鸭子🦆","树叶🍃","公鸡🐔","圣诞树🎄","蘑菇🍄","鱼🐟","仙人掌🌵",
        "兔子🐰","猪头🐷","玫瑰🌹","火柴人","蛋糕🍰","奶酪🧀️","糖果🍬","彩虹🌈","独角兽🦄️",
        "章鱼🐙","灯泡💡",
    ];
    export let monsterAdvises = [
        "剑🗡️","恐龙🦖","仙人掌🌵","蜜蜂🐝","导弹🚀","箭🏹️","陨石","星星✨","水母"
    ];
    export let paintTips = [
        "[颜料桶]要点在封闭的圆圈内哦！",
        "使用[颜料桶]，快速填充色彩！",
        "请尽量贴合[蓝圈]作画",
        // "画完后可以分享创作过程哦！",
    ];
    export let themes:ThemeData[]=[
        {id:1, heroId:1, cost:0, monsterIds:[11,12,13,14]},
        {id:2, heroId:2, cost:0, monsterIds:[21,22,23]},
        {id:3, heroId:3, cost:0, monsterIds:[31,32,33]},
        {id:4, heroId:4, cost:1000, monsterIds:[41]},
        {id:5, heroId:5, cost:2000, monsterIds:[51,52]},
        {id:6, heroId:6, cost:3000, monsterIds:[61,62,63]},
        {id:7, heroId:7, cost:4000, monsterIds:[71,72]},
        {id:8, heroId:8, cost:5000, monsterIds:[81,82]},

        {id:9, heroId:9, cost:6000, monsterIds:[91]},
        {id:10, heroId:10, cost:7000, monsterIds:[101]},
        {id:11, heroId:11, cost:8000, monsterIds:[111,112,113]},
        {id:12, heroId:12, cost:9000, monsterIds:[121,122]},
        {id:13, heroId:13, cost:10000, monsterIds:[131,132]},
    ]
    export let heros:any[] = [
        {id:1, name:"", url:"Atlas/Hero/fish" },
        {id:2, name:"", url:"Atlas/Hero/airplane" },
        {id:3, name:"", url:"Atlas/Hero/aloneMan" },
        {id:4, name:"", url:"Atlas/Hero/snowMan" },
        {id:5, name:"", url:"Atlas/Hero/ninja" },
        {id:6, name:"", url:"Atlas/Hero/fatGirl" },
        {id:7, name:"", url:"Atlas/Hero/earth" },
        {id:8, name:"", url:"Atlas/Hero/tree" },
        {id:9, name:"", url:"Atlas/Hero/cow" },
        {id:10, name:"", url:"Atlas/Hero/flushToilet" },
        {id:11, name:"", url:"Atlas/Hero/card3" },
        {id:12, name:"", url:"Atlas/Hero/castle" },
        {id:13, name:"", url:"Atlas/Hero/vampires" },
    ] 
    export let monsters:MonsterConfig[] = [
        {id:11, url:"Atlas/Monster/punk", name:"鲨鱼", dirType:DirType.Forwards, box:{size:cc.size(115,65)} },
        {id:12, url:"Atlas/Monster/lanternFish", name:"灯笼鱼", dirType:DirType.Forwards, box:{size:cc.size(115,80)} },
        {id:13, url:"Atlas/Monster/jellyFish", name:"水母", dirType:DirType.HorFlip, box:{size:cc.size(100,100)} },
        {id:14, url:"Atlas/Monster/fishBone", name:"鱼骨头", dirType:DirType.Forwards, box:{size:cc.size(100,50)} },

        {id:21, url:"Atlas/Monster/bullet", name:"子弹", dirType:DirType.Forwards, box:{size:cc.size(100,30)} },
        {id:22, url:"Atlas/Monster/missile1", name:"导弹", dirType:DirType.Forwards, box:{size:cc.size(115,45)} },
        {id:23, url:"Atlas/Monster/missile2", name:"导弹", dirType:DirType.Forwards, box:{size:cc.size(115,45)} },

        {id:31, url:"Atlas/Monster/lonely1", name:"孤独", dirType:DirType.Upward, box:{size:cc.size(110,60)} },
        {id:32, url:"Atlas/Monster/lonely2", name:"寂寞", dirType:DirType.Upward, box:{size:cc.size(110,60)}  },
        {id:33, url:"Atlas/Monster/lonely3", name:"冷", dirType:DirType.Upward, box:{size:cc.size(110,60)} },

        {id:41, url:"Atlas/Monster/fireBall", name:"火球", dirType:DirType.Forwards, box:{size:cc.size(90,45)} },

        {id:51, url:"Atlas/Monster/shuriken1", name:"手里剑", dirType:DirType.Rotate, circle:{radius:50}, angleSpeedRange:[[-360,-150],[150,300]] },
        {id:52, url:"Atlas/Monster/shuriken2", name:"苦无", dirType:DirType.Forwards, box:{size:cc.size(130,30)} },

        {id:61, url:"Atlas/Monster/hamberger", name:"汉堡", dirType:DirType.HorFlip, circle:{radius:55} },
        {id:62, url:"Atlas/Monster/teaMilk", name:"奶茶", dirType:DirType.HorFlip, box:{size:cc.size(60,100), offset:cc.v2(0,-8)} },
        {id:63, url:"Atlas/Monster/drumsticks", name:"鸡腿", dirType:DirType.Rotate, circle:{radius:40, offset:cc.v2(7,16)} },


        {id:71, url:"Atlas/Monster/moon", name:"小行星", dirType:DirType.Rotate, circle:{radius:60}, angleSpeedRange:[[-30,30]] },
        {id:72, url:"Atlas/Monster/meteorite", name:"陨石", dirType:DirType.Rotate, circle:{radius:50}, angleSpeedRange:[[-90,90]] },
        
        {id:81, url:"Atlas/Monster/axe", name:"斧头", dirType:DirType.Rotate, box:{size:cc.size(70,90)}, angleSpeedRange:[[-300,-200]] },
        {id:82, url:"Atlas/Monster/saw", name:"锯子", dirType:DirType.Forwards, box:{size:cc.size(120,45)} },
        
        {id:91, url:"Atlas/Monster/aline", name:"外星人", dirType:DirType.Upward, circle:{radius:50} },
        
        {id:101, url:"Atlas/Monster/shit", name:"便便", dirType:DirType.Upward, box:{size:cc.size(60,60)} },
        
        {id:111, url:"Atlas/Monster/cardK", name:"K", dirType:DirType.Rotate, box:{size:cc.size(70,90)}, angleSpeedRange:[[-150,-100],[100,150]] },
        {id:112, url:"Atlas/Monster/cardA", name:"A", dirType:DirType.Rotate, box:{size:cc.size(70,90)}, angleSpeedRange:[[-150,-100],[100,150]] },
        {id:113, url:"Atlas/Monster/cardJoker", name:"JOKER", dirType:DirType.Rotate, box:{size:cc.size(70,90)}, angleSpeedRange:[[-150,-100],[100,150]] },

        {id:121, url:"Atlas/Monster/bomb1", name:"炸弹", dirType:DirType.Rotate, box:{size:cc.size(70,90)}, angleSpeedRange:[[-150,-100],[100,150]] },
        {id:122, url:"Atlas/Monster/bomb2", name:"炸弹", dirType:DirType.Rotate, box:{size:cc.size(60,110)}, angleSpeedRange:[[-150,-100],[100,150]] },

        {id:131, url:"Atlas/Monster/cross", name:"十字架", dirType:DirType.Upward, circle:{radius:50} },
        {id:132, url:"Atlas/Monster/rip", name:"墓碑", dirType:DirType.Upward, circle:{radius:50} },

    ]

    export let colors:ColorData[] = [
        {id:1, name:'黑色', color:cc.color(0,0,0)},
        {id:2, name:'黑色', color:cc.color(34,32,52)},
        {id:3, name:'黑色', color:cc.color(69,40,60)},
        {id:4, name:'黑色', color:cc.color(102,57,49)},
        {id:5, name:'黑色', color:cc.color(143,86,59)},
        {id:6, name:'黑色', color:cc.color(223,113,38)},
        {id:7, name:'黑色', color:cc.color(217,160,102)},
        {id:8, name:'黑色', color:cc.color(238,195,154)},
        {id:9, name:'黑色', color:cc.color(251,242,54)},
        {id:10, name:'黑色', color:cc.color(153,229,80)},
        {id:11, name:'黑色', color:cc.color(106,190,48)},
        {id:12, name:'黑色', color:cc.color(55,148,110)},
        {id:13, name:'黑色', color:cc.color(75,105,47)},
        {id:14, name:'黑色', color:cc.color(82,75,36)},
        {id:15, name:'黑色', color:cc.color(50,60,57)},
        {id:16, name:'黑色', color:cc.color(63,63,116)},
        {id:17, name:'黑色', color:cc.color(48,96,130)},
        {id:18, name:'黑色', color:cc.color(91,110,225)},
        {id:19, name:'黑色', color:cc.color(99,155,255)},
        {id:20, name:'黑色', color:cc.color(95,205,228)},
        {id:21, name:'黑色', color:cc.color(203,219,252)},
        {id:22, name:'黑色', color:cc.color(255,255,255)},
        {id:23, name:'黑色', color:cc.color(155,173,183)},
        {id:24, name:'黑色', color:cc.color(132,126,135)},
        {id:25, name:'黑色', color:cc.color(105,106,106)},
        {id:26, name:'黑色', color:cc.color(89,86,82)},
        {id:27, name:'黑色', color:cc.color(118,66,138)},
        {id:28, name:'黑色', color:cc.color(172,50,50)},
        {id:29, name:'黑色', color:cc.color(217,87,99)},
        {id:30, name:'黑色', color:cc.color(215,123,186)},
        {id:31, name:'黑色', color:cc.color(143,151,74)},
        {id:32, name:'黑色', color:cc.color(138,111,48)},
    ]
    export let finishRewards = [
        {type:"coin", cnt: 50, pr:10},
        {type:"coin", cnt: 100, pr:8},
        {type:"coin", cnt: 300, pr:5},
        {type:"coin", cnt: 800, pr:2},
        {type:"coin", cnt: 1500, pr:1},
    ];
    export let gainKeyCosts = [10, 20, 40];
    export function getlvlConf(lvl:number){
        let conf = cc.loader.getRes("Conf/Level");
        return conf.json[lvl];
    }
    export function getColorDataByID(id){
        return colors.find((data)=>{return data.id == id});
    }
}