import React from 'react'
import Box from '@material-ui/core/Box'
import { Grid } from '@material-ui/core'
import PersonRoundedIcon from '@material-ui/icons/PersonRounded'

export const CustomerSatisfaction = () => (
  <Box className='dashboard-overview--customer-satisfaction'>
    <p className='dashboard-overview--customer-satisfaction__title'>
      Customer Satisfation
    </p>
    <p className='dashboard-overview--customer-satisfaction__subtitle'>
      Across help desk this month
    </p>
    <p className='dashboard-overview--customer-satisfaction__response'>
      Response received
    </p>
    <p className='dashboard-overview--customer-satisfaction__response-value'>
      390
    </p>
    <Grid
      className='dashboard-overview--customer-satisfaction__assessment'
      container
      spacing={1}
    >
      <Grid item xs={2}>
        <p className='dashboard-overview--customer-satisfaction__assessment-text'>
          Positive
        </p>
      </Grid>
      <Grid item xs={9}>
        <PersonRoundedIcon className='dashboard-overview--customer-satisfaction__assessment-icon positive' />
        <PersonRoundedIcon className='dashboard-overview--customer-satisfaction__assessment-icon positive' />
        <PersonRoundedIcon className='dashboard-overview--customer-satisfaction__assessment-icon positive' />
        <PersonRoundedIcon className='dashboard-overview--customer-satisfaction__assessment-icon positive' />
        <PersonRoundedIcon className='dashboard-overview--customer-satisfaction__assessment-icon positive' />
        <PersonRoundedIcon className='dashboard-overview--customer-satisfaction__assessment-icon positive' />
      </Grid>
      <Grid item xs={1}>
        <p className='dashboard-overview--customer-satisfaction__assessment-percentage'>
          60%
        </p>
      </Grid>
    </Grid>
    <Grid
      className='dashboard-overview--customer-satisfaction__assessment'
      container
      spacing={1}
    >
      <Grid item xs={2}>
        <p className='dashboard-overview--customer-satisfaction__assessment-text'>
          Neutral
        </p>
      </Grid>
      <Grid item xs={9}>
        <PersonRoundedIcon className='dashboard-overview--customer-satisfaction__assessment-icon neutral' />
        <PersonRoundedIcon className='dashboard-overview--customer-satisfaction__assessment-icon neutral' />
        <PersonRoundedIcon className='dashboard-overview--customer-satisfaction__assessment-icon neutral' />
      </Grid>
      <Grid item xs={1}>
        <p className='dashboard-overview--customer-satisfaction__assessment-percentage'>
          30%
        </p>
      </Grid>
    </Grid>
    <Grid
      className='dashboard-overview--customer-satisfaction__assessment'
      container
      spacing={1}
    >
      <Grid item xs={2}>
        <p className='dashboard-overview--customer-satisfaction__assessment-text negative'>
          Negative
        </p>
      </Grid>
      <Grid item xs={9}>
        <PersonRoundedIcon className='dashboard-overview--customer-satisfaction__assessment-icon negative' />
        <PersonRoundedIcon className='dashboard-overview--customer-satisfaction__assessment-icon negative' />
      </Grid>
      <Grid item xs={1}>
        <p className='dashboard-overview--customer-satisfaction__assessment-percentage'>
          20%
        </p>
      </Grid>
    </Grid>
  </Box>
)
