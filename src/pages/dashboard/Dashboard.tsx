import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const Dashboard = () => {



  return (
    <LayoutBaseDePagina 
      titulo='Titulo Base' 
      barraDeFerramentas={( 
        <FerramentasDeDetalhe mostrarBotaoSalvarEFechar /> )}>
        Testando
    </LayoutBaseDePagina>
  );



};