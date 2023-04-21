import {useState} from 'react'

export function useWindowScroll() { // export导出供其他组件使用
    const [y, setY] = useState(0)
    // 在滚动行为发生时获取滚动值赋给y
    window.addEventListener('scroll', () => {
        const h = document.documentElement.scrollTop // 获取滚动值
        console.log(h)
        setY(h) // 把滚动值赋给y
    })
    return [y]
}