import { createContext, useCallback, useState, useContext, PropsWithChildren } from 'react';

interface IDrawerContextData {
    isDrawerOpen: boolean
    toggleDrawerOpen: () => void;
    // children?: React.ReactNode;
}

const DrawerContext = createContext( {} as IDrawerContextData );

export const useAppDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider = ( {children} : PropsWithChildren<{}> ) => {
  const [ isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen( oldDrawerOpen => !oldDrawerOpen );       
  }, []);
  
  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen}}>
      {children}
    </DrawerContext.Provider>
  );
};