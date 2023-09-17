import { PropsWithChildren } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { lightTheme } from '@/themes/light';

const MaterialUIProvider = ({ children }: PropsWithChildren) => {
	//TODO: agregar path y separar el children para el darkmode
	//TODO: logica para hacer el cambio de modo
	// !! LOGICA DE EJEMPLO
	// const [mode, setMode] = useState<PaletteMode>('light');
	// const colorMode = React.useMemo(
	//   () => ({
	//     // The dark mode switch would invoke this method
	//     toggleColorMode: () => {
	//       setMode((prevMode: PaletteMode) =>
	//         prevMode === 'light' ? 'dark' : 'light',
	//       );
	//     },
	//   }),
	//   [],
	// );

	// const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default MaterialUIProvider;
