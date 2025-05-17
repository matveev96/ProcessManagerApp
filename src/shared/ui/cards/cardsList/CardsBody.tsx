import s from '../Cards.module.scss'
import type { CardsListType } from './type.ts'

export const CardsBody = (props: CardsListType) => {
  const { children } = props
  return (
    <div className={s.cardBody}>
      <ul className={s.list}>{children}</ul>
    </div>
  )
}
