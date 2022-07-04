import { lazy, Suspense } from 'react';
import { matchRoutes } from 'react-router-dom';

import AppLayout from '../pages/AppLayout';
import NotFound from '../pages/NotFound';
const Home = lazy(() => import('../pages/Home'));
const CityList = lazy(() => import('../pages/CityList'));
const News = lazy(() => import('../pages/News'));




const lazyLoad = (children) => {
  return <Suspense fallback={<>Loading...</>}>
    {children}
  </Suspense>;
};



const routes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: lazyLoad(<Home />)
      },
      {
        path: 'news',
        element: lazyLoad(<News />)
      },
      {
        path: 'citylist',
        element: lazyLoad(<CityList />)
      },
    ]
  },
  {
    path: '/404',
    element: <NotFound />
  }
];

const routerListener = (path, navigator) => {
  return () => {

    const isMatch = matchRoutes(routes, path);
    if (!isMatch) {
      navigator('/404');
    }

    console.log(path, 'enter: routerEnterEvent');

    return () => {
      console.log(path, 'leave: routerLeaveEvent');
    };

  };
};


export { routes, routerListener };