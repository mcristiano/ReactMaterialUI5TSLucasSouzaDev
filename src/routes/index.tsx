import { Routes, Route, Navigate } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/initial-page' element={ <p>Pagina Inicial</p> }  />


      <Route path='*' element={<Navigate to="/initial-page" />}  />

    </Routes>

  );

}