import { createTheme } from '@mui/material';

const useTheme = () => {
	const baseColors = {
		white: { main: '#f2f2f1' },
		black: { main: '#22222' },
		gray: { main: '#595959' },
	};

	const dark = {
		palette: {
			...baseColors,
			primary: { main: '#084061' },
			secondary: { main: '#d1ffff', strong: '#0F9D6D' },
			defaultBackground: { main: '#1A1A1A' },
		},
	};

	const light = {
		palette: {
			...baseColors,
			primary: { main: '#F5F5DC' },
			secondary: { main: '#1A1A1A', strong: '#1B3E44' },
			defaultBackground: { main: '#C9D2B5' },
		},
	};

	const themeObject = true ? dark : light;
	const theme = createTheme(themeObject);

	return { theme };
};

export default useTheme;
