import { Button } from '@mui/material'

type Props = {
  icon: string
  ariaLabel: string
}

export const CustomIconButton = (props: Props) => {
  const { icon, ariaLabel } = props

  return (
    <Button color="secondary" aria-label={ariaLabel} variant={'text'} sx={{ borderRadius: '20px' }}>
      <img src={icon} alt={ariaLabel} />
    </Button>
  )
}
