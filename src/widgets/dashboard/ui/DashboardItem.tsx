import { Box, Typography } from '@mui/material'
import { Border } from '../../../shared/ui/border/Border.tsx'
import { TypographyBlock } from './TypographyBlock.tsx'
import { NavigateBlock } from './NavigateBlock.tsx'

export const DashboardItem = () => {
  return (
    <Box
      position={'fixed'}
      sx={{
        height: '100%',
        width: '17%',
        left: '3%',
        boxShadow: '4px 0 16px 0 rgba(0, 0, 0, 0.08)',
        padding: '20px',
        backgroundColor: '#fff',
      }}
    >
      <TypographyBlock />
      <Border color={'rgba(0, 0, 0, 0.1)'} width={'100%'} />
      <NavigateBlock />
      <Typography
        variant="h3"
        component="div"
        sx={{
          fontSize: '11px',
          fontWeight: 400,
          lineHeight: '1.4',
          letterSpacing: '0.02em',
          color: 'rgba(0, 0, 0, 0.3)',
          position: 'absolute',
          left: 30,
          bottom: 20,
        }}
      >
        All Funeral Services © 2015-2025
      </Typography>
    </Box>
  )
}
