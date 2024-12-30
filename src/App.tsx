import { createBrowserRouter, RouteObject } from "react-router-dom";
import Router from './providers/Router';
import { Tree, Home, Lorem } from './pages';
import { Slugs } from "./constants";
import './App.scss';
import Navigation from "./components/navigation";

const routes: RouteObject[] = [
  {
    path: Slugs.ROOT,
    element: <Home />
  },
  {
    path: Slugs.TREE,
    element: <Tree />,
  },
  {
    path: Slugs.LOREM,
    element: <Lorem />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <div>
      <Navigation />
      <Router router={router} />
    </div>
  );
}

export default App;
