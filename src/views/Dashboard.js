import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import { OverviewCard } from '../components/OverviewCard'
import { Header } from '../components/Header'
import DataTable from '../components/DataTable'
import { Sidebar } from '../components/Sidebar'
import { Messages } from '../components/Messages'
import { Chart } from '../components/Chart'
import { CustomerSatisfaction } from '../components/CustomerSatisfaction'

function Dashboard () {
  return (
    <div>
      <Sidebar />
      <Box className='dashboard'>
        <Header />
        <p className='dashboard-overview__text'>Overview</p>
        <Grid container spacing={4}>
          {cardOverviewData.map((data) => (
            <OverviewCard data={data} key={data.title} />
          ))}
        </Grid>
        <Chart />
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            <DataTable />
          </Grid>
          <Grid item xs={12} md={3}>
            <CustomerSatisfaction />
            <Messages />
          </Grid>
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

export const chartData = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: 'Aug',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Sept',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Oct',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Nov',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Dec',
    uv: 2390,
    pv: 3800,
    amt: 2500
  }
]
