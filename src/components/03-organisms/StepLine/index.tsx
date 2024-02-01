import { FC } from 'react'
import styles from './styles.module.scss'
import Text from '@/components/01-atoms/Text'
import { getClassnames } from '@/utils/styles.utils'

type StepLineProps = {
  currentStep: number
  steps: string[]
}

const StepLine: FC<StepLineProps> = ({ currentStep, steps }) => {
  return (
    <div className={styles.container}>
      <div className={styles.step_text}>
        {
          steps.map((step, index) => {
            const isCurrentStep = currentStep === (index + 1)
            const isLastStep = index === (steps.length - 1)

            return (
              <>
                <div className={styles.step}>
                  <div
                    className={getClassnames([
                      styles.number,
                      isCurrentStep && styles.active
                    ])}
                  >
                    {index + 1}
                  </div>
                  <Text
                    tag='p'
                    size='regular'
                    
                    weight={isCurrentStep ? 'bold' : 'regular'}
                    color={isCurrentStep ? 'neutral-50' : 'neutral-100'}
                  >{step}</Text>
                </div>

                {
                  !isLastStep && (
                    <div className={styles.step_points}>
                      <div className={styles.small}></div>
                      <div className={styles.big}></div>
                      <div className={styles.big}></div>
                      <div className={styles.small}></div>
                    </div>
                  ) 
                }
              </>
            )
          })
        }
      </div>
      <div className={styles.step_bar}>

      </div>
    </div>
  )
}

export default StepLine