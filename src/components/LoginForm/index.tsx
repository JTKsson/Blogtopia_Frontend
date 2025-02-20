import { useState } from "react";
import { login } from "../../API/UserAPI";

export const LoginForm = () => {
	const [formData, setFormData] = useState({ username: "", password: "" });
	const [error, setError] = useState<string | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleClick = async () => {
		try {
			if (!formData.username || !formData.password) {
				setError("Please insert login credentials");
				return;
			}
			const result = await login(formData.username, formData.password);
			console.log(result);
			setError(null);
		} catch (error) {
			console.error(error);
			setError("Login failed. Please try again.");
		}
	};

	return (
		<div>
			{error && <p style={{ color: "red" }}>{error}</p>}
			<input
				type='text'
				name='username'
				placeholder='Username'
				value={formData.username}
				onChange={handleChange}
			/>
			<input
				type='password'
				name='password'
				placeholder='Password'
				value={formData.password}
				onChange={handleChange}
			/>
			<button onClick={handleClick}>Login</button>
		</div>
	);
};
