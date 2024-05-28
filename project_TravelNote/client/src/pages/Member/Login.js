import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'
import API from '../../API'

// URL 주소: /login

function Login(){
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        userId: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target 
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        API.post('api/users/login', formData).then((res) => {
            localStorage.setItem('token', res.data.token)
            navigate("/")
        }).catch((err) => {
            if(err.response.data.code === 401){
                alert('요청하신 데이터가 유효하지 않습니다!')
            }
        })
    }

    const {
        userId,
        password
    } = formData 

    return (
    <div>
        <h1>Login PAGE</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">아이디: </label>
            <input type="text" name="userId" id="id" required onChange={handleChange} value={userId}/>
            <label htmlFor="password">비밀번호: </label>
            <input type="password" name="password" id="password" required onChange={handleChange} value={password}/>
            <button type="submit">로그인</button>
        </form>
    </div>
    )
}
export default Login