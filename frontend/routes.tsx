import MainLayout from 'Frontend/views/MainLayout.js';
import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import VetView from './views/vet/VetView.js';
import VetEdit from './views/vet/VetEdit.js';

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    handle: { title: 'Main' },
    children: [
      { path: '/', element: <VetView />, handle: { title: 'List Veterinarians' } },
      { path: '/edit', element: <VetEdit />, handle: { title: 'Edit Veterinarians' } },
    ],
  },
];

export default createBrowserRouter(routes);
