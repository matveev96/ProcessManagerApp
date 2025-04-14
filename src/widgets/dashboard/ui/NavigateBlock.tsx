import { CustomLink } from '../../../shared/ui/links/CustomLink.tsx'
import { PATH } from '../../../app/router/router.tsx'
import { Box } from '@mui/material'
import Company from '../../../shared/assets/icons/common/Company.svg'
import Account from '../../../shared/assets/icons/common/Account.svg'
import Contractor from '../../../shared/assets/icons/common/Contractor.svg'

export const NavigateBlock = () => {
  return (
    <Box sx={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <CustomLink name={'Organizations'} path={PATH.Organizations} icon={Company} />
      <CustomLink name={'Contractors'} path={PATH.Contractors} icon={Contractor} />
      <CustomLink name={'Clients'} path={PATH.Clients} icon={Account} />
    </Box>
  )
}
