import s from './link.module.css'
import { NavLink } from 'react-router-dom'

type LinkProps = {
  path: string
  name: string
}

export const Link = (props: LinkProps) => {
  const { name, path } = props
  return (
    <div className={s.link}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  )
}
