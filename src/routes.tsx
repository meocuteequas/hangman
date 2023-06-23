import { ComponentType, LazyExoticComponent, Suspense, lazy } from 'react';
import Fallback from "./components/fallback";
import { RouteObject } from "react-router-dom";
import Playground from './pages/playground';

const Loader =
  (Component: LazyExoticComponent<ComponentType<any>>) => (props: any) =>
    (
      <Suspense fallback={<Fallback />}>
        <Component {...props} />
      </Suspense>
    );

const Home = Loader(lazy(() => import('./pages/home')));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: "/playground",
    element: <Playground />
  }
];

export default routes;