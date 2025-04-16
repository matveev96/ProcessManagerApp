import { IconButton } from '@mui/material'

type Props = {
  icon?: string
  ariaLabel?: string
  onClick?: () => void
  color: 'primary' | 'secondary'
}

export const CustomIconButton = (props: Props) => {
  const { icon, ariaLabel, onClick, color } = props

  return (
    <IconButton onClick={onClick} color={color} aria-label={ariaLabel} sx={{ borderRadius: '10px' }}>
      <img src={icon} alt={ariaLabel} />
    </IconButton>
  )
}
