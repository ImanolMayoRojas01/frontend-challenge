import type { PlantStateType } from '@/types/models/plan-store.models'
import { createReducer } from '@reduxjs/toolkit'
import {
  A_GET_PLANS,
  A_PLANS_RESET_FETCH_STATES,
  A_SET_CURRENT_USER_PLAN
} from './actions'

const initialState: PlantStateType = {
  plans: [],
  currentUserPlan: null,
  fetchStates: {
    getPlans: 'initialize'
  }
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(A_PLANS_RESET_FETCH_STATES, (state) => {
      state.fetchStates = initialState.fetchStates
    })
    // GET PLANS
    .addCase(A_GET_PLANS.pending, (state) => {
      state.fetchStates.getPlans = 'loading'
    })
    .addCase(A_GET_PLANS.fulfilled, (state, { payload }) => {
      state.fetchStates.getPlans = 'success'
      state.plans = payload
    })
    // SET CURRENT USER PLAN
    .addCase(A_SET_CURRENT_USER_PLAN, (state, { payload }) => {
      state.currentUserPlan = payload
    })
})

export default reducer
