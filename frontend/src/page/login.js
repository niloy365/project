import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, TextField, Button, Typography, Paper, Stack, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
          const user = await login(email, password);
          navigate(user.role === 'admin' ? '/admin' : '/category');
        } catch (err) {
          setError(err.message);
        }
      };

  return (
    <Box
    sx={{
      backgroundImage: 'url("https://m.economictimes.com/thumb/msid-102691530,width-1200,height-900,resizemode-4,imgsize-196944/by-rediscovering-traditions-we-can-overcome-soaring-vegetable-prices.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Container component="main" maxWidth="xs" sx={{ padding: 4, mt: 3 }} >
      <Paper elevation={3} sx={{ padding: 3, mt: 8 }}>
      <Button
            sx={{
              ml: 10,
              color: 'inherit',
              textTransform: 'none',
              display: 'flex',
              alignItems: 'center',
              '&:hover': {
                backgroundColor: 'white',
              },
            }}
          >
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ color: 'red', fontWeight: 'bold', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Vendor
            </Typography>
            <IconButton aria-label="add to shopping cart">
              <AddShoppingCart sx={{ fontSize: 'h4.fontSize', color: 'red' }} />
            </IconButton>
          </Button>

        <br/>
        <br/>
        <Box component="form" onSubmit={handleLogin} maxHeight="350" sx={{ mt: 1 }}>
          {error && <Typography color="error" sx={{ mb: 1 }}>{error}</Typography>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Button variant="text" sx={{fontSize:14, fontWeight: 'bold'}}> 
            Forgot Password?
          </Button>
        <br/>
        <br/>
        <Stack spacing={2} 
        direction="row" 
        alignItems= 'center' 
        justifyItems='center' 
        ml={5}
        >
      <Typography variant="text">Don't have an account?</Typography>
      <Button variant="text" sx={{fontWeight: 'bold'}} onClick={() => navigate('/signup')}>Sign Up</Button>
      </Stack>          
        </Box>
      </Paper>
    </Container>
    </Box>


  );
}

export default Login