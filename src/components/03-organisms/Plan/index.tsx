import { FC } from 'react'
import styles from './styles.module.scss'
import Text from '@/components/01-atoms/Text'
import Button from '@/components/01-atoms/Button'
import Tag from '@/components/01-atoms/Tag'
import { getClassnames } from '@/utils/styles.utils'

type PlanProps = {
  title: string
  benefits: string[]
  image: string
  price: number
  isRecomended?: boolean
  priceWithDiscount?: number
  onClick?(): void
}

const Plan: FC<PlanProps> = ({ title, benefits, image, price, priceWithDiscount, isRecomended, onClick }) => {
  return (
    <div className={styles.container}>
      <div
        className={getClassnames([
          styles.recommended,
          isRecomended === true && styles.visible
        ])}
      >
        <Tag text='Plan recomendado' color='green-aqua' />
      </div>
      <div className={styles.header}>
        <div className={styles.information}>
          <Text tag='p' size='medium-large' color='neutral-50' font='Lato-Black' classnames='mb-24'>{title}</Text>
          <Text tag='p' size='smallest' color='neutral-100' font='Lato-Black' classnames='mb-4'>COSTO DEL PLAN</Text>
          {
            priceWithDiscount && <Text tag='p' size='small' color='neutral-100' font='Lato-Regular' classnames='mb-4' crossed>${price} al mes</Text>
          }
          <Text tag='p' size='large' color='neutral-50' font='Lato-Black'>${priceWithDiscount || price} al mes</Text>
        </div>
        <img src={image} alt="plan_image" />
      </div>
      <div className={styles.benefits}>
        {
          benefits.map((benefit, index) => (
            <div key={index}>
              <div></div>
              <Text tag='p' size='regular' color='neutral-50' font='Lato-Regular'>{benefit}</Text>
            </div>
          ))
        }
      </div>
      <Button
        size='large'
        theme='primary'
        text='Seleccionar Plan'
        sizeRounded='low'
        onClick={onClick}
      />
    </div>
  )
}

export default Plan