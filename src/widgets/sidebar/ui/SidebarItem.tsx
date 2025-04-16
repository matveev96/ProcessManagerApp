import { AppBar, Box, Toolbar } from '@mui/material'
import { CustomIconButton } from '../../../shared/ui/buttons/CustomIconButton.tsx'

import logo from '../../../shared/assets/icons/common/Logo.svg'
import SignOut from '../../../shared/assets/icons/common/SignOut.svg'
import Settings from '../../../shared/assets/icons/common/Settings.svg'
import Company from '../../../shared/assets/icons/common/Company.svg'
import Deceased from '../../../shared/assets/icons/common/Deceased.svg'
import { Border } from '../../../shared/ui/border/Border.tsx'
import { setModalLogin } from '../../../app/store/appSlice.ts'
import { useAppDispatch } from '../../../app/store/hooks/useAppDispatch.ts'

export const SidebarItem = () => {
  const dispatch = useAppDispatch()

  const SignOutHandler = () => {
    dispatch(setModalLogin({ modalLogin: true }))
  }

  return (
    <AppBar position={'fixed'} sx={{ height: '100%', width: '3%', left: 0 }}>
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
          <CustomIconButton variant={'text'} icon={Company} ariaLabel={'Company'} />
          <CustomIconButton variant={'text'} icon={Deceased} ariaLabel={'Deceased'} />
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
          <CustomIconButton variant={'text'} icon={Settings} ariaLabel={'Settings'} />
          <CustomIconButton variant={'text'} onClick={SignOutHandler} icon={SignOut} ariaLabel={'SignOut'} />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
