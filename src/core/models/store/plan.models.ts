import { FetchStateType } from "../app/store.models"

export type PlanEntity = {
  name: string
  price: number
  description: string[]
  age: number
}

export type PlanFetchStateType = {
  getPlans: FetchStateType
}

export type PlantStateType = {
  plans: PlanEntity[]
  fetchStates: PlanFetchStateType
}