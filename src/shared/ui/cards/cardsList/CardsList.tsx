import s from '../Cards.module.scss'
import type { CardsListType } from './type.ts'

export const CardsList = (props: CardsListType) => {
  const { children } = props
  return <ul className={s.list}>{children}</ul>
}
