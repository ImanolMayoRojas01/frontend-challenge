import type { PlanEntity } from '@/types/models/plan-store.models'
import { useAppDispatch, useAppSelector } from '@/store'
import { A_GET_PLANS, A_SET_CURRENT_USER_PLAN } from '@/store/plans/actions'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type CategoryPlan = 'for-me' | 'for-someone-else'

export const usePlanPage = () => {
  const dispatch = useAppDispatch()
  const PlanStore = useAppSelector((store) => store.plan)
  const AuthStore = useAppSelector((store) => store.auth)
  const navigate = useNavigate()

  const [plans, setPlans] = useState<PlanEntity[]>([])

  const [categoryPlan, setCategoryPlan] = useState<CategoryPlan | null>(null)
  const [currentPlanPage, setCurrentPlanPage] = useState(1)

  const updateCategoryPlan = (value: CategoryPlan) => {
    setCategoryPlan(value)
  }

  const nextPlanPage = () => {
    const countPlans = plans.length
    if (currentPlanPage >= countPlans) return

    setCurrentPlanPage(currentPlanPage + 1)
  }
  const previousPlanPage = () => {
    if (currentPlanPage <= 1) return

    setCurrentPlanPage(currentPlanPage - 1)
  }

  const movePlansDOM = () => {
    const plansElement = document.getElementById('plans')
    if (plansElement === null) return

    plansElement.style.left = `calc((${currentPlanPage - 1} * -300px) - (${currentPlanPage - 1} * 32px))`
  }

  const filterPlansForAge = () => {
    if (AuthStore.user === null) return
    const userAge = AuthStore.user.age

    setPlans(PlanStore.plans.filter((plan) => userAge <= plan.age))
  }

  const goToBackPage = () => {
    navigate(-1)
  }

  const assignCurrentPlan = (plan: PlanEntity) => {
    dispatch(A_SET_CURRENT_USER_PLAN(plan))
    navigate('/resume')
  }

  useEffect(() => {
    // Se descuenta el 5% a todos los precios de los planes
    if (categoryPlan === 'for-someone-else') {
      setPlans(
        plans.map((plan) => {
          const priceWithDiscount = plan.price - plan.price * 0.05
          return {
            ...plan,
            priceWithDiscount
          }
        })
      )
    } else filterPlansForAge()
  }, [categoryPlan])

  useEffect(movePlansDOM, [currentPlanPage, plans])

  useEffect(() => {
    void dispatch(A_GET_PLANS())
  }, [])

  useEffect(filterPlansForAge, [PlanStore.plans])

  useEffect(() => {
    if (AuthStore.user === null) navigate('/')
  }, [])

  return {
    properties: {
      PlanStore,
      categoryPlan,
      plans,
      AuthStore,
      currentPlanPage
    },
    methods: {
      updateCategoryPlan,
      assignCurrentPlan,
      goToBackPage,
      nextPlanPage,
      previousPlanPage
    }
  }
}
