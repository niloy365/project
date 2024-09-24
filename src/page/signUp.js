import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, TextField, Button, Typography, Paper, Stack, IconButton } from '@mui/material';
import { AddShoppingCart} from '@mui/icons-material';
import { red } from '@mui/material/colors';


const SignUp = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        //signup logic here
        console.log('Firstname:', firstname);
        console.log('Lastname:', lastname);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('ConfirmPassword:', confirmpassword);
      };

  return (
    <Stack
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
    <Paper  sx={{ padding: 1.5, }}>
    <Button
            sx={{
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
        </Paper>
    <Container component="main" maxWidth="xs" sx={{ padding: 4, mt: 3 }} >
      <Paper elevation={3}  sx={{ padding: 3, mt: 8 }}>
        <Typography  component="h1" variant="h5" sx={{ fontWeight: 'bold', fontSize: 33,  textAlign: 'center',color: 'red' }}>
          Sign Up
        </Typography>
        <br/>
        <br/>
        <Box component="form" onSubmit={handleLogin} maxHeight="350" sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="First Name"
            name="name"
            autoFocus
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="last name"
            label="Last Name"
            name="last name"
            autoFocus
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Email"
            label="Email"
            type="email"
            id="Email"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Confirm Password"
            type="password"
            id="password"
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
            Submit
          </Button>
        <br/>
        <br/>
        <Stack spacing={2} 
        direction="row" 
        alignItems= 'center' 
        justifyItems='center' 
        ml={5}
        >
      <Typography variant="text">Already have an account?</Typography>
      <Button variant="text" sx={{fontWeight: 'bold'}} onClick={() => navigate('/login')}>Login</Button>
      </Stack>          
        </Box>
      </Paper>
    </Container>

    </Stack>
  );
}

export default SignUp