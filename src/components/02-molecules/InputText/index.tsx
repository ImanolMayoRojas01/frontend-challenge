import styles from './styles.module.scss'

import { InputHTMLAttributes, forwardRef } from 'react'
import Text from '@/components/01-atoms/Text'
import { getClassnames } from '@/utils/styles.utils'

type InputTextProps = {
  label: string
  classnames?: string
  isNotLeftBorder?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, classnames, isNotLeftBorder, ...rest }, ref) => {
    return (
      <div
        className={getClassnames([
          styles.container,
          classnames,
          isNotLeftBorder && styles.not_left_border
        ])}
      >
        <Text tag='span' size='smallest' font='BRS-Regular' color='grey-100'>{label}</Text>
        <input
          type="text"
          ref={ref}
          {...rest}
        />
      </div>
    )
})

export default InputText