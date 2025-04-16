import s from '../../../../pages/organizations/Organizations.module.scss'

export type CardsListType = {
  number: string
  date: string
  buisnessEntity: string
  companiesType: Array<string>
}

export const CardsList = (props: CardsListType) => {
  const { number, date, buisnessEntity, companiesType } = props
  return (
    <ul className={s.list}>
      <li className={s.listItem}>
        <span className={s.listItemTitle}>Agreement:</span>
        <div className={s.listItemDate}>
          {number}
          <span className={s.line}>/</span>
          {date}
        </div>
      </li>

      <li className={s.listItem}>
        <span className={s.listItemTitle}>Business entity:</span>
        <div className={s.listItemDate}>{buisnessEntity}</div>
      </li>

      <li className={s.listItem}>
        <span className={s.listItemTitle}>Company type:</span>
        <div className={s.listItemDate}>
          {companiesType.map((el, i) => {
            const companyType = el.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
            return <span>{i < companiesType.length - 1 ? companyType + ',' : companyType}</span>
          })}
        </div>
      </li>
    </ul>
  )
}
