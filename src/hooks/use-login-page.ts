import { SelectItemType } from "@/components/02-molecules/Select"
import { USER_DNI_DIGITS, USER_PHONE_DIGITS } from "@/constants/global"
import { UserDocumentType } from "@/types/models/user-store.model"
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
  const [numberDocument, setNumberDocument] = useState<string | undefined>(undefined)
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined)
  const [isAcceptComercialPolicy, setIsAcceptComercialPolicy] = useState<boolean | undefined>(undefined)
  const [isAcceptPrivacyPolicy, setIsAcceptPrivacyPolicy] = useState<boolean | undefined>(undefined)

  const [errMessageNumberDoc, setErrMessageNumberDoc] = useState("")
  const [errMessagePhoneNumber, setErrMessagePhoneNumber] = useState("")
  const [errMessageAcceptPrivacity, setErrMessageAcceptPrivacity] = useState("")
  const [errMessageAcceptComercial, setErrMessageAcceptComercial] = useState("")

  const updateTypeDocument = (value: UserDocumentType) => setTypeDocument(value)
  const updateNumberDocument = (value: string) => setNumberDocument(value)
  const updatePhoneNumber = (value: string) => setPhoneNumber(value)
  const updateAcceptComercialPolicy = (value: boolean) => setIsAcceptComercialPolicy(value)
  const updateAcceptPrivacyPolicy = (value: boolean) => setIsAcceptPrivacyPolicy(value)

  const validFormErrorMessages = () => {
    if (numberDocument !== undefined) {
      let maxDigits = false
      let isNumber = !isNaN(Number(numberDocument))

      switch (typeDocument) {
        case 'dni':
          maxDigits = numberDocument.length === USER_DNI_DIGITS
          break;
      }
      if (!numberDocument) setErrMessageNumberDoc("Este campo es requerido")
      else if (!isNumber) setErrMessageNumberDoc("No puede contener letras")
      else if (!maxDigits) setErrMessageNumberDoc(`Debe contener ${USER_DNI_DIGITS} digitos`)
      else setErrMessageNumberDoc("")
    }
    if (phoneNumber !== undefined) {
      let maxDigits = phoneNumber.length === USER_PHONE_DIGITS
      let isNumber = !isNaN(Number(phoneNumber))

      if (!phoneNumber) setErrMessagePhoneNumber("Este campo es requerido")
      else if (!isNumber) setErrMessagePhoneNumber("No puede contener letras")
      else if (!maxDigits) setErrMessagePhoneNumber(`Debe contener ${USER_PHONE_DIGITS} digitos`)
      else setErrMessagePhoneNumber("")
    }
    if (isAcceptComercialPolicy !== undefined) {
      if (isAcceptComercialPolicy === false) setErrMessageAcceptComercial("Este campo es obligatorio")
      else setErrMessageAcceptComercial("")
    }
    if (isAcceptPrivacyPolicy !== undefined) {
      if (isAcceptPrivacyPolicy === false) setErrMessageAcceptPrivacity("Este campo es obligatorio")
      else setErrMessageAcceptPrivacity("")
    }
  }

  const initFields = () => {
    setNumberDocument(numberDocument || "")
    setPhoneNumber(phoneNumber || "")
    setIsAcceptComercialPolicy(isAcceptComercialPolicy || false)
    setIsAcceptPrivacyPolicy(isAcceptPrivacyPolicy || false)
  }

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
      !!isAcceptPrivacyPolicy &&
      !!isAcceptComercialPolicy
    )
  }

  const getUserData = () => {
    if (!validateForm()) {
      initFields()
      return
    }
    if (AuthStore.fetchStates.getUser === 'loading') return

    dispatch(A_GET_USER({
      numberDocument: numberDocument || "",
      typeDocument: typeDocument,
      phone: phoneNumber || ""
    }))
  }

  useEffect(validFormErrorMessages,[
    numberDocument,
    phoneNumber,
    isAcceptComercialPolicy,
    isAcceptPrivacyPolicy
  ])

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
      isAcceptPrivacyPolicy,

      errMessageNumberDoc,
      errMessagePhoneNumber,
      errMessageAcceptPrivacity,
      errMessageAcceptComercial
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