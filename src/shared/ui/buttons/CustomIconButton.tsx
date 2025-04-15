import { Button } from '@mui/material'

type Props = {
  icon?: string
  ariaLabel?: string
  onClick?: () => void
  variant: 'text' | 'outlined' | 'contained'
}

export const CustomIconButton = (props: Props) => {
  const { icon, ariaLabel, onClick, variant } = props

  return (
    <Button onClick={onClick} color="secondary" aria-label={ariaLabel} variant={variant} sx={{ borderRadius: '20px' }}>
      <img src={icon} alt={ariaLabel} />
    </Button>
  )
}
