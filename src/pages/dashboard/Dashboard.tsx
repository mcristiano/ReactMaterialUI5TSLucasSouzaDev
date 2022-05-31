import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const Dashboard = () => {



  return (
    <LayoutBaseDePagina 
      titulo='Titulo Base' 
      barraDeFerramentas={( <FerramentasDaListagem mostrarInputBusca /> )}>
        Testando
    </LayoutBaseDePagina>
  );



};