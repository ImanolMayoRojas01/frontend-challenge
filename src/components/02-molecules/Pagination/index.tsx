import Icon from '@/components/01-atoms/Icon'
import styles from './styles.module.scss'
import Text from '@/components/01-atoms/Text'
import { FC } from 'react'

type PaginationProps = {
  countPages: number
  currentPage: number
  onPrevious?(): void
  onNext?(): void
}

const Pagination: FC<PaginationProps> = ({ countPages, currentPage, onPrevious, onNext }) => {
  return (
    <div className={styles.container}>
      <div className={styles.btn} onClick={onPrevious}>
        <Icon
          icon='arrow-left'
          size={10}
        />
      </div>
      <div className={styles.indicators}>
        <Text tag='p' color='neutral-50' size='regular' font='Lato-Regular'>{currentPage}</Text>
        <Text tag='p' color='neutral-50' size='regular' font='Lato-Regular'>/</Text>
        <Text tag='p' color='neutral-50' size='regular' font='Lato-Regular'>{countPages}</Text>
      </div>
      <div className={styles.btn} onClick={onNext}>
        <Icon
          icon='arrow-left'
          size={10}
          classnames='rotate-180'
        />
      </div>
    </div>
  )
}

export default Pagination