import { PlanEntity } from "@/core/models/store/plan.models";
import { getApiConnection } from "@/utils/api.utils";

export const getPlans = async (): Promise<PlanEntity[]> => {
  try {
    const api = getApiConnection()
    const {data} = await api.get('/plans.json')

    return data.list
  } catch (error) {
    console.error('ERROR -> [getPlans] : ', error)
    return []
  }
}