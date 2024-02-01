import { PlanEntity } from "@/core/models/store/plan.models"
import { useAppDispatch, useAppSelector } from "@/store"
import { A_GET_PLANS, A_SET_CURRENT_USER_PLAN } from "@/store/plans/actions"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

type CategoryPlan = 'for-me' | 'for-someone-else'

export const usePlanPage = () => {
  const dispatch = useAppDispatch()
  const PlanStore = useAppSelector(store => store.plan)
  const AuthStore = useAppSelector(store => store.auth)
  const navigate = useNavigate()

  const [plans, setPlans] = useState<PlanEntity[]>([])

  const [categoryPlan, setCategoryPlan] = useState<CategoryPlan | null>(null)

  const updateCategoryPlan = (value: CategoryPlan) => setCategoryPlan(value)

  const filterPlansForAge = () => {
    
    if (!AuthStore.user) return
    const userAge = AuthStore.user.age

    setPlans(PlanStore.plans.filter(plan => userAge <= plan.age))
  }

  const goToBackPage = () => navigate(-1)

  const assignCurrentPlan = (plan: PlanEntity) => {
    dispatch(A_SET_CURRENT_USER_PLAN(plan))
    navigate('/resume')
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
      updateCategoryPlan,
      assignCurrentPlan,
      goToBackPage
    }
  }
}