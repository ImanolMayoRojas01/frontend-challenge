import styles from './styles.module.scss'

import type { FC } from 'react'
import { getClassnames } from '@/utils/styles.utils'

import Text from '../Text'

type ButtonProps = {
  text: string
  theme: 'dark' | 'primary'
  size: 'short' | 'large'
  sizeRounded: 'low' | 'high'
  onClick?: () => void
  fullwidth?: boolean
  classnames?: string
}

const Button: FC<ButtonProps> = ({
  text,
  theme,
  size,
  onClick,
  fullwidth,
  sizeRounded,
  classnames
}) => {
  return (
    <button
      className={getClassnames([
        styles.container,
        styles[`theme-${theme}`],
        styles[`size-${size}`],
        styles[`rounded-${sizeRounded}`],
        fullwidth !== undefined && styles.fullwidth,
        classnames
      ])}
      onClick={onClick}
    >
      <Text tag="span" size="large" font="BRS-Bold" color="white">
        {text}
      </Text>
    </button>
  )
}

export default Button
