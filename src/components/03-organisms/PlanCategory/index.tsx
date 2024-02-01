import { FC } from 'react'
import styles from './styles.module.scss'
import { getClassnames } from '@/utils/styles.utils'
import Text from '@/components/01-atoms/Text'

type PlanCategoryProps = {
  checked: boolean
  title: string
  description: string
  image: string
  onClick?(): void
}

const PlanCategory: FC<PlanCategoryProps> = ({ checked, title, description, image, onClick }) => {
  return (
    <div className={styles.container}>
      <div
        className={getClassnames([
          styles.check,
          checked && styles.checked
        ])}
        onClick={onClick}
      ></div>
      <div className={styles.plan}>
        <div className={styles.title}>
          <img src={image} alt="plan_image" />
          <Text tag='p' size='large' weight='black' color='neutral-50'>{title}</Text>
        </div>
        <Text tag='p' size='smallest' weight='regular' color='neutral-50'>{description}</Text>
      </div>
    </div>
  )
}

export default PlanCategory