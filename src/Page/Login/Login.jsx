import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { verifyUser } from "../../DATA/users";

import "./Login.css";


function Login({setToken,setRole}) {
const userRef = useRef()
const passRef = useRef()

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <Form.Label htmlFor="username" className="btn btn-light">Username</Form.Label>
      <Form.Control
        type="text"
        id="username"
        placeholder="user"
        ref = {userRef}
      />
      <Form.Label htmlFor="password" className="btn btn-light mt-2" >Password</Form.Label>
      <Form.Control
        type="password"
        id="password"
        placeholder="pass"
        ref={passRef}
      />
      <button className="btn btn-primary mt-5" onClick={() => {
        const user = userRef.current.value.trim()
        const pass = passRef.current.value.trim()
        const userInfo = verifyUser(user,pass)
        userRef.current.value = ''
        passRef.current.value = ''    

        if(userInfo === null){

          alert('Username or Password is incorrect')
          userRef.current.focus()

        }else{
            setRole(userInfo.role)
            setToken(userInfo.token)

        }

      }}>Login</button>
    </div>
  );
}

export default Login;
