import type { GetUserParams } from '@/services/auth/get-user'
import { getUser } from '@/services/auth/get-user'
import type { UserEntity } from '@/types/models/user-store.model'
import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

export const A_AUTH_RESET_FETCH_STATES = createAction('auth/reset-fetch-states')

export const A_GET_USER = createAsyncThunk<UserEntity | null, GetUserParams>(
  'auth/get-user',
  async (params) => await getUser(params)
)
