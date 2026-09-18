import React, { useState } from 'react';
import { Box, Typography, Stack, TextField, Button } from '@mui/material';
import CustomAppBar from '../components/appBar';
import AboutUs from '../components/aboutus';

// VerticalMenu Component
const VerticalMenu = ({ onMenuItemClick }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: '200px', // Menu width
        backgroundColor: 'White', // Menu background color
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        mt: '64px',
        justifyContent: 'space-between'
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ color: "red", marginBottom: '5px', fontWeight: 'bold' }}>Menu</Typography>
        <hr style={{ border: '1px solid red', width: '109%', margin: 0, padding: 0 }} />
        <br />
        {['My Info', 'Orders', 'Favourite', 'Purchased'].map((item) => (
          <React.Fragment key={item}>
            <Button onClick={() => onMenuItemClick(item.toLowerCase().replace(' ', '-'))} sx={{ color: "red", marginBottom: '15px', mt: 2, fontWeight: 'bold' }}>
              {item}
            </Button>
            <hr style={{ border: '1px solid red', width: '109%', margin: 0, padding: 0 }} />
          </React.Fragment>
        ))}
      </Box>
      <Button href="/login" variant="outlined" sx={{ border: "1px solid red", color: "red", fontWeight: 'bold', fontSize: 16 }}>Log Out</Button>
    </Box>
  );
};

// MainContent Component
const MainContent = ({ activeSection }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        ml: '240px',
        padding: 3
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {activeSection === 'my-info' && (
          <Box id="my-info">
            <h2>My Information</h2>
            <Box sx={{ flex: 1, flexDirection: 'row', backgroundColor: 'white', padding: '20px', border: '1px solid red', }}>
              <Stack sx={{ flexDirection: 'row', ml: 7 }}>
                <Box sx={{ flexDirection: "column", alignContent:"space-around" }}>
                  <TextField
                    disabled
                    id="outlined-error"
                    label="Full Name"
                    defaultValue="Chris Hemsworth"
                    sx={{ mt: 2, mb: 2, ml: 2, mr: 2 }}
                  />
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label="Email"
                    defaultValue="chris@gmail.com"
                    sx={{mt: 2, mb: 2, ml: 2, mr: 2}}
                  />
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label="Date of Birth"
                    defaultValue="22 April 2000"
                    sx={{mt: 2, mb: 2, ml: 2, mr: 2}}
                  />
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label="Address"
                    defaultValue="Byron Bay, South Wales"
                    sx={{mt: 2, mb: 2, ml: 2, mr: 2}}
                  />
                </Box>
                <Box sx={{ flexDirection: "column" }}>
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label="User Name"
                    defaultValue="@chrishemsworth"
                    sx={{ mt: 2, mb: 2, ml: 2, mr: 2}}
                  />
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label="Phone Number"
                    defaultValue="01845069841"
                    sx={{ mt: 2, mb: 2, ml: 2, mr: 2}}
                  />
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label="Gender"
                    defaultValue="Male"
                    sx={{ mt: 2, mb: 2, ml: 2, mr: 2 }}
                  />
                </Box>
              </Stack>
            </Box>
          </Box>
        )}
        {activeSection === 'orders' && (
          <Box id="orders">
            <h2>Orders</h2>
            <Box sx={{ flex: 1, backgroundColor: 'white', padding: '20px', border: '1px solid red' }}>
              <Typography variant="h5">Orders</Typography>
            </Box>
          </Box>
        )}
        {activeSection === 'favourite' && (
          <Box id="favourite">
            <h2>Favourite</h2>
            <Box sx={{ flex: 1, backgroundColor: 'white', border: '1px solid red', padding: '20px' }}>
              <Typography variant="h5">Favourite</Typography>
            </Box>
          </Box>
        )}
        {activeSection === 'purchased' && (
          <Box id="purchased">
            <h2>Purchased</h2>
            <Box sx={{ flex: 1, backgroundColor: 'white', border: '1px solid red', padding: '20px' }}>
              <Typography variant="h5">Purchased</Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

// Profile Component
const Profile = () => {
  const [activeSection, setActiveSection] = useState('my-info');

  return (
    <>
      <CustomAppBar />
      <br />
      <br />
      <br />
      <VerticalMenu onMenuItemClick={setActiveSection} />
      <MainContent activeSection={activeSection} />
      <AboutUs />
    </>
  );
};

export default Profile;
