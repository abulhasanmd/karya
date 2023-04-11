/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBar from './components/menubar/MenuBar';
import LandingSearch from './components/landingSearch/LandingSearch';
import './App.css';
import Chat from './pages/chat/Chat';

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#fc5647',
		},
		secondary: {
			main: '#f50057',
		},
	},
});
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Chat />
		</ThemeProvider>
	);
}

export default App;
