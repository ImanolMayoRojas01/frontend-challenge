import styles from './styles.module.scss'

import type { FC } from 'react'

import Text from '@/components/01-atoms/Text'
import Icon from '@/components/01-atoms/Icon'

import { getClassnames } from '@/utils/styles.utils'

type PlanCategoryProps = {
  checked: boolean
  title: string
  description: string
  image: string
  onClick?: () => void
}

const PlanCategory: FC<PlanCategoryProps> = ({
  checked,
  title,
  description,
  image,
  onClick
}) => {
  return (
    <div className={styles.container}>
      <div
        className={getClassnames([styles.check, checked && styles.checked])}
        onClick={onClick}
      >
        <Icon icon="check" color="white" size={11} />
      </div>
      <div className={styles.plan}>
        <div className={styles.title}>
          <img src={image} alt="plan_image" />
          <Text tag="h1" size="large" font="Lato-Black" color="neutral-50">
            {title}
          </Text>
        </div>
        <Text tag="p" size="smallest" font="Lato-Regular" color="neutral-50">
          {description}
        </Text>
      </div>
    </div>
  )
}

export default PlanCategory
