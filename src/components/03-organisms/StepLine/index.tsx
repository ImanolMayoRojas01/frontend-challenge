import { FC } from 'react'
import styles from './styles.module.scss'
import Text from '@/components/01-atoms/Text'
import { getClassnames } from '@/utils/styles.utils'
import Icon from '@/components/01-atoms/Icon'
import ProgressBar from '@/components/02-molecules/ProgressBar'

type StepLineProps = {
  currentStep: number
  steps: string[]
  onBackPage?(): void
}

const StepLine: FC<StepLineProps> = ({ currentStep, steps, onBackPage }) => {
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
                    size='smallest'
                    
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
        <div className={styles.back_button} onClick={onBackPage}>
          <Icon
            icon='arrow-left'
            color='neutral-200'
            size={10}
          />
        </div>
        <Text tag='p' color='neutral-50' size='very-smallest' weight='black'>
          PASO {currentStep} DE {steps.length}
        </Text>
        <ProgressBar
          countSteps={steps.length}
          currentStep={currentStep}
        />
      </div>
    </div>
  )
}

export default StepLine