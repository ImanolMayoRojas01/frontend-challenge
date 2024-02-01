import { FC } from 'react'
import styles from './styles.module.scss'
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
        color && `${styles['color-' + color]}`
      ])}
    >
      <Text tag='p' color='grey-50' size='small' weight='bold'>{text}</Text>
    </div>
  )
}

export default Tag