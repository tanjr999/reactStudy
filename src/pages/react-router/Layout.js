import { Outlet } from "react-router-dom" // 导入Outlet组件获取二级路由

function Layout() {
    return (
        <div>
            <h1>Layout</h1>
            {/* 二级路由的出口 */}
            <Outlet></Outlet>
        </div>
    )
}

export default Layout