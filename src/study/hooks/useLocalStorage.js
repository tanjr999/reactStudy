import { useEffect, useState } from "react"

export function useLocalStorage(key, defaultValue) {
    const [message, setMessage] = useState(defaultValue)
    // 每次message变化后就自动存储到本地(message是依赖项)
    useEffect(() => {
        window.localStorage.setItem(key,message)
    },[key,message])

    return [message, setMessage]
}