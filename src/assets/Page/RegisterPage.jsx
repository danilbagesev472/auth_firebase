import { Link } from '@reach/router'
import { FormReg } from '../Components/FormReg'

const RegisterPage = () => {
	return (
		<>
			<div>
				<h1>Register</h1>
				<FormReg />
				<p>
					Already have an account <Link to='/login'>SignIn</Link>
				</p>
			</div>
		</>
	)
}

export { RegisterPage }
