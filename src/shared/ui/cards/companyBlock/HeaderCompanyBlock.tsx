import s from '../Cards.module.scss'
import { CustomButton } from '../../buttons/CustomButton.tsx'
import { useAppSelector } from '../../../../app/store/hooks/useAppSelector.ts'
import { selectIsEditCompanyCard, setIsEditCompanyCard } from '../../../../app/store/appSlice.ts'
import edit from '../../../assets/icons/common/Edit.svg'
import check from '../../../assets/icons/common/Check.svg'
import x from '../../../assets/icons/common/X.svg'
import { useAppDispatch } from '../../../../app/store/hooks/useAppDispatch.ts'

type Props = { submit: () => void }

export const HeaderCompanyBlock = (props: Props) => {
  const dispatch = useAppDispatch()

  const editHandler = () => {
    dispatch(setIsEditCompanyCard({ isEditCompanyCard: true }))
  }
  const saveChangesHandler = () => {
    dispatch(setIsEditCompanyCard({ isEditCompanyCard: false }))
    props.submit()
  }
  const cancelChangesHandler = () => {
    dispatch(setIsEditCompanyCard({ isEditCompanyCard: false }))
  }
  const editCompanyCard = useAppSelector(selectIsEditCompanyCard)

  return (
    <div className={s.cardHeader}>
      <h3 className={s.cardHeaderTitle}>Company Details</h3>
      {!editCompanyCard ? (
        <CustomButton
          color={'primary'}
          variant={'outlined'}
          icon={edit}
          text={'edit'}
          ariaLabel={'buttonIcon'}
          onClick={editHandler}
        />
      ) : (
        <div className={s.cardHeaderButtonContainer}>
          <CustomButton
            color={'primary'}
            variant={'outlined'}
            icon={check}
            text={'Save Changes'}
            ariaLabel={'check'}
            onClick={saveChangesHandler}
          />
          <CustomButton
            color={'primary'}
            variant={'outlined'}
            icon={x}
            text={'Cancel'}
            ariaLabel={'Cancel'}
            onClick={cancelChangesHandler}
          />
        </div>
      )}
    </div>
  )
}
