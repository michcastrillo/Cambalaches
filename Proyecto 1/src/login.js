import React, { useState, useEffect } from "react";
import axios from "axios";
import './login.css';
import List from './List';

function Body() {
	const userUrl = "https://dummyjson.com/users";
	const [users, setUsers] = useState({});


	//Use effect runs when component its mounted
	useEffect(() => {

	// 	//promise to fetch data from webAPI
	// 	//axios it's a third party library, instalation: npm i axios
	axios.get(userUrl).then(function (response) {
			setUsers(response.data);
	})
	}, [users]);
	//console.log(users)

	// //Logic that returns a JSX (HTML) that can be rendered in the component
	// const userList = (
	//   	<List users={users}/>
	// )

	return (
		<div className="wrapper">
            <form>
				<h2>Sign Up!</h2>
				<fieldset>
					<p>Email:</p>
					<input type="email" id="email" required/>
					<p>Password:</p>
					<input type="password" id="password" required/>
				</fieldset>
				<button onClick=''>Submit</button>
          </form>
		</div>
	);
}

export default Body;