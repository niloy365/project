import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Button, IconButton, Typography, InputBase, Tooltip, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { AccountCircleOutlined, FavoriteBorder, ShoppingCartOutlined} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const CustomAppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ position: 'fixed', bgcolor: 'white'}}>
        <Toolbar>
          <Button
            onClick={() => navigate('/category')}
            sx={{
              textTransform: 'none',
              display: 'flex',
              alignItems: 'center',
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

          <Box sx={{ flexGrow: 1 }} />

          <Search sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <SearchIconWrapper>
              <SearchIcon sx={{ fontSize: 'h4.fontSize', color: "red" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              sx={{
                fontSize: 'h6.fontSize',
                color: "red",
                border: '1px solid red',
                borderRadius: '4px',
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ display: 'flex', marginLeft: 'auto' }}>
            <Tooltip title="Account">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircleOutlined sx={{ fontSize: 'h4.fontSize', color: "red" }} />
              </IconButton>
            </Tooltip>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{mt: 6, color:"red"}}
            >
              <MenuItem sx={{color:"red"}} onClick={() => navigate('/profile')}>Account</MenuItem>
              <MenuItem sx={{color:"red"}} onClick={handleLogout}>Log Out</MenuItem>
            </Menu>

            <Tooltip title="Shop">
              <IconButton>
                <ShoppingCartOutlined sx={{ fontSize: 'h4.fontSize', color: "red" }} onClick={() => navigate('/myShop')}/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Favorite">
              <IconButton>
                <FavoriteBorder sx={{ fontSize: 'h4.fontSize', color: "red" }} onClick={() => navigate('/profile')}/>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
