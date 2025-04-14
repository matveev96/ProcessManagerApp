import s from './link.module.scss'
import { NavLink } from 'react-router-dom'

type LinkProps = {
  path: string
  name: string
  icon: string
}

export const CustomLink = (props: LinkProps) => {
  const { name, path, icon } = props
  return (
    <NavLink className={s.linkButton} to={path}>
      <img src={icon} alt={name} />
      <span className={s.name}>{name}</span>
    </NavLink>
  )
}
