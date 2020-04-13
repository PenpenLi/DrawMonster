import { ColorData, DramaData, MonsterConfig } from "./dts";
export enum PrefabPath{
    heart = "Prefab/Prop/Heart",
    shield = "Prefab/Prop/Shield",
    monster = "Prefab/Monster/Monster",
}
export enum DirType{
    Upward,     //向上
    HorFlip,    //水平方向翻转
    Forwards,   //朝向前方
    Rotate,     //旋转
}
export namespace Config{
    export function getColorDataByID(id){
        return colors.find((data)=>{return data.id == id});
    }
    export let dramas:DramaData[]=[

        {id:1, heroId:1, monsterIds:[1,2,3]},
        {id:2, heroId:2, monsterIds:[1,2,3]},
        {id:3, heroId:3, monsterIds:[1,2,3]},
        {id:4, heroId:4, monsterIds:[1,2,3]},
        {id:5, heroId:5, monsterIds:[1,2,3]},
        {id:0, heroId:6, monsterIds:[1,2,3]},
    ]
    export let heros:any[] = [
        {id:1, name:"害羞鹅", url:"Atlas/Hero/hero1" },
        {id:2, name:"黄章鱼", url:"Atlas/Hero/hero2" },
        {id:3, name:"小鱼", url:"Atlas/Hero/hero3" },
        {id:4, name:"鼠标", url:"Atlas/Hero/hero4" },
        {id:5, name:"咸蛋超人", url:"Atlas/Hero/hero5" },
        {id:6, name:"小恐龙", url:"Atlas/Hero/hero6" },
    ] 
    export let monsters:MonsterConfig[] = [
        {id:1, url:"Atlas/Monster/monster1", dirType:DirType.Rotate},
        {id:2, url:"Atlas/Monster/monster2", dirType:DirType.Forwards},
        {id:3, url:"Atlas/Monster/monster3", dirType:DirType.Forwards},
        {id:4, url:"Atlas/Monster/monster4", dirType:DirType.HorFlip},
        {id:5, url:"Atlas/Monster/monster5", dirType:DirType.Upward},
        {id:6, url:"Atlas/Monster/monster6", dirType:DirType.Forwards},
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
    
    export function getlvlConf(lvl:number){
        let conf = cc.loader.getRes("Conf/Level");
        return conf.json[lvl];
    }
}