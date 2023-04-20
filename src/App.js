import React from 'react'

class Test extends React.Component{
    // 如果用到的数据是组件的状态需要去影响视图时就要定义到state中，不影响视图时就可定义成一个普通的实例属性，不需要去state中定义，确保state的精简
    timer = null
    componentDidMount() {
        this.timer = setInterval(() => {
            console.log("定时器开启")
        }, 1000)
    }
    componentWillUnmount() {
        console.log('销毁组件');
        // 清理定时器
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>test</div>
        )
    }
}

class App extends React.Component{
    state = {
        count: 0,
        flag: true
    }
    add = () => {
        this.setState({
            count: this.state.count + 1,
            flag: !this.state.flag
        })
    }
    constructor() { // 1、constructor只有在创建组件初始化时执行一次，主要作用：初始化state，创建ref
        super()
        console.log('constructor')
    }
    componentDidMount() { // 3、组件挂载（完成dom渲染）后执行，初始化时只执行一次，主要作用：发送网络请求，DOM操作
        console.log('componentDidMount')
        // ajax请求 类似于vue的mounted
    }
    componentDidUpdate() { // 组件更新后（DOM渲染完毕）才会触发，作用：可以获取到更新后的DOM内容，注意：不能在里面调用this.setState()
        console.log('componentDidUpdate')
    }
    componentWillUnmount() { // 组件卸载时触发，作用：执行清理工作（如清理定时器）
        
    }
    render() { // 2、render每次组件渲染时都会触发，注意：render函数里面不能调用this.setState()
        console.log('render')
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.add}>递增</button>
                {/* 通过一个数据状态的切换，控制Test组件进行销毁重建，发送组件卸载 */}
                {this.state.flag ? <Test></Test> : null}
            </div>
        )
    }
} 

export default App;
