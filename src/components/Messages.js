import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded'
import { Button } from '@material-ui/core'
import logo1 from '../assets/Cregital.png'

export const Messages = () => (
  <Box className='dashboard-overview--messages'>
    <Grid container>
      <Grid item xs={6}>
        <p className='dashboard-overview--messages__title'>
          Messages
        </p>
      </Grid>
      <Grid item xs={6}>
        <Button
          className='dashboard-overview--messages__button'
          variant='contained'
        >
          + New Message
        </Button>
      </Grid>
    </Grid>
    <Grid className='dashboard-overview--messages__item' container spacing={1}>
      <Grid item xs={2}>
        <img src={logo1} alt='logo' />
      </Grid>
      <Grid item xs={9}>
        <p className='dashboard-overview--messages__company-name'>Cregital</p>
        <p className='dashboard-overview--messages__text'>Hey, don’t forget to clear server cache!</p>
        <p className='dashboard-overview--messages__time'>25mins ago</p>
      </Grid>
      <Grid item xs={1}>
        <MoreVertRoundedIcon />
      </Grid>
    </Grid>
    <Grid className='dashboard-overview--messages__item' container spacing={1}>
      <Grid item xs={2}>
        <img src={logo1} alt='logo' />
      </Grid>
      <Grid item xs={9}>
        <p className='dashboard-overview--messages__company-name'>Cregital</p>
        <p className='dashboard-overview--messages__text'>Hey, don’t forget to clear server cache!</p>
        <p className='dashboard-overview--messages__time'>25mins ago</p>
      </Grid>
      <Grid item xs={1}>
        <MoreVertRoundedIcon />
      </Grid>
    </Grid>
    <Grid className='dashboard-overview--messages__item' container spacing={1}>
      <Grid item xs={2}>
        <img src={logo1} alt='logo' />
      </Grid>
      <Grid item xs={9}>
        <p className='dashboard-overview--messages__company-name'>Cregital</p>
        <p className='dashboard-overview--messages__text'>Hey, don’t forget to clear server cache!</p>
        <p className='dashboard-overview--messages__time'>25mins ago</p>
      </Grid>
      <Grid item xs={1}>
        <MoreVertRoundedIcon />
      </Grid>
    </Grid>
    <Grid className='dashboard-overview--messages__item' container spacing={1}>
      <Grid item xs={2}>
        <img src={logo1} alt='logo' />
      </Grid>
      <Grid item xs={9}>
        <p className='dashboard-overview--messages__company-name'>Cregital</p>
        <p className='dashboard-overview--messages__text'>Hey, don’t forget to clear server cache!</p>
        <p className='dashboard-overview--messages__time'>25mins ago</p>
      </Grid>
      <Grid item xs={1}>
        <MoreVertRoundedIcon />
      </Grid>
    </Grid>
  </Box>
)
