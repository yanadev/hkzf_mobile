
import './App.css';

// UI组件库: antd-mobile
import { Button } from 'antd-mobile';

import { routes, routerListener } from './router/index';
import { useRoutes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
  const location = useLocation();
  const navigator = useNavigate();
  let [pathname, setPathname] = useState(location.pathname);

  useEffect(
    routerListener(pathname, navigator),
    [pathname]
  );

  let element = useRoutes(routes);
  return element;
}

export default App;
