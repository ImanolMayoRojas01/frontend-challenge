import styles from './styles.module.scss'

import type { FC, PropsWithChildren } from 'react'
import { getClassnames } from '@/utils/styles.utils'

type TextFont =
  | 'BRS-Thin'
  | 'BRS-ExtraLight'
  | 'BRS-Light'
  | 'BRS-Regular'
  | 'BRS-Medium'
  | 'BRS-SemiBold'
  | 'BRS-Bold'
  | 'BRS-Black'
  | 'Lato-Thin'
  | 'Lato-Light'
  | 'Lato-Regular'
  | 'Lato-Bold'
  | 'Lato-Black'

type TextColor =
  | 'grey-50'
  | 'grey-100'
  | 'blue-berry'
  | 'neutral-50'
  | 'grey-150'
  | 'neutral-100'
  | 'green'
  | 'green-aqua'
  | 'primary-red'
  | 'white'
  | 'grey-200'
  | 'neutral-200'

type TextSize =
  | 'very-smallest'
  | 'smallest'
  | 'small'
  | 'regular'
  | 'medium'
  | 'large'
  | 'medium-large'
  | 'extra-large'
  | 'big'
type TextTag = 'span' | 'p' | 'label' | 'h1'

type TextProps = {
  tag: TextTag
  color: TextColor
  font: TextFont
  size: TextSize
  onClick?: () => void
  classnames?: string
  center?: boolean
  underline?: boolean
  pointer?: boolean
  crossed?: boolean
}

const Text: FC<PropsWithChildren<TextProps>> = ({
  tag,
  font,
  size,
  color,
  children,
  classnames,
  onClick,
  center,
  underline,
  pointer,
  crossed
}) => {
  const classnamesText = getClassnames([
    styles.text,
    color !== undefined && styles[`color-${color}`],
    font !== undefined && styles[`font-${font}`],
    size !== undefined && styles[`size-${size}`],
    center !== undefined && styles.center,
    underline !== undefined && styles.underline,
    pointer !== undefined && styles.pointer,
    crossed !== undefined && styles.crossed,
    classnames
  ])

  switch (tag) {
    case 'h1':
      return (
        <h1 onClick={onClick} className={classnamesText}>
          {children}
        </h1>
      )
    case 'label':
      return (
        <label onClick={onClick} className={classnamesText}>
          {children}
        </label>
      )
    case 'p':
      return (
        <p onClick={onClick} className={classnamesText}>
          {children}
        </p>
      )
    case 'span':
      return (
        <span onClick={onClick} className={classnamesText}>
          {children}
        </span>
      )
  }
}

export default Text
