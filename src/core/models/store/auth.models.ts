import { FetchStateType } from "../app/store.models"
import { UserEntity } from "./user.model"

export type AuthFetchStates = {
  getUser: FetchStateType
}

export type AuthStateType = {
  isAuth: boolean
  user: UserEntity | null
  fetchStates: AuthFetchStates
}