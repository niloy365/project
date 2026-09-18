import React, { useCallback, useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Button, Typography, Chip } from '@mui/material';
import request from '../utils/api';
import { useAuth } from '../context/AuthContext';

const AdminUsers = () => {
    const { token, user: currentUser } = useAuth();
    const [users, setUsers] = useState([]);

    const loadUsers = useCallback(() => request('/users', { token }).then(setUsers).catch(() => {}), [token]);

    useEffect(() => { loadUsers(); }, [loadUsers]);

    const toggleRole = async (u) => {
        const role = u.role === 'admin' ? 'user' : 'admin';
        await request(`/users/${u._id}/role`, { method: 'PATCH', body: { role }, token });
        loadUsers();
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this user?')) return;
        await request(`/users/${id}`, { method: 'DELETE', token });
        loadUsers();
    };

    return (
        <>
            <Typography variant="h4" gutterBottom>Users</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((u) => (
                        <TableRow key={u._id}>
                            <TableCell>{u.firstname} {u.lastname}</TableCell>
                            <TableCell>{u.email}</TableCell>
                            <TableCell>
                                <Chip label={u.role} color={u.role === 'admin' ? 'primary' : 'default'} size="small" />
                            </TableCell>
                            <TableCell align="right">
                                <Button size="small" onClick={() => toggleRole(u)} disabled={u._id === currentUser.id}>
                                    {u.role === 'admin' ? 'Demote' : 'Promote'}
                                </Button>
                                <Button size="small" color="error" onClick={() => handleDelete(u._id)} disabled={u._id === currentUser.id}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default AdminUsers;
