import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/index'
import Login from '@/pages/Login/index'

function App() {
    return (
        // 路由配置
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Layout></Layout>}></Route>
                    <Route path='/login' element={<Login></Login>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App