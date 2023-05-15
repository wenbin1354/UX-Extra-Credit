import { Outlet, Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	let location = useLocation().pathname;

	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link
							className="nav-button"
							to="/"
							style={{ color: location === "/" && "rgb(28, 198, 28)" }}
						>
							Calculator
						</Link>
					</li>
					<li>
						<Link
							className="nav-button"
							to="/form"
							style={{ color: location === "/form" && "rgb(28, 198, 28)" }}
						>
							Form
						</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</div>
	);
}

export default Navbar;
