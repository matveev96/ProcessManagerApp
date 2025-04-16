import { Card } from '../../shared/ui/cards/Card.tsx'
import { Box } from '@mui/material'
import { useGetCompaniesQuery } from './api/orgApi.ts'
import { CustomIconButton } from '../../shared/ui/buttons/CustomIconButton.tsx'
import edit from '../../shared/assets/icons/common/Edit.svg'
import trash from '../../shared/assets/icons/common/Trash Red.svg'
import s from './Organizations.module.scss'
import { formatDate } from '../../shared/lib/date/formatDate.ts'
import { CardsList } from '../../shared/ui/cards/cardsList/CardsList.tsx'

export const Organizations = () => {
  const { data } = useGetCompaniesQuery({ id: '12' })
  const date = formatDate(data?.contract.issue_date.slice(0, 10))
  const header = data?.name
  const number = data?.contract.no ?? ''
  const buisnessEntity = data?.businessEntity ?? ''
  const companiesType = data?.type ?? []

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
        <CardsList buisnessEntity={buisnessEntity} companiesType={companiesType} date={date} number={number} />
      </Card>
      {/*<Card />*/}
      {/*<Card />*/}
    </Box>
  )
}
