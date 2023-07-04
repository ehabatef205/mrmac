import {React, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import "../components/section/slider.css";
import axios from "../api/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    const emailRef = useRef(null); 
    const passwordRef = useRef(null);

    const signup = (product) => {
        navigate("/signup", {replace: true});
    };

    const logIn = async () => {
        setLoading(true);
        localStorage.removeItem("Authorization")
        await axios.post('/user/login',{email: emailRef.current.value, password: passwordRef.current.value}).then( async(res)=>{
          const message = res.data.message;
          
          if(message === 'Login Successful!'){
            setLoading(false);
            localStorage.setItem("Authorization", "Bearer " + res.data.token);
            navigate('/', {replace: true});
          }else if(message === "email or password is invalid"){
            toast.warning(message, {
                position: toast.POSITION.TOP_RIGHT
            })
            setLoading(false);
          }else{
            setLoading(false);
          }
        }).catch((error) => {
            setLoading(false);
        })
      };
      

    return (
        <div
        className="login"
        style={login}
        >
            <div className="" style={{flexDirection: "column", height: "fit-content", width: "80vw", justifyContent: "center", alignItems: "center", display:"flex"}}>
            <img src="/logo.png" alt="logo" height={"100px"} width={"100px"}/>
            <h4>تسجيل دخول</h4>
            <input
            ref={emailRef}
                    style={inputText}
                    placeholder="البريد الالكتروني"
                    type="email"
                />
                <input
                ref={passwordRef}
                style={inputText}
                placeholder="كلمة المرور"
                type="password"
                />
                {!loading && <button onClick={logIn} style={loginButton}>
                    تسجيل دخول
                </button>}
                {loading && <button style={loginButton2} disabled>
                    ...تسجيل دخول
                </button>}
                <div className="haveAccount" style={{marginTop: "20px"}}>
                    <>ليس لديك حساب؟ </>
                    <span className="buttonSign" style={{color: "rgb(225, 111, 0", cursor: "pointer"}} onClick={signup}>
                    سجل
                    </span>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

const login = {
    position: "relative",
    top: "60px",
    backgroundColor: "#e7e7e7",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    height: "calc(100vh - 60px)"
};

const inputText = {
    border: "1px solid #000",
    borderRadius: "15px",
    width: "50%",
    padding: "10px",
    marginTop: "20px"
}

const loginButton = {
    marginTop: "20px",
    border: "none",
    backgroundColor: "rgb(225, 111, 0)",
    width: "40%",
    color: "#fff",
    padding: "10px",
    borderRadius: "15px",
}

const loginButton2 = {
    marginTop: "20px",
    border: "none",
    backgroundColor: "rgb(225, 111, 0)",
    width: "40%",
    color: "#fff",
    padding: "10px",
    borderRadius: "15px",
}
