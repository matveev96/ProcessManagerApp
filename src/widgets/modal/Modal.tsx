import s from './Modal.module.scss'
import type { ReactNode } from 'react'
import { Button } from '@mui/material'

type Props = {
  open: boolean
  onClose: () => void
  onCancel?: () => void
  onSubmit?: () => void
  onCancelTitle?: string
  onSubmitTitle?: string
  children: ReactNode
  title: string
}

export const Modal = ({ onClose, open, children, title, onCancelTitle, onSubmitTitle, onSubmit, onCancel }: Props) => {
  return (
    <>
      {open && (
        <div onClick={onClose} className={s.overlay}>
          <div onClick={(event) => event.stopPropagation()} className={s.content}>
            <h3 className={s.title}>{title}</h3>

            {children}

            <div className={s.buttonBox}>
              {onCancel && (
                <Button variant={'outlined'} onClick={onCancel}>
                  {onCancelTitle}
                </Button>
              )}
              <Button variant={'contained'} onClick={onSubmit}>
                {onSubmitTitle}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
