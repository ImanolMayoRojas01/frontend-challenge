import styles from './style.module.scss'

import Icon from '@/components/01-atoms/Icon'
import Text from '@/components/01-atoms/Text'
import BackButton from '@/components/02-molecules/BackButton'
import StepLine from '@/components/03-organisms/StepLine'

import { useResumePage } from '@/hooks/use-resume-page'
import { getClassnames } from '@/utils/styles.utils'
import MainLayout from '@/components/06-layouts/MainLayout/MainLayout'

const ResumePage = () => {
  const { properties, methods } = useResumePage()

  const {
    PlanStore,
    AuthStore
  } = properties

  const {
    goToBackPage
  } = methods

  return (
    <MainLayout classnames={styles.container}>
      <div className={styles.step_line}>
        <StepLine
          currentStep={2}
          steps={['Planes y coberturas', 'Resumen']}
        />
      </div>
      
      <div
        className={getClassnames([
          styles.body,
          'grid'
        ])}
      >
        <div className={styles.back_button}>
          <BackButton text='Volver' onClick={goToBackPage} />
        </div>
        <div className={styles.title_resume}>
          <Text tag='p' size='big' color='grey-50' font='Lato-Bold'>Resumen del seguro</Text>
        </div>
        {
          (AuthStore.user && PlanStore.currentUserPlan) && (
            <div className={styles.resume}>
              <div className={styles.title}>
                <Text tag='p' size='very-smallest' color='neutral-50' font='Lato-Black'>PRECIOS CALCULADOS PARA:</Text>
                <div className={styles.user}>
                  <Icon icon='family' size={24} color='neutral-50' classnames='mr-12'/>
                  <Text tag='p' size='large' color='neutral-50' font='Lato-Bold'>{AuthStore.user.name} {AuthStore.user.lastName}</Text>
                </div>
              </div>
              <div className={styles.separator}></div> 
              <div className={styles.responsable}>
                <Text tag='p' size='regular' color='neutral-50' font='Lato-Bold'>Responsable de pago</Text>
                <Text tag='p' size='small' color='neutral-50' font='Lato-Regular'>DNI: {AuthStore.user.numberDocument}</Text>
                <Text tag='p' size='small' color='neutral-50' font='Lato-Regular'>Celular: {AuthStore.user.phone}</Text>
              </div>
              <div className={styles.plan}>
              <Text tag='p' size='regular' color='neutral-50' font='Lato-Bold'>Plan elegido</Text>
                <Text tag='p' size='small' color='neutral-50' font='Lato-Regular'>{PlanStore.currentUserPlan.name}</Text>
                <Text tag='p' size='small' color='neutral-50' font='Lato-Regular'>
                  Costo del Plan: ${PlanStore.currentUserPlan.priceWithDiscount || PlanStore.currentUserPlan.price} al mes
                </Text>
              </div>
            </div>
          )
        }
        
      </div>
    </MainLayout>
  )
}

export default ResumePage