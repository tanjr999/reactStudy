import React, { useState, useContext, createContext } from 'react'

const Context = createContext()

function ComA() {
    const count = useContext(Context)
    return (
        <div>
            <div>this is ComA</div>
            从app传过来的数据为：{count}
            <ComC></ComC>
        </div>
    )
}

function ComC() {
    const count = useContext(Context)
    return (
        <div>
            <div>this is ComC</div>
            从app传过来的数据为：{count}
        </div>
    )
}

function App() {
    const [count, setCount] = useState(0)
    return (
        <Context.Provider>
            <div>
                <ComA onClick={()=>setCount(count+1)}></ComA>
            </div>
        </Context.Provider>
    )
}

export default App;