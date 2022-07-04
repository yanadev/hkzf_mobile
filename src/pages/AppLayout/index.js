import React from 'react';
import { Route, Routes, Outlet, Link } from 'react-router-dom';

import Tarbar from '../../components/Tarbar';

export default class AppLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <>
      This is AppLayout
      <br />
      <Link to="/news">新闻</Link>
      <br />
      <Link to="/citylist">城市列表</Link>
      <br />
      <Link to="/city">城市列表</Link>
      <br />
      <Outlet></Outlet>
      <Tarbar></Tarbar>
    </>;
  }
}