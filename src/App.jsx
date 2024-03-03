import { LocationProvider, Router } from '@reach/router'
import { NotFound } from './NotFound'
import { HomePage } from './assets/Page/HomePage'
import { LoginPage } from './assets/Page/LoginPage'
import { RegisterPage } from './assets/Page/RegisterPage'
const App = () => {
	return (
		<>
			<LocationProvider>
				<Router>
					<HomePage path='/' />
					<LoginPage path='login' />
					<RegisterPage path='register' />
					<NotFound path='*' />
				</Router>
			</LocationProvider>
		</>
	)
}

export { App }
