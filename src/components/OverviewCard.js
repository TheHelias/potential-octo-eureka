import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

export const OverviewCard = ({ data }) => {
  const { title, value, percentage, profit, background } = data
  return (
    <Grid item xs={6} md={3}>
      <Box
        className='dashboard-overview--card'
        style={{ background: background, fontSize: '12px' }}
      >
        <p className='dashboard-overview--card__title'>{title}</p>
        <p className='dashboard-overview--card__value'>{value}</p>
        <Box
          component={profit ? ArrowUpwardIcon : ArrowDownwardIcon}
          mr={1}
          style={{ color: profit ? '#50B83C' : '#F52D56', fontSize: '12px' }}
        />
        <span
          style={{ color: profit ? '#50B83C' : '#F52D56' }}
          className='dashboard-overview--card__percentage'
        >
          {percentage}%
        </span>
        <p className='dashboard-overview--card__text'>Since last week</p>
      </Box>
    </Grid>
  )
}
