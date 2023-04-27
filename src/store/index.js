// 组合子模块，封装统一导出供业务使用的方法
import React from 'react'
// 导入子模块
import { ListStore } from './List.Store'
import { CountStore, watchStore } from './Counter.Store'
import {TodoStore} from './todo.Store'

// 1、声明一个rootStore
class RootStore{
    constructor() {
        // 2、实例化子模块
        this.counterStore = new CountStore()
        this.watchStore = new watchStore()
        this.listStore = new ListStore()
        this.todoStore = new TodoStore()
    }
}

// 3、使用React useContext机制完成统一方法封装
const rootStore = new RootStore() // 根实例化操作
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context) // 通过useContext拿到rootStore实例对象然后返回，只要在业务组件中调用useStore即可使用rootStore.

export {useStore} // 导出

