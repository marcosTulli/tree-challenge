import { createBrowserRouter, RouteObject } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import RouterComponent from './context/Router'; // Assuming this is the path to RouterComponent
import { Tree, Home, Lorem, NotFound } from './pages';
import { Slugs } from './constants';
import '@styles/global.scss';
import ContextProvider from './context/ContextProvider';

const routes: RouteObject[] = [
	{
		path: Slugs.ROOT,
		element: <Home />,
	},
	{
		path: Slugs.TREE,
		element: <Tree />,
	},
	{
		path: Slugs.LOREM,
		element: <Lorem />,
	},
	{
		path: Slugs.NOT_FOUND,
		element: <NotFound />,
	},
];

const router = createBrowserRouter(routes);

const App = () => {
	return (
		<ContextProvider>
			<RouterComponent router={router} />
		</ContextProvider>
	);
};

export default App;
