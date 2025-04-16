import { Card } from '../../shared/ui/cards/Card.tsx'
import { Box } from '@mui/material'

export const Organizations = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <Card />
      <Card />
      <Card />
    </Box>
  )
}
