import {Link} from "react-router-dom";
import Path from '../../paths.js'
import CreateCharacter from "../createCharacter/CreateCharacter.jsx";
export default function Header() {
	return (
		<header>
			<Link id="logo" to={Path.Home}><img id="logo-img" src="./images/logo.png" alt=""/></Link>
			<nav>
				<div>
					<Link to={Path.Characters}>Characters</Link>
				</div>

				<div className="user">
					<Link to={Path.CreateCharacter}>Add Character</Link>
					<Link to="#">Logout</Link>
				</div>

				<div className="guest">
					<Link to={Path.Login}>Login</Link>
					<Link to={Path.Register}>Register</Link>
				</div>
			</nav>
		</header>
	)
}