import styles from './styles.module.scss'

import type { FC } from 'react'
import Text from '../Text'
import { getClassnames } from '@/utils/styles.utils'

type TagProps = {
  color: 'gradient-aqua' | 'green-aqua'
  text: string
}

const Tag: FC<TagProps> = ({ text, color }) => {
  return (
    <div
      className={getClassnames([
        styles.container,
        color !== undefined && `${styles['color-' + color]}`
      ])}
    >
      <Text tag="span" color="grey-50" size="small" font="BRS-Bold">
        {text}
      </Text>
    </div>
  )
}

export default Tag
