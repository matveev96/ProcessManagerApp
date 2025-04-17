import { useGetCompaniesQuery } from '../../../../pages/organizations/api/orgApi.ts'
import s from '../Cards.module.scss'
import trash from '../../../assets/icons/common/Trash.svg'
import { CustomIconButton } from '../../buttons/CustomIconButton.tsx'

export const PhotosLi = () => {
  const { data } = useGetCompaniesQuery({ id: '12' })

  const photos = data?.photos.map((photo) => (
    <li className={s.listItem}>
      <div className={s.photoWrapper}>
        <img className={s.photo} src={photo.filepath} alt="" />
        <div className={s.photoIcon}>
          <CustomIconButton icon={trash} color={'primary'} backgroundColor={'#3b3b3b'} />
        </div>
      </div>
    </li>
  ))

  return <div className={s.photosContainer}>{photos}</div>
}
