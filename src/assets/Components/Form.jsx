import { useState } from 'react'

const Form = ({ title, handelClick }) => {
	const [email, setEmail] = useState('')
	const [passwd, setPassword] = useState('')

	return (
		<>
			<div>
				<input
					type='email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder='email'
				/>
				<input
					type='password'
					value={passwd}
					onChange={e => setPassword(e.target.value)}
					placeholder='password'
				/>
				<button onClick={() => handelClick(email, passwd)}>{title}</button>
			</div>
		</>
	)
}

export default Form
