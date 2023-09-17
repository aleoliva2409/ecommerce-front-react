import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from '@redux';
import { router } from '@routes';
import { MaterialUIProvider } from './components';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<MaterialUIProvider>
				<RouterProvider router={router} />
			</MaterialUIProvider>
		</Provider>
	</React.StrictMode>,
);
