import ContactHeader from '@/components/03-organisms/ContactHeader'
import styles from './style.module.scss'
import StepLine from '@/components/03-organisms/StepLine'
import BackButton from '@/components/02-molecules/BackButton'
import Text from '@/components/01-atoms/Text'
import { useResumePage } from '@/hooks/use-resume-page'
import Icon from '@/components/01-atoms/Icon'

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
    <div className={styles.container}>
      <div className={styles.header_contact}>
        <ContactHeader />
      </div>
      <div className={styles.step_line}>
        <StepLine
          currentStep={2}
          steps={['Planes y coberturas', 'Resumen']}
        />
      </div>
      
      <div className={styles.body}>
        <div className={styles.back_button}>
          <BackButton text='Volver' onClick={goToBackPage} />
        </div>
        <div className={styles.title_resume}>
          <Text tag='p' size='big' color='grey-50' weight='bold'>Resumen del seguro</Text>
        </div>
        {
          (AuthStore.user && PlanStore.currentUserPlan) && (
            <div className={styles.resume}>
              <div className={styles.title}>
                <Text tag='p' size='very-smallest' color='neutral-50' weight='black'>PRECIOS CALCULADOS PARA:</Text>
                <div className={styles.user}>
                  <Icon icon='family' size={24} color='neutral-50' classnames='mr-12'/>
                  <Text tag='p' size='large' color='neutral-50' weight='bold'>{AuthStore.user.name} {AuthStore.user.lastName}</Text>
                </div>
              </div>
              <div className={styles.separator}></div> 
              <div className={styles.responsable}>
                <Text tag='p' size='regular' color='neutral-50' weight='bold'>Responsable de pago</Text>
                <Text tag='p' size='smallest' color='neutral-50' weight='regular'>DNI: {AuthStore.user.numberDocument}</Text>
                <Text tag='p' size='smallest' color='neutral-50' weight='regular'>Celular: {AuthStore.user.phone}</Text>
              </div>
              <div className={styles.plan}>
              <Text tag='p' size='regular' color='neutral-50' weight='bold'>Plan elegido</Text>
                <Text tag='p' size='smallest' color='neutral-50' weight='regular'>{PlanStore.currentUserPlan.name}</Text>
                <Text tag='p' size='smallest' color='neutral-50' weight='regular'>Costo del Plan: ${PlanStore.currentUserPlan.price} al mes</Text>
              </div>
            </div>
          )
        }
        
      </div>
    </div>
  )
}

export default ResumePage