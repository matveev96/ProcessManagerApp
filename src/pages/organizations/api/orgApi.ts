import { baseApi } from '../../../app/store/baseApi.ts'
import type { OrgResponse } from './type.ts'

export const orgApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCompanies: build.query<OrgResponse, { id: string }>({
      query: ({ id }) => `companies/${id}`,
    }),
  }),
})

export const { useGetCompaniesQuery } = orgApi
