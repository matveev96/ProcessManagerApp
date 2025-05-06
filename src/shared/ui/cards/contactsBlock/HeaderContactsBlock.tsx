import s from '../Cards.module.scss'
import { CustomButton } from '../../buttons/CustomButton.tsx'
import edit from '../../../assets/icons/common/Edit.svg'

export const HeaderContactsBlock = () => {
  return (
    <div className={s.cardHeader}>
      <h3 className={s.cardHeaderTitle}>Contacts</h3>
      <CustomButton color={'primary'} variant={'outlined'} icon={edit} text={'edit'} ariaLabel={'edit'} />
    </div>
  )
}
