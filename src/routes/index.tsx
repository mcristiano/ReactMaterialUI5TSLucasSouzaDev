import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useAppDrawerContext();

  return (
    <Routes>
      <Route path='/initial-page' element={ <Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle Theme</Button>  }  />


      <Route path='*' element={<Navigate to="/initial-page" />}  />

    </Routes>

  );

};