import { Card } from '../../shared/ui/cards/Card.tsx'
import { Box } from '@mui/material'
import { useGetCompaniesQuery, useUpdateCompaniesMutation } from './api/companiesApi.ts'
import { CustomIconButton } from '../../shared/ui/buttons/CustomIconButton.tsx'
import edit from '../../shared/assets/icons/common/Edit.svg'
import trash from '../../shared/assets/icons/common/Trash Red.svg'
import s from './Organizations.module.scss'
import { CardsBody } from '../../shared/ui/cards/cardsList/CardsBody.tsx'
import { AgreementLI } from '../../shared/ui/cards/companyBlock/AgreementLI.tsx'
import { BusinessLI } from '../../shared/ui/cards/companyBlock/BusinessLI.tsx'
import { CompanyLI } from '../../shared/ui/cards/companyBlock/CompanyLI.tsx'
import { ResponsibleLI } from '../../shared/ui/cards/contactsBlock/ResponsibleLI.tsx'
import { PhoneLI } from '../../shared/ui/cards/contactsBlock/PhoneLI.tsx'
import { EmailLI } from '../../shared/ui/cards/contactsBlock/EmailLI.tsx'
import { PhotosLi } from '../../shared/ui/cards/photosBlock/PhotosLI.tsx'
import { HeaderCompanyBlock } from '../../shared/ui/cards/companyBlock/HeaderCompanyBlock.tsx'
import { HeaderContactsBlock } from '../../shared/ui/cards/contactsBlock/HeaderContactsBlock.tsx'
import { HeaderPhotosBlock } from '../../shared/ui/cards/photosBlock/HeaderPhotosBlock.tsx'
import { type ChangeEvent, useEffect, useState } from 'react'
import type { CompaniesPayload } from './api/type.ts'
import { dateFormat } from '../../shared/lib/date/dateFormat.ts'

export const Organizations = () => {
  const { data } = useGetCompaniesQuery({ id: '12' })
  const header = data?.name
  const [updateCompany] = useUpdateCompaniesMutation()

  const [formData, setFormData] = useState<CompaniesPayload>({
    name: '',
    shortName: '',
    businessEntity: '',
    contract: {
      no: '',
      issue_date: '',
    },
    type: [],
  })

  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name,
        shortName: data.shortName,
        businessEntity: data.businessEntity,
        contract: {
          no: data.contract.no,
          issue_date: dateFormat(data?.contract.issue_date.slice(0, 10)),
        },
        type: [...data.type],
      })
    }
  }, [data])

  const handleSubmit = async () => {
    console.log('Sending updates:', formData)
    try {
      await updateCompany({ id: '12', updates: formData }).unwrap()
      console.log(formData)
    } catch (error) {
      console.error('Полная ошибка:', error)
    }
  }

  const handleContractChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    const { value } = e.currentTarget
    setFormData((prev) => ({
      ...prev,
      contract: {
        ...prev.contract,
        [name]: value,
      },
    }))
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <div className={s.containerHeader}>
        <h3 className={s.containerHeaderTitle}>{header}</h3>
        <div className={s.containerHeaderButtons}>
          <CustomIconButton color={'primary'} icon={edit} ariaLabel={'edit'} />
          <CustomIconButton color={'primary'} icon={trash} ariaLabel={'trash'} />
        </div>
      </div>
      <Card>
        <HeaderCompanyBlock submit={handleSubmit} />
        <CardsBody>
          <AgreementLI
            key={1}
            onChange={handleContractChange}
            dateValue={formData.contract.issue_date}
            noValue={formData.contract.no}
          />
          <BusinessLI key={2} />
          <CompanyLI key={3} />
        </CardsBody>
      </Card>
      <Card>
        <HeaderContactsBlock />
        <CardsBody>
          <ResponsibleLI />
          <PhoneLI />
          <EmailLI />
        </CardsBody>
      </Card>
      <Card>
        <HeaderPhotosBlock />
        <CardsBody>
          <PhotosLi />
        </CardsBody>
      </Card>
    </Box>
  )
}
