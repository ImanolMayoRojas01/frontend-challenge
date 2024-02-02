import { UserDocumentType, UserEntity } from "@/core/models/store/user.model";
import { getApiConnection } from "@/utils/api.utils";
// import { user_fake_data } from "@/utils/mockup-data";
import { differenceInYears } from "date-fns";

export type GetUserParams = {
  numberDocument: string
  typeDocument: UserDocumentType
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
      age: differenceInYears(new Date(), new Date(data.birthDay)),
      numberDocument: params.numberDocument,
      phone: params.phone,
      typeDocument: params.typeDocument
    }

  } catch (error) {
    console.log('ERROR : ', error)

    // For testing in case error api
    // return {
    //   ...user_fake_data,
    //   age: differenceInYears(new Date(), new Date(user_fake_data.birthDay)),
    //   numberDocument: params.numberDocument,
    //   phone: params.phone,
    //   typeDocument: params.typeDocument
    // }

    return null
  }
}