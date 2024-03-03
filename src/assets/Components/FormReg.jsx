import { redirectTo } from '@reach/router'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/slices/userSlice'
import Form from './Form'
const FormReg = () => {
	const dispatch = useDispatch()

	const handelReg = (email, passwd) => {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, email, passwd)
			.then(({ user }) => {
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
					})
				)
				redirectTo('login')
			})
			.catch(() => {
				console.error
			})
	}
	return <Form title='Sign up' handelClick={handelReg} />
}

export { FormReg }
