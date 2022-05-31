import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?     : string ;
  
  mostrarBotaoNovo?   : boolean ;
  mostrarBotaoVoltar? : boolean ;
  mostrarBotaoApagar? : boolean ;
  mostrarBotaoSalvar? : boolean ;
  mostrarBotaoSalvarEFechar? : boolean ;

  mostrarBotaoNovoCarregando?   : boolean ;
  mostrarBotaoVoltarCarregando? : boolean ;
  mostrarBotaoApagarCarregando? : boolean ;
  mostrarBotaoSalvarCarregando? : boolean ;
  mostrarBotaoSalvarEFecharCarregando? : boolean ;


  aoClicarEmNovo?  : () => void ;
  aoClicarEmVoltar?: () => void; 
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe = ({ 
  textoBotaoNovo = 'Novo',    
  mostrarBotaoNovo = true, 
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,
  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
} : PropsWithChildren<IFerramentasDeDetalheProps> ) => {

  const theme = useTheme();    
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));  
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));  

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

      {mostrarBotaoSalvar && (
        <Button
          color='primary'  
          disableElevation
          variant='contained'
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvar}          
        ><Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' >
            Salvar
          </Typography>
        </Button>  )}

      {/* <Skeleton width={110} height={60} />     */}

      {mostrarBotaoSalvarEFechar &&(
        <Button
          color='primary'  
          disableElevation
          variant='outlined'
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvarEFechar}
        ><Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' >
          Salvar e voltar
          </Typography>
        </Button>  )}

      {mostrarBotaoApagar &&(
        <Button
          color='primary'  
          disableElevation
          variant='outlined'
          startIcon={<Icon>delete</Icon>}
          onClick={aoClicarEmApagar}
        >Apagar
        </Button>  )}

      
      {mostrarBotaoNovo &&(
        <Button
          color='primary'  
          disableElevation
          variant='outlined'
          startIcon={<Icon>add</Icon>}
          onClick={aoClicarEmNovo}
        >{textoBotaoNovo}
        </Button>)}
      
      <Divider variant='middle' orientation='vertical' />


      {mostrarBotaoVoltar &&(  
        <Button
          color='primary'  
          disableElevation
          variant='outlined'
          startIcon={<Icon>arrow_back</Icon>}
          onClick={aoClicarEmVoltar}

        >Voltar
        </Button>)}

    </Box>

  );

};