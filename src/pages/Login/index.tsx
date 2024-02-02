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

  const { properties, methods } = useLoginPage()
  
  const {
    DOCUMENTS_SELECT,
    // typeDocument,
    numberDocument,
    phoneNumber,
    isAcceptPrivacyPolicy,
    isAcceptComercialPolicy
  } = properties

  const {
    updateAcceptPrivacyPolicy,
    updateAcceptComercialPolicy,
    updateTypeDocument,
    updateNumberDocument,
    updatePhoneNumber,
    getUserData
  } = methods

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header_contact}>
          <ContactHeader />
        </div>
        <div className={styles.body}>
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
                items={DOCUMENTS_SELECT}
                placeholder={DOCUMENTS_SELECT[0]}
                onChange={(event) => updateTypeDocument(event.value)}
                isNotRightBorderRadius
              />
              <InputText
                type='number'
                label='Nro. de documento'
                value={numberDocument || ""}
                onChange={(event) => updateNumberDocument(event.target.value)}
                isNotLeftBorder
              />
            </div>
            
            <InputText
              type='number'
              label='Celular'
              classnames='mb-24'
              value={phoneNumber || ""}
              onChange={(event) => updatePhoneNumber(event.target.value)}
            />
            <div className={styles.policies}>
              <Checkbox
                label='Acepto lo Política de Privacidad'
                checked={isAcceptPrivacyPolicy}
                onClick={() => updateAcceptPrivacyPolicy(!isAcceptPrivacyPolicy)}
              />
              <Checkbox
                label='Acepto la Política Comunicaciones Comerciales'
                checked={isAcceptComercialPolicy}
                onClick={() => updateAcceptComercialPolicy(!isAcceptComercialPolicy)}
              />
              <Text tag='p' size='smallest' weight='semi-bold' color='grey-50' underline pointer>Aplican Términos y Condiciones.</Text>
            </div>
            <Button
              text='Cotiza aquí'
              theme='dark'
              size='large'
              sizeRounded='high'
              classnames='mt-24'
              onClick={getUserData}
            />
          </div>
        </div>
        
      </div>
      
      <div className={styles.footer}>
        <FooterPage />
      </div>
    </div>
  )
}

export default LoginPage