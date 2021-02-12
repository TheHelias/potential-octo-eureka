import React, { forwardRef } from 'react'
import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import MaterialTable from 'material-table'
import { Box, FormControl, InputLabel, Select } from '@material-ui/core'

import logo1 from '../assets/Cregital.png'

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
}

const columns = [
  {
    title: 'Company name',
    field: 'name',
    render: (rowData) => (
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '5px 10px 5px 10px'
        }}
      >
        <img
          style={{
            marginRight: '30px'
          }}
          src={rowData.img}
          alt='logo'
        />
        {rowData.name}
      </span>
    )
  },
  { title: 'Company size', field: 'size' },
  { title: 'Yrs of inc.', field: 'year', type: 'numeric' },
  {
    title: 'Revenue',
    field: 'revenueStatus',
    lookup: { Approved: 'Approved', Pending: 'Pending', Declined: 'Declined' },
    render: (rowData) => {
      if (rowData.revenueStatus === 'Approved') {
        return (
          <span
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            NGN {rowData.revenue}
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#50B83C',
                background: '#E3F1DF',
                borderRadius: '30px',
                width: '100px',
                padding: '3px 6pX',
                marginLeft: '20px'
              }}
            >
              <Box
                component={FiberManualRecordIcon}
                mr={1}
                style={{
                  fontSize: '12px'
                }}
              />
              {rowData.revenueStatus}
            </span>
          </span>
        )
      } else if (rowData.revenueStatus === 'Declined') {
        return (
          <span
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            NGN {rowData.revenue}
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#FA5F1C',
                background: '#FDECE2',
                borderRadius: '30px',
                width: '100px',
                padding: '3px 6pX',
                marginLeft: '20px'
              }}
            >
              <Box
                component={FiberManualRecordIcon}
                mr={1}
                style={{
                  fontSize: '12px'
                }}
              />
              {rowData.revenueStatus}
            </span>
          </span>
        )
      } else if (rowData.revenueStatus === 'Pending') {
        return (
          <span
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            NGN {rowData.revenue}
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#FFCA00',
                background: '#FFFAE8',
                borderRadius: '30px',
                width: '100px',
                padding: '3px 6pX',
                marginLeft: '20px'
              }}
            >
              <Box
                component={FiberManualRecordIcon}
                mr={1}
                style={{
                  fontSize: '12px'
                }}
              />
              {rowData.revenueStatus}
            </span>
          </span>
        )
      }
    }
  }
]

function DataTable () {
  return (
    <MaterialTable
      icons={tableIcons}
      style={{
        padding: '30px 20px',
        margin: 0,
        fontSize: '12px'
      }}
      options={{
        search: false,
        pageSize: 10,
        selection: true
      }}
      title=''
      columns={columns}
      data={data}
      components={{
        Toolbar: () => (
          <div className='dashboard-table--toolbar'>
            <span className='dashboard-table--toolbar__option active'>All</span>
            <span className='dashboard-table--toolbar__option'>
              <Box
                component={FiberManualRecordIcon}
                mr={0.5}
                style={{ color: '#50B83C', fontSize: '12px' }}
              />
              Approved
            </span>
            <span className='dashboard-table--toolbar__option'>
              <Box
                component={FiberManualRecordIcon}
                mr={0.5}
                style={{ color: '#FFDB51', fontSize: '12px' }}
              />
              Pending
            </span>
            <span className='dashboard-table--toolbar__option'>
              <Box
                component={FiberManualRecordIcon}
                mr={0.5}
                style={{ color: '#FA5F1C', fontSize: '12px' }}
              />
              Declined
            </span>
            <FormControl
              className='dashboard-table--toolbar__button'
              variant='outlined'
            >
              <InputLabel id='demo-simple-select-outlined-label'>
                Sort
              </InputLabel>
              <Select
                disabled
                labelId='demo-simple-select-outlined-label'
                id='demo-simple-select-outlined'
                label='Month'
              />
            </FormControl>
          </div>
        )
      }}
    />
  )
}

export default DataTable

const data = [
  {
    name: 'Mehmet',
    size: 'Baran',
    year: 1987,
    revenue: 63,
    img: logo1,
    revenueStatus: 'Declined'
  },
  {
    name: 'Zerya Betül',
    size: 'Baran',
    year: 2017,
    revenue: 34,
    img: logo1,
    revenueStatus: 'Approved'
  },
  {
    name: 'Zerya Betül',
    size: 'Baran',
    year: 2017,
    revenue: 34,
    img: logo1,
    revenueStatus: 'Pending'
  }
]
