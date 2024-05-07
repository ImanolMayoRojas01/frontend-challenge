import styles from './style.module.scss'

import Text from '@/components/01-atoms/Text'
import Tag from '@/components/01-atoms/Tag'
import Button from '@/components/01-atoms/Button'
import Checkbox from '@/components/02-molecules/Checkbox'
import InputText from '@/components/02-molecules/InputText'
import Select from '@/components/02-molecules/Select'
import FooterPage from '@/components/03-organisms/FooterPage'
import MainLayout from '@/components/06-layouts/MainLayout/MainLayout'

import { useLoginPage } from '@/hooks/use-login-page'
import { getClassnames } from '@/utils/styles.utils'

import FamilyPresentationImage from '@/assets/images/family-presentation.png'
import FamilyPresentationSmallImage from '@/assets/images/family-presentation-small.png'
import type { UserDocumentType } from '@/types/models/user-store.model'

const LoginPage = () => {
  const { properties, methods } = useLoginPage()

  const {
    DOCUMENTS_SELECT,
    numberDocument,
    phoneNumber,
    isAcceptPrivacyPolicy,
    isAcceptComercialPolicy,

    errMessageNumberDoc,
    errMessagePhoneNumber,
    errMessageAcceptComercial,
    errMessageAcceptPrivacity
  } = properties

  const {
    // updateAcceptPrivacyPolicy,
    // updateAcceptComercialPolicy,
    updateTypeDocument,
    updateNumberDocument,
    updatePhoneNumber,
    getUserData,
    switchAcceptPrivacyPolicy,
    switchAcceptComercialPolicy
  } = methods

  return (
    <MainLayout classnames={styles.container}>
      <div className={getClassnames([styles.body, 'grid'])}>
        <img
          src={FamilyPresentationImage}
          alt="family_presentation"
          className={styles.image}
        />
        <div className={styles.form}>
          <div className={styles.header}>
            <div className={styles.title}>
              <Tag color="gradient-aqua" text="Seguro Salud Flexible" />
              <Text tag="h1" size="extra-large" font="BRS-Bold" color="grey-50">
                Creado para ti y tu familia
              </Text>
            </div>
            <img src={FamilyPresentationSmallImage} alt="family_presentation" />
          </div>

          <Text
            tag="p"
            size="small"
            font="BRS-SemiBold"
            color="grey-50"
            classnames="mb-24"
          >
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </Text>
          <div className={styles.dni_select}>
            <div>
              <Select
                items={DOCUMENTS_SELECT}
                placeholder={DOCUMENTS_SELECT[0]}
                onChange={(event) => {
                  updateTypeDocument(event.value as UserDocumentType)
                }}
                isNotRightBorderRadius
              />
              <InputText
                type="number"
                label="Nro. de documento"
                value={numberDocument ?? ''}
                onChange={(event) => {
                  updateNumberDocument(event.target.value)
                }}
                onKeyDown={() => {}}
                isNotLeftBorder
              />
            </div>
            {errMessageNumberDoc !== undefined && (
              <Text
                tag="span"
                size="smallest"
                font="BRS-Regular"
                color="primary-red"
              >
                {errMessageNumberDoc}
              </Text>
            )}
          </div>
          <div className="mb-24">
            <InputText
              type="number"
              label="Celular"
              classnames="mb-8"
              value={phoneNumber ?? ''}
              onChange={(event) => {
                updatePhoneNumber(event.target.value)
              }}
            />
            {errMessagePhoneNumber !== undefined && (
              <Text
                tag="span"
                size="smallest"
                font="BRS-Regular"
                color="primary-red"
              >
                {errMessagePhoneNumber}
              </Text>
            )}
          </div>

          <div className={styles.policies}>
            <div>
              <Checkbox
                label="Acepto la Política de Privacidad"
                checked={isAcceptPrivacyPolicy === true}
                onClick={switchAcceptPrivacyPolicy}
              />
              {errMessageAcceptPrivacity !== undefined && (
                <Text
                  tag="span"
                  size="smallest"
                  font="BRS-Regular"
                  color="primary-red"
                >
                  {errMessageAcceptPrivacity}
                </Text>
              )}
            </div>
            <div>
              <Checkbox
                label="Acepto la Política Comunicaciones Comerciales"
                checked={isAcceptComercialPolicy === true}
                onClick={switchAcceptComercialPolicy}
              />
              {errMessageAcceptComercial !== undefined && (
                <Text
                  tag="span"
                  size="smallest"
                  font="BRS-Regular"
                  color="primary-red"
                >
                  {errMessageAcceptComercial}
                </Text>
              )}
            </div>
            <Text
              tag="p"
              size="smallest"
              font="BRS-SemiBold"
              color="grey-50"
              underline
              pointer
            >
              Aplican Términos y Condiciones.
            </Text>
          </div>
          <Button
            text="Cotiza aquí"
            theme="dark"
            size="large"
            sizeRounded="high"
            classnames="mt-24"
            onClick={getUserData}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <FooterPage />
      </div>
    </MainLayout>
  )
}

export default LoginPage
