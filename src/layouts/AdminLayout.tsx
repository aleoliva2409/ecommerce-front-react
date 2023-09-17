import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components';

const AdminLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default AdminLayout;
