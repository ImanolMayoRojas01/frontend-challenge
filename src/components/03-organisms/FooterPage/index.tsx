import Text from '@/components/01-atoms/Text'
import styles from './style.module.scss'
import RimacWhiteLogo from '@/assets/images/rimac-logo-white.png'

const FooterPage = () => {
  return (
    <div className={styles.container}>
      <img src={RimacWhiteLogo} alt="rimac_white_logo" />
      <div className={styles.separator}></div>
      <Text tag='p' size='small' color='grey-150' font='BRS-Regular'>© 2023 RIMAC Seguros y Reaseguros.</Text>
    </div>
  )
}

export default FooterPage