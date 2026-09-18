import React from 'react';
import { Box, Drawer, List, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DRAWER_WIDTH = 220;

const AdminLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuth();

    const links = [
        { label: 'Dashboard', path: '/admin' },
        { label: 'Products', path: '/admin/products' },
        { label: 'Users', path: '/admin/users' },
    ];

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                sx={{ width: DRAWER_WIDTH, flexShrink: 0, '& .MuiDrawer-paper': { width: DRAWER_WIDTH } }}
            >
                <Toolbar>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red' }}>Admin</Typography>
                </Toolbar>
                <List>
                    {links.map((link) => (
                        <ListItemButton
                            key={link.path}
                            selected={location.pathname === link.path}
                            onClick={() => navigate(link.path)}
                        >
                            <ListItemText primary={link.label} />
                        </ListItemButton>
                    ))}
                    <ListItemButton onClick={handleLogout}>
                        <ListItemText primary="Log Out" />
                    </ListItemButton>
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default AdminLayout;
