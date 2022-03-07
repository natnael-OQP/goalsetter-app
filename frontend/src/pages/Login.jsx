import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";

function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	// get value from input field
	const { email, password } = formData;

	const onChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};
	const notify = () => {
		toast("Default Notification !");
	};

	return (
		<>
			<section className="heading">
				<button onClick={notify}>yes</button>
				<h1>
					<FaSignInAlt /> Register
				</h1>
				<p>Login and start setting goals</p>
			</section>

			<section className="form">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							value={email}
							placeholder="Enter your email"
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							value={password}
							placeholder="Enter password"
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-block">
							Submit
						</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Login;
