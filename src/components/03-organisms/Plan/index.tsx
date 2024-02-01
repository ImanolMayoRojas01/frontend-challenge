import { FC } from 'react'
import styles from './styles.module.scss'
import Text from '@/components/01-atoms/Text'
import Button from '@/components/01-atoms/Button'

type PlanProps = {
  title: string
  benefits: string[]
  image: string
  price: number
  onClick?(): void
}

const Plan: FC<PlanProps> = ({ title, benefits, image, price, onClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.information}>
          <Text tag='p' size='large' color='neutral-50' weight='black' classnames='mb-24'>{title}</Text>
          <Text tag='p' size='smallest' color='neutral-100' weight='black' classnames='mb-4'>COSTO DEL PLAN</Text>
          <Text tag='p' size='large' color='neutral-50' weight='black'>${price} al mes</Text>
        </div>
        <img src={image} alt="plan_image" />
      </div>
      <ul className={styles.benefits}>
        {
          benefits.map((benefit, index) => (
            <li key={index}>
              <Text tag='p' size='medium-large' color='neutral-50' weight='regular'>{benefit}</Text>
            </li>
          ))
        }
      </ul>
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