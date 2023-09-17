import { createBrowserRouter } from 'react-router-dom';

import { Home, NotFound, Order } from '@/pages';
import { AdminLayout, Layout } from '@/layouts';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'order/:id',
				element: <Order />,
			},
		],
	},
	{
		path: '/admin',
		element: <AdminLayout />,
		children: [
			{
				path: '',
				element: <Order />,
			},
		],
	},
	{
		path: '/not-found',
		element: <NotFound />,
	},
]);
