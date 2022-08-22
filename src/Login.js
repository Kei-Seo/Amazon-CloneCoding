import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
import {auth} from "./firebase";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useNavigate();


    const signIn = e => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigator.push("/")
            })
            .catch(error => alert(error.message()))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).
            then((auth) => {
                if(auth) {
                    navigator.push("/")
                }
            })
            .catch(error => alert(error.message()))


    }

    return(
        <div className="Login">
            <Link to="/">
                <img className="login_logo" 
                    src="https://cdn2.downdetector.com/static/uploads/logo/amazon.png"

                    alt=""/>
            </Link>

            <div className="login_container">
                <h1> 로그인 </h1>
                <form className="login_signBox">
                    <h5 className="login_emailText"> 이메일 </h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text"/>
                    <h5 className="login_pwdText"> 비밀번호 </h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="text"/>
                    <button className="login_signButton" onClick={signIn}>
                        로그인 하기
                    </button>
                </form>

                <p> 이용 약관 동의하십니까? </p>
                <button onClick={register} className="login_registerButton"> 회원가입 </button>

            </div>
        </div>
    );
}

export default Login;