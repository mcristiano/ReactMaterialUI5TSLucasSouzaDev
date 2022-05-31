import { createContext, useCallback, useState, useContext, PropsWithChildren } from 'react';

interface IDrawerContextData {
    isDrawerOpen: boolean
    toggleDrawerOpen: () => void;
    drawerOptions: IDrawerOption[];
    setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

interface IDrawerOption {
  path  : string 
  icon  : string 
  //to    : string 
  label : string
}

const DrawerContext = createContext( {} as IDrawerContextData );

export const useAppDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider = ( {children} : PropsWithChildren<{}> ) => {
  const [ isDrawerOpen  , setDrawerOpen] = useState(false);
  const [ drawerOptions , setDrawerOptions] = useState<IDrawerOption[]>([]);  

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen( oldDrawerOpen => !oldDrawerOpen );       
  }, []);

  const handleDrawerOptions = useCallback(( newDrawerOptions : IDrawerOption[]) => {
    setDrawerOptions( newDrawerOptions );       
  }, []);
  
  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
};