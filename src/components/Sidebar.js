import React from 'react'
import Box from '@material-ui/core/Box'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import GroupRoundedIcon from '@material-ui/icons/GroupRounded'
import LoyaltyRoundedIcon from '@material-ui/icons/LoyaltyRounded'
import ChatRoundedIcon from '@material-ui/icons/ChatRounded'
import TuneRoundedIcon from '@material-ui/icons/TuneRounded'

export const Sidebar = () => (
  <Box className='sidebar'>
    <span
      className='sidebar-item active'
    >
      <Box component={HomeRoundedIcon} mr={1} />
    Dashboard
    </span>
    <span
      className='sidebar-item'
    >
      <Box component={GroupRoundedIcon} mr={1} />
    Companies
    </span>
    <span
      className='sidebar-item'
    >
      <Box component={LoyaltyRoundedIcon} mr={1} />
    Projects
    </span>
    <span
      className='sidebar-item'
    >
      <Box component={ChatRoundedIcon} mr={1} />
    Messages
    </span>
    <span
      className='sidebar-item bottom'
    >
      <Box component={TuneRoundedIcon} mr={1} />
    Settings
    </span>
  </Box>
)
