import React from 'react';
import { Box, Typography, Grid } from '@mui/material/';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <>
      <Box
        sx={{
          height: 50,
          pb: 0
        }}
      >
        <Grid container direction='row' justifyContent='center'>
          <Grid item md={12} textAlign='center'>
            <Link to='/'>
              <Typography variant='h4' color='#1976d2'>
                Blockchain E-Voting.
              </Typography>
            </Link>
            <Grid item textAlign='center'>
              <Typography
                variant='h6'
                color='black'
                sx={{
                  pt: 0,
                  pb: 2
                }}

              >
                Vote securely on-chain. Decentralized and secure. Long live democracy!! <span> ✅ </span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
