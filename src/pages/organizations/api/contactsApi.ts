import { baseApi } from '../../../app/store/baseApi.ts'
import type { ContactsResponse } from './type.ts'

export const contactsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getContacts: build.query<ContactsResponse, { id: string }>({
      query: ({ id }) => `contacts/${id}`,
    }),
  }),
})

export const { useGetContactsQuery } = contactsApi
