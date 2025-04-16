import { SidebarItem } from '../../../widgets/sidebar/ui/SidebarItem.tsx'
import { DashboardItem } from '../../../widgets/dashboard/ui/DashboardItem.tsx'
import { Content } from '../../../widgets/content/Content.tsx'
import { Login } from '../../../pages/login/Login.tsx'
import { Box } from '@mui/material'

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SidebarItem />
      <DashboardItem />
      <Content />
      <Login />
    </Box>
  )
}

export default Layout
