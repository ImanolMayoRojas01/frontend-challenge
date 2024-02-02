import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import { getClassnames } from '@/utils/styles.utils'

type TextFont =
  'BRS-Thin' | 'BRS-ExtraLight' | 'BRS-Light' | 'BRS-Regular' | 'BRS-Medium' | 'BRS-SemiBold' | 'BRS-Bold' | 'BRS-Black' |
  'Lato-Thin' | 'Lato-Light' | 'Lato-Regular' | 'Lato-Bold' | 'Lato-Black'

type TextColor = 'grey-50' | 'grey-100' | 'blue-berry' | 'neutral-50' | 'grey-150' |
'neutral-100' | 'green' | 'green-aqua' | 'primary-red' | 'white' | 'grey-200' |
'neutral-200'

type TextSize = 'very-smallest' | 'smallest' | 'small' | 'regular' | 'medium' | 'large' | 'medium-large' | 'extra-large' | 'big'
type TextTag = 'span' | 'p' | 'label' | 'h1'

type TextProps = {
  tag: TextTag
  color: TextColor
  font: TextFont
  size: TextSize
  onClick?(): void
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
    color && styles[`color-${color}`],
    font && styles[`font-${font}`],
    size && styles[`size-${size}`],
    center && styles.center,
    underline && styles.underline,
    pointer && styles.pointer,
    crossed && styles.crossed,
    classnames
  ])

  switch(tag) {
    case 'h1': return <h1 onClick={onClick} className={classnamesText}>{children}</h1>
    case 'label': return <label onClick={onClick} className={classnamesText}>{children}</label>
    case 'p': return <p onClick={onClick} className={classnamesText}>{children}</p>
    case 'span': return <span onClick={onClick} className={classnamesText}>{children}</span>
  }
}

export default Text