type Contract = {
  no: string
  issue_date: string
}

type Photos = {
  name: string
  filepath: string
  thumbpath: string
  createdAt: string
}

export type CompaniesResponse = {
  id: string
  contactId: string
  name: string
  shortName: string
  businessEntity: string
  contract: Contract
  type: Array<string>
  status: string
  photos: Photos[]
  createdAt: string
  updatedAt: string
}

export type CompaniesPayload = Pick<CompaniesResponse, 'name' | 'shortName' | 'businessEntity' | 'contract' | 'type'>

export type ContactsResponse = {
  id: string
  lastname: string
  firstname: string
  phone: string
  email: string
  createdAt: string
  updatedAt: string
}
