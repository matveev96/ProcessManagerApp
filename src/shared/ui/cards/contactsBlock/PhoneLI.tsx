import { useGetContactsQuery } from '../../../../pages/organizations/api/orgApi.ts'
import s from '../Cards.module.scss'
import { phoneFormat } from '../../../lib/phone/phoneFormat.ts'

export const PhoneLI = () => {
  const { data } = useGetContactsQuery({ id: '16' })
  const phoneNumber = data?.phone

  return (
    <li className={s.listItem}>
      <span className={s.listItemTitle}>Responsible person:</span>
      <span className={s.listItem}>{phoneFormat(phoneNumber)}</span>
    </li>
  )
}
