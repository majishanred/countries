import { useEffect, useState } from 'react';
import {
 createBrowserRouter,
 RouterProvider
} from 'react-router-dom';

import { 
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

import { loader as countryListLoader } from './loaders/country_list';
import { loader as countryDetailsLoader} from './loaders/country_details';
import { Header } from './components/Header';
import MainBody from './components/MainBody';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

const queryClient = new QueryClient();

export type Theme = 'light' | 'dark';

const router = createBrowserRouter([
  {
    path: '',
    element: <CountryList />,
    loader: countryListLoader(queryClient)
  },
  {
    path: '/:name',
    element: <CountryDetails />,
    loader: countryDetailsLoader(queryClient)
  }
]);

function syncTheme(): Theme {
  const value = window.localStorage.getItem('theme');
  return value !== null ? value as Theme : 'dark';
}

function App() {
  const [theme, setTheme] = useState<Theme>(syncTheme());
  
  useEffect(() => {
    document.documentElement.classList.add(theme);
    window.localStorage.setItem('theme', theme);

    return () => document.documentElement.classList.remove(theme);
  }, [theme]);

  return (
      <>
        <Header theme={theme} setTheme={setTheme}></Header>
        <MainBody>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}></RouterProvider>
          </QueryClientProvider>
        </MainBody>
      </>
  )
}

export default App
