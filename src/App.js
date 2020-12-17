import React, { Suspense } from 'react'
import './App.css';
import firebaseAuth, { firebase } from './FirebaseConfig';
import { useEffect, useState } from 'react';
// import Authentication from './component/Authentication';
import Admin from './component/Admin';
import ModalLoading from './component/ModalLoading';
import { useDispatch, useSelector } from 'react-redux';
import { Login, Logout } from './Action/ActionLogin';
function App() {
  const [showModal, setshowModal] = useState(false);

  const loginProviderRedux = useSelector(state => state.Login);
  const { loginState, email, displayName } = loginProviderRedux;

  const loginDispatch = useDispatch();
  const logoutDispatch = useDispatch();

  const setPayloadAction = (email, displayName) => {
    const payload = {
      email: email,
      displayName: displayName,
    }
    let action = Login(payload);
    loginDispatch(action);
  }

  useEffect(() => {
    const unLogin = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        logoutDispatch(Logout());
        return;
      }
      setshowModal(true);
      setPayloadAction(user.email , user.displayName);


      setshowModal(false);
    })
    return () => unLogin();
  }, [])
  function loginProvider(provider) {
    setshowModal(true);
    const loginProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseAuth.signInWithPopup(loginProvider).then(res => {
      setPayloadAction(res.user.email , res.user.displayName);
      setshowModal(false);
    }).catch(err => {
      setshowModal(false);
      console.log('loi roi nguoi ae oi', err);
    })
  }
  function logOut() {
   
    firebaseAuth.signOut().then((res) => {
      logoutDispatch(Logout());
    }).catch(err => {
      console.log('that bai ', err);
    });
  }
  function createAccount(username, password) {
    firebase.auth().createUserWithEmailAndPassword(username, password)
      .then((user) => {
        // thực hiện khi tạo thành công
      }).catch(err => {
        // thực hiện khi thất bại
        console.log(err);
      })
    setshowModal(false);
  }

  function loginWithEmailPass(email, pass) {
    setshowModal(true);
    firebase.auth().signInWithEmailAndPassword(email, pass).then(res => {
      setshowModal(false);
    }).catch(err => {
      setshowModal(false);
      console.log('loi roi nguoi ae oi, ', err);
    })
  }

  const Authentication = React.lazy(() => import('./component/Authentication'))
  return (
    <Suspense fallback={<div>loading ...</div>}>
      <div className="container w-50 mx-auto">
        <div className="App">
          <ModalLoading showModal={showModal}></ModalLoading>
          {
            loginState ? <Admin logout={logOut} displayName = {email} /> : <Authentication
              loginProvider={loginProvider}
              logOut={logOut}
              signEmailPass={loginWithEmailPass}
              createAccount={createAccount} />
          }
        </div>
      </div>
    </Suspense>
  );
}

export default App;
