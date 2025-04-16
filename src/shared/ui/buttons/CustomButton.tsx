import { Button } from '@mui/material'

type Props = {
  icon?: string
  ariaLabel?: string
  onClick?: () => void
  color: 'primary' | 'secondary'
  variant: 'contained' | 'outlined' | 'text'
  text?: string
}

export const CustomButton = (props: Props) => {
  const { icon, ariaLabel, onClick, color, variant, text } = props

  return (
    <Button
      size={'small'}
      variant={variant}
      onClick={onClick}
      color={color}
      aria-label={ariaLabel}
      sx={{ borderRadius: '10px', display: 'flex', gap: '12px' }}
    >
      <img src={icon} alt={ariaLabel} />
      <span>{text}</span>
    </Button>
  )
}
