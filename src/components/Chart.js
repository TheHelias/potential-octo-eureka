import React from 'react'
import Box from '@material-ui/core/Box'
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
import { FormControl, InputLabel, Select } from '@material-ui/core'
import { chartData } from '../views/Dashboard'

export const Chart = () => (
  <>
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
            <stop offset='5%' stopColor='#3b99fc' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#3b99fc' stopOpacity={0} />
          </linearGradient>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#fa5f1c' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#fa5f1c' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey='name' />
        <YAxis />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='uv'
          stroke='#3b99fc'
          fillOpacity={1}
          fill='url(#colorUv)'
        />
        <Area
          type='monotone'
          dataKey='pv'
          stroke='#fa5f1c'
          fillOpacity={1}
          fill='url(#colorPv)'
        />
      </AreaChart>
    </ResponsiveContainer>
  </>
)
