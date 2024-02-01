import { PlantStateType } from "@/core/models/store/plan.models";
import { createReducer } from "@reduxjs/toolkit";
import { A_GET_PLANS, A_PLANS_RESET_FETCH_STATES } from "./actions";

const initialState: PlantStateType = {
  plans: [],
  fetchStates: {
    getPlans: 'initialize'
  }
}

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(A_PLANS_RESET_FETCH_STATES, state => {
      state.fetchStates = initialState.fetchStates
    })
    // GET PLANS
    .addCase(A_GET_PLANS.pending, state => {
      state.fetchStates.getPlans = 'loading'
    })
    .addCase(A_GET_PLANS.fulfilled, (state, { payload }) => {
      state.fetchStates.getPlans = 'success'
      state.plans = payload
    })
})

export default reducer