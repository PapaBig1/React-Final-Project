import React from 'react';

import { Drawer as MUIDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import CreateIcon from '@mui/icons-material/Create';
import { withRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const drawerWidth = 240;

const Drawer = props => {
    const { history } = props;

    const itemsList = [
        {
            text: 'Home',
            icon: <HomeIcon />,
            onClick: () => history.push('/')
        }, 
        {
            text: 'Listings',
            icon: <AssignmentIcon />,
            onClick: () => history.push('/listings')
        },
        {
            text: 'Admin',
            icon: <SettingsIcon />,
            onClick: () => history.push('/admin')
        },
    ];

    return (
        <ThemeProvider theme={darkTheme}>
        <MUIDrawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <List>
                {itemsList.map((item, index) => {
                    const { text, icon, onClick } = item;
                    return (
                    <ListItem key={text} onClick={onClick}>
                        <ListItemButton>
                            { icon && <ListItemIcon>{icon}</ListItemIcon> }
                            <ListItemText primary={text} />
                        </ListItemButton>

                    </ListItem>
                    );
                })}
            </List>
        </MUIDrawer>
        </ThemeProvider>
    )
};

export default withRouter(Drawer);