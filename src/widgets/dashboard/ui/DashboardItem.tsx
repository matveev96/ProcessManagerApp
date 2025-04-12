import { Box } from '@mui/material'
import { Border } from '../../../shared/ui/border/Border.tsx'
import { TypographyBlock } from './TypographyBlock.tsx'
import { NavigateBlock } from './NavigateBlock.tsx'

export const DashboardItem = () => {
  return (
    <Box
      position={'fixed'}
      sx={{
        height: '100%',
        width: '250px',
        left: 48,
        boxShadow: '4px 0 16px 0 rgba(0, 0, 0, 0.08)',
        padding: '20px',
      }}
    >
      <TypographyBlock />
      <Border color={'rgba(0, 0, 0, 0.1)'} width={'100%'} />
      <NavigateBlock />
    </Box>
  )
}
