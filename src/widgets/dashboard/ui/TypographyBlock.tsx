import { Box, Typography } from '@mui/material'

export const TypographyBlock = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
      <Typography
        variant="h1"
        component="div"
        sx={{ fontSize: '14px', fontWeight: 700, lineHeight: '1.7', letterSpacing: '0.02em' }}
      >
        Oak Tree Cemetery
      </Typography>
      <Typography
        variant="h2"
        component="div"
        sx={{ fontSize: '11px', fontWeight: 400, lineHeight: '1.4', letterSpacing: '0.02em' }}
      >
        Process Manager
      </Typography>
    </Box>
  )
}
