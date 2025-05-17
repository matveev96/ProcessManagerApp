import s from '../Cards.module.scss'
import { useAppSelector } from '../../../../app/store/hooks/useAppSelector.ts'
import { selectIsEditCompanyCard } from '../../../../app/store/appSlice.ts'
import { TextField } from '@mui/material'
import type { ChangeEvent } from 'react'

type AgreementLIProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>, name: string) => void
  noValue: string
  dateValue: string
}

export const AgreementLI = (props: AgreementLIProps) => {
  const { onChange, noValue, dateValue } = props
  const editCompanyCard = useAppSelector(selectIsEditCompanyCard)

  return (
    <>
      {!editCompanyCard ? (
        <li className={s.listItem}>
          <span className={s.listItemTitle}>Agreement:</span>
          <div className={s.listItemDate}>
            {noValue}
            <span className={s.line}>/</span>
            {dateValue}
          </div>
        </li>
      ) : (
        <li className={s.listEditItem}>
          <span className={s.listItemTitle}>Agreement number:</span>
          <TextField value={noValue} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e, 'no')}></TextField>
          <span className={s.listItemEditDate}>Date:</span>
          <TextField
            value={dateValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e, 'issue_date')}
          ></TextField>
        </li>
      )}
    </>
  )
}
