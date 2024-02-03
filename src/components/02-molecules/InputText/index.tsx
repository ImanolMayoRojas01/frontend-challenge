import styles from './styles.module.scss'

import { InputHTMLAttributes, forwardRef, KeyboardEventHandler } from 'react'
import Text from '@/components/01-atoms/Text'
import { getClassnames } from '@/utils/styles.utils'

type InputTextProps = {
  label: string
  classnames?: string
  isNotLeftBorder?: boolean
  errorMessage?: string
} & InputHTMLAttributes<HTMLInputElement>

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, classnames, isNotLeftBorder, errorMessage, ...rest }, ref) => {

    const preventCharactersInputNumber: KeyboardEventHandler<HTMLInputElement> = (event) => {
      const isPressE = event.code === 'KeyE'
      const isPressSlash = event.code === 'Slash'
      
      const isPressNumpadSubtract = event.code === "NumpadSubtract"
      const isPressPeriod = event.code === 'Period'
      const isPressNumpadAdd = event.code === "NumpadAdd"
      const isPressBracketRight = event.code === "BracketRight"
      const isPressCouote = event.code === "Quote"
      const isPressBackSlash = event.code === "Backslash"
      const isPressNumpadDecimal = event.code === "NumpadDecimal"

      const isPressMinus = event.code === 'Minus'

      const isPressArrowUp = event.code === 'ArrowUp'
      const isPressArrowDown = event.code === 'ArrowDown'

      if (
        isPressE || isPressSlash || isPressPeriod || isPressNumpadAdd ||
        isPressNumpadSubtract || isPressBracketRight || isPressCouote ||
        isPressBackSlash || isPressNumpadDecimal || isPressArrowUp ||
        isPressArrowDown || isPressMinus
      ) return event.preventDefault()
    }

    const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
      if (rest.onKeyDown) rest.onKeyDown(event)
      if(rest.type === 'number') preventCharactersInputNumber(event)
    }

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
          onKeyDown={onKeyDown}
        />
        {
          errorMessage && <Text tag='span' size='smallest' font='BRS-Regular' color='primary-red'>{errorMessage}</Text>
        }
      </div>
    )
})

export default InputText