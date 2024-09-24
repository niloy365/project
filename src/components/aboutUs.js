import React from 'react';
import { Container, Grid, Typography, Box, IconButton, Link } from '@mui/material';
import { Facebook, YouTube, LinkedIn, X } from '@mui/icons-material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import LockIcon from '@mui/icons-material/Lock';

const links = [
  { name: 'Account', href: '/Profile' },
  { name: 'Shop', href: '/myShop' },
  { name: 'Shopping Cart', href: '/Profile' },
  { name: 'Favorite', href: '/Profile' },
  { name: 'Purchased', href: '/Profile' }
];

const AboutUs = () => {
  return (
    <>
      {/* About Section Start */}
      <Box sx={{ bgcolor: 'darkgrey', color: 'white', py: 5, mt: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ borderBottom: '1px solid rgba(226, 175, 24, 0.5)', pb: 4, mb: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} lg={3}>
                <Typography variant="h4" color="primary">
                  About Us
                </Typography>
              </Grid>
              <Grid item xs={12} lg={6}>
                {/* Additional content can be added here */}
              </Grid>
              <Grid item xs={12} lg={3}>
              <Box display="flex" justifyContent="flex-end" pt={3}>
             <IconButton sx={{ color: '#000000', fontSize: '30px' }}>
              <X sx={{ fontSize: '23px' }} />
             </IconButton>
             <IconButton sx={{ color: '#4267B2', fontSize: '30px' }}>
              <Facebook sx={{ fontSize: '30px' }} />
             </IconButton>
              <IconButton sx={{ color: '#FF0000', fontSize: '30px' }}>
                <YouTube sx={{ fontSize: '35px' }} />
              </IconButton>
              <IconButton sx={{ color: '#0077B5', fontSize: '30px' }}>
                <LinkedIn sx={{ fontSize: '30px' }} />
              </IconButton>
              </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Why People Like Us Section */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Why People Like Us!
            </Typography>

            <Grid container spacing={2}>
              {/* Fast Shipping */}
              <Grid item xs={12} sm={6} md={3}>
                <Box display="flex" alignItems="center" flexDirection="column" textAlign="center">
                  <LocalShippingIcon style={{ fontSize: 50, color: '#1976d2' }} />
                  <Typography variant="h6" gutterBottom>
                    Fast Shipping
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    We provide fast and reliable shipping for all orders.
                  </Typography>
                </Box>
              </Grid>

              {/* 24/7 Support */}
              <Grid item xs={12} sm={6} md={3}>
                <Box display="flex" alignItems="center" flexDirection="column" textAlign="center">
                  <HeadsetMicIcon style={{ fontSize: 50, color: '#1976d2' }} />
                  <Typography variant="h6" gutterBottom>
                    24/7 Support
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Our support team is available round the clock.
                  </Typography>
                </Box>
              </Grid>

              {/* Refund Policy */}
              <Grid item xs={12} sm={6} md={3}>
                <Box display="flex" alignItems="center" flexDirection="column" textAlign="center">
                  <PublishedWithChangesIcon style={{ fontSize: 50, color: '#1976d2' }} />
                  <Typography variant="h6" gutterBottom>
                    Refund Policy
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    30-day money-back guarantee on all purchases.
                  </Typography>
                </Box>
              </Grid>

              {/* Secure Payment */}
              <Grid item xs={12} sm={6} md={3}>
                <Box display="flex" alignItems="center" flexDirection="column" textAlign="center">
                  <LockIcon style={{ fontSize: 50, color: '#1976d2' }} />
                  <Typography variant="h6" gutterBottom>
                    Secure Payment
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    100% secure payment with top payment gateways.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Footer Info */}
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>
                Shop Info
              </Typography>
              <Box>
                {['About Us', 'Contact Us', 'Privacy Policy', 'Terms & Conditions', 'Return Policy', 'FAQs & Help'].map((link, index) => (
                  <Link href="" underline="none" key={index} sx={{ display: 'block', mb: 1 }}>
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>
                Account
              </Typography>
              <Box>
                {links.map((link, index) => (
                  <Link href={link.href} underline="none" key={index} sx={{ display: 'block', mb: 1 }}>
                    {link.name}
                  </Link>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body2">Address: 1429 Netus Rd, NY 48247</Typography>
              <Typography variant="body2">Email: Example@gmail.com</Typography>
              <Typography variant="body2">Phone: +0123 4567 8910</Typography>
              <Typography variant="body2" gutterBottom>
                Payment Methods
              </Typography>
              {/* External Payment Methods Image */}
              <img 
                src="https://content.invisioncic.com/p289038/monthly_2022_10/Payment-methods.png.2b9ba23475aaa15189f555f77ec3a549.png" 
                alt="Payment methods" 
                style={{ width: '100%', maxWidth: '200px', height: '60px' }} 
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* About Section End */}

      {/* Copyright */}
      <Box sx={{ bgcolor: 'darkgrey', py: 4 }}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'left' }}>
              <Typography variant="body2" color="white">
                © All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'right' }}>
              <Typography variant="body2" color="white">
                {/* Additional copyright information */}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Copyright End */}
    </>
  );
};

export default AboutUs;
