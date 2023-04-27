// // 编写第一个mobx：实现计数器案例
import {makeAutoObservable} from 'mobx'

// 定义一个类
class CountStore{
    // 1、定义数据
    count = 0
    constructor() {
        // 2、把数据弄成响应式
        makeAutoObservable(this)
    }
    // 3、定义操作函数（修改数据）
    addCount = () => {
        this.count++
    }
}

class watchStore{
    value = '8888'
}

// 导出
export {CountStore, watchStore} 
