import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Badge from '@material-ui/core/Badge'

import profilePhoto from '../assets/confident-smiling-young-man.png'

function Dashboard () {
  return (
    <div>
      <Box className='sidebar'>Dashboard</Box>
      <Box className='dashboard'>
        <div className='dashboard-header'>
          <Grid
            className='dashboard-search'
            container
            spacing={1}
            alignItems='center'
          >
            <Grid item>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </Grid>
            <Grid item>
              <input className='dashboard-search__input' placeholder='Search' />
            </Grid>
          </Grid>
          <Grid item className='dashboard-profile'>
            <Badge variant='dot' color='error'>
              <NotificationsIcon />
            </Badge>
            <div className='dashboard-profile__photo'>
              <img src={profilePhoto} />
            </div>
          </Grid>
        </div>
      </Box>
    </div>
  )
}

export default Dashboard
