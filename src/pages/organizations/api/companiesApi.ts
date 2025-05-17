import { baseApi } from '../../../app/store/baseApi.ts'
import type { CompaniesPayload, CompaniesResponse } from './type.ts'

export const companiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCompanies: build.query<CompaniesResponse, { id: string }>({
      query: ({ id }) => `companies/${id}`,
    }),
    updateCompanies: build.mutation<CompaniesResponse, { id: string; updates: CompaniesPayload }>({
      query: ({ id, updates }) => ({
        method: 'PATCH',
        url: `/companies/${id}`,
        body: updates,
      }),
    }),
  }),
})

export const { useGetCompaniesQuery, useUpdateCompaniesMutation } = companiesApi
