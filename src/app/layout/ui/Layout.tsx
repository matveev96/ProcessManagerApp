import { SidebarItem } from '../../../widgets/sidebar/ui/SidebarItem.tsx'
import { DashboardItem } from '../../../widgets/dashboard/ui/DashboardItem.tsx'
import { Content } from '../../../widgets/content/Content.tsx'

const Layout = () => {
  return (
    <div>
      <SidebarItem />
      <DashboardItem />
      <Content />
    </div>
  )
}

export default Layout
