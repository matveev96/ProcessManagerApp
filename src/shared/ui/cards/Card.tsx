import { Paper } from '@mui/material'
import s from './Cards.module.scss'
import type { ReactNode } from 'react'

export const Card = (props: { children: ReactNode }) => {
  return (
    <Paper elevation={2} sx={{ borderRadius: '16px' }}>
      <div className={s.cardContent}>{props.children}</div>
    </Paper>
  )
}
