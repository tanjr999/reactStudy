import { useSearchParams, useParams} from "react-router-dom" // 导入useSearchParams和useParams函数获取参数

function Abount() {
    // parmas是一个对象，里面的get方法用来获取对应的参数
    // // 获取参数方式一: parmas.get('参数名')
    // const [parmas] = useSearchParams() // useSearchParams获取searchParams传参
    // const id = parmas.get('id') // 把参数名称作为get方法的实参传过来
    // const name = parmas.get('name')

    // // 获取参数方式二: params.参数名获取
    const parmas = useParams() // useParams获取params传参
    return (
        <div>
            <h1>about</h1>
            {/* <div>about得到的参数为：{id}, {name}</div> */}
            <div>about得到的参数为：{parmas.id}</div>
        </div>
    )
}

export default Abount