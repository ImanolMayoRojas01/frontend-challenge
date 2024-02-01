import { UserEntity } from "@/core/models/store/user.model";
import { getApiConnection } from "@/utils/api.utils";

export type GetUserParams = {
  dni: string
  phone: string
}

export const getUser = async (params: GetUserParams): Promise<UserEntity | null> => {
  try {
    const api = getApiConnection()
    const {data} = await api.get('/user.json')
    return {
      name: data.name,
      lastName: data.lastName,
      birthDay: data.birthDay,
      dni: params.dni,
      phone: params.phone
    }
  } catch (error) {
    console.log('ERROR : ', error)
    return null
  }
}