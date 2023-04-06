import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import ErrorToast from "../components/ErrorToast";
import { login } from "../actions/userActions";
import Spinner from "../components/Spinner";
function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();

	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;

	const redirect = location.search
		? location.search.split("=")[1]
		: "/dashboard";

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [userInfo, redirect, navigate]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};
	// const [loading, setLoading] = useState(false);
	// const navigate = useNavigate();

	// const submitHandler = async (e) => {
	// 	e.preventDefault();
	// 	console.log(email, password);
	// 	setLoading(true);
	// 	if (!email || !password) {
	// 		toast.error("Please Fill all the Feilds");
	// 		setLoading(false);
	// 		return;
	// 	}

	// 	try {
	// 		const config = {
	// 			headers: {
	// 				"Content-type": "application/json",
	// 			},
	// 		};

	// 		const { data } = await axios.post(
	// 			"/api/v1/biz/login",
	// 			{ email, password },
	// 			config
	// 		);

	// 		toast.success("Login Successful");
	// 		localStorage.setItem("userInfo", JSON.stringify(data));
	// 		setLoading(false);
	// 		navigate("/dashboard");
	// 	} catch (error) {
	// 		toast.error("Error Occured!");
	// 		setLoading(false);
	// 	}
	// };
	return (
		<div className="h-screen flex content-center justify-center dark:bg-slate-900 bg-gray-100">
			<main className="w-full max-w-md mx-auto p-6 flex flex-col">
				<div className="my-auto bg-white border  border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 h-fit">
					<div className="p-4 sm:p-7">
						<div className="text-center">
							<h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
								Sign in
							</h1>
							{error && <ErrorToast error={error} />}
							{loading && <Spinner />}
							<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
								Don't have an account yet?&nbsp;
								<Link
									className="text-blue-600 decoration-2 hover:underline font-medium"
									to={
										redirect
											? `/signup?redirect=${redirect}`
											: "/signup"
									}
								>
									Sign up here
								</Link>
							</p>
						</div>
						<div className="mt-5">
							{/* Form */}
							<form>
								<div className="grid gap-y-4">
									{/* Form Group */}
									<div>
										<label
											htmlFor="email"
											className="block text-sm mb-2 dark:text-white"
										>
											Email address
										</label>
										<div className="relative">
											<input
												type="email"
												id="email"
												name="email"
												className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
												required=""
												aria-describedby="email-error"
												onChange={(e) =>
													setEmail(e.target.value)
												}
												value={email}
											/>
											<div className="hidden absolute inset-y-0 right-0  items-center pointer-events-none pr-3">
												<svg
													className="h-5 w-5 text-red-500"
													width={16}
													height={16}
													fill="currentColor"
													viewBox="0 0 16 16"
													aria-hidden="true"
												>
													<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
												</svg>
											</div>
										</div>
										<p
											className="hidden text-xs text-red-600 mt-2"
											id="email-error"
										>
											Please include a valid email address
											so we can get back to you
										</p>
									</div>
									{/* End Form Group */}
									{/* Form Group */}
									<div>
										<div className="flex justify-between items-center">
											<label
												htmlFor="password"
												className="block text-sm mb-2 dark:text-white"
											>
												Password
											</label>
											<a
												className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
												href="../examples/html/recover-account.html"
											>
												Forgot password?
											</a>
										</div>
										<div className="relative">
											<input
												type="password"
												id="password"
												name="password"
												className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
												required=""
												aria-describedby="password-error"
												value={password}
												onChange={(e) =>
													setPassword(e.target.value)
												}
											/>
											<div className="hidden absolute inset-y-0 right-0  items-center pointer-events-none pr-3">
												<svg
													className="h-5 w-5 text-red-500"
													width={16}
													height={16}
													fill="currentColor"
													viewBox="0 0 16 16"
													aria-hidden="true"
												>
													<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
												</svg>
											</div>
										</div>
										<p
											className="hidden text-xs text-red-600 mt-2"
											id="password-error"
										>
											8+ characters required
										</p>
									</div>
									{/* End Form Group */}
									{/* Checkbox */}
									<div className="flex items-center">
										<div className="flex">
											<input
												id="remember-me"
												name="remember-me"
												type="checkbox"
												className="shrink-0 mt-0.5 border border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
											/>
										</div>
										<div className="ml-3">
											<label
												htmlFor="remember-me"
												className="text-sm dark:text-white"
											>
												Remember me
											</label>
										</div>
									</div>
									{/* End Checkbox */}
									<button
										type="submit"
										className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
										onClick={submitHandler}
									>
										Sign in
									</button>
								</div>
							</form>
							{/* End Form */}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
export default LoginPage;
