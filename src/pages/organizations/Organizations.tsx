import { Card } from '../../shared/ui/cards/Card.tsx'
import { Box } from '@mui/material'
import { useGetCompaniesQuery } from './api/orgApi.ts'
import { CustomIconButton } from '../../shared/ui/buttons/CustomIconButton.tsx'
import edit from '../../shared/assets/icons/common/Edit.svg'
import add from '../../shared/assets/icons/common/Add Photo.svg'
import trash from '../../shared/assets/icons/common/Trash Red.svg'
import s from './Organizations.module.scss'
import { CardsList } from '../../shared/ui/cards/cardsList/CardsList.tsx'
import { AgreementLI } from '../../shared/ui/cards/companyBlock/AgreementLI.tsx'
import { BusinessLI } from '../../shared/ui/cards/companyBlock/BusinessLI.tsx'
import { CompanyLI } from '../../shared/ui/cards/companyBlock/CompanyLI.tsx'
import { ResponsibleLI } from '../../shared/ui/cards/contactsBlock/ResponsibleLI.tsx'
import { PhoneLI } from '../../shared/ui/cards/contactsBlock/PhoneLI.tsx'
import { EmailLI } from '../../shared/ui/cards/contactsBlock/EmailLI.tsx'
import { PhotosLi } from '../../shared/ui/cards/photosBlock/PhotosLI.tsx'

export const Organizations = () => {
  const { data } = useGetCompaniesQuery({ id: '12' })
  const header = data?.name

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <div className={s.containerHeader}>
        <h3 className={s.containerHeaderTitle}>{header}</h3>
        <div className={s.containerHeaderButtons}>
          <CustomIconButton color={'primary'} icon={edit} ariaLabel={'edit'} />
          <CustomIconButton color={'primary'} icon={trash} ariaLabel={'trash'} />
        </div>
      </div>
      <Card title={'Company Details'} buttonIcon={edit} buttonText={'Edit'}>
        <CardsList>
          <AgreementLI />
          <BusinessLI />
          <CompanyLI />
        </CardsList>
      </Card>
      <Card title={'Contacts'} buttonIcon={edit} buttonText={'Edit'}>
        <CardsList>
          <ResponsibleLI />
          <PhoneLI />
          <EmailLI />
        </CardsList>
      </Card>
      <Card title={'Photos'} buttonIcon={add} buttonText={'Add'}>
        <CardsList>
          <PhotosLi />
        </CardsList>
      </Card>
    </Box>
  )
}
