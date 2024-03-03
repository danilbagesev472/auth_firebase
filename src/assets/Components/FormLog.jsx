import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import Form from './Form'
const FormLog = () => {
	const dispatch = useDispatch()

	const handelLog = (email, passwd) => {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, passwd)
			.then(({ user }) => {
				console.log(user)
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
					})
				)
			})
			.catch(e => {
				console.error(e)
			})
	}

	return <Form title='Sign In' handelClick={handelLog} />
}

export { FormLog }
