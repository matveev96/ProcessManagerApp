import { IconButton } from '@mui/material'

type Props = {
  icon?: string
  ariaLabel?: string
  onClick?: () => void
  color: 'primary' | 'secondary'
  backgroundColor?: string
}

export const CustomIconButton = (props: Props) => {
  const { icon, ariaLabel, onClick, color, backgroundColor } = props

  return (
    <IconButton
      size={'small'}
      onClick={onClick}
      color={color}
      aria-label={ariaLabel}
      sx={{ borderRadius: '10px', backgroundColor }}
    >
      <img src={icon} alt={ariaLabel} />
    </IconButton>
  )
}
