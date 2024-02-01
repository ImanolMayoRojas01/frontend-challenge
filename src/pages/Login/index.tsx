import ContactHeader from '@/components/03-organisms/ContactHeader'
import styles from './style.module.scss'
import FooterPage from '@/components/03-organisms/FooterPage'
import Checkbox from '@/components/02-molecules/Checkbox'
import Text from '@/components/01-atoms/Text'
import InputText from '@/components/02-molecules/InputText'

import FamilyPresentationImage from '@/assets/images/family-presentation.png'
import FamilyPresentationSmallImage from '@/assets/images/family-presentation-small.png'

import Tag from '@/components/01-atoms/Tag'
import Button from '@/components/01-atoms/Button'
import Select from '@/components/02-molecules/Select'
import { useLoginPage } from '@/hooks/use-login-page'

const LoginPage = () => {

  const { properties } = useLoginPage()
  
  const {
    DOCUMENTS_SELECT
  } = properties

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header_contact}>
          <ContactHeader />
        </div>
        <img src={FamilyPresentationImage} alt="family_presentation" className={styles.image} />
        <div className={styles.form}>
          <div className={styles.header}>
            <div className={styles.title}>
              <Tag color='gradient-aqua' text='Seguro Salud Flexible' />
              <Text tag='p' size='extra-large' weight='bold' color='grey-50'>Creado para ti y tu familia</Text>
            </div>
            <img src={FamilyPresentationSmallImage} alt="family_presentation" />
          </div>

          <Text tag='p' size='small' weight='semi-bold' color='grey-50' classnames='mb-24'>
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
          </Text>
          <div className={styles.dni_select}>
            
            <Select
              label='DNI'
              items={DOCUMENTS_SELECT}
              placeholder={DOCUMENTS_SELECT[0]}
              onChange={(event) => console.log(event)}
              isNotRightBorderRadius
            />

            <InputText
              label='Nro. de documento'
              isNotLeftBorder
              
            />

          </div>
          
          <InputText
            label='Celular'
            classnames='mb-24'
            
          />
          <div className={styles.options}>
            <Checkbox
              label='Acepto lo Política de Privacidad'
              checked
            />
            <Checkbox
              label='Acepto la Política Comunicaciones Comerciales'
              checked={false}
            />
            <Text tag='p' size='smallest' weight='semi-bold' color='grey-50' underline pointer>Aplican Términos y Condiciones.</Text>
          </div>
          <Button
            text='Cotiza aquí'
            theme='dark'
            size='large'
            sizeRounded='high'
            classnames='mt-24'
          />
        </div>
      </div>
      
      <div className={styles.footer}>
        <FooterPage />
      </div>
    </div>
  )
}

export default LoginPage