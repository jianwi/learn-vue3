import {createRenderer} from "@vue/runtime-core"
import App  from "./src/App.js";
import {Application, Graphics,Text}  from "pixi.js";


const { createApp } = createRenderer({
    createElement(type)
    {
        console.log(type)
        //  type 来自 render 函数(h)
        
        // 基于type 创建 canvas 元素
        let element
        if (type === "rect") {
            element = new Graphics()
            element.beginFill(0xff0000)
            element.drawRect(0,0,300,300)
            element.endFill()
        }else if (type === "circle") {
            element = new Graphics()
            element.beginFill(0xffffff)
            element.drawCircle(100,100,80)
            element.endFill()
        }
        return element
    },
    insert(el,parent){
        // 插入上面函数 createElement 创建的元素
        console.log(el,parent)
        parent.addChild(el)
    },
    patchProp(el,key,preValue,nextValue){
        if (key === "x") {
            el.width = nextValue
        }
        if (key === "h") {
            el.height = nextValue
        }
    },
    setElementText(node,text){
        const cText = new Text(text)
        cText.width=212
        cText.height=283
        node.addChild(cText)
    },
    createText(text)
    {
        console.log("text----",text)
        return new Text(text)
    }
})


// App.vue
// 1. 创建根组件
// 2. 创建根容器
// createApp(rootComponent).mount(rootContainer)

const game = new Application({
    width:400,
    height:880
})

// console.log(game)

document.body.append(game.view)
createApp(App).mount(game.stage)
