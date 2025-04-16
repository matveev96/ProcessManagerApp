import { Paper } from '@mui/material'
import s from './Cards.module.scss'
import { CustomButton } from '../buttons/CustomButton.tsx'
import type { ReactNode } from 'react'

export type CardProps = {
  title: string
  buttonIcon: string
  buttonText: string
  children?: ReactNode
}

export const Card = (props: CardProps) => {
  const { title, buttonIcon, buttonText, children } = props

  return (
    <Paper elevation={2} sx={{ borderRadius: '16px' }}>
      <div className={s.cardContent}>
        <div className={s.cardHeader}>
          <h3 className={s.cardHeaderTitle}>{title}</h3>
          <CustomButton
            color={'primary'}
            variant={'outlined'}
            icon={buttonIcon}
            text={buttonText}
            ariaLabel={`${buttonIcon}`}
          />
        </div>

        <div className={s.cardBody}>{children}</div>
      </div>
    </Paper>
  )
}
