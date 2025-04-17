import s from '../Cards.module.scss'
import { useGetCompaniesQuery } from '../../../../pages/organizations/api/orgApi.ts'

export const CompanyLI = () => {
  const { data } = useGetCompaniesQuery({ id: '12' })
  const companiesType = data?.type ?? []
  return (
    <li className={s.listItem}>
      <span className={s.listItemTitle}>Company type:</span>
      <div className={s.listItemDate}>
        {companiesType.map((el, i) => {
          const companyType = el.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
          return <span>{i < companiesType.length - 1 ? companyType + ',' : companyType}</span>
        })}
      </div>
    </li>
  )
}
