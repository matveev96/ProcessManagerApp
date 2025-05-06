import s from '../Cards.module.scss'
import { CustomButton } from '../../buttons/CustomButton.tsx'
import add from '../../../assets/icons/common/Add Photo.svg'

export const HeaderPhotosBlock = () => {
  return (
    <div className={s.cardHeader}>
      <h3 className={s.cardHeaderTitle}>Photos</h3>
      <CustomButton color={'primary'} variant={'outlined'} icon={add} text={'add'} ariaLabel={'add'} />
    </div>
  )
}
