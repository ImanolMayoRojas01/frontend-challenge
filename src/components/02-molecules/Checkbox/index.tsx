import styles from './styles.module.scss'

import type { FC } from 'react'

import Text from '@/components/01-atoms/Text'
import Icon from '@/components/01-atoms/Icon'

import { getClassnames } from '@/utils/styles.utils'

type CheckboxProps = {
  label: string
  checked: boolean
  onClick?: () => void
  classnames?: string
  isDisabled?: boolean
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  checked,
  isDisabled,
  onClick
}) => {
  const updateCheck = (): void => {
    if (isDisabled !== true && onClick !== undefined) onClick()
  }

  return (
    <div className={styles.container}>
      <div
        onClick={updateCheck}
        className={getClassnames([
          styles.checkbox,
          checked && styles.checkbox__checked
        ])}
      >
        <Icon
          icon="check-plain"
          color={checked ? 'white' : 'transparent'}
          size={11}
        />
      </div>
      <Text
        tag="label"
        size="smallest"
        font="BRS-Regular"
        color="grey-200"
        onClick={updateCheck}
        classnames="pointer"
      >
        {label}
      </Text>
    </div>
  )
}

export default Checkbox
