import { CustomLink } from '../../../shared/ui/links/CustomLink.tsx'
import { PATH } from '../../../app/router/router.tsx'
import { Box } from '@mui/material'
import Company from '../../../shared/assets/icons/common/Company.svg'
import Account from '../../../shared/assets/icons/common/Account.svg'
import Contractor from '../../../shared/assets/icons/common/Contractor.svg'
import s from '../../../shared/ui/links/link.module.scss'
import { useState } from 'react'

export const NavigateBlock = () => {
  const [active, setActive] = useState({ name: 'Organizations' })

  return (
    <Box sx={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <CustomLink
        onClick={() => setActive({ name: 'Organizations' })}
        className={`${active.name === 'Organizations' ? s.activeLinkButton : ''}`}
        name={'Organizations'}
        path={PATH.Organizations}
        icon={Company}
      />
      <CustomLink
        onClick={() => setActive({ name: 'Contractors' })}
        className={`${active.name === 'Contractors' ? s.activeLinkButton : ''}`}
        name={'Contractors'}
        path={PATH.Contractors}
        icon={Contractor}
      />
      <CustomLink
        onClick={() => setActive({ name: 'Clients' })}
        className={`${active.name === 'Clients' ? s.activeLinkButton : ''}`}
        name={'Clients'}
        path={PATH.Clients}
        icon={Account}
      />
    </Box>
  )
}
