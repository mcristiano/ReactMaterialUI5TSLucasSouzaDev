import { ThemeProvider } from "@emotion/react";

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes/index';
import { AppThemePrvoider } from "./shared/contexts/ThemeContext";




export const App = () => {
  return (
    <AppThemePrvoider>
      <BrowserRouter>
          <AppRoutes />      
      </BrowserRouter>
    </AppThemePrvoider>
  );
}
