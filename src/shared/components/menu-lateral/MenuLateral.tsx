import { PropsWithChildren } from 'react';
import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDrawerContext } from '../../contexts';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

interface IListItemLinkProps {
  to      : string;
  label   : string;
  icon    : string;
  onClick : (() => void) | undefined;
}

const ListItemLink = ({to, label, icon, onClick } : PropsWithChildren<IListItemLinkProps> ) => {
  const navigate = useNavigate();
  const resolvedPath = useResolvedPath( to );
  const match = useMatch( {path : resolvedPath.pathname, end: false} );
  
  const handleClick = () => {
    navigate(to);
    //onClick && onClick();
    //if (onClick) onClick();
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon> 
      </ListItemIcon>
      <ListItemText primary={label} />            
    </ListItemButton>
  );
};


export const MenuLateral = ({children} : PropsWithChildren<{}> ) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useAppDrawerContext();
  

  return (
    <>
      <Drawer open={ isDrawerOpen } variant={ smDown ? 'temporary' : 'permanent' } onClose={toggleDrawerOpen}>
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
              {drawerOptions.map( drawerOption => (
                <ListItemLink
                  key={drawerOption.path}                  
                  icon={drawerOption.icon}
                  to={drawerOption.path}
                  label={drawerOption.label}
                  onClick={ smDown ? toggleDrawerOpen : undefined }
                />
              
              ))}
              
            </List>
            
            
          </  Box> 
          
        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={ smDown ? 0 : theme.spacing(28) } >
        {children}
      </Box>
    </>
  );


};