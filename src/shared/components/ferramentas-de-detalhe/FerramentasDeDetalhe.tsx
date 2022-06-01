import { PropsWithChildren, useRef } from 'react';
import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material';

interface IButtonFerramentasDeDetalheProps {
  corDoBotao?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  variant?:  'text' | 'outlined' | 'contained';
  mostrarBotao? : boolean;
  mostrarBotaoCarregando? : boolean;
  iconDoBotao? : string;
  aoClicarNoBotao? : () => void;
}


interface IFerramentasDeDetalheProps {  
  botaoNovo?           : IButtonFerramentasDeDetalheProps ;
  botaoAlterar?        : IButtonFerramentasDeDetalheProps ;         
  botaoApagar?         : IButtonFerramentasDeDetalheProps ;
  botaoSalvar?         : IButtonFerramentasDeDetalheProps ;
  botaoSalvarEFechar?  : IButtonFerramentasDeDetalheProps ;
  botaoVoltar?         : IButtonFerramentasDeDetalheProps ;
}

const ButtonCustom = ( 
  { children,
    corDoBotao = 'primary', 
    variant = 'outlined',
    mostrarBotao = false, 
    mostrarBotaoCarregando = false, 
    iconDoBotao, 
    aoClicarNoBotao } : PropsWithChildren<IButtonFerramentasDeDetalheProps>  ) => {

  const Botao = ( { children } : PropsWithChildren<{}>) => {
    return (
      <Button
        color={corDoBotao}   
        disableElevation
        variant={variant}
        startIcon={<Icon>{iconDoBotao}</Icon>}
        onClick={aoClicarNoBotao}    
      >
        <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' >
          {children}
        </Typography>
      </Button>    
    );
  };

   
  return (
    <>
      {mostrarBotao && !mostrarBotaoCarregando && (
        <Botao>{children}</Botao>           
      )}
      
      {mostrarBotaoCarregando && (
        <Skeleton>
          <Botao>{children}</Botao>           
        </Skeleton>
      )}    
    </>
  );
};

export const FerramentasDeDetalhe = ({ 
  botaoSalvar,  
  botaoSalvarEFechar,
  botaoNovo,
  botaoAlterar,
  botaoApagar,
  botaoVoltar
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

      <ButtonCustom iconDoBotao='save' variant='contained' {...botaoSalvar}   >
        Salvar
      </ButtonCustom>



      {(!smDown  && !mdDown)  && (
        <ButtonCustom iconDoBotao='save' {...botaoSalvarEFechar }  >
          Salvar e Fechar
        </ButtonCustom>
      )}

      {(!smDown)  && (
        <ButtonCustom iconDoBotao='add' {...botaoNovo }  >
          Novo
        </ButtonCustom>
      )}

      <ButtonCustom iconDoBotao='save' {...botaoAlterar }  >
        Alterar
      </ButtonCustom>

      <ButtonCustom iconDoBotao='delete' {...botaoApagar }  >
        Apagar
      </ButtonCustom>

      {
        ( 
          botaoVoltar?.mostrarBotao && 
          (botaoNovo?.mostrarBotao || botaoAlterar?.mostrarBotao || botaoApagar?.mostrarBotao || botaoSalvar?.mostrarBotao || botaoSalvarEFechar) 
        ) && (
          <Divider variant='middle' orientation='vertical' />
        )
      }

      <ButtonCustom iconDoBotao='arrow_back' {...botaoVoltar }  >
        Fechar
      </ButtonCustom> 
    </Box>

  );

};