import { FetchStateType } from "../app/store"

export type PlanEntity = {
  name: string
  price: number
  description: string[]
  priceWithDiscount?: number
  age: number
}

export type PlanFetchStateType = {
  getPlans: FetchStateType
}

export type PlantStateType = {
  plans: PlanEntity[]
  currentUserPlan: PlanEntity | null
  fetchStates: PlanFetchStateType
}