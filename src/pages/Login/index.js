import { Card } from "antd"

function Login() {
    return (
        <div className="login">
            <Card className="login-container">
                <div className="form-item">
                    <label>账号：</label>
                    <input type='text' placeholder="请输入昵称" />
                </div>
                <div className="form-item">
                    <label>密码：</label>
                    <input type='password' placeholder="请输入密码"/>
                </div>
            </Card>
        </div>
    )
}

export default Login