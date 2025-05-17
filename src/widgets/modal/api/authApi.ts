import { baseApi } from '../../../app/store/baseApi.ts'

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, { username: string }>({
      query: ({ username }) => `auth?user=${username}`,
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { meta } = await queryFulfilled
          const headers = meta?.response?.headers
          const token = headers?.get('Authorization')

          if (token) {
            localStorage.setItem('token', token)
          }
        } catch (error) {
          console.error('Ошибка запроса', error)
        }
      },
    }),
  }),
})

export const { useLoginMutation } = authApi
