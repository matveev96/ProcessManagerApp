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

export type OrgResponse = {
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
