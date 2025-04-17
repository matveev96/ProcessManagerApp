import { useGetContactsQuery } from '../../../../pages/organizations/api/orgApi.ts'
import s from '../Cards.module.scss'

export const EmailLI = () => {
  const { data } = useGetContactsQuery({ id: '16' })
  const email = data?.email

  return (
    <li className={s.listItem}>
      <span className={s.listItemTitle}>E-mail:</span>
      <span className={s.listItem}>{email}</span>
    </li>
  )
}
