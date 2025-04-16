import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

export const Content = () => {
  return (
    <Box
      position={'absolute'}
      sx={{
        left: '20%',
        width: '80%',
        height: '100%',
        padding: '20px',
        backgroundColor: '#fff, rgba(0, 0, 0, 0.03)',
      }}
    >
      <Box sx={{ width: '80%', margin: '0 auto' }}>
        <Outlet />
      </Box>
    </Box>
  )
}
