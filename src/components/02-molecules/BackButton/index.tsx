import Icon from '@/components/01-atoms/Icon'
import styles from './styles.module.scss'
import Text from '@/components/01-atoms/Text'
import { FC } from 'react'

type BackButtonProps = {
  text: string
  onClick?(): void
}

const BackButton: FC<BackButtonProps> = ({ text, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.button}>
        <Icon
          icon='arrow-left'
          color='blue-berry'
          size={10}
        />
      </div>
      <Text tag='p' color='blue-berry' size='medium' font='Lato-Bold'>{text}</Text>
    </div>
  )
}

export default BackButton