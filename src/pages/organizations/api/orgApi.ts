import { baseApi } from '../../../app/store/baseApi.ts'
import type { CompaniesResponse, ContactsResponse } from './type.ts'

export const orgApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCompanies: build.query<CompaniesResponse, { id: string }>({
      query: ({ id }) => `companies/${id}`,
    }),
    getContacts: build.query<ContactsResponse, { id: string }>({
      query: ({ id }) => `contacts/${id}`,
    }),
  }),
})

export const { useGetCompaniesQuery, useGetContactsQuery } = orgApi
