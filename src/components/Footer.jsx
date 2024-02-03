import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: '#003747', 
        paddingTop: '1rem',
        paddingBottom: '1rem',
        color: 'white', 
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5">
              BOOKING APP
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {`${new Date().getFullYear()} | React  | React Router | BAKI TUNCER`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};


