import { SelectItemType } from "@/components/02-molecules/Select"
import { USER_DNI_DIGITS, USER_PHONE_DIGITS } from "@/constants/global"
import { UserDocumentType } from "@/core/models/store/user.model"
import { useAppDispatch, useAppSelector } from "@/store"
import { A_AUTH_RESET_FETCH_STATES, A_GET_USER } from "@/store/auth/actions"
import { evaluateFetchStateSimple } from "@/utils/store.utils"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const DOCUMENTS_SELECT: SelectItemType<UserDocumentType>[] = [
  {
    name: 'DNI',
    value: 'dni'
  }
]

export const useLoginPage = () => {
  const dispatch = useAppDispatch()
  const AuthStore = useAppSelector(store => store.auth)
  const navigate = useNavigate()

  const [typeDocument, setTypeDocument] = useState<UserDocumentType>('dni')
  const [numberDocument, setNumberDocument] = useState<string | null>('75450278')
  const [phoneNumber, setPhoneNumber] = useState<string | null>('946422312')
  const [isAcceptComercialPolicy, setIsAcceptComercialPolicy] = useState(false)
  const [isAcceptPrivacyPolicy, setIsAcceptPrivacyPolicy] = useState(false)

  const updateTypeDocument = (value: UserDocumentType) => setTypeDocument(value)
  const updateNumberDocument = (value: string) => setNumberDocument(value)
  const updatePhoneNumber = (value: string) => setPhoneNumber(value)
  const updateAcceptComercialPolicy = (value: boolean) => setIsAcceptComercialPolicy(value)
  const updateAcceptPrivacyPolicy = (value: boolean) => setIsAcceptPrivacyPolicy(value)

  const validateForm = (): boolean => {
    let isNumberDocumentValid = false
    let isPhoneNumberValid = false

    if (numberDocument) {
      let maxDigits = false
      switch (typeDocument) {
        case 'dni':
          maxDigits = numberDocument.length === USER_DNI_DIGITS
          break;
      }
      isNumberDocumentValid = (maxDigits)
    }

    if (phoneNumber) {
      const maxDigits = phoneNumber.length === USER_PHONE_DIGITS
      isPhoneNumberValid = maxDigits
    }

    return ( isNumberDocumentValid &&
      isPhoneNumberValid &&
      isAcceptPrivacyPolicy &&
      isAcceptComercialPolicy
    )
  }

  const getUserData = () => {
    if (!validateForm() || AuthStore.fetchStates.getUser === 'loading') return

    dispatch(A_GET_USER({
      numberDocument: numberDocument || "",
      typeDocument: typeDocument,
      phone: phoneNumber || ""
    }))
  }

  useEffect(() => {
    const state = AuthStore.fetchStates.getUser

    evaluateFetchStateSimple({
      state,
      onSuccess: () => navigate('/plans'),
      onComplete: () => dispatch(A_AUTH_RESET_FETCH_STATES())
    })
  }, [AuthStore.fetchStates.getUser])

  return {
    properties: {
      DOCUMENTS_SELECT,
      typeDocument,
      numberDocument,
      phoneNumber,
      isAcceptComercialPolicy,
      isAcceptPrivacyPolicy
    },
    methods: {
      updateTypeDocument,
      updateNumberDocument,
      updatePhoneNumber,
      updateAcceptComercialPolicy,
      updateAcceptPrivacyPolicy,
      getUserData
    }
  }
}