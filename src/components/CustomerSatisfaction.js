import React from 'react'
import Box from '@material-ui/core/Box'

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
  </Box>
)
