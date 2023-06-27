import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Add from 'Pages/Add';
import Detail from 'Pages/Detail';
import Edit from 'Pages/Edit';
import Login from 'Pages/Login';
import PageWithLogin from 'Pages/Login/PagesWithLogin';
import PageWithoutLogin from 'Pages/Login/PagesWithoutLogin';
import Main from 'Pages/Main';
import Table from 'Pages/Table';

export interface RouterItem {
  path: string;
  element: React.ReactNode;
  withAuth: boolean;
  label: string;
}
export const RouterInfo: RouterItem[] = [
  {
    path: '/',
    element: <Login />,
    withAuth: false,
    label: 'login',
  },
  {
    path: '/login',
    element: <Login />,
    withAuth: false,
    label: 'login',
  },
  {
    path: '/list/main',
    element: <Main />,
    withAuth: true,
    label: 'main',
  },
  {
    path: '/add',
    element: <Add />,
    withAuth: true,
    label: 'add',
  },
  {
    path: '/table',
    element: <Table />,
    withAuth: true,
    label: 'table',
  },
  {
    path: '/list/total',
    element: <Main />,
    withAuth: true,
    label: 'total',
  },
  {
    path: '/detail/:id',
    element: <Detail />,
    withAuth: true,
    label: 'detail',
  },
  {
    path: '/edit',
    element: <Edit />,
    withAuth: true,
    label: 'edit',
  },
];
//라우터를 생성
export const RouterObj = createBrowserRouter(
  RouterInfo.map((routerInfo: RouterItem) => {
    return routerInfo.withAuth
      ? {
          path: routerInfo.path,
          element: <PageWithLogin>{routerInfo.element}</PageWithLogin>,
        }
      : {
          path: routerInfo.path,
          element: <PageWithoutLogin>{routerInfo.element}</PageWithoutLogin>,
        };
  }),
);
