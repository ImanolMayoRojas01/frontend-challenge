import type {
  UserDocumentType,
  UserEntity
} from '@/types/models/user-store.model'
import { getApiConnection } from '@/utils/api.utils'
// import { USER_FAKE_DATA } from '@/utils/mockup-data'
import { differenceInYears } from 'date-fns'

export type GetUserParams = {
  numberDocument: string
  typeDocument: UserDocumentType
  phone: string
}

export const getUser = async (
  params: GetUserParams
): Promise<UserEntity | null> => {
  try {
    const api = getApiConnection()
    const { data } = await api.get('/user.json')

    return {
      name: data.name,
      lastName: data.lastName,
      birthDay: data.birthDay,
      age: differenceInYears(new Date(), new Date(data.birthDay as string)),
      numberDocument: params.numberDocument,
      phone: params.phone,
      typeDocument: params.typeDocument
    }
  } catch (error) {
    console.log('ERROR : ', error)

    // For testing in case error api
    // return {
    //   ...USER_FAKE_DATA,
    //   age: differenceInYears(new Date(), new Date(USER_FAKE_DATA.birthDay)),
    //   numberDocument: params.numberDocument,
    //   phone: params.phone,
    //   typeDocument: params.typeDocument
    // }

    return null
  }
}
