import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer
} from 'recharts'

import { OverviewCard } from '../components/OverviewCard'
import { Header } from '../components/Header'
import { FormControl, InputLabel, Select } from '@material-ui/core'
import DataTable from '../components/DataTable'
import { Sidebar } from '../components/Sidebar'

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
        <div className='dashboard-overview--chart'>
          <FormControl
            className='dashboard-overview--chart__switch'
            variant='outlined'
          >
            <InputLabel id='demo-simple-select-outlined-label'>
              Monthly
            </InputLabel>
            <Select
              disabled
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              label='Month'
            />
          </FormControl>
          <div className='dashboard-overview--chart__legend'>
            <Box
              component={FiberManualRecordIcon}
              mr={0.5}
              style={{ color: '#2979F2', fontSize: '12px' }}
            />
            <span>Projects done</span>
            <Box
              component={FiberManualRecordIcon}
              mr={0.5}
              ml={4}
              style={{ color: '#FA5F1C', fontSize: '12px' }}
            />
            <span>New applications</span>
          </div>
        </div>
        <ResponsiveContainer width='100%' height={300}>
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
              </linearGradient>
              <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='uv'
              stroke='#8884d8'
              fillOpacity={1}
              fill='url(#colorUv)'
            />
            <Area
              type='monotone'
              dataKey='pv'
              stroke='#82ca9d'
              fillOpacity={1}
              fill='url(#colorPv)'
            />
          </AreaChart>
        </ResponsiveContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            <DataTable />
          </Grid>
          <Grid item xs={12} md={3}>
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
            </Box>
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

const chartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
]
