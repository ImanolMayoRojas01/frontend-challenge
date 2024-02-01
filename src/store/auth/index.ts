import { AuthStateType } from "@/core/models/store/auth.models";
import { createReducer } from "@reduxjs/toolkit";
import { A_AUTH_RESET_FETCH_STATES, A_GET_USER } from "./actions";

const initialState: AuthStateType = {
  isAuth: false,
  user: null,
  fetchStates: {
    getUser: 'initialize'
  }
}

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(A_AUTH_RESET_FETCH_STATES, state => {
      state.fetchStates = initialState.fetchStates
    })
    // GET USER
    .addCase(A_GET_USER.pending, state => {
      state.fetchStates.getUser = 'loading'
    })
    .addCase(A_GET_USER.fulfilled, (state, { payload }) => {
      if (!payload) {
        state.fetchStates.getUser = 'error'
        return
      }

      state.fetchStates.getUser = 'success'
      state.user = payload
      state.isAuth = true
    })
})

export default reducer