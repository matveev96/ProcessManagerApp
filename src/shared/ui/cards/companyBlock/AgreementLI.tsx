import s from '../Cards.module.scss'
import { useGetCompaniesQuery } from '../../../../pages/organizations/api/orgApi.ts'
import { dateFormat } from '../../../lib/date/dateFormat.ts'

export const AgreementLI = () => {
  const { data } = useGetCompaniesQuery({ id: '12' })
  const date = dateFormat(data?.contract.issue_date.slice(0, 10))
  const number = data?.contract.no ?? ''
  return (
    <li className={s.listItem}>
      <span className={s.listItemTitle}>Agreement:</span>
      <div className={s.listItemDate}>
        {number}
        <span className={s.line}>/</span>
        {date}
      </div>
    </li>
  )
}
