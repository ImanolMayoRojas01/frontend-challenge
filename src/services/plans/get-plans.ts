import type { PlanEntity } from '@/types/models/plan-store.models'
import { getApiConnection } from '@/utils/api.utils'
// import { PLANS_FAKE_DATA } from '@/utils/mockup-data';

export const getPlans = async (): Promise<PlanEntity[]> => {
  try {
    const api = getApiConnection()
    const { data } = await api.get('/plans.json')

    return data.list
  } catch (error) {
    console.error('ERROR -> [getPlans] : ', error)

    // For testing in case error api
    // return PLANS_FAKE_DATA

    return []
  }
}
