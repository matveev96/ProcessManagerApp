import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

export const Content = () => {
  return (
    <Box
      position={'fixed'}
      sx={{
        left: 298,
        width: '100%',
        height: '100%',
        boxShadow: '4px 0 16px 0 rgba(0, 0, 0, 0.08)',
        padding: '20px',
      }}
    >
      <Outlet />
    </Box>
  )
}
