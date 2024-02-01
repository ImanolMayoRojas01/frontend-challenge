import { GetUserParams, getUser } from "@/core/services/auth/get-user";
import { UserEntity } from "@/core/models/store/user.model";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const A_AUTH_RESET_FETCH_STATES = createAction("auth/reset-fetch-states")

export const A_GET_USER = createAsyncThunk<UserEntity | null, GetUserParams>(
  "auth/get-user",
  async (params) => await getUser(params)
)