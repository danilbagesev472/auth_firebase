import { Redirect } from '@reach/router'
import { useDispatch } from 'react-redux'
import { useAuth } from '../../hooks/use-auth'
import { removeUser } from '../../store/slices/userSlice'
const HomePage = () => {
	const dispatch = useDispatch()
	const { isAuth, email } = useAuth()
	return isAuth ? (
		<div>
			<h1>Welcome {email}</h1>
			<button onClick={dispatch(removeUser())}>Log out {email}?</button>
		</div>
	) : (
		<Redirect to='login' />
	)
}

export { HomePage }
