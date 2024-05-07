import styles from './style.module.scss'

import Text from '@/components/01-atoms/Text'
import Icon from '@/components/01-atoms/Icon'

import RimacLogo from '@/assets/images/rimac-logo.png'

const ContactHeader = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src={RimacLogo} alt="logo_rimac" className={styles.logo} />
        <div className={styles.contact}>
          <Text tag="span" size="smallest" color="grey-50" font="BRS-SemiBold">
            ¡Compra por este medio!
          </Text>
          <div className={styles.phone_content}>
            <Icon icon="phone" size={15} color="grey-50" />
            <Text tag="span" size="small" color="grey-50" font="BRS-Bold">
              (01) 411 6001
            </Text>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ContactHeader
