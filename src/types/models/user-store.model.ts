export type UserDocumentType = 'dni'

export type UserEntity = {
  name: string
  lastName: string
  birthDay: string
  age: number
  numberDocument: string
  phone: string

  typeDocument: UserDocumentType
}
