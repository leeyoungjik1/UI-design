import React from "react";
import  "../../styles/join.css";




function Join(){
    return (
        <div>
            <h1>Join PAGE</h1>
            <form action="http://127.0.0.1:5000/api/users/register" method="post">
                <label htmlFor="name">이름: </label>
                <input type="text" name="name" id="name" required/>
                <label htmlFor="nickName">닉네임: </label>
                <input type="text" name="nickName" id="nickName"/>
                <label htmlFor="id">아이디: </label>
                <input type="text" name="id" id="id" required/>
                <label htmlFor="password">비밀번호: </label>
                <input type="password" name="password" id="password" required/>
                <label htmlFor="confirmPassword">비밀번호 확인: </label>
                <input type="password" name="confirmPassword" id="confirmPassword" required/>
                <label htmlFor="email">이메일: </label>
                <input type="email" name="email" id="email" required/>
                <button type="submit">회원가입</button>
            </form>
        </div>
    )
}




export default Join