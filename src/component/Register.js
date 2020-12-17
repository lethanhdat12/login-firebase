import React, { useRef, useState } from 'react'
import { ValidateEmail } from './ValidateEmail';



function checkPassConfig(pass, configPass) {
    if(pass.trim().length < 8) return false;
    if(configPass.trim().length < 8) return false;
    return (pass === configPass) ? true : false;
}
function Register(props) {
    const [user,setUser] = useState();
    const [pass,setPass] = useState();
    const [configPass , setConfigPass] = useState();
    const [err , setErr] = useState(null);
    const [success , serSuccess] = useState(null);
    const userRef = useRef();
    const passRef = useRef();
    const configRef = useRef();

    function inputChange(){
        setUser(userRef.current.value);
        setPass(passRef.current.value);
        setConfigPass(configRef.current.value);
    }
    function onRegister(e){
        e.preventDefault();
        if(!checkPassConfig(pass,configPass)){
            setErr('mật khẩu không khớp , hãy nhập lại !');
            serSuccess(null);
        }
        if(!ValidateEmail(user)){
            setErr('Email sai rồi bạn tôi ơi !!!');
            serSuccess(null);
        }
        if(checkPassConfig(pass,configPass) && ValidateEmail(user)){
            props.createAccount(user,pass);
            setErr(null);
            serSuccess('Đăng kí thành công')
        }
    }
    return (
        <div>
            <h3 style={{ fontWeight: 300, textAlign: 'center' }}>Register Account with firebase</h3>
            <div className="formBox">
                <p className = {err ? 'err' : 'success'} style={{textAlign:'center'}}> {err ? err : success} </p>
                <form>
                    <div className="form-group">
                        <label htmlFor="username"> Gmail </label>
                        <input onChange= {inputChange} type="text" className="form-control" placeholder="Nhập vào gmail" id="username" name="user" ref={userRef} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> PassWord</label>
                        <input onChange= {inputChange} type="password" className="form-control" placeholder="Nhập vào password ít nhất 8 kí tự" id="password" name="pass" ref={passRef} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="configPass"> Config PassWord</label>
                        <input onChange= {inputChange} type="password" className="form-control" placeholder="Nhập lại password" id="configPass" name="configPass" ref={configRef} />
                    </div>
                </form>
                <div className="form-group mt-2" style={{ textAlign: 'center' }}>
                    <button className="btn btn-primary" onClick = {onRegister}> Đăng ký và Login</button>
                </div>
            </div>
        </div>
    )
}
export default Register;
