import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

import BusinessLogin from './pages/login/BusinessLogin';
import BusinessSignup from './pages/signup/BusinessSignup';
import Protected from './protected';
import './App.css';

function App() {
	const loggedIn = useSelector((state) => state.business.token);
	console.log(`loggedIn is${loggedIn}`);

	const theme = createTheme({
		palette: {
			mode: 'light',
			primary: {
				main: '#385170',
				contrastText: '#ececec',
			},
			secondary: {
				main: '#dfebed',
			},
		},
	});

	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<Protected isLoggedIn={loggedIn}>
					<ThemeProvider theme={theme}>
						<BusinessLogin />
					</ThemeProvider>
				</Protected>
			),
		},
		{
			path: '/login',
			element: (
				<ThemeProvider theme={theme}>
					<BusinessLogin />
				</ThemeProvider>
			),
		},
		{
			path: '/signup',
			element: (
				<ThemeProvider theme={theme}>
					<BusinessSignup />
				</ThemeProvider>
			),
		},
	]);
	return <RouterProvider router={router} />;
	// return router;
}

export default App;