import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useAppDrawerContext } from '../shared/contexts';
import { Dashboard } from '../pages';

export const AppRoutes = () => {
  const { setDrawerOptions } = useAppDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label : 'home',        
        path  : '/pagina-inicial',
        icon  :  'home'

      }





    ]);
  }, []);

  return (
    <Routes>
      {/* <Route path='/initial-page' element={ <Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle Theme</Button>  }  /> */}
      <Route path='/initial-page' element={ <Dashboard />   }  />


      <Route path='*' element={<Navigate to="/initial-page" />}  />

    </Routes>

  );

};