import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/main.css';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  
  {path:"/",element:<Home/>},    
  {path:"/home",element:<Home/>},
  {path:"/about",element:<About/>}
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
