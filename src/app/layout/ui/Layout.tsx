import { SidebarItem } from '../../../widgets/sidebar/ui/SidebarItem.tsx'
import { DashboardItem } from '../../../widgets/dashboard/ui/DashboardItem.tsx'
import { Content } from '../../../widgets/content/Content.tsx'
import { Login } from '../../../pages/login/Login.tsx'

const Layout = () => {
  return (
    <>
      <SidebarItem />
      <DashboardItem />
      <Content />
      <Login />
    </>
  )
}

export default Layout
