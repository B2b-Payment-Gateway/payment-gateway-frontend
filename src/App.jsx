import "./output.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Homepage />}></Route>
					<Route path="/login" element={<LoginPage />}></Route>
					<Route path="/signup" element={<SignUp />}></Route>
					<Route path="/dashboard" element={<Dashboard />}></Route>
				</Routes>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
