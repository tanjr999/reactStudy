import {makeAutoObservable} from 'mobx'

// 定义一个类
class ListStore{
    // 定义一个原始数据
    list = ['react', 'vue']
    constructor() {
        // 把数据弄成响应式(必要的)
        makeAutoObservable(this)
    }
    // 定义计算属性
    get filterList() {
        return this.list.filter(item => item > 2)
    }
    // 方法修改list
    addList = () => {
        this.list.push('js','angular')
    }
}

// 导出
export {ListStore} 
