import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';

const inicialUser = {
    mail: "", 
    pass: ""
};
//Id user
const Login = () => {
    const navi = useNavigate();
    //login
    const [loginUser, setLoginUser] = useState(inicialUser);
    //Data user
    const [dataUser, setDataUser] = useState([]);
    //variables
    let resValidate = false;
    let idUser = "";
    console.log(navi)

    useEffect(()=>{
        axios.get("https://dummyjson.com/users").then(res=>setDataUser(res.data.users)).catch(err=>console.error("Error escrito"));
    },[]);
    
    //Inputs
    const handleChange = (e) => {
        setLoginUser({
            ...loginUser, 
            [e.target.name]: e.target.value
        });
    };

    const  handleSubmit = (e)=> {
        e.preventDefault();
        console.log(2)
        console.log(dataUser.length)
        dataUser.forEach((ele) => {
            if((loginUser.mail===ele.email) && (loginUser.pass === ele.password)){
                resValidate = true;
                idUser = ele.id;
            }
        });
        if(resValidate === true){
            navi(`/home/${idUser}`);
            sessionStorage.setItem('authUser', JSON.stringify(idUser));
        }
        if(resValidate === false){
            console.log("usuario no encontrado");
        }
    }

  return (
    <div>
        <form>
            <h2>Sign Up!</h2>
            <fieldset>
                <p>Email:</p>
                <input type="email" name='mail' id="email" onChange={handleChange} value={loginUser.mail}/>
				<p>Password:</p>
				<input type="password" id="password" name='pass' onChange={handleChange} value={loginUser.pass}/>
			</fieldset>
			<button onClick={handleSubmit}>Login</button>
          </form>
    </div>
  )
}

export default Login;