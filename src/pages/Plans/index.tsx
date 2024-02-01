import StepLine from '@/components/03-organisms/StepLine'
import styles from './style.module.scss'
import Icon from '@/components/01-atoms/Icon'
import Text from '@/components/01-atoms/Text'
import ContactHeader from '@/components/03-organisms/ContactHeader'
import PlanCategory from '@/components/03-organisms/PlanCategory'

import ForMePlanImage from '@/assets/images/user-shield.png'
import ForMorePlanImage from '@/assets/images/user-shield-plus.png'
import { usePlanPage } from '@/hooks/use-plans-page'
import Plan from '@/components/03-organisms/Plan'

import HouseImage from '@/assets/images/house.png'
import HospitalImage from '@/assets/images/hospital.png'

const PlansPage = () => {
  const { properties, methods } = usePlanPage()

  const {
    plans,
    AuthStore,
    categoryPlan
  } = properties

  const {
    updateCategoryPlan
  } = methods

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
          <Text tag='p' color='neutral-50' size='big' weight='bold'>{AuthStore.user?.name} ¿Para quién deseas cotizar?</Text>
          <Text tag='p' color='neutral-50' size='regular' weight='regular'>Selecciona la opción que se ajuste más a tus necesidades.</Text>
        </div>

        <div className={styles.plan1}>
          <PlanCategory
            title='Para mi'
            description='Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
            checked={categoryPlan === 'for-me'}
            image={ForMePlanImage}
            onClick={() => updateCategoryPlan('for-me')}
          />
        </div>
        <div className={styles.plan2}>
          <PlanCategory
            title='Para mi'
            description='Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
            checked={categoryPlan === 'for-someone-else'}
            image={ForMorePlanImage}
            onClick={() => updateCategoryPlan('for-someone-else')}
          />
        </div>

        <div className={styles.plans}>
          {
            plans.map((plan, index) => (
              <Plan
                title={plan.name}
                price={plan.price}
                benefits={plan.description}
                image={index !== 1 ? HouseImage : HospitalImage}
              />
            ))
          }
        </div>
      </div>
      
    </div>
  )
}

export default PlansPage