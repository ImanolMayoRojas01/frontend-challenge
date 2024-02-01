import { useAppSelector } from "@/store"
import { useNavigate } from "react-router-dom"

export const useResumePage = () => {
  const AuthStore = useAppSelector(store => store.auth)
  const PlanStore = useAppSelector(store => store.plan)
  const navigate = useNavigate()
  

  const goToBackPage = () => navigate(-1)

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