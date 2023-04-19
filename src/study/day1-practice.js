import "./index.css";
import avatar from "./images/avatar.png";
import React, { createRef } from 'react'
import {v4 as uuid} from 'uuid' // 生成一个独一无二的id


// 综合练习：切换tab、点赞取消点赞、新增列表项、删除列表项
class Project extends React.Component{
    state = {
        // hot: 热度排序  time: 时间排序
        tabs: [
            {
                id: 1,
                name: "热度",
                type: "hot"
            },
            {
                id: 2,
                name: "时间",
                type: "time"
            }
        ],
        active: "hot",
        list: [
            {
                id: 1,
                author: "刘德华",
                comment: "给我一杯忘情水",
                time: new Date("2021-10-10 09:09:00"),
                // 1: 点赞 0：无态度 -1:踩
                attitude: 1
            },
            {
                id: 2,
                author: "周杰伦",
                comment: "哎哟，不错哦",
                time: new Date("2021-10-11 09:09:00"),
                // 1: 点赞 0：无态度 -1:踩
                attitude: 0
            },
            {
                id: 3,
                author: "五月天",
                comment: "不打扰，是我的温柔",
                time: new Date("2021-10-11 10:09:00"),
                // 1: 点赞 0：无态度 -1:踩
                attitude: -1
            }
        ],
        comment: '' //存储评论框内容
    };
    // 回调函数
    formatTime(time) {// 转换时间
        return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
    }
    getTab = (type) =>{
        // 思路：点击谁就把设计的type属性赋给state的active
        this.setState({
            active: type
        })
    }
    textareaChange = (e) => {
        // 受控组件的回调
        this.setState({
            comment: e.target.value
        })
    }
    submitComment = () => {// 提交评论
        // 给评论列表追加评论
        this.setState({
            list: [
                ...this.state.list,
                {
                    id: uuid(), // 生成独一无二的Id,可以使用uuid包（安装：yarn add uuid;导入：import {v4 ad uuid} from 'uuid'）
                    author: "cp",
                    comment: this.state.comment,
                    time: new Date(),
                    // 1: 点赞 0：无态度 -1:踩
                    attitude: 0
                }
            ]
        })
    }
    delComment = (id) => {// 删除评论
        this.setState({
            list: this.state.list.filter(item => item.id !== id) 
        })
    }
    clickLike = (currentItem) => { // 切换喜欢
        this.setState({
            list: this.state.list.map((item) => {
                // 判断条件
                if (item.id === currentItem.id) {
                    return {
                        ...item,
                        attitude: currentItem.attitude === 1 ? 0 : 1
                    }
                } else {
                    return item
                }
            })
        })
    }
    clickHate = (currentItem) => { // 切换不喜欢
        this.setState({
            list: this.state.list.map((item) => {
                // 判断条件
                if (item.id === currentItem.id) {
                    return {
                        ...item,
                        attitude: currentItem.attitude === -1 ? 0 : -1
                    }
                } else {
                    return item
                }
            })
        })
    }
    // UI模板
    render() {
        return (
            <div className="App">
                <div className="comment-container">
                    {/* 评论数 */}
                    <div className="comment-head">
                        <span>5 评论</span>
                    </div>
                    {/* 排序 */}
                    <div className="tabs-order">
                        <ul className="sort-container">
                            {/* 循环渲染：map方法 */}
                            {this.state.tabs.map((tab) => (
                                <li
                                    key={tab.id}
                                    className={tab.type === this.state.active ? "on" : ""}
                                    onClick={()=>this.getTab(tab.type)}
                                >
                                    {tab.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 添加评论 */}
                    <div className="comment-send">
                    <div className="user-face">
                        <img className="user-head" src={avatar} alt="" />
                    </div>
                    <div className="textarea-container">
                        <textarea
                            cols="80"
                            rows="5"
                            placeholder="发条友善的评论"
                                className="ipt-txt"
                                value={this.state.comment}
                                onChange={this.textareaChange}
                        />
                        <button className="comment-submit" onClick={this.submitComment}>发表评论</button>
                    </div>
                    <div className="comment-emoji">
                        <i className="face"></i>
                        <span className="text">表情</span>
                    </div>
                    </div>

                    {/* 评论列表 */}
                    <div className="comment-list">
                        {this.state.list.map((item) => (
                            <div className="list-item" key={item.id}>
                                <div className="user-face">
                                    <img className="user-head" src={avatar} alt="" />
                                </div>
                                <div className="comment">
                                    <div className="user">{item.author}</div>
                                    <p className="text">{item.comment}</p>
                                    <div className="info">
                                    <span className="time">{this.formatTime(item.time)}</span>
                                    <span className={item.attitude === 1 ? "like liked" : "like"} onClick={()=>this.clickLike(item)}>
                                        <i className="icon" />
                                    </span>
                                    <span
                                        className={item.attitude === -1 ? "hate hated" : "hate"} onClick={()=>this.clickHate(item)}
                                    >
                                        <i className="icon" />
                                    </span>
                                    <span className="reply btn-hover" onClick={()=>this.delComment(item.id)}>删除</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

function App() {
    return (
        <Project></Project>
    )
}

export default App;
