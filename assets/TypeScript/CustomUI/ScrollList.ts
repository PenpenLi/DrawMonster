import { Util } from "../Frame/Util";

const {ccclass,menu, property} = cc._decorator;

@ccclass
@menu("自定义UI/ScrollList")
export default class ScrollList extends cc.ScrollView {
    public static SELECT_CHILD = "SELECT_CHILD";     //scrollList节点事件：选中子节点。param1:item, param2:data
    public static CLICK_CHILD = "CLICK_CHILD";     //scrollList节点事件：点击节点。param1:item, param2:data
    public static STATE_CHANGE = "STATE_CHANGE";     //item节点事件：状态改变。param：是否被选中
    public static SET_DATA = "SET_DATA";             //item节点事件：数据改变。param：新数据
    public static SCROLL_MOVE = "SCROLL_MOVE";        //item节点事件：滚动条发生滑动。param：ScrollList
    @property(cc.Node)
    private itemPrefab:cc.Node = null;

    private itemsPool:cc.Node[] = []; 
    private dataArr:any[] = [];
    private map:Map<any,cc.Node> = new Map<any,cc.Node>();      //数据 映射到 Node，根据数据找到显示他的Node
    private paddingLeft = 0;
    private paddingRight = 0; 
    private paddingTop = 0;
    private paddingBottom = 0; 
    
    private spacingX = 0; 
    private spacingY = 0;  
    private itemWidth = 0;
    private itemHeight = 0;
    private maskWidth = 100;
    private maskHeight = 100;
    private inited = false;
    private layoutType = cc.Layout.Type.NONE;

    onLoad () {
        if(!this.inited){
            this.init();
        }
        this.node.on('scrolling', this.onScrolling, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }
    onTouchEnd(){
        let offset = this.getScrollOffset();
        if(this.layoutType == cc.Layout.Type.HORIZONTAL){
            let idx =  Math.floor(( this.maskWidth/2 - offset.x)/(this.itemWidth+this.spacingX));
            idx = Util.clamp(idx, 0, this.dataArr.length-1);
            let pos = this.calcuPos(idx);
            pos.x -= this.maskWidth/2;
            this.scrollToOffset(pos, 0.3);
            this.selectItemByIdx(idx);
        }else if(this.layoutType == cc.Layout.Type.VERTICAL){

        }else if(this.layoutType == cc.Layout.Type.GRID){

        }
    }
    init(){
        this.inited = true;
        let layout = this.content.getComponent(cc.Layout);
        if(layout){
            layout.enabled = false;
            this.paddingLeft = layout.paddingLeft;
            this.paddingRight = layout.paddingRight;
            this.paddingTop = layout.paddingTop;
            this.paddingBottom = layout.paddingBottom;
            this.spacingX = layout.spacingX;
            this.spacingY = layout.spacingY;
            this.layoutType = layout.type;
        }
        let maskNode = this.getComponentInChildren(cc.Mask).node;
        if(maskNode){
            this.maskWidth = maskNode.width;
            this.maskHeight = maskNode.height;
        }
        if(this.itemPrefab){
            this.itemWidth = this.itemPrefab.width;
            this.itemHeight = this.itemPrefab.height;
            this.itemPrefab.active = false;
        }
    }
    onDisable(){

    }
    onScrolling(){
        this.updateList();
    }
    updateList(){
        let offset = this.getScrollOffset();
        //获取应该在显示区域内的数据
        let startIdx, endIdx;
        if(this.layoutType == cc.Layout.Type.HORIZONTAL){
            startIdx = Math.floor((-offset.x-this.paddingTop)/(this.itemWidth+this.spacingX));
            endIdx = Math.floor((-offset.x + this.maskWidth-this.paddingTop)/(this.itemWidth+this.spacingX)) + 1;
        }else if(this.layoutType == cc.Layout.Type.VERTICAL){
            startIdx = Math.floor((offset.y + this.paddingTop)/(this.itemHeight+this.spacingY));
            endIdx = Math.floor((offset.y + this.maskHeight + this.paddingTop)/(this.itemHeight+this.spacingY)) + 1;
        }else if(this.layoutType == cc.Layout.Type.GRID){
            let col = Math.floor((this.content.width-this.paddingLeft-this.paddingRight+this.spacingX)/(this.itemWidth+this.spacingX));
            startIdx = Math.floor((offset.y+this.paddingTop)/(this.itemHeight+this.spacingY)) * col;
            endIdx = Math.floor((offset.y + this.maskHeight+this.paddingTop)/(this.itemHeight+this.spacingY))*col + col;
        }
        startIdx = Math.max(startIdx, 0);
        endIdx = Math.min(endIdx, this.dataArr.length);
        let selectLost = true;
        for(let i=0; i<this.dataArr.length; i++){
            let data = this.dataArr[i];
            let item = this.findItemByData(data);
            if(i>=startIdx && i<endIdx){   //应该显示
                if(!item){                      //如果这个数据还没有对应的显示item
                    item = this.newItem();      //获取一个item显示之
                    this.content.addChild(item);    
                    item.position = this.calcuPos(i);
                    item.emit(ScrollList.SET_DATA, data);
                    item.emit(ScrollList.STATE_CHANGE, this.curSelectData == data);
                    this.map.set(data, item);
                }
                item.emit(ScrollList.SCROLL_MOVE, this);
            }else{                          //不该显示
                if(item){                       
                    this.itemsPool.push(item);      //放回对象池
                    this.content.removeChild(item);
                    this.map.delete(data);
                }
            }
            if(this.curSelectData == data){
                selectLost = false;
            }
        }
        if(selectLost){
            if(this.dataArr.length > 0){
                //选中项丢失，则自动选择替换丢失项位置的那一项
                let idx = Math.min(this.curSelectIdx, this.dataArr.length-1);
                this.selectItemByIdx(idx);
            }else{
                //数组为空
                this.node.emit(ScrollList.SELECT_CHILD, null, null);
                this.curSelectIdx = 0;
                this.curSelectData = null;
            }
        }
    }
    public calcuPos(idx){
        let x = 0;
        let y = 0;
        if(this.layoutType == cc.Layout.Type.HORIZONTAL){
            x = (idx+this.itemPrefab.anchorX)*this.itemWidth + idx*this.spacingX + this.paddingLeft;
        }else if(this.layoutType == cc.Layout.Type.VERTICAL){
            y = (idx+this.itemPrefab.anchorY)*this.itemHeight + idx*this.spacingY + this.paddingTop;
            y = -y;
        }else if(this.layoutType == cc.Layout.Type.GRID){
            let col = Math.floor((this.content.width-this.paddingLeft-this.paddingRight+this.spacingX)/(this.itemWidth+this.spacingX));
            let iRow = Math.floor(idx/col);
            let iCol = idx%col;
            x = (iCol+this.itemPrefab.anchorX)*this.itemWidth + iCol*this.spacingX + this.paddingLeft;
            y = (iRow+1-this.itemPrefab.anchorY)*this.itemHeight + iRow*this.spacingY + this.paddingTop;
            y = -y;
        }
        return cc.v2(x,y);
    }
    public setDataArr(dataArr:any[]){
        dataArr = dataArr || [];
        if(!this.inited){
            this.init();
        }
        this.dataArr = dataArr;
        if(this.layoutType == cc.Layout.Type.HORIZONTAL){
            this.content.width = dataArr.length * this.itemWidth + this.paddingLeft + this.paddingRight + (dataArr.length-1)*this.spacingX;
        }else if(this.layoutType == cc.Layout.Type.VERTICAL){
            this.content.height = dataArr.length * this.itemHeight + this.paddingTop + this.paddingBottom + (dataArr.length-1)*this.spacingY;
        }else if(this.layoutType == cc.Layout.Type.GRID){
            let length = dataArr.length;
            let col = Math.floor((this.content.width-this.paddingLeft-this.paddingRight+this.spacingX)/(this.itemWidth+this.spacingX));
            let rowCnt = Math.ceil(length/col);
            this.content.height = rowCnt*this.itemHeight + this.paddingTop + this.paddingBottom + (rowCnt-1)*this.spacingY;
        }
        for(let i=0; i<this.content.childrenCount; i++){
            let child =this.content.children[i];
            this.itemsPool.push(child);
        }
        this.content.removeAllChildren();
        this.map.clear();
        this.updateList();
    }
    public newItem():cc.Node{
        let item = null;
        if(this.itemsPool.length>0){
            item = this.itemsPool.shift();
        }else{
            item = cc.instantiate(this.itemPrefab);
            item.on("click", this.onClickItem, this);
        }
        item.active = true;
        return item;
    }
    public findItemByData(targetData){
        return this.map.get(targetData);
    }
    private curSelectIdx:number = 0;
    private curSelectData:cc.Node = null;
    public selectItemByIdx(idx){
        if(idx>=0 && this.dataArr && idx<this.dataArr.length){
            this.selectItemByData(this.dataArr[idx]);
        }
    }
    public selectItemByItem(target){
        this.map.forEach((item, data)=>{
            if(item == target){
                this.selectItemByData(data);
            }
        });
    }
    public selectItemByData(selectData, emitSelectChild = true){
        let last = this.curSelectData;
        this.map.forEach((item, data)=>{
            if(data == selectData){
                //被选中的Item
                if(emitSelectChild){
                    this.node.emit(ScrollList.SELECT_CHILD, item, data);
                }
                item.emit(ScrollList.STATE_CHANGE, true);
                this.curSelectData = data;
                this.curSelectIdx = this.dataArr.indexOf(data);
            }else{
                //其他Item
                if(data == last){
                    //上一个被点击的Item
                    item.emit(ScrollList.STATE_CHANGE, false);
                }
            }
        });  
    }
    private onClickItem(evt:cc.Event){
        let target = evt.target as cc.Node;
        this.map.forEach((item, data)=>{
            if(item == target){
                this.node.emit(ScrollList.CLICK_CHILD, item, data);
            }
        });
        let comps = target.getComponents(cc.Component);
        for(let i=0;i<comps.length;i++){
            let comp = comps[i];
            if(typeof(comp["canSelect"]) == "function"){
                if(!comp["canSelect"]()){
                    return;
                }
            }
        }
        this.selectItemByItem(target);       
    }
    public centerOnIdx(idx){
        idx = Util.clamp(idx, 0, this.dataArr.length-1);
        let pos = this.calcuPos(idx);
        pos.x -= this.maskWidth/2;
        this.scrollToOffset(pos, 0.3);
        this.updateList();
    }
    public centerOnData(data){
        let idx = this.dataArr.indexOf(data);
        this.centerOnIdx(idx);
    }
}
