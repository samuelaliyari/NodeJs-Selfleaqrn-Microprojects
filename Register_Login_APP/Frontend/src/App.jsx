import { useState } from 'react';
import { refreshToken } from './utils/refrershToken';

function App() {
	const [login, setLogin] = useState({});
	const [register, setRegister] = useState({});
	const [authorization, setAuthorization] = useState('');
	const loginUser = async () => {
		event.preventDefault();
		const fetchData = await fetch(
			'http://localhost:3000/api/v1/users/login',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(login),
				credentials: 'include',
			},
		);
		const { success, result, error } = await fetchData.json();
		refreshToken(result.accessToken, setAuthorization);
	};
	const registerUser = async () => {
		console.log(register);
		event.preventDefault();
		const fetchData = await fetch(
			'http://localhost:3000/api/v1/users/register',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(register),
				credentials: 'include',
			},
		);
	};

	return (
		<>
			<form onSubmit={() => registerUser()}>
				<input
					type='text'
					onChange={(e) =>
						setRegister({ ...register, firstName: e.target.value })
					}
				/>
				<input
					type='text'
					onChange={(e) =>
						setRegister({ ...register, lastName: e.target.value })
					}
				/>
				<input
					type='text'
					onChange={(e) =>
						setRegister({ ...register, email: e.target.value })
					}
				/>
				<input
					type='password'
					name=''
					id=''
					onChange={(e) =>
						setRegister({ ...register, password: e.target.value })
					}
				/>
				<input
					type='submit'
					value='register'
				/>
			</form>
			<form onSubmit={() => loginUser()}>
				<input
					type='text'
					onChange={(e) =>
						setLogin({ ...login, email: e.target.value })
					}
				/>
				<input
					type='password'
					name=''
					id=''
					onChange={(e) =>
						setLogin({ ...login, password: e.target.value })
					}
				/>
				<input
					type='submit'
					value='login'
				/>
			</form>
		</>
	);
}

export default App;
