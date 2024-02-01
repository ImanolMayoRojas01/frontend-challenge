import StepLine from '@/components/03-organisms/StepLine'
import styles from './style.module.scss'
import Icon from '@/components/01-atoms/Icon'
import Text from '@/components/01-atoms/Text'
import ContactHeader from '@/components/03-organisms/ContactHeader'

const PlansPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact_header}>
        <ContactHeader />
      </div>
      
      <div className={styles.step_line}>
        <StepLine
          steps={['Planes y coberturas', 'Resumen']}
          currentStep={1}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.back_page}>
          <div className={styles.button}>
            <Icon
              icon='angle-down'
              classnames={styles.rotate}
              color='blue-berry'
              size={14}
            />
          </div>
          <Text tag='p' color='blue-berry' size='medium' weight='bold'>Volver</Text>
        </div>
        <div className={styles.information}>
          <Text tag='p' color='neutral-50' size='big' weight='bold'>Rocío ¿Para quién deseas cotizar?</Text>
          <Text tag='p' color='neutral-50' size='regular' weight='regular'>Selecciona la opción que se ajuste más a tus necesidades.</Text>
        </div>
      </div>
      
    </div>
  )
}

export default PlansPage