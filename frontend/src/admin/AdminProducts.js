import React, { useEffect, useState } from 'react';
import {
    Table, TableHead, TableBody, TableRow, TableCell, Button, Typography,
    Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import request from '../utils/api';
import { useAuth } from '../context/AuthContext';

const emptyForm = { name: '', description: '', price: '', image: '' };

const AdminProducts = () => {
    const { token } = useAuth();
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState(emptyForm);
    const [error, setError] = useState('');

    const loadProducts = () => request('/products').then(setProducts).catch(() => {});

    useEffect(() => { loadProducts(); }, []);

    const openCreate = () => { setEditingId(null); setForm(emptyForm); setError(''); setOpen(true); };
    const openEdit = (p) => { setEditingId(p._id); setForm({ name: p.name, description: p.description, price: p.price, image: p.image }); setError(''); setOpen(true); };

    const handleSave = async () => {
        try {
            const payload = { ...form, price: Number(form.price) };
            if (editingId) {
                await request(`/products/${editingId}`, { method: 'PUT', body: payload, token });
            } else {
                await request('/products', { method: 'POST', body: payload, token });
            }
            setOpen(false);
            loadProducts();
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this product?')) return;
        await request(`/products/${id}`, { method: 'DELETE', token });
        loadProducts();
    };

    return (
        <>
            <Typography variant="h4" gutterBottom>Products</Typography>
            <Button variant="contained" startIcon={<Add />} onClick={openCreate} sx={{ mb: 2 }}>
                Add Product
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((p) => (
                        <TableRow key={p._id}>
                            <TableCell>{p.name}</TableCell>
                            <TableCell>{p.description}</TableCell>
                            <TableCell>{p.price}</TableCell>
                            <TableCell align="right">
                                <IconButton onClick={() => openEdit(p)}><Edit /></IconButton>
                                <IconButton onClick={() => handleDelete(p._id)}><Delete /></IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
                <DialogTitle>{editingId ? 'Edit Product' : 'Add Product'}</DialogTitle>
                <DialogContent>
                    {error && <Typography color="error">{error}</Typography>}
                    <TextField fullWidth margin="normal" label="Name" value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    <TextField fullWidth margin="normal" label="Description" value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })} />
                    <TextField fullWidth margin="normal" label="Price" type="number" value={form.price}
                        onChange={(e) => setForm({ ...form, price: e.target.value })} />
                    <TextField fullWidth margin="normal" label="Image URL" value={form.image}
                        onChange={(e) => setForm({ ...form, image: e.target.value })} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant="contained" onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default AdminProducts;
