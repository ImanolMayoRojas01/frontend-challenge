import type { FetchStateType } from '../app/store'
import type { UserEntity } from './user-store.model'

export type AuthFetchStates = {
  getUser: FetchStateType
}

export type AuthStateType = {
  isAuth: boolean
  user: UserEntity | null
  fetchStates: AuthFetchStates
}
