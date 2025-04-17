import s from '../Cards.module.scss'
import { useGetContactsQuery } from '../../../../pages/organizations/api/orgApi.ts'

export const ResponsibleLI = () => {
  const { data } = useGetContactsQuery({ id: '16' })
  const firstName = data?.firstname
  const lastName = data?.lastname

  return (
    <li className={s.listItem}>
      <span className={s.listItemTitle}>Responsible person:</span>
      <span className={s.listItemDate}>{`${firstName} ${lastName}`}</span>
    </li>
  )
}
