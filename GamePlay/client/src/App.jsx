import {Routes, Route} from 'react-router-dom'

import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import GameList from "./components/gameList/GameList.jsx";
import GameCreate from "./components/gameCreate/gameCreate.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import GameDetails from "./components/gameDetails/GameDetails.jsx";
import {useState} from "react";


function Logout() {
	return null;
}

function App() {
    const [auth, setAuth] = useState({})

    const loginSubmitHandler = (values) => {
        console.log(values)
    }

	return (
		<div id="box">
			<Header/>

			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/games' element={<GameList/>}/>
				<Route path='/games/create' element={<GameCreate/>}/>
				<Route path='/login' element={<Login loginSubmitHandler={loginSubmitHandler} />} />
				<Route path='/register' element={<Register/>}/>
				<Route path='/games/:gameId' element={<GameDetails/>}/>
			</Routes>

		</div>
	)
}

export default App
