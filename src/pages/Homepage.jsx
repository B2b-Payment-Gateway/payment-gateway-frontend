import { Link } from "react-router-dom";

function Homepage() {
	return (
		<div className="h-srceen">
			{/* Hero */}
			<div
				className={`relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('./polygon-bg-element.svg')] bg-repeat before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('./polygon-bg-element.svg')] h-screen`}
			>
				<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-auto h-screen flex content-center justify-center flex-wrap">
					<div>
						{/* Announcement Banner */}
						<div className="flex justify-center">
							<a
								className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200"
								href="#"
							>
								PRO release - Join to waitlist
								<span className="py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400">
									<svg
										className="w-2.5 h-2.5"
										width={16}
										height={16}
										viewBox="0 0 16 16"
										fill="none"
									>
										<path
											d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
										/>
									</svg>
								</span>
							</a>
						</div>
						{/* End Announcement Banner */}
						{/* Title */}
						<div className="mt-5 max-w-2xl text-center mx-auto">
							<h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
								Payment&nbsp;
								<span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
									Gateway
								</span>
							</h1>
						</div>
						{/* End Title */}
						<div className="mt-5 max-w-3xl text-center mx-auto">
							<p className="text-lg text-gray-600 dark:text-gray-400">
								B2B Payment Gateway is an open-source project
								allows businesses to accept payments from their
								customers securely and efficiently.
							</p>
						</div>
						{/* Buttons */}
						<div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
							<Link
								className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
								to="/login"
							>
								Log In
								<svg
									className="w-3 h-3"
									width={16}
									height={16}
									viewBox="0 0 16 16"
									fill="none"
								>
									<path
										d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
									/>
								</svg>
							</Link>
							<Link
								className="relative group inline-flex justify-center items-center gap-x-3.5 text-center bg-white border hover:border-gray-300 shadow-sm font-mono text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition p-2 pl-4 dark:bg-slate-900 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
								to="/signup"
							>
								Sign Up
								<svg
									className="w-3 h-3"
									width={16}
									height={16}
									viewBox="0 0 16 16"
									fill="none"
								>
									<path
										d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
									/>
								</svg>
							</Link>
						</div>
						{/* End Buttons */}
						<div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
							<span className="text-sm text-gray-600 dark:text-gray-400">
								Package Manager:
							</span>
							<span className="text-sm font-bold text-gray-900 dark:text-white">
								yarn
							</span>
							<svg
								className="h-5 w-5 text-gray-300 dark:text-gray-600"
								width={16}
								height={16}
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									d="M6 13L10 3"
									stroke="currentColor"
									strokeLinecap="round"
								/>
							</svg>
							<a
								className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
								href="#"
							>
								Installation Guide
								<svg
									className="w-2.5 h-2.5"
									width={16}
									height={16}
									viewBox="0 0 16 16"
									fill="none"
								>
									<path
										d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* End Hero */}
		</div>
	);
}
export default Homepage;
