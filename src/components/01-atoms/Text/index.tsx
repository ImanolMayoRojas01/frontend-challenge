import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import { Colors } from '@/core/models/app/app.models'
import { getClassnames } from '@/utils/styles.utils'

type TextWeight = 'thin' | 'extra-light' | 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold' | 'black'
type TextSize = 'smallest' | 'small' | 'regular' | 'medium' | 'large' | 'extra-large' | 'big'
type TextTag = 'span' | 'p' | 'label' | 'h1'

type TextProps = {
  tag: TextTag
  color: Colors
  weight: TextWeight
  size: TextSize
  onClick?(): void
  classnames?: string
  center?: boolean
  underline?: boolean
  pointer?: boolean
}

const Text: FC<PropsWithChildren<TextProps>> = ({
  tag,
  weight,
  size,
  color,
  children,
  classnames,
  onClick,
  center,
  underline,
  pointer
}) => {

  const classnamesText = getClassnames([
    styles.text,
    color && styles[`color-${color}`],
    weight && styles[`weight-${weight}`],
    size && styles[`size-${size}`],
    center && styles.center,
    underline && styles.underline,
    pointer && styles.pointer,
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