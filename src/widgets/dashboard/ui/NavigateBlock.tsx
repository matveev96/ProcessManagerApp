import { Link } from '../../../shared/ui/links/Link.tsx'
import { PATH } from '../../../app/router/router.tsx'

export const NavigateBlock = () => {
  return (
    <div>
      <Link name={'Organizations'} path={PATH.Organizations} />
      <Link name={'Contractors'} path={PATH.Contractors} />
      <Link name={'Clients'} path={PATH.Clients} />
    </div>
  )
}
