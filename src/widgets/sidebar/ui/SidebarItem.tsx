import { AppBar, Box, Toolbar } from '@mui/material'
import { CustomIconButton } from '../../../shared/ui/buttons/CustomIconButton.tsx'

import logo from '../../../shared/assets/icons/common/Logo.svg'
import SignOut from '../../../shared/assets/icons/common/SignOut.svg'
import Settings from '../../../shared/assets/icons/common/Settings.svg'
import Company from '../../../shared/assets/icons/common/Company.svg'
import Deceased from '../../../shared/assets/icons/common/Deceased.svg'
import { Border } from '../../../shared/ui/border/Border.tsx'

export const SidebarItem = () => {
  return (
    <AppBar position={'fixed'} sx={{ height: '100%', width: '48px', left: 0 }}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '20px 6px',
          height: '100%',
        }}
      >
        <img src={logo} alt="logo" />
        <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <CustomIconButton icon={Company} ariaLabel={'Company'} />
          <CustomIconButton icon={Deceased} ariaLabel={'Deceased'} />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <Border width={'50%'} color={'rgba(255, 255, 255, 0.2)'} />
          <CustomIconButton icon={Settings} ariaLabel={'Settings'} />
          <CustomIconButton icon={SignOut} ariaLabel={'SignOut'} />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
