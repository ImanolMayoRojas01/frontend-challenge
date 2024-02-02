import { PlanEntity } from "@/core/models/store/plan.models";
import { getApiConnection } from "@/utils/api.utils";
// import { plans_fake_data } from "@/utils/mockup-data";

export const getPlans = async (): Promise<PlanEntity[]> => {
  try {
    const api = getApiConnection()
    const {data} = await api.get('/plans.json')

    return data.list
  } catch (error) {
    console.error('ERROR -> [getPlans] : ', error)

    // For testing in case error api
    // return plans_fake_data

    return []
  }
}