import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material/';
import { Link } from 'react-router-dom';

import { makeStyles } from "@material-ui/styles";

const style = makeStyles({
  titleItemRight: {
    color: "white",
    backgroundColor: "blue",
    top: "50%",
    height: 30,
    float: "right",
    position: "relative",
    transform: "translateY(-50%)"
  }
});

export default function Header () {

  const classes = style();

  return (
    <>
      <div>
        <Box 
          sx={{
                pt: 3,
                pr: 1
              }}
        >
          <Button 
            variant='contained' 
            className={classes.titleItemRight}
          >
            Connect Wallet
          </Button> 
        </Box>
      </div>
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
          </Grid>
          <Grid item md={12} textAlign='center'> 
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
      </Box>
    </>
  );
}
