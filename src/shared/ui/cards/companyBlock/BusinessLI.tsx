import s from '../Cards.module.scss'
import { useGetCompaniesQuery } from '../../../../pages/organizations/api/orgApi.ts'

export const BusinessLI = () => {
  const { data } = useGetCompaniesQuery({ id: '12' })
  const buisnessEntity = data?.businessEntity ?? ''
  return (
    <li className={s.listItem}>
      <span className={s.listItemTitle}>Business entity:</span>
      <span className={s.listItemDate}>{buisnessEntity}</span>
    </li>
  )
}
