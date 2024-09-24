import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid2, Container, Box, TextField, Button, Typography, Paper, Stack, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            onClick={() => navigate('/category')}
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