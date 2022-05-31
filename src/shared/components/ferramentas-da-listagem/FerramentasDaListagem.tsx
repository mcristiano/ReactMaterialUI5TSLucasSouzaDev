import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';


interface IFerramentasDaListagemProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;

    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem = ({ 
  textoDaBusca = '', 
  mostrarInputBusca = false , 
  aoMudarTextoDeBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo

} : PropsWithChildren<IFerramentasDaListagemProps> ) => {
  const theme = useTheme();


  return (
    <Box 
      gap={1}
      marginX={1}
      padding={1}      
      paddingX={2}
      display='flex'
      alignItems='center'
      height={theme.spacing(5)} 
      component={Paper}
    > 
           
      {mostrarInputBusca && (  
        <TextField
          size='small' 
          placeholder='Pesquisar ...' 
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}    
          value={textoDaBusca}
        />)}

      {mostrarBotaoNovo && (<Box flex={1} display='flex' justifyContent='end'>
        <Button
          color='primary'  
          disableElevation
          variant='contained'
          onClick={aoClicarEmNovo}
          endIcon={<Icon>add</Icon>}        
        >{textoBotaoNovo}</Button>  
      </Box>  )}
    
    </Box>

  );
};