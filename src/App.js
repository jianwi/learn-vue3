import { defineComponent, h} from "@vue/runtime-core";


export default defineComponent({
    // vue template 最终会渲染成 render 
    render(){
        const vnode = h("rect",{
            x:100,
            h:100
        },["子元素", h("circle",{r:100})])
        return vnode
        
    }

})