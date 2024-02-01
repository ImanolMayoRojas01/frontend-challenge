import { PlanEntity } from "@/core/models/store/plan.models"
import { useAppDispatch, useAppSelector } from "@/store"
import { A_GET_PLANS } from "@/store/plans/actions"
import { useEffect, useState } from "react"

type CategoryPlan = 'for-me' | 'for someone else'

export const usePlanPage = () => {
  const dispatch = useAppDispatch()
  const PlanStore = useAppSelector(store => store.plan)
  const AuthStore = useAppSelector(store => store.auth)

  const [plans, setPlans] = useState<PlanEntity[]>([])

  const [categoryPlan, setCategoryPlan] = useState<CategoryPlan>('for-me')

  const updateCategoryPlan = (value: CategoryPlan) => setCategoryPlan(value)

  useEffect(() => {
    dispatch(A_GET_PLANS())
    setPlans([])
  }, [])

  return {
    properties: {
      PlanStore,
      categoryPlan,
      plans,
      AuthStore
    },
    methods: {
      updateCategoryPlan
    }
  }
}