import React,{useEffect,useState} from "react";
import getuser from '../../api/basis/getprofile'
import updateuser from "../../api/basis/updateUser";
import { useNavigate } from "react-router-dom";
import "./ProfileInfo.css";
import { FaSpinner } from 'react-icons/fa';
import "./homecard.css"

const ProfileInfo = () => {
  const [thisuser, setThisUser] = useState();
  const [token, setToken] = useState(localStorage.getItem("MRMACAuthorization"));
  const [loading, setLoading] = useState(false)
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setFirstName(thisuser?.first_name)
    setLastName(thisuser?.last_name)
    setTelephone(thisuser?.telephone)
    setemail(thisuser?.email)
  
  },[thisuser])

  useEffect(() => {
    setLoading(true)
  getuser().then(res=>{
    setLoading(false)
    console.log(res.data)
    setThisUser(res.data.respone)
  })

},[])

const handleClick=()=>{
  updateuser(first_name, last_name , telephone).then(res=>{
    window.location.reload(false);
  })
}
const LogOut=async()=>{
  await localStorage.removeItem('MRMACAuthorization')
    navigate('/')
}

return( 
    <div className="cont" style={{top: "50px", position: "relative"}}>
    {loading? <FaSpinner icon="spinner" className="icon_pulse" style={{fontSize: "50px"}}/> : <>
        <div className="Settings">
      <div className="holder">
        <div className="infogridholder">
          <div style={{width: "100%"}}>
            <div className="infogrid">
              <div className="infofeild">
                <label  className="input-label" style={{backgroundColor: "transparent"}}>
                  الاسم الأول
                </label>
                <input
                  className="profinput"
                  name="firstName"
                  type="text"
                  id="firstName"
                  value={first_name || ""}
                  onChange={(e)=>{
                    console.log(e.target.value)
                    setFirstName(e.target.value)}}
                />
              </div>
              <div className="infofeild">
                <label  className="input-label" style={{backgroundColor: "transparent"}}>
                  اسم العائلة
                </label>
                <input
                className="profinput"
                  name="lastName"
                  type="text"
                  id="lastName"
                  value={last_name || ""}
                  onChange={(e)=>{
                    console.log(e.target.value)
                    setLastName(e.target.value)}}
                />
              </div>

              <div className="infofeild">
                <label  className="input-label" style={{backgroundColor: "transparent"}}>
                  البريد الإلكتروني
                </label>
                <input
                className="profinput"
                  name="email"
                  type="text"
                  id="email"
                  disabled={true}
                  value={email || ""}

                />
              </div>
              <div className="infofeild">
                <label  className="input-label" style={{backgroundColor: "transparent"}}>
                  الهاتف
                </label>
                <input
                  className="profinput number-field"
                  name="mobile_number"
                  type="tel"
                  autoComplete="off"
                  value={telephone|| ""}
                  data-intl-tel-input-id="1"
                  onChange={(e)=>{
                      console.log(e.target.value)
                      setTelephone(e.target.value)}}
                />
              </div>
             
            </div>
            <div>
              <button  className="updatebutton" onClick={()=>{handleClick()}}>
                تحديث
              </button>
            </div>
            <div className="FormMessage">
              هناك شيء خاطئ. الرجاء معاودة المحاولة في وقت لاحق.
            </div>
          </div>
        </div>
        <div className="reset">
          <p>تحديث كلمة السر?</p>
          <button type="button" className="resetbutton">
            إعادة ضبط كلمة المرور
          </button>
        </div>
      </div>
    </div></>}
    <div className="settingsButtonBar">
      <button className="Button Button--greenFilled "onClick={()=>{LogOut()}}>
        <strong>الخروج</strong>
      </button>
    </div>
  </div>
)};
export default ProfileInfo;