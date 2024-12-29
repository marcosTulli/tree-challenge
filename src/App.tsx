import { createBrowserRouter, RouteObject } from "react-router-dom";
import Router from './providers/Router';
import './App.css';  // Import the CSS file for styling

const Home = () => {
  return (
    <div>
      HOME
    </div>
  );
};

const Tree = () => {
  return (
    <div>
      TREE
    </div>
  );
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/tree',
    element: <Tree />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <Router router={router} />
  );
}

export default App;
