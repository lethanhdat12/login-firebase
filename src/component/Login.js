import React, { Component, useRef, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Redirect, NavLink } from "react-router-dom";
import ModalResetPass from './ModalResetPass';
function Login(props) {
  const userRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [check , setCheck] = useState(false);
  const inputChange = () => {
    let username = userRef.current.value;
    let password = passwordRef.current.value;
    setEmail(username);
    setPassWord(password);
  }

  const loginClick = (e) => {
    try{
      e.preventDefault();
      props.loginEmailPass(email, password);
    }catch(err){
      console.log(err);
    }
  }
  const checkBoxShowModal = (e)=>{
    if(e.target.checked){
        setShowModal(true);
        console.log(e.target.checked);
        return;
    }
    setShowModal(false);
  }
  const onHide = ()=>{
    setShowModal(false);
  }
  return (
    <div>
      <h3 style={{ fontWeight: 300, textAlign: 'center' }}>Login with firebase</h3>
      <div className="formBox">
        <form>
          <div className="form-group">
            <label htmlFor="username"> Email</label>
            <input type="text" className="form-control" placeholder="Nhập vào gmail" id="username" name="username" ref={userRef} onChange={inputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password"> PassWord</label>
            <input type="password" className="form-control" placeholder="Nhập vào password" id="password" name="password" ref={passwordRef} onChange={inputChange} />
          </div>
          <div className="form-check" style={{ textAlign: 'center' }}>
            <input type="checkbox" className="form-check-input" id="fogetpass" onChange = {checkBoxShowModal} checked = {check}/>
            <label htmlFor="fogetpass" className="form-check-label"> Quên mật khẩu</label>
          </div>
        </form>
        <div className="form-group mt-2" style={{ textAlign: 'center' }}>
          <Link to="/admin">
           <button className="btn btn-primary" onClick={loginClick}>Login</button>
          </Link>
          
        </div>
        <div className="btn-group d-flex justify-content-center">
          <button className="btn btn-primary mx-1" onClick={() => props.loginFace('Facebook')}>Login with facebook</button>
          <button className="btn btn-danger mx-1" onClick={() => props.loginGoogle('Google')}>Login with google</button>
        </div>
      </div>
      <ModalResetPass showModal = {showModal} onHide = {onHide}></ModalResetPass>
    </div>
  )
}
export default Login;
