import { makeAutoObservable } from 'mobx'

class TodoStore{
    // 业务状态数据
    list = [
        { id: 1, content: '吃火锅', isDone: true },
        { id: 2, content: '看电影', isDone: true },
        { id: 3, content: '吃凯里酸汤鱼', isDone: false }
    ]

    constructor() {
        makeAutoObservable(this)
    }
     
    // 单选操作
    singleCheck(id, isDone) {
        const item = this.list.find(item => item.id === id)
        item.isDone = isDone
    }
    // 全选操作
    allCheck(checked) { // 接收组件传过来的参数
        // 把所有项的isDone属性，都按照传入的最新状态进行修改
        this.list.forEach(item => {
            item.isDone = checked
        })
    }
    // 计算属性，只有所有子选项都是选中的时候才是选中的状态
    get isAll() {
        return this.list.every(item => item.isDone)
    }
    // 删除
    delTodo(id) {
        this.list = this.list.filter(item => item.id!==id)
    }
    // 新增
    addTodo(todo) {
        this.list.push(todo)
    }
    // 任务列表已完成数量
    get compeletedNum() {
        const num = this.list.filter(item => item.isDone !== false)
        return num.length
    }
}

export {TodoStore}