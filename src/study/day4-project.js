// 练习 - 组件通信（父子互相传值）
import React from 'react'

// ListItem组件：渲染列表
function ListItem(props) {
    const { createList, delListItem } = props
    return (
        <>
            <h1>我是ListItem组件</h1>
            <ul>
                {createList.map(
                item => <li key={item.id}>
                        <span>这是{item.name}，目前在做{item.info}活动，只需要{item.price}元</span>
                        <button onClick={()=>delListItem(item.id)}>删除</button>
                    </li>)}
            </ul>
        </>
    )
}

// App组件：提供数据
class App extends React.Component{
    state = {
        list: [
            { id: 1, name: "篮球", price: 18, info: "开业大酬宾" },
            { id: 2, name: "羽毛球", price: 68, info: "新用户专享" },
            { id: 3, name: "乒乓球", price: 38, info: "老顾客回顾" }
        ]
    }
    delListItem = (id)=> {
        this.setState({
            list:this.state.list.filter(item=>item.id!==id)
        })
    }
    render() {
        return (
            <>
                <div>
                    <h1>this is App</h1>
                    <ListItem delListItem={this.delListItem} createList={this.state.list}></ListItem>
                </div>
            </>
        )
    }
} 

export default App;
