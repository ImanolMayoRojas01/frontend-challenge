import { useAppSelector } from "@/store"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useResumePage = () => {
  const AuthStore = useAppSelector(store => store.auth)
  const PlanStore = useAppSelector(store => store.plan)
  const navigate = useNavigate()
  

  const goToBackPage = () => navigate(-1)

  useEffect(() => {
    if (!AuthStore.user || !PlanStore.currentUserPlan) navigate('/')
  }, [])

  return {
    properties: {
      AuthStore,
      PlanStore
    },
    methods: {
      goToBackPage
    }
  }
}