import { Link } from '@reach/router'
import { FormLog } from '../Components/FormLog'
const LoginPage = () => {
	return (
		<>
			<div>
				<h1>Login</h1>
				<FormLog />
				<p>
					or <Link to='/register'>register</Link>
				</p>
			</div>
		</>
	)
}

export { LoginPage }
