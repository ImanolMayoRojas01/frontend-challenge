import { SelectItemType } from "@/components/02-molecules/Select"

const DOCUMENTS_SELECT: SelectItemType[] = [
  {
    name: 'DNI',
    value: 'dni'
  },
  {
    name: 'Carne de extranjeria',
    value: 'dni'
  },
  {
    name: 'DNI',
    value: 'dni'
  }
]

export const useLoginPage = () => {
  
  
  return {
    properties: {
      DOCUMENTS_SELECT
    },
    methods: {

    }
  }
}