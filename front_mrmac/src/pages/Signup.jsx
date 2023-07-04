import {React, useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import "../components/section/slider.css";
import axios from "../api/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const login = (product) => {
        navigate("/login", {replace: true});
    };

    const usernameRef = useRef(null);
    const emailRef = useRef(null); 
    const passwordRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const phoneRef = useRef(null);

    const handleSignUp = async () => {
        setLoading(true)

        axios.post('/user/sign_up',{
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            telephone: phoneRef.current.value
        }).then((res)=>{
            const message = res.data.message;
            if(message === 'Sign up is successfully'){
                toast.success(message, {
                    position: toast.POSITION.TOP_RIGHT
                })
                setLoading(false)
                navigate('/login', {replace: true});
            }else if(message === 'This email is already in use'){
                toast.error(message, {
                    position: toast.POSITION.TOP_RIGHT
                })
                setLoading(false)
            }
          }).catch((error) => {
            setLoading(false);
          });
    };

    return (
        <div
        className="signup"
        style={signup}
        >
            <div className="" style={{flexDirection: "column", height: "fit-content", width: "80vw", justifyContent: "center", alignItems: "center", display:"flex"}}>
            <img src="/logo.png" alt="logo" height={"100px"} width={"100px"} style={{marginRight: "25px"}}/>
            <h4>سجل</h4>
            <input
            ref={usernameRef}
                style={inputText}
                placeholder="اسم المستخدم"
                type="text"
            />
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
            <div style={{flexDirection: "row", width: "50%"}}>
                <input
                ref={firstNameRef}
                style={inputText2}
                placeholder="الاسم الاول"
                type="text"
                />
                <div style={{display: "inline-block", paddingRight: "10px"}}></div>
                <input
                ref={lastNameRef}
                style={inputText2}
                placeholder="الاسم الثاني"
                type="text"
                />
            </div>
            <input
            ref={phoneRef}
            style={inputText}
            placeholder="رقم الهاتف"
            type="phone"
            />
            {!loading && <button style={signupButton} onClick={handleSignUp}>
                سجل
            </button>}
            {loading && <button style={signupButton2} onClick={handleSignUp} disabled>
                ...سجل
            </button>}
            <div className="haveAccount" style={{marginTop: "20px"}}>
                <>هل لديك حساب بالفعل؟ </>
                <span className="buttonSign" style={{color: "rgb(225, 111, 0", cursor: "pointer"}} onClick={login}>
                تسجيل دخول
                </span>
            </div>
        </div>
        <ToastContainer />
    </div>
);
}

const signup = {
    position: "relative",
    top: "60px",
    backgroundColor: "#e7e7e7",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
};

const inputText = {
    border: "1px solid #000",
    borderRadius: "15px",
    width: "50%",
    padding: "10px",
    marginTop: "20px"
}

const inputText2 = {
    border: "1px solid #000",
    borderRadius: "15px",
    padding: "10px",
    width: "calc(50% - 5px)",
    marginTop: "20px"
}

const signupButton = {
    marginTop: "20px",
    border: "none",
    backgroundColor: "rgb(225, 111, 0)",
    width: "40%",
    color: "#fff",
    padding: "10px",
    borderRadius: "15px",
}

const signupButton2 = {
    marginTop: "20px",
    border: "none",
    backgroundColor: "rgb(225, 111, 0)",
    width: "40%",
    color: "#fff",
    padding: "10px",
    borderRadius: "15px",
}
