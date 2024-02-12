import styles from './style.module.scss'

import Text from '@/components/01-atoms/Text'
import BackButton from '@/components/02-molecules/BackButton'
import Pagination from '@/components/02-molecules/Pagination'
import PlanCategory from '@/components/03-organisms/PlanCategory'
import StepLine from '@/components/03-organisms/StepLine'
import Plan from '@/components/03-organisms/Plan'
import MainLayout from '@/components/06-layouts/MainLayout/MainLayout'

import { usePlanPage } from '@/hooks/use-plans-page'
import { getClassnames } from '@/utils/styles.utils'
import ForMePlanImage from '@/assets/images/user-shield.png'
import ForMorePlanImage from '@/assets/images/user-shield-plus.png'
import HouseImage from '@/assets/images/house.png'
import HospitalImage from '@/assets/images/hospital.png'

const PlansPage = () => {
  const { properties, methods } = usePlanPage()

  const { plans, AuthStore, categoryPlan, currentPlanPage } = properties

  const {
    updateCategoryPlan,
    assignCurrentPlan,
    goToBackPage,
    previousPlanPage,
    nextPlanPage
  } = methods

  return (
    <MainLayout classnames={styles.container}>
      <div className={styles.step_line}>
        <StepLine
          steps={['Planes y coberturas', 'Resumen']}
          currentStep={1}
          onBackPage={goToBackPage}
        />
      </div>
      <div className={getClassnames([styles.body, 'grid'])}>
        <div className={styles.back_button}>
          <BackButton text="Volver" onClick={goToBackPage} />
        </div>
        <div className={styles.information}>
          <Text tag="h1" color="neutral-50" size="big" font="Lato-Bold">
            {AuthStore.user?.name} ¿Para quién deseas cotizar?
          </Text>
          <Text tag="p" color="neutral-50" size="regular" font="Lato-Regular">
            Selecciona la opción que se ajuste más a tus necesidades.
          </Text>
        </div>
        <div className={getClassnames([styles.planCategories, 'grid'])}>
          <div className={styles.plan1}>
            <PlanCategory
              title="Para mí"
              description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
              checked={categoryPlan === 'for-me'}
              image={ForMePlanImage}
              onClick={() => {
                updateCategoryPlan('for-me')
              }}
            />
          </div>
          <div className={styles.plan2}>
            <PlanCategory
              title="Para alguien más"
              description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
              checked={categoryPlan === 'for-someone-else'}
              image={ForMorePlanImage}
              onClick={() => {
                updateCategoryPlan('for-someone-else')
              }}
            />
          </div>
        </div>

        {categoryPlan !== null && (
          <div className={getClassnames([styles.plan_container, 'grid'])}>
            <div id="plans" className={styles.plans}>
              {plans.map((plan, index) => (
                <Plan
                  key={index}
                  title={plan.name}
                  price={plan.price}
                  benefits={plan.description}
                  priceWithDiscount={plan.priceWithDiscount}
                  image={index !== 1 ? HouseImage : HospitalImage}
                  onClick={() => {
                    assignCurrentPlan(plan)
                  }}
                  isRecomended={index === 1}
                />
              ))}
            </div>
            <div className={styles.pagination}>
              <Pagination
                countPages={plans.length}
                currentPage={currentPlanPage}
                onNext={nextPlanPage}
                onPrevious={previousPlanPage}
              />
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  )
}

export default PlansPage
