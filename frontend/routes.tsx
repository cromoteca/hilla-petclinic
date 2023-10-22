import MainLayout from 'Frontend/views/MainLayout.js';
import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import VetView from './views/vet/VetView';

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    handle: { title: 'Main' },
    children: [
      { path: '/', element: <VetView />, handle: { title: 'Veterinarians' } },
    ],
  },
];

export default createBrowserRouter(routes);
