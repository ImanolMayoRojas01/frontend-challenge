import { PlanEntity } from "@/types/models/plan-store.models";
import { getPlans } from "@/services/plans/get-plans";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const A_PLANS_RESET_FETCH_STATES = createAction("plan/reset-fetch-states")

export const A_GET_PLANS = createAsyncThunk<PlanEntity[]>(
  "plan/get-plans",
  async () => await getPlans()
)

export const A_SET_CURRENT_USER_PLAN = createAction<PlanEntity>("auth/set-current-user-plan")