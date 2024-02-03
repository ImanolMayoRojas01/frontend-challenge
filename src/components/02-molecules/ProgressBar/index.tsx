import styles from './styles.module.scss'

import { FC } from 'react'

import { getClassnames } from '@/utils/styles.utils'

type ProgressBarProps = {
  countSteps: number
  currentStep: number
}

const ProgressBar: FC<ProgressBarProps> = ({ countSteps, currentStep }) => {
  return (
    <div className={styles.container}>
      {
        Array.from({ length: countSteps }, (_, index) => (
          <div
            key={index}
            className={getClassnames([
              currentStep >= (index + 1) && styles.complete
            ])}
          ></div>
        ))
      }
    </div>
  )
}

export default ProgressBar