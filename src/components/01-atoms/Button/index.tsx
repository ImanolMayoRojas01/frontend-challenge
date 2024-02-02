import { FC } from 'react'
import styles from './styles.module.scss'
import { getClassnames } from '@/utils/styles.utils'
import Text from '../Text'

type ButtonProps = {
  text: string
  theme: 'dark' | 'primary'
  size: 'short' | 'large'
  sizeRounded: 'low' | 'high'
  onClick?(): void
  fullwidth?: boolean
  classnames?: string
}

const Button: FC<ButtonProps> = ({ text, theme, size, onClick, fullwidth, sizeRounded, classnames }) => {
  return (
    <div
      className={getClassnames([
        styles.container,
        styles[`theme-${theme}`],
        styles[`size-${size}`],
        styles[`rounded-${sizeRounded}`],
        fullwidth && styles.fullwidth,
        classnames
      ])}
      onClick={onClick}
    >
      <Text tag="p" size='large' font='BRS-Bold' color='white'>{text}</Text>
    </div>
  )
}

export default Button