import s from './link.module.scss'
import { NavLink } from 'react-router-dom'

export type Name = 'Organizations' | 'Contractors' | 'Clients'

export type LinkProps = {
  path: string
  name?: Name
  icon?: string
  onClick?: () => void
  className?: string
}

export const CustomLink = (props: LinkProps) => {
  const { name, path, icon, onClick, className } = props

  return (
    <NavLink onClick={onClick} className={`${s.linkButton} ${className}`} to={path}>
      <img src={icon} alt={name} />
      <span className={s.name}>{name}</span>
    </NavLink>
  )
}
