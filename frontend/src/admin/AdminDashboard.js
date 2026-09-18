import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import request from '../utils/api';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
    const { token } = useAuth();
    const [counts, setCounts] = useState({ products: 0, users: 0 });

    useEffect(() => {
        Promise.all([
            request('/products'),
            request('/users', { token }),
        ]).then(([products, users]) => {
            setCounts({ products: products.length, users: users.length });
        }).catch(() => {});
    }, [token]);

    return (
        <>
            <Typography variant="h4" gutterBottom>Dashboard</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h3">{counts.products}</Typography>
                        <Typography color="text.secondary">Products</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h3">{counts.users}</Typography>
                        <Typography color="text.secondary">Users</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default AdminDashboard;
