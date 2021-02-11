import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import { OverviewCard } from '../components/OverviewCard'
import { Header } from '../components/Header'

function Dashboard () {
  return (
    <div>
      <Box className='sidebar'>Dashboard</Box>
      <Box className='dashboard'>
        <Header />
        <p className='dashboard-overview__text'>Overview</p>
        <Grid container spacing={4}>
          {cardOverviewData.map((data) => (
            <OverviewCard data={data} key={data.title} />
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default Dashboard

const cardOverviewData = [
  {
    title: 'Registered companies',
    value: '849',
    percentage: '5.25',
    profit: true,
    background: '#FDECE2'
  },
  {
    title: 'New application',
    value: '508',
    percentage: '1.23',
    profit: false,
    background: '#EAEFFD'
  },
  {
    title: 'Total project done',
    value: '1043',
    percentage: '1.23',
    profit: false,
    background: '#FFF3C5'
  },
  {
    title: 'New projects',
    value: '38',
    percentage: '5.25',
    profit: true,
    background: '#E7F5FE'
  }
]
