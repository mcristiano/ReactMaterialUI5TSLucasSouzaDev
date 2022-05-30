import { PropsWithChildren } from 'react';
import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';

export const MenuLateral = ({children} : PropsWithChildren<{}> ) => {
  const theme = useTheme();
  //export const MenuLateral : React.FC = ({children}) => {
  return (
    <>
      <Drawer variant='permanent'>
        <Box width={theme.spacing(28)} height='100%̈́$' display='flex' flexDirection='column' >
          <Box width='100%' height={theme.spacing(29)} display='flex' alignItems={'center'} justifyContent={'center'} >           
            <Avatar 
              sx={{height: theme.spacing(12), width: theme.spacing(12)  }}
              src="https://cdn.icon-icons.com/icons2/319/PNG/64/Darth-Vader-icon_34508.png" 
            />
          </Box>
          
          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon> 
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />            
              </ListItemButton>




            </List>
            
            
          </  Box> 
          
        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={ theme.spacing(28) } >
        {children}
      </Box>
    </>
  );


};