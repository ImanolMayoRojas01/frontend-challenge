import Text from '@/components/01-atoms/Text'
import { getClassnames } from '@/utils/styles.utils'
import { FC, useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import Icon from '@/components/01-atoms/Icon'

type ItemType = {
  value: string
  name: string
}

type SelectFormParams = {
  isOpen: boolean
  label: string
  isValid?: boolean
  items: ItemType[]
  classnames?: string
  onChange?(event: any): void
  isNotRightBorderRadius?: boolean
}

const Select: FC<SelectFormParams> = ({ label, isValid, items, classnames, onChange, isOpen, isNotRightBorderRadius }) => {
  
  const selectRef = useRef<HTMLSelectElement>(null)
  
  useEffect(() => {
    if (onChange) selectRef.current?.addEventListener('change', () => onChange && onChange(selectRef.current?.value))
  }, [])

  return (
    <div
      className={getClassnames([
        styles.container,
        classnames
      ])}
    >
      {/* {label && <Text tag='p' color='grey-50' size='regular' weight='regular' classnames="mb-3">{label}</Text>} */}
      <div
        className={getClassnames([
          styles.placeholder,
          isNotRightBorderRadius && styles.not_right_border_radius,
        ])}
      >
        <Text tag='p' color='grey-50' size='regular' weight='regular' classnames="mb-3">{label}</Text>
        <Icon icon='angle-down' size={13} color='grey-50' classnames='pointer' />
      </div>
      {
        isOpen && (
          <div className={styles.options}>

          </div>
        )
      }
    </div>
  )
}

export default Select