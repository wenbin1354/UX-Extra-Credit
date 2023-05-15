import Navbar from "./Navbar.jsx";
import { Routes, Route, Link } from "react-router-dom";
import Calculator from "./Calculator.jsx";
import DirectionalForm from "./Form.jsx";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<Calculator />} />
                    <Route path="calculator" element={<Calculator />} />
                    <Route path="form" element={<DirectionalForm />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;