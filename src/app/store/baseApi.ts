import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'appApi',
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: 'https://test-task-api.allfuneral.com/',
      prepareHeaders: (headers) => {
        headers.set('Authorization', `${localStorage.getItem('token')}`)
        headers.set('Content-Type', 'application/json')
      },
    })(args, api, extraOptions)

    return result
  },
  endpoints: () => ({}),
})
