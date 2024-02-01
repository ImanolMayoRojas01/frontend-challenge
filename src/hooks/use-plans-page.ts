import { PlanEntity } from "@/core/models/store/plan.models"
import { useAppDispatch, useAppSelector } from "@/store"
import { A_GET_PLANS } from "@/store/plans/actions"
import { differenceInYears } from "date-fns"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

type CategoryPlan = 'for-me' | 'for-someone-else'

export const usePlanPage = () => {
  const dispatch = useAppDispatch()
  const PlanStore = useAppSelector(store => store.plan)
  const AuthStore = useAppSelector(store => store.auth)
  const navigate = useNavigate()

  const [plans, setPlans] = useState<PlanEntity[]>([])

  const [categoryPlan, setCategoryPlan] = useState<CategoryPlan>('for-me')

  const updateCategoryPlan = (value: CategoryPlan) => setCategoryPlan(value)

  const filterPlansForAge = () => {
    
    if (!AuthStore.user) return
    const userAge = AuthStore.user.age

    setPlans(PlanStore.plans.filter(plan => userAge <= plan.age))
  }

  useEffect(() => {
    dispatch(A_GET_PLANS())
  }, [])

  useEffect(filterPlansForAge, [PlanStore.plans])

  useEffect(() => {
    if (!AuthStore.user) navigate('/')
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